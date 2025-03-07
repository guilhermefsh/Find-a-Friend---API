import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pet-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { RegisterPetService } from './register-pet'

let petRepository: InMemoryPetsRepository
let registerPetService: RegisterPetService

describe('Register Pet service', () => {
  beforeEach(() => {
    petRepository = new InMemoryPetsRepository()
    registerPetService = new RegisterPetService(petRepository)
  })

  it('should be able to register a new pet', async () => {
    const { pet } = await registerPetService.execute({
      name: 'Rex',
      age: '2',
      environtment: 'indoor',
      energy_level: 'low',
      size: 'small',
      about: 'A very cute cat',
      type: 'CAT',
    })

    expect(pet.id).toEqual(expect.any(String))
  })
})
