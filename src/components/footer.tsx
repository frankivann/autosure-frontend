import { GithubIcon, LikedinIcon, LogoIcon } from './icons'

export function Footer() {
  return (
    <footer className='bg-gray-100 relative border-t'>
      <div className='max-w-screen-xl mx-auto p-10 flex flex-col items-center justify-between gap-5 sm:flex-row sm:items-end'>
        <div className='bg-blue-0 flex flex-col items-center gap-2 sm:items-start'>
          <a
            href='#'
            className='bg-orange-100 p-1.5 rounded-full group'
          >
            <LogoIcon className='text-orange-500 size-4 group-hover:scale-110' />
          </a>
          <p className='text-xs text-center'>
            Made with love by{' '}
            <a
              href='https://github.com/frankivann'
              target='_blank'
              className='text-orange-500 font-semibold transition-colors hover:text-orange-600'
            >
              @frankivann
            </a>
          </p>
          <p className='text-gray-500 text-xs text-center'>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <ul className='bg-red-0 flex items-center justify-center border border-gray-300 rounded-full'>
          <li className='border-r'>
            <a
              href='https://github.com/frankivann'
              target='_blank'
              className='h-8 text-sm flex items-center p-3 group'
            >
              <GithubIcon className='size-5 text-gray-800 transition-transform group-hover:scale-110' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/frankivann'
              target='_blank'
              className='h-8 text-sm flex items-center p-3 group'
            >
              <LikedinIcon className='size-5 text-gray-800 transition-transform group-hover:scale-110' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
