import { Link, useNavigate } from 'react-router-dom'
import { BellIcon, LogoIcon } from './icons'
import { useEffect, useRef, useState } from 'react'
import type { User } from '@src/types'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import useSignOut from 'react-auth-kit/hooks/useSignOut'

export function UserHeader() {
  const [toggle, setToggle] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const user = useAuthUser<User | null>()
  const signout = useSignOut()
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = ref.current
      if (!menu) return

      const isTarget = menu.contains(event.target as Node)
      if (!isTarget) setToggle(false)
    }

    window.document.addEventListener('click', handleClickOutside)
    return () => {
      window.document.removeEventListener('click', handleClickOutside)
    }
  }, [toggle])

  const handleSignOut = () => {
    signout()
    navigate('/')
  }

  return (
    <header className='bg-gray-100/70 backdrop-blur-lg fixed top-0 inset-x-0 z-10'>
      <nav className='bg-green-0 text-sm relative flex items-center flex-wrap gap-2 justify-between max-w-screen-xl mx-auto px-10 py-4'>
        <Link
          to='/user'
          className='flex items-center justify-center gap-2 text-clip'
        >
          <LogoIcon className='text-xs text-orange-500 size-6' />
          <span className='text-gray-700'>/</span>
          <span className='text-gray-700 font-semibold capitalize'>
            {user?.firstname}'s Profile
          </span>
        </Link>

        <div className='bg-yellow-0 flex items-center gap-10'>
          <ul className='hidden items-center sm:flex'>
            <li>
              <Link
                to='/user'
                className='text-sm flex px-3 py-1 transition-colors hover:text-gray-700'
              >
                Add Cotization
              </Link>
            </li>
            <li>
              <a
                href='#'
                className='text-sm flex px-3 py-1 transition-colors hover:text-gray-700'
              >
                Help
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-sm flex px-3 py-1 transition-colors hover:text-gray-700'
              >
                Docs
              </a>
            </li>
          </ul>

          <div className='flex items-center gap-2'>
            <button className='bg-orange-100 text-orange-500 p-1.5 rounded-full group'>
              <BellIcon className='size-6 transition-colors group-hover:text-orange-600' />
            </button>

            <div
              ref={ref}
              className='bg-green-0 relative'
            >
              <button
                className='bg-orange-500 size-6 flex items-center justify-center p-[18px] rounded-full'
                onClick={() => setToggle(!toggle)}
              >
                <span className='text-orange-100 font-semibold uppercase'>
                  {user?.firstname.charAt(0)}
                </span>
              </button>

              {toggle && (
                <ul className='bg-white min-w-52 absolute top-full right-0 flex flex-col gap-1 p-2 mt-4 border border-gray-300 rounded-lg shadow-lg'>
                  <span className='bg-red-0 text-gray-600 text-xs font-semibold flex px-3 py-2 select-none'>
                    {user?.email}
                  </span>

                  <hr className='border-gray-300' />

                  <li>
                    <a
                      href='#'
                      className='bg-red-0 text-gray-700 text-xs flex px-3 py-2 rounded-lg transition-colors hover:bg-gray-100'
                    >
                      My Profile
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='bg-red-0 text-gray-700 text-xs flex px-3 py-2 rounded-lg transition-colors hover:bg-gray-100'
                    >
                      Payment
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='bg-red-0 text-gray-700 text-xs flex px-3 py-2 rounded-lg transition-colors hover:bg-gray-100'
                    >
                      Settings
                    </a>
                  </li>

                  <hr className='border-gray-300' />

                  <button
                    onClick={handleSignOut}
                    className='bg-red-0 text-gray-700 text-xs flex px-3 py-2 rounded-lg transition-colors hover:bg-gray-100'
                  >
                    Sign Out
                  </button>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
