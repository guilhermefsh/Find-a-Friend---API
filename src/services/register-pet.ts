import { PetsRepository } from '@/repositories/pet-repository'
import { Pet } from '@prisma/client'

interface RegisterPetServiceRequest {
  name: string
  age: string
  environtment: string
  energy_level: string
  size: string
  about: string
  type: 'DOG' | 'CAT'
}

interface RegisterPetServiceResponse {
  pet: Pet
}

export class RegisterPetService {
  constructor(private petsRepository: PetsRepository) { }

  async execute({
    name,
    age,
    environtment,
    energy_level: energyLevel,
    size,
    about,
    type,
  }: RegisterPetServiceRequest): Promise<RegisterPetServiceResponse> {
    const pet = await this.petsRepository.register({
      name,
      age,
      environtment,
      energy_level: energyLevel,
      size,
      about,
      type,
    })

    return { pet }
  }
}
