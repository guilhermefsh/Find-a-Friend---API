import { compare } from 'bcryptjs'
import { Org } from '@prisma/client'
import { PrismaOrgRepository } from '@/repositories/prisma/prisma-org-repository'
import { InvalidCredencialsError } from './errors/invalid-credencials'

interface AuthenticatedServiceRequest {
  email: string
  password: string
}

interface AuthenticatedServiceResponse {
  org: Org
}

export class AuthenticatedService {
  constructor(private orgsRepository: PrismaOrgRepository) { }

  async execute({
    email,
    password,
  }: AuthenticatedServiceRequest): Promise<AuthenticatedServiceResponse> {
    const org = await this.orgsRepository.findByEmail(email)

    if (!org) {
      throw new InvalidCredencialsError()
    }

    const isPasswordMatches = await compare(password, org.password)

    if (!isPasswordMatches) {
      throw new InvalidCredencialsError()
    }

    return { org }
  }
}
