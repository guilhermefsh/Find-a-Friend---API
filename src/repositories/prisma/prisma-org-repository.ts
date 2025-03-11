import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { orgRepository } from '../org-repository'

export class PrismaOrgRepository implements orgRepository {
  async register(data: Prisma.OrgCreateInput) {
    const org = await prisma.org.create({
      data,
    })

    return org
  }
}
