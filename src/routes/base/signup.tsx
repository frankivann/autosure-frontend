import { useState } from 'react'
import { POST } from '@src/api'
import { toast } from 'sonner'
import { LogoIcon } from '@components/icons'
import { Link, useNavigate } from 'react-router-dom'
import type { SignUpRequest } from '@src/types'

export function SignUpPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    const el = event.target as HTMLFormElement
    const formData = new FormData(el)
    const data = Object.fromEntries(formData) as SignUpRequest

    POST<SignUpRequest, { message: string }>('auth/signup', data)
      .then((res) => {
        navigate('/signin')
        toast.success(res.message)
        window.scrollTo({ top: 0 })
      })
      .finally(() => setLoading(false))
  }

  return (
    <section className='min-h-dvh pt-20 sm:pt-28'>
      <div className='p-10 bg-red-0 sm:max-w-lg sm:mx-auto'>
        <h1 className='text-2xl text-center font-bold mb-10 sm:text-4xl'>
          Sign Up to{' '}
          <span className='text-orange-500 inline-flex items-center gap-1'>
            Autosure
            <LogoIcon className='text-orange-500 size-6 mt-1' />
          </span>
        </h1>

        <form
          className='bg-red-0 flex flex-col justify-center gap-3 mb-10'
          onSubmit={handleSubmit}
        >
          <label>
            <span className='text-orange-500 text-xs font-semibold block mb-2 sm:text-sm'>
              First name
            </span>
            <input
              type='text'
              name='firstname'
              required
              placeholder='Franklin'
              minLength={2}
              className='bg-gray-50 w-full text-xs px-4 py-2 border border-gray-400 rounded-lg transition placeholder:text-gray-300 focus-visible:outline-gray-400 hover:border-gray-500 sm:text-sm'
            />
          </label>

          <label>
            <span className='text-orange-500 text-xs font-semibold block mb-2 sm:text-sm'>
              Last name
            </span>
            <input
              type='text'
              name='lastname'
              required
              placeholder='Iván'
              minLength={2}
              className='bg-gray-50 w-full text-xs px-4 py-2 border border-gray-400 rounded-lg transition placeholder:text-gray-300 focus-visible:outline-gray-400 hover:border-gray-500 sm:text-sm'
            />
          </label>

          <label>
            <span className='text-orange-500 text-xs font-semibold block mb-2 sm:text-sm'>
              Username
            </span>
            <input
              type='text'
              name='username'
              required
              placeholder='frankivann'
              minLength={2}
              className='bg-gray-50 w-full text-xs px-4 py-2 border border-gray-400 rounded-lg transition placeholder:text-gray-300 focus-visible:outline-gray-400 hover:border-gray-500 sm:text-sm'
            />
          </label>

          <label>
            <span className='text-orange-500 text-xs font-semibold block mb-2 sm:text-sm'>
              Password
            </span>
            <input
              type='password'
              name='password'
              required
              placeholder='unbeatable 123'
              minLength={3}
              className='bg-gray-50 w-full text-xs px-4 py-2 border border-gray-400 rounded-lg transition placeholder:text-gray-300 focus-visible:outline-gray-400 hover:border-gray-500 sm:text-sm'
            />
          </label>

          <label>
            <span className='text-orange-500 text-xs font-semibold block mb-2 sm:text-sm'>
              Email
            </span>
            <input
              type='email'
              name='email'
              required
              placeholder='fake@email.com'
              className='bg-gray-50 w-full text-xs px-4 py-2 border border-gray-400 rounded-lg transition placeholder:text-gray-300 focus-visible:outline-gray-400 hover:border-gray-500 sm:text-sm'
            />
          </label>

          <button
            disabled={loading}
            type='submit'
            className='bg-orange-500 text-orange-100 text-center font-semibold text-sm px-6 py-2 mt-4 rounded-lg hover:bg-orange-600 transition-colors disabled:bg-orange-300'
          >
            Sign Up
          </button>
        </form>

        <div className='flex flex-col items-center gap-2'>
          <span className='text-gray-600 text-xs sm:text-sm'>
            Already have an account?{' '}
            <Link
              to='/signin'
              className='text-orange-500 transition-colors hover:text-orange-600'
            >
              Sign In
            </Link>
          </span>

          <span className='text-gray-600 text-xs sm:text-sm'>
            By signing up you agree to our{' '}
            <a
              href='#'
              className='text-orange-500 transition-colors hover:text-orange-600'
            >
              Terms of Services
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}
