import fastify from 'fastify'
import { petRoutes } from './controllers/pet/routes'
import { orgRoutes } from './controllers/org/routes'

export const app = fastify()

app.register(petRoutes)
app.register(orgRoutes)
