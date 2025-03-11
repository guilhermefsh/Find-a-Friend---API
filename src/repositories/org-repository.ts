import { Org, Prisma } from '@prisma/client'

export interface orgRepository {
  register(data: Prisma.OrgCreateInput): Promise<Org>
}
