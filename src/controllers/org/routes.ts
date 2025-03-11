import { FastifyInstance } from 'fastify'
import { register } from './register'

export const orgRoutes = (app: FastifyInstance) => {
  app.post('/orgs/new', register)
}
