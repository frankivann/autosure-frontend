import { AwsIcon, HboIcon, PwaIcon, VmIcon, WixIcon } from '../icons'

const logos = [
  { name: 'PwaIcon', Logo: PwaIcon },
  { name: 'VmIcon', Logo: VmIcon },
  { name: 'AwsIcon', Logo: AwsIcon },
  { name: 'HboIcon', Logo: HboIcon },
  { name: 'WixIcon', Logo: WixIcon }
]

export function Customer() {
  return (
    <section className='bg-yellow-0 h-auto relative pt-10 sm:min-h-dvh sm:pt-28'>
      <div className='bg-gray-0 max-w-screen-lg mx-auto pb-10'>
        <div className='bg-red-0 max-w-xl mx-auto px-10'>
          <h2 className='text-orange-500 text-5xl font-bold text-center text-balance mb-8 sm:text-6xl'>
            Manage your insurance easily.
          </h2>

          <p className='text-gray-500 text-sm text-pretty text-center mb-14 sm:text-base'>
            Empower Patients and Healthcare Professionals Alike with Our
            AI-Driven Healthcare Platform. Record Keeping, Diagnosis, and
            Treatment Planning for All.
          </p>
        </div>

        <p className='text-orange-500 text-xs font-semibold text-center mb-6'>
          Trusted by te best
        </p>

        <div className='bg-red-0 relative overflow-x-hidden [--gap:1rem] [--duration:40s] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'>
          <div className='flex w-max gap-[--gap] items-stretch animate-marquee [animation-direction:reverse] hover:[animation-play-state:paused]'>
            {logos.map(({ Logo, name }) => (
              <a
                key={name}
                href='#'
                className='bg-gray-100 min-w-44 p-3 flex justify-center rounded-xl group'
              >
                <Logo className='size-14 text-gray-700 transition-transform group-hover:scale-110' />
              </a>
            ))}
            {logos.map(({ Logo, name }) => (
              <a
                key={`${name}2`}
                href='#'
                className='bg-gray-100 min-w-44 p-3 flex justify-center rounded-xl group'
              >
                <Logo className='size-14 text-gray-700 transition-transform group-hover:scale-110' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
