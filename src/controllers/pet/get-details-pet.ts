import { makeGetDetailsPetService } from '@/services/factories/make-get-details-pet'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getDetailsPet(req: FastifyRequest, reply: FastifyReply) {
  const routeSchema = z.object({
    petId: z.string(),
  })

  const { petId } = routeSchema.parse(req.params)

  const getDetailsPet = makeGetDetailsPetService()

  try {
    const { pet } = await getDetailsPet.execute({
      petId,
    })

    return reply.status(200).send({ pet })
  } catch (error) {
    if (error instanceof Error)
      return reply.status(404).send({ error: error.message })
  }
}
