export class PetNotFoundError extends Error {
  constructor() {
    super('Pet Not found')
  }
}
