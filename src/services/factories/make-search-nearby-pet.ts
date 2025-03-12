import { PrismaPetRepository } from '@/repositories/prisma/prisma-pet-repository'
import { SearchPetsService } from '../search-nearby-pet'

export function makeSearchNearbyPetService() {
  const petsRepository = new PrismaPetRepository()
  const service = new SearchPetsService(petsRepository)

  return service
}
