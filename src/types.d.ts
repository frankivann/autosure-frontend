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
 * Auth types definitions
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
 * User types definitions
 */

type User = {
  firstname: string
  lastname: string
  username: string
  email: string
  role: UserRoles
  id: string
}

type UserRoles = typeof USER_ROLES[keyof typeof USER_ROLES]

/**
 * Cotization types definitions
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

type CarInfo = {
  models: string[]
  price: number
  logo: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

type Car = Record<string, CarInfo>

/**
 * User Cotization types definitions
 */

type CotizationResponse = {
  numberOfCotizations: number;
  top3Brands: Top3Brand[];
  records: RecordResponse[];
}

type RecordResponse = {
  id: string;
  brand: string;
  model: string;
  fuelType: string;
  usage: string;
  price: number;
}

type Top3Brand = {
  name: string;
  value: number;
}
