import { PrismaOrgRepository } from '@/repositories/prisma/prisma-org-repository'
import { RegisterOrgService } from '../register-org'

export function makeCreateOrgService() {
  const orgRepository = new PrismaOrgRepository()
  const service = new RegisterOrgService(orgRepository)

  return service
}
