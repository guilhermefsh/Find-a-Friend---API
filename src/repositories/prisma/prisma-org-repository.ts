import { Org, Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { orgRepository } from '../org-repository'

export class PrismaOrgRepository implements orgRepository {
  async register(data: Prisma.OrgCreateInput) {
    const org = await prisma.org.create({
      data,
    })

    return org
  }

  async findByEmail(email: string) {
    const org = await prisma.org.findUnique({
      where: {
        email,
      },
    })

    return org
  }

  async findManyNearby(latitude: number, longitude: number): Promise<Org[]> {
    const orgs = await prisma.$queryRaw<Org[]>`
    SELECT * from orgs
    WHERE ( 6371 * acos( cos( radians(${latitude}) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(${longitude}) ) + sin( radians(${latitude}) ) * sin( radians( latitude ) ) ) ) <= 10
  `

    return orgs
  }
}
