import { useState } from 'react'
import { POST } from '@src/api'
import { CARS } from '@src/constants'
import { toast } from 'sonner'
import { calculateCotizationCost, hasEmptyValues } from '@utils/cotization'
import type { Cotization } from '@src/types'
import type { ChangeEvent } from 'react'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

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

    if (hasEmptyValues(cotization)) {
      toast.error('fill in all the fields of the form')
      window.scrollTo({ top: 0 })

      return
    }

    POST<Cotization, { message: string }>('cotization', cotization, headers)
      .then(res => {

        toast.success(res.message)
        setCotization(defaultState)
        setCotizationCost('0')
        window.scrollTo({ top: 0 })

      })
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { name, value } = event.currentTarget
    
    if (name === 'brand') {
      setCotization({
        ...cotization,
        [name]: value,
        model: CARS[value].models[0]
      })

      const cost = calculateCotizationCost({
        ...cotization,
        [name]: value
      })
  
      setCotizationCost(cost)

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

  const modelOptions = CARS[cotization.brand]?.models

  return {
    cotization,
    cotizationCost,
    handleSubmit,
    handleChange,
    handleClick,
    modelOptions
  }
}
