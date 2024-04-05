import type { Cotization } from '@src/types'

export function calculateCotizationCost (cotization: Cotization): string {
  const { year, numberOfDoors, location, usage, fuelType } = cotization
  let cost = 500

  const carAge = new Date().getFullYear() - Number(year)
  cost -= carAge

  if (Number(numberOfDoors) > 2) {
    cost += 50 * (Number(numberOfDoors) - 2)
  }

  location === 'Rural' ? cost += 122 : cost += 96
  usage === 'Commercial' ? cost += 201 : cost += 88

  if (fuelType === 'Gasoline') cost += 194
  else if (fuelType === 'Diesel') cost += 65
  else if (fuelType === 'Hybrid') cost += 165
  else cost += 200

  const totalCost = cost < 0 || cost > 5000 ? 0 : cost
  return totalCost.toString()
}

export function hasEmptyValues<T extends Record<string, unknown>>(obj: T): boolean {
  return Object.values(obj).some(value => value === '')
}
