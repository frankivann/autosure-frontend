import axios, { AxiosError, AxiosResponse } from 'axios'
import { BASE_URL } from '@src/constants'
import { toast } from 'sonner'

export const GET = async <T> (endpoint: string, headers?: Record<string, string>): Promise<T> => {
  try {

    const response: AxiosResponse<T> = await axios.get<T>(`${BASE_URL}/${endpoint}`, { headers })
    return response.data

  } catch (error) {

    if (error && error instanceof AxiosError) {
      toast.error(error.response?.data.message || 'Error')

    } else {
      toast.error('Ha ocurrido un error')
      console.log(error)
    }

    throw new Error('Error al realizar la solicitud GET')
  }
}

export const POST = async <T, R> (endpoint: string, data: T, headers?: Record<string, string>): Promise<R> => {
  try {
    
    const response: AxiosResponse<R> = await axios.post<R>(`${BASE_URL}/${endpoint}`, data, { headers })
    return response.data
    
  } catch (error) {

    if (error && error instanceof AxiosError) {
      toast.error(error.response?.data.message)

    } else {
      toast.error('Ha ocurrido un error')
      console.log(error)
    }

    throw new Error('Error al realizar la solicitud POST')
  }
}
