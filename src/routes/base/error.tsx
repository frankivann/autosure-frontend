import { Link } from 'react-router-dom'

export function ErrorPage() {
  return (
    <section className='relative'>
      <div className='bg-orange-50 min-h-dvh grid place-content-center'>
        <h2 className='text-4xl text-center font-light mb-4 sm:text-7xl'>
          404
        </h2>
        <p>
          Not found |{' '}
          <Link
            to='/'
            className='text-orange-500 hover:text-orange-600'
          >
            Go home
          </Link>
        </p>
      </div>
    </section>
  )
}
