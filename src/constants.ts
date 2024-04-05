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

export const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin'
} as const

export const FUEL_TYPES = ['Gasoline', 'Diesel', 'Hybrid', 'Electric'] as const
export const TRANSMISSION_TYPES = ['Automatic', 'Manual'] as const
export const LOCATIONS = ['City', 'Rural'] as const
export const USAGES = ['Personal', 'Commercial'] as const

export const CARS: Record<string, string[]> = {
  Toyota: ['Corolla', 'Camry', 'RAV4', 'Prius'],
  Honda: ['Civic', 'Accord', 'CR-V', 'HR-V'],
  Ford: ['Fiesta', 'Focus', 'Fusion', 'Escape'],
  Chevrolet: ['Spark', 'Cruze', 'Malibu', 'Equinox'],
  Nissan: ['Sentra', 'Altima', 'Rogue', 'Murano'],
  BMW: ['Serie 3', 'Serie 5', 'X3', 'X5'],
  Audi: ['A3', 'A4', 'Q3', 'Q5'],
  Hyundai: ['Elantra', 'Sonata', 'Tucson', 'Santa Fe']
}

export const CAR_BRANDS = Object.keys(CARS)
export const CAR_MODELS = Object.values(CARS).flat()
export const BASE_URL = import.meta.env.VITE_API_URL

export const CAR_LOGOS = [
  ToyotaIcon,
  HondaIcon,
  FordIcon,
  ChevroletIcon,
  NissanIcon,
  BmwIcon,
  AudiIcon,
  HyundaiIcon
]

export const BRANDS_WITH_LOGOS = CAR_BRANDS.map((brand, index) => ({
  brand,
  Logo: CAR_LOGOS[index]
}))
