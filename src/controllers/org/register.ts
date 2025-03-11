import { makeCreateOrgService } from '@/services/factories/make-register-org'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function register(req: FastifyRequest, reply: FastifyReply) {
  const registerOrgBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    whatsapp: z.string(),
    authorName: z.string(),
    cep: z.string(),
    city: z.string(),
    state: z.string(),
    street: z.string(),
    neighborhood: z.string(),
    latitude: z.number(),
    longitude: z.number(),
  })

  const {
    name,
    authorName,
    cep,
    city,
    email,
    neighborhood,
    password,
    state,
    street,
    whatsapp,
    latitude,
    longitude,
  } = registerOrgBodySchema.parse(req.body)

  try {
    const registerOrg = makeCreateOrgService()

    await registerOrg.execute({
      name,
      authorName,
      cep,
      city,
      email,
      neighborhood,
      password,
      state,
      street,
      whatsapp,
      latitude,
      longitude,
    })
  } catch (error) {
    if (error instanceof Error) {
      return reply.status(409).send({ message: 'Error on create org', error })
    }
  }
  return reply.status(201).send({ message: 'successfully registered org' })
}
