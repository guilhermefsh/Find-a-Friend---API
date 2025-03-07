import { FastifyInstance } from 'fastify'
import { register } from './register'

export const petRoutes = (app: FastifyInstance) => {
  app.post('/pets/new', register)
}
