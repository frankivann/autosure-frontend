import { toast } from 'sonner'
import { POST } from '@src/api'
import { Link, useNavigate } from 'react-router-dom'
import type { SignUpRequest } from '@src/types'
import { LogoIcon } from '@src/components/icons'

export function SignUpPage() {
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const el = event.target as HTMLFormElement
    const formData = new FormData(el)
    const data = Object.fromEntries(formData) as SignUpRequest

    POST<SignUpRequest, { message: string }>('auth/signup', data).then(res => {
      navigate('/')
      toast.success(res.message)
      return
    })
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
            type='submit'
            className='bg-orange-500 text-orange-100 text-center font-semibold text-sm px-6 py-2 mt-4 rounded-lg hover:bg-orange-600 transition-colors'
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
