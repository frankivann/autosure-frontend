import {
  CAR_BRANDS,
  CAR_MODELS,
  FUEL_TYPES,
  LOCATIONS,
  TRANSMISSION_TYPES,
  USAGES,
  USER_ROLES
} from '@src/constants'

/**
 * Auth Types definitions
 */

type SignUpRequest = {
  firstname: string
  lastname: string
  email: string
  username: string
  password: string
}

type SignInRequest = {
  username: string
  password: string
}

type SignInResponse = {
  accessToken: string
  user: User
}

/**
 * User Types definitions
 */

type UserRoles = typeof USER_ROLES[keyof typeof USER_ROLES]

interface User {
  firstname: string
  lastname: string
  username: string
  email: string
  role: UserRoles
  id: string
}

/**
 * Cotization Types definitions
*/

type CarBrand = typeof CAR_BRANDS[number]
type CarModel = typeof CAR_MODELS[number]
type FuelType = typeof FUEL_TYPES[number]
type TransmissionType = typeof TRANSMISSION_TYPES[number]
type Location = typeof LOCATIONS[number]
type Usage = typeof USAGES[number]

type Cotization = {
  year: string
  brand: CarBrand
  model: CarModel
  fuelType: FuelType
  transmissionType: TransmissionType
  numberOfDoors: '2' | '4'
  location: Location
  usage: Usage
  price: string
}

export interface UserCotizationResponse {
  numberOfQuotes: number;
  top3Brands:     Top3Brand[];
  quotes:         Quote[];
}

export interface Quote {
  id:       string;
  brand:    string;
  model:    string;
  fuelType: string;
  usage:    string;
  price:    number;
}

export interface Top3Brand {
  name: string;
  value: number;
}
