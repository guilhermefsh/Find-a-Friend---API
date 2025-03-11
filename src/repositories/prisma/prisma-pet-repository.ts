import { Pet, Prisma } from '@prisma/client'
import { PetsRepository } from '../pet-repository'
import { prisma } from '@/lib/prisma'

export class PrismaPetRepository implements PetsRepository {
  async register(data: Prisma.PetUncheckedCreateInput): Promise<Pet> {
    const pet = await prisma.pet.create({
      data,
    })

    return pet
  }

  async findById(id: string) {
    const pet = await prisma.pet.findUnique({
      where: {
        id,
      },
    })

    if (!pet) {
      return null
    }

    return pet
  }
}
