import { Prisma } from '@prisma/client'
import { PetsRepository } from '../pet-repository'
import { prisma } from '@/lib/prisma'

export class PrismaPetRepository implements PetsRepository {
  async register(data: Prisma.PetCreateInput) {
    const pet = await prisma.pet.create({
      data,
    })

    return pet
  }
}
