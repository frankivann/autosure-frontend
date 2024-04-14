import { useState } from 'react'
import { HamburgerIcon, LogoIcon } from '../icons'
import { Link } from 'react-router-dom'

export function Header() {
  const [toggle, setToggle] = useState(false)
  const show = toggle ? 'flex' : 'hidden'
  const backdrop = toggle
    ? 'bg-white/100 backdrop-blur-none'
    : 'backdrop-blur-lg'

  return (
    <header className={`bg-white/70 ${backdrop} fixed top-0 inset-x-0 z-10`}>
      <nav className='text-sm relative flex items-center flex-wrap gap-2 justify-between max-w-screen-xl mx-auto px-10 py-4'>
        <Link
          to='/'
          className='text-base flex items-center gap-2 -ml-1 p-1 sm:text-lg'
          aria-label='Header Logo'
        >
          <LogoIcon className='text-orange-500 size-7' />
          <span className='font-semibold'>Autosure</span>
        </Link>

        <div className='flex gap-2 sm:hidden'>
          <Link
            to='/signin'
            className='bg-orange-500 text-orange-100 flex px-4 py-2 font-semibold rounded-lg hover:bg-orange-600 transition-colors'
          >
            Sign In
          </Link>

          <button
            className='bg-gray-100 text-gray-500 p-1 rounded-lg hover:bg-gray-200 transition-colors'
            onClick={() => setToggle(!toggle)}
          >
            <HamburgerIcon />
          </button>
        </div>

        <ul
          className={`${show} bg-white text-black text-xs absolute top-full inset-x-0 flex flex-col flex-wrap transition-all sm:relative sm:text-sm sm:flex sm:flex-row sm:items-center sm:gap-5 sm:bg-inherit`}
        >
          <li>
            <a
              href='#'
              className='flex p-6 hover:bg-gray-100 transition-colors sm:p-2 sm:hover:bg-transparent sm:hover:text-gray-600'
            >
              Services
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex p-6 hover:bg-gray-100 transition-colors sm:p-2 sm:hover:bg-transparent sm:hover:text-gray-600'
            >
              Infrastructures
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex p-6 hover:bg-gray-100 transition-colors sm:p-2 sm:hover:bg-transparent sm:hover:text-gray-600'
            >
              Motor
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex p-6 hover:bg-gray-100 transition-colors sm:p-2 sm:hover:bg-transparent sm:hover:text-gray-600'
            >
              About us
            </a>
          </li>
          <li className='hidden sm:block'>
            <Link
              to='/signin'
              className='bg-orange-500 text-white flex px-4 py-2 font-semibold rounded-lg hover:bg-orange-600 transition-colors'
            >
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
