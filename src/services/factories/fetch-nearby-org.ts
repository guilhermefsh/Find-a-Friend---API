import { PrismaOrgRepository } from '@/repositories/prisma/prisma-org-repository'
import { FetchNearbyOrgs } from '../fetch-nearby-orgs'

export function makeFetchNearbyOrg() {
  const orgRepository = new PrismaOrgRepository()
  const service = new FetchNearbyOrgs(orgRepository)

  return service
}
