import { PrismaPetRepository } from '@/repositories/prisma/prisma-pet-repository'
import { GetDetailsPetService } from '../get-details-pet'

export function makeGetDetailsPetService() {
  const petsRepository = new PrismaPetRepository()
  const service = new GetDetailsPetService(petsRepository)

  return service
}
