import { PrismaPetRepository } from '@/repositories/prisma/prisma-pet-repository'
import { RegisterPetService } from '../register-pet'

export function makeCreatePetService() {
  const petsRepository = new PrismaPetRepository()
  const service = new RegisterPetService(petsRepository)

  return service
}
