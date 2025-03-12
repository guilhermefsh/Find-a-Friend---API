import { PetsRepository } from '@/repositories/pet-repository'
import { Pet } from '@prisma/client'

interface SearchPetsServiceRequest {
  city: string
  age?: string
  size?: string
  energy_level?: string
  environment?: string
}

interface SearchPetsServiceResponse {
  pets: Pet[]
}

export class SearchPetsService {
  constructor(private petsRepository: PetsRepository) { }

  async execute({
    city,
    age,
    size,
    energy_level,
    environment,
  }: SearchPetsServiceRequest): Promise<SearchPetsServiceResponse> {
    const pets = await this.petsRepository.findAll({
      city,
      age,
      size,
      energy_level,
      environment,
    })

    return { pets }
  }
}
