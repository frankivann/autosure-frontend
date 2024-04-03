import { BellIcon, LogoIcon } from '@components/icons'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export function UserLayout() {
  const [toggle, setToggle] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

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

  return (
    <>
      <header className='bg-red-0 fixed top-0 inset-x-0 z-10'>
        <nav className='bg-green-0 text-sm relative flex items-center flex-wrap gap-2 justify-between max-w-screen-xl mx-auto px-10 py-4'>
          <Link
            to='/user'
            className='flex items-center justify-center gap-2 text-clip'
          >
            <LogoIcon className='text-xs text-orange-500 size-6' />
            <span className='text-gray-700'>/</span>
            <span className='text-gray-700 font-semibold'>
              Franklin's Profile
            </span>
          </Link>

          <div className='bg-yellow-0 flex items-center gap-10'>
            <ul className='hidden items-center sm:flex'>
              <li>
                <a
                  href='#'
                  className='text-sm flex px-3 py-1 transition-colors hover:text-gray-700'
                >
                  New Quote
                </a>
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
                  <span className='text-orange-100 font-semibold'>F</span>
                </button>

                {toggle && (
                  <ul className='$ bg-blue-0 w-max absolute top-full right-0 flex flex-col gap-1 p-2 mt-4 border border-gray-300 rounded-lg shadow-lg'>
                    {/*  */}
                    <span className='bg-red-0 text-gray-600 text-xs font-semibold flex px-3 py-2 select-none'>
                      franklinalvarado@gmail.com
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
                        Quotes Record
                      </a>
                    </li>

                    <hr className='border-gray-300' />

                    <button className='bg-red-0 text-gray-700 text-xs flex px-3 py-2 rounded-lg transition-colors hover:bg-gray-100'>
                      Settings
                    </button>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
