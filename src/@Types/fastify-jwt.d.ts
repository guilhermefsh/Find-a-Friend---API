// eslint-disable-next-line @typescript-eslint/no-unused-vars
import fastifyJwt from '@fastify/jwt'

declare module '@fastify/jwt' {
  interface FastifyJWT {
    user: {
      sub: string
    }
  }
}
