import { Pet, Prisma } from '@prisma/client'

export interface PetsRepository {
  register(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
  findById(id: string): Promise<Pet | null>
}
