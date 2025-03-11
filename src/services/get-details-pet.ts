import { PetsRepository } from '@/repositories/pet-repository'
import { Pet } from '@prisma/client'
import { PetNotFoundError } from './errors/Pet-not-found'

interface getDetailsPetServiceRequest {
  petId: string
}

interface getDetailsPetServiceResponse {
  pet: Omit<Pet, 'id' | 'org_id'>
}

export class GetDetailsPetService {
  constructor(private petsRepository: PetsRepository) { }

  async execute({
    petId,
  }: getDetailsPetServiceRequest): Promise<getDetailsPetServiceResponse> {
    const pet = await this.petsRepository.findById(petId)

    if (!pet) {
      throw new PetNotFoundError()
    }

    return { pet }
  }
}
