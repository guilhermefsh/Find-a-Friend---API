import { orgRepository } from '@/repositories/org-repository'
import { Org } from '@prisma/client'
import { hash } from 'bcryptjs'

interface orgServiceRequest {
  name: string
  email: string
  password: string
  whatsapp: string
  authorName: string
  cep: string
  city: string
  state: string
  street: string
  neighborhood: string
  latitude: number
  longitude: number
}

interface orgServiceResponse {
  org: Org
}

export class RegisterOrgService {
  constructor(private orgRepository: orgRepository) { }

  async execute({
    name,
    email,
    password,
    whatsapp,
    authorName,
    cep,
    city,
    state,
    street,
    neighborhood,
    latitude,
    longitude,
  }: orgServiceRequest): Promise<orgServiceResponse> {
    const passwordHash = await hash(password, 6)

    const org = await this.orgRepository.register({
      name,
      email,
      password: passwordHash,
      whatsapp,
      author_name: authorName,
      cep,
      city,
      state,
      street,
      neighborhood,
      latitude,
      longitude,
    })

    return { org }
  }
}
