import { useEffect, useState } from 'react'
import { GET } from '@src/api'
import { Link } from 'react-router-dom'
import { TableChart } from '@components/charts/table'
import { BarListChart } from '@components/charts/bar-list'
import { Card } from '@tremor/react'
import type { CotizationResponse } from '@src/types'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

const defaultState = {
  numberOfCotizations: 0,
  records: [],
  top3Brands: [],
}

export function UserRecordPage() {
  const [data, setData] = useState<CotizationResponse>(defaultState)
  const authHeader = useAuthHeader() as string

  useEffect(
    function () {
      GET<CotizationResponse>('cotization/user', {
        Authorization: authHeader,
      }).then((res) => setData(res))
    },
    [authHeader]
  )

  return (
    <section className='bg-red-0 h-auto relative pt-10 sm:min-h-dvh'>
      <div className='bg-red-0 p-10 sm:max-w-screen-xl sm:mx-auto'>
        <header className='bg-yellow-0 flex flex-col justify-between gap-2 py-4 mb-14 border-b sm:flex-row sm:items-center'>
          <h1 className='text-gray-800 text-xl font-semibold sm:text-2xl'>
            Record History
          </h1>

          <div className='flex items-center flex-wrap gap-2'>
            <Link
              to='/user'
              className='bg-orange-500 text-gray-100 w-full text-center font-semibold text-xs px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors sm:w-fit sm:text-sm'
            >
              + New Cotization
            </Link>
            <button className='bg-gray-100 text-gray-700 w-full text-center font-semibold text-xs px-6 py-2 border rounded-lg hover:bg-gray-200 transition-colors sm:w-fit sm:text-sm'>
              Payment
            </button>
          </div>
        </header>

        <div className='bg-red-0 sm:max-w-4xl sm:mx-auto'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <Card className=' flex flex-col items-center gap-2'>
              <h3 className='text-base font-semibold sm:text-lg'>
                Number of records
              </h3>
              <p className='text-orange-400 text-6xl'>
                {data.numberOfCotizations}
              </p>
            </Card>

            <BarListChart
              data={data.top3Brands}
              title='My top 3 brands'
            />

            <Card className='sm:col-span-2'>
              <TableChart
                data={data.records}
                title='List of quotes'
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
