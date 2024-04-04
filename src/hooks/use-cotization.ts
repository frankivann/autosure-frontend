import { POST } from '@src/api'
import { CARS } from '@src/constants'
import { Cotization } from '@src/types'
import { calculateCotizationCost } from '@utils/cotization'
import { useState } from 'react'
import type { ChangeEvent } from 'react'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'
import { toast } from 'sonner'

const defaultState: Cotization = {
  year: '',
  brand: '',
  model: '',
  fuelType: 'Gasoline',
  transmissionType: 'Automatic',
  numberOfDoors: '4',
  location: 'City',
  usage: 'Personal',
  price: ''
}

export function useCotization () {

  const [cotization, setCotization] = useState<Cotization>(defaultState)
  const [cotizationCost, setCotizationCost] = useState('0')
  const headers = { 'Authorization': useAuthHeader() as string }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    cotization.price = cotizationCost

    POST<Cotization, { message: string }>('cotization', cotization, headers)
      .then(res => {

        toast.success(res.message)
        setCotization(defaultState)
        setCotizationCost('0')

      })
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { name, value } = event.currentTarget
    
    if (name === 'brand') {
      setCotization({
        ...cotization,
        [name]: value,
        model: CARS[value][0]
      })

      return
    }

    setCotization({
      ...cotization,
      [name]: value,
    })
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target

    setCotization({
      ...cotization,
      [name]: value
    })

    const cost = calculateCotizationCost({
      ...cotization,
      [name]: value
    })

    setCotizationCost(cost)
  }

  const modelOptions = CARS[cotization.brand]

  return {
    cotization,
    cotizationCost,
    handleSubmit,
    handleChange,
    handleClick,
    modelOptions
  }
}
