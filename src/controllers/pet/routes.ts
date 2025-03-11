import { FastifyInstance } from 'fastify'
import { register } from './register'
import { verifyJwt } from '@/middlewares/verify-jwt'
import { getDetailsPet } from './get-details-pet'

export const petRoutes = (app: FastifyInstance) => {
  app.post('/pets/new', { onRequest: [verifyJwt] }, register)
  app.get('/pets/:petId', getDetailsPet)
}
