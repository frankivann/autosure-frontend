import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className='bg-red-0 min-h-dvh relative pt-20 sm:pt-32'>
      <div className='bg-gray-0 grid gap-10 max-w-screen-lg mx-auto p-10 sm:grid-cols-5 sm:gap-14'>
        <div className='bg-red-0 sm:col-span-3 sm:place-self-center'>
          <h1 className='text-3xl text-balance font-bold mb-4 leading-none capitalize sm:text-5xl'>
            Payments tool for coverage insurance.
          </h1>

          <p className='text-gray-500 text-sm text-pretty mb-6 sm:text-base'>
            Streamline Your Car Insurance Payments with Ease: From Quote to
            Policy, Flowbite Has You Covered.
          </p>

          <div className='flex flex-col gap-2 sm:flex-row'>
            <Link
              to='/signin'
              className='bg-orange-500 text-orange-100  text-center font-semibold text-sm px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors'
            >
              Get Started
            </Link>

            <a
              href='#'
              className='bg-transparent text-orange-500 text-center font-semibold text-sm px-6 py-2 border-2 border-orange-500 rounded-lg hover:border-orange-600 hover:text-orange-600 hover:bg-orange-100 transition-colors'
            >
              Docs
            </a>
          </div>
        </div>

        <div className='bg-blue-0 sm:col-span-2'>
          <img
            src='https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='mockup'
            width='421'
            height='280'
            className='bg-gray-200 w-full h-full rounded-3xl object-cover'
          />
        </div>
      </div>

      {/* <a
          href='#'
          className='absolute bottom-6 left-1/2 -translate-x-1/2'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='rotate-180 text-orange-500'
          >
            <path
              stroke='none'
              d='M0 0h24v24H0z'
              fill='none'
            />
            <path d='M14 7l-4 -4l-4 4' />
            <path d='M10 3v4.394a6.737 6.737 0 0 0 3 5.606a6.737 6.737 0 0 1 3 5.606v2.394' />
          </svg>
        </a> */}
    </section>
  )
}
