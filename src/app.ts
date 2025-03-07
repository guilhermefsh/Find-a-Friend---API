import fastify from 'fastify'
import { petRoutes } from './controllers/pet/routes'

export const app = fastify()

app.register(petRoutes)
