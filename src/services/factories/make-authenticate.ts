import { PrismaOrgRepository } from '@/repositories/prisma/prisma-org-repository'
import { AuthenticatedService } from '../authenticate'

export function makeAuthenticateService() {
  const orgRepository = new PrismaOrgRepository()
  const authenticateService = new AuthenticatedService(orgRepository)

  return authenticateService
}
