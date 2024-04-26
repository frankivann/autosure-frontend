import type { Cotization } from '@src/types'

export function calculateCotizationCost (cotization: Cotization): string {
  const { year, location, usage, fuelType } = cotization
  let cost = 300
  
  if (Number(year) >= 2018) {
    cost += 99
  } else if (Number(year) > 1999 && Number(year) < 2018) {
    cost += 10
  } else {
    cost += 400
  }

  location === 'Rural' ? cost += 102 : cost += 66
  usage === 'Commercial' ? cost += 171 : cost += 78

  if (fuelType === 'Gasoline') cost += 174
  else if (fuelType === 'Diesel') cost += 35
  else if (fuelType === 'Hybrid') cost += 155
  else cost += 200

  return cost.toString()
}

export function hasEmptyValues<T extends Record<string, unknown>>(obj: T): boolean {
  return Object.values(obj).some(value => value === '')
}
