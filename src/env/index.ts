import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'production', 'test']).default('dev'),
  PORT: z.coerce.number().default(3333),
  JWT_SECRET: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('❌ Environment variables are not valid.', _env.error.format())
  throw new Error(`Invalid environment variables: ${_env.error.message}`)
}

export const env = _env.data
