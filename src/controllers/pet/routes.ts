import { FastifyInstance } from 'fastify'
import { register } from './register'
import { verifyJwt } from '@/middlewares/verify-jwt'

export const petRoutes = (app: FastifyInstance) => {
  app.post('/pets/new', { onRequest: [verifyJwt] }, register)
}
