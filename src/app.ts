import fastify from 'fastify'
import { petRoutes } from './controllers/pet/routes'
import { orgRoutes } from './controllers/org/routes'
import fastifyJwt from '@fastify/jwt'
import { env } from './env'
import { authRoutes } from './controllers/auth/routes'
import fastifyCookie from '@fastify/cookie'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '10m',
  },
})

app.register(fastifyCookie)

app.register(authRoutes)
app.register(petRoutes)
app.register(orgRoutes)
