import { Pet, Prisma } from '@prisma/client'
import { PetsRepository } from '../pet-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryPetsRepository implements PetsRepository {
  public items: Pet[] = []

  async register(data: Prisma.PetCreateInput): Promise<Pet> {
    const pet = {
      id: randomUUID(),
      name: data.name,
      age: data.age,
      environtment: data.environtment,
      energy_level: data.energy_level,
      size: data.size,
      about: data.about,
      type: data.type ? data.type : 'DOG',
    }

    this.items.push(pet)

    return pet
  }
}
