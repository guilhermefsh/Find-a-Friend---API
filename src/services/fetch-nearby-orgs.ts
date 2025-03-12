import { orgRepository } from '@/repositories/org-repository'
import { Org } from '@prisma/client'

type responseOrg = Omit<
  Org,
  'password' | 'latitude' | 'longitude' | 'author_name'
>

export interface FetcNearbyOrgsRequest {
  latitude: number
  longitude: number
}

export interface FetchNearbyOrgsResponse {
  orgs: responseOrg[]
}

export class FetchNearbyOrgs {
  constructor(private orgRepository: orgRepository) { }

  async execute({
    latitude,
    longitude,
  }: FetcNearbyOrgsRequest): Promise<FetchNearbyOrgsResponse> {
    const orgs = await this.orgRepository.findManyNearby(latitude, longitude)
    const responseOrg: responseOrg[] = orgs.map(
      ({ password, latitude, longitude, author_name, ...rest }) => ({
        ...rest,
      }),
    )

    return { orgs: responseOrg }
  }
}
