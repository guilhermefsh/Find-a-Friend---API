import { FastifyInstance } from 'fastify'
import { register } from './register'
import { fetchNearbyOrgs } from './fetch-nearby-orgs'

export const orgRoutes = (app: FastifyInstance) => {
  app.post('/orgs/new', register)
  app.get('/orgs/nearby', fetchNearbyOrgs)
}
