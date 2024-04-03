export function Newsletter() {
  return (
    <section className='bg-green-0 h-auto relative pt-10 sm:pt-28'>
      <div className='bg-red-0 max-w-screen-lg mx-auto p-10 pb-20 flex flex-col items-center justify-center gap-8'>
        <div>
          <h3 className='text-2xl text-center text-balance font-bold mb-2 sm:text-4xl sm:font-bold'>
            Subscribe to our newsletter.
          </h3>
          <p className='text-gray-500 text-xs text-center text-pretty sm:text-base'>
            Receive monthly updates on new posts and features.
          </p>
        </div>

        <form className='w-full max-w-96 flex flex-col justify-center items-0 gap-2 sm:flex-row'>
          <label className='w-full'>
            <input
              type='email'
              className='bg-gray-50 w-full text-xs px-4 py-2 border border-gray-400 rounded-lg transition placeholder:text-gray-300 focus-visible:outline-gray-400 hover:border-gray-500 sm:text-sm'
              placeholder='Email'
            />
          </label>

          <button
            type='button'
            className='bg-orange-500 text-orange-100 w-full text-center font-semibold text-sm px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors sm:w-fit'
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
