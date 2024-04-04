import { useCotization } from '@hooks/use-cotization'
import { ArrowShareIcon } from '@components/icons'
import {
  BRANDS_WITH_LOGOS,
  FUEL_TYPES,
  LOCATIONS,
  TRANSMISSION_TYPES,
  USAGES
} from '@src/constants'

export function UserPage() {
  const {
    cotization,
    cotizationCost,
    handleChange,
    handleSubmit,
    handleClick,
    modelOptions
  } = useCotization()

  const formattedPrice = '$' + cotizationCost

  return (
    <section className='bg-red-0 h-auto relative pt-10 sm:min-h-dvh'>
      <div className='bg-red-0 p-10 sm:max-w-screen-xl sm:mx-auto'>
        <header className='bg-yellow-0 flex flex-col justify-between gap-2 py-4 mb-14 border-b sm:flex-row sm:items-center'>
          <h1 className='text-gray-700 text-xl font-semibold sm:text-2xl'>
            Car Quote Form
          </h1>

          <div className='flex items-center flex-wrap gap-2'>
            <button
              // onClick={}
              className='bg-orange-500 text-gray-100 w-full text-center font-semibold text-xs px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors sm:w-fit sm:text-sm'
            >
              Check history
            </button>
            <button
              // onClick={}
              className='bg-gray-100 text-gray-700 w-full text-center font-semibold text-xs px-6 py-2 border rounded-lg hover:bg-gray-200 transition-colors sm:w-fit sm:text-sm'
            >
              Payment
            </button>
          </div>
        </header>

        <div className='bg-red-0 sm:max-w-3xl sm:mx-auto'>
          <form
            onSubmit={handleSubmit}
            className='bg-red-0 flex flex-col gap-6 rounded-xl'
          >
            <label>
              <span className='text-orange-500 text-xs font-semibold block mb-2 sm:text-sm'>
                Year of Production
              </span>
              <input
                type='number'
                name='year'
                required
                min={1900}
                max={new Date().getFullYear()}
                value={cotization.year}
                onChange={handleChange}
                className='text-gray-500 w-full text-xs px-4 py-2 border border-gray-300 rounded-lg transition placeholder:text-gray-300 focus-visible:outline-gray-500 hover:border-gray-400 sm:text-sm'
              />
            </label>

            <div>
              <span className='text-orange-500 text-xs font-semibold block mb-2 sm:text-sm'>
                Brand
              </span>

              <div className='grid grid-cols-2 gap-2 sm:grid-cols-4'>
                {BRANDS_WITH_LOGOS?.map(({ brand, Logo }) => {
                  const selected =
                    brand === cotization.brand
                      ? 'border-orange-500 bg-orange-100 hover:bg-orange-200'
                      : ''

                  return (
                    <button
                      key={brand}
                      name='brand'
                      value={brand}
                      type='button'
                      onClick={handleClick}
                      className={`${selected} bg-gray-100 text-sm p-2 flex flex-col items-center justify-center gap-2 border border-gray-300 overflow-clip rounded-xl transition-colors hover:bg-gray-200 group`}
                    >
                      <Logo className='text-gray-700 size-8 transition-transform group-hover:scale-110' />
                      <span className='text-gray-600 text-xs font-semibold'>
                        {brand}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div>
              <span className='text-orange-500 text-xs font-semibold block mb-2 sm:text-sm'>
                Model
              </span>
              <div className='grid grid-cols-2 gap-2 sm:grid-cols-4'>
                {modelOptions?.map(model => {
                  const selected =
                    model === cotization.model
                      ? 'border-orange-500 bg-orange-100 hover:bg-orange-200'
                      : ''

                  return (
                    <button
                      key={model}
                      name='model'
                      value={model}
                      type='button'
                      onClick={handleClick}
                      className={`${selected} bg-gray-100 text-gray-800 text-sm font-semibold py-4 flex flex-col items-center justify-center gap-2 border border-gray-300 overflow-clip rounded-xl transition-colors hover:bg-gray-200 group`}
                    >
                      {model}
                    </button>
                  )
                })}
              </div>
            </div>

            <label>
              <span className='text-orange-500 text-xs font-semibold block mb-2 sm:text-sm'>
                Fuel Type
              </span>
              <select
                name='fuelType'
                value={cotization.fuelType}
                onChange={handleChange}
                required
                className='text-gray-500 w-full text-xs px-4 py-2 border border-gray-300 rounded-lg transition placeholder:text-gray-300 focus-visible:outline-gray-500 hover:border-gray-400 sm:text-sm'
              >
                {FUEL_TYPES?.map(fuel => (
                  <option
                    key={fuel}
                    value={fuel}
                  >
                    {fuel}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span className='text-orange-500 text-xs font-semibold block mb-2 sm:text-sm'>
                Transmission Type
              </span>
              <select
                name='transmissionType'
                value={cotization.transmissionType}
                onChange={handleChange}
                required
                className='text-gray-500 w-full text-xs px-4 py-2 border border-gray-300 rounded-lg transition placeholder:text-gray-300 focus-visible:outline-gray-500 hover:border-gray-400 sm:text-sm'
              >
                {TRANSMISSION_TYPES?.map(transmission => (
                  <option
                    key={transmission}
                    value={transmission}
                  >
                    {transmission}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span className='text-orange-500 text-xs font-semibold block mb-2 sm:text-sm'>
                Nomber of Doors
              </span>
              <select
                name='numberOfDoors'
                value={cotization.numberOfDoors}
                onChange={handleChange}
                required
                className='text-gray-500 w-full text-xs px-4 py-2 border border-gray-300 rounded-lg transition placeholder:text-gray-300 focus-visible:outline-gray-500 hover:border-gray-400 sm:text-sm'
              >
                <option value='4'>4 doors</option>
                <option value='2'>2 doors</option>
              </select>
            </label>

            <label>
              <span className='text-orange-500 text-xs font-semibold block mb-2 sm:text-sm'>
                Location
              </span>
              <select
                name='location'
                value={cotization.location}
                onChange={handleChange}
                required
                className='text-gray-500 w-full text-xs px-4 py-2 border border-gray-300 rounded-lg transition placeholder:text-gray-300 focus-visible:outline-gray-500 hover:border-gray-400 sm:text-sm'
              >
                {LOCATIONS?.map(location => (
                  <option
                    key={location}
                    value={location}
                  >
                    {location}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span className='text-orange-500 text-xs font-semibold block mb-2 sm:text-sm'>
                Usage
              </span>
              <select
                name='usage'
                value={cotization.usage}
                onChange={handleChange}
                required
                className='text-gray-500 w-full text-xs px-4 py-2 border border-gray-300 rounded-lg transition placeholder:text-gray-300 focus-visible:outline-gray-500 hover:border-gray-400 sm:text-sm'
              >
                {USAGES?.map(usage => (
                  <option
                    key={usage}
                    value={usage}
                  >
                    {usage}
                  </option>
                ))}
              </select>
            </label>

            <div className='bg-gray-100 px-4 py-3 rounded-xl'>
              <div className='bg-yellow-0 mb-4'>
                <p className='text-orange-500 text-xs font-semibold block mb-1 sm:text-base'>
                  Total Price
                </p>
                <p className='text-gray-500 text-xs'>
                  Install one of our recommended options below or browse the
                  integrations marketplace.
                </p>
              </div>
              <input
                type='text'
                name='price'
                value={formattedPrice}
                onChange={handleChange}
                disabled
                required
                className='bg-red-0 text-orange-500 w-full text-3xl font-semibold'
              />
            </div>

            <button
              type='submit'
              className='bg-orange-500 text-orange-100 w-full text-center font-semibold text-sm px-6 py-2 mt-6 rounded-lg hover:bg-orange-600 transition-colors'
            >
              Register Quote
            </button>
          </form>
        </div>

        <div className='bg-yellow-0 flex items-center justify-center mt-12'>
          <a
            href='#'
            className='bg-red-0 text-gray-600 text-xs font-semibold flex items-center gap-1 transition-colors hover:text-gray-400'
          >
            Learn more
            <ArrowShareIcon className='size-4' />
          </a>
        </div>
      </div>
    </section>
  )
}
