import { GET } from '@src/api'
import { UserCotizationResponse } from '@src/types'
import { useEffect, useState } from 'react'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

export function UserRecordPage() {
  const [recordInfo, setRecordInfo] = useState<UserCotizationResponse[]>([])
  const authHeader = useAuthHeader() as string

  useEffect(
    function () {
      GET<{ cotizations: UserCotizationResponse[] }>('cotization/user', {
        Authorization: authHeader
      }).then(res => setRecordInfo(res.cotizations))
    },
    [authHeader]
  )

  return (
    <>
      <h1>Mis Cotizaciones</h1>
      <p>Este es el historial de todas tus cotizaciones.</p>
    </>
  )
}
