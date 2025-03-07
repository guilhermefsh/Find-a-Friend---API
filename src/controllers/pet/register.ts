import { makeCreatePetService } from '@/services/factories/make-register-pet'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function register(req: FastifyRequest, reply: FastifyReply) {
  const registerPetBodySchema = z.object({
    name: z.string(),
    age: z.string(),
    environment: z.string(),
    energy_level: z.string(),
    size: z.string(),
    about: z.string(),
    type: z.enum(['DOG', 'CAT']),
  })

  const { name, age, environment, energy_level, size, about, type } =
    registerPetBodySchema.parse(req.body)

  try {
    const registerPet = makeCreatePetService()

    await registerPet.execute({
      name,
      age,
      environtment: environment,
      energy_level,
      size,
      about,
      type,
    })
  } catch (error) {
    if (error instanceof Error) {
      return reply.status(409).send({ message: 'Error on register pet' })
    }
  }
  return reply.status(201).send({ message: 'successfully registered pet' })
}
