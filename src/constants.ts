import { 
  AudiIcon,
  BmwIcon,
  ChevroletIcon,
  FordIcon,
  HondaIcon,
  HyundaiIcon,
  NissanIcon,
  ToyotaIcon
} from './components/icons'
import type { Car } from './types'

export const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin'
} as const

export const FUEL_TYPES = ['Gasoline', 'Diesel', 'Hybrid', 'Electric'] as const
export const TRANSMISSION_TYPES = ['Automatic', 'Manual'] as const
export const LOCATIONS = ['City', 'Rural'] as const
export const USAGES = ['Personal', 'Commercial'] as const

export const CARS: Car = {
  Toyota: {
    models: ['Corolla', 'Camry', 'RAV4', 'Prius'],
    price: 33,
    logo: ToyotaIcon
  },
  Honda: {
    models: ['Civic', 'Accord', 'CR-V', 'HR-V'],
    price: 43,
    logo: HondaIcon
  },
  Ford: {
    models: ['Fiesta', 'Focus', 'Fusion', 'Escape'],
    price: 120,
    logo: FordIcon
  },
  Chevrolet: {
    models: ['Spark', 'Cruze', 'Malibu', 'Equinox'],
    price: 220,
    logo: ChevroletIcon
  },
  Nissan: {
    models: ['Sentra', 'Altima', 'Rogue', 'Murano'],
    price: 70,
    logo: NissanIcon
  },
  BMW: {
    models: ['Serie 3', 'Serie 5', 'X3', 'X5'],
    price: 499,
    logo: BmwIcon
  },
  Audi: {
    models: ['A3', 'A4', 'Q3', 'Q5'],
    price: 298,
    logo: AudiIcon
  },
  Hyundai: {
    models: ['Elantra', 'Sonata', 'Tucson', 'Santa Fe'],
    price: 100,
    logo: HyundaiIcon
  }
} as const

export const CAR_BRANDS = Object.keys(CARS)
export const CAR_MODELS = Object.values(CARS).flatMap(item => item.models)
export const BASE_URL = import.meta.env.VITE_API_URL

export const BRANDS_WITH_LOGOS = CAR_BRANDS.map(brand => ({
  brand,
  Logo: CARS[brand].logo
}))
