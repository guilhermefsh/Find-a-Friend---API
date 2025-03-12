import { makeFetchNearbyOrg } from '@/services/factories/fetch-nearby-org'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function fetchNearbyOrgs(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  const fetchNearbyOrgsQuerySchema = z.object({
    latitude: z.coerce.number().refine((value) => {
      return Math.abs(value) <= 90
    }),
    longitude: z.coerce.number().refine((value) => {
      return Math.abs(value) <= 180
    }),
  })

  const { latitude, longitude } = fetchNearbyOrgsQuerySchema.parse(req.query)

  try {
    const fetchNearbyOrg = makeFetchNearbyOrg()

    const { orgs } = await fetchNearbyOrg.execute({
      latitude,
      longitude,
    })
    return reply.status(200).send({ orgs })
  } catch (error) {
    if (error instanceof Error) {
      return reply.status(500).send({
        message: 'Internal server error',
      })
    }
  }
}
