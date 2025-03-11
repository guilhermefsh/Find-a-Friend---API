import { FastifyInstance } from 'fastify'
import { authenticate } from './authenticate'

export const authRoutes = (app: FastifyInstance) => {
  app.post('/auth', authenticate)
}
