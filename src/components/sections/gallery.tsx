export function Gallery() {
  return (
    <section className='bg-green-0 h-auto relative pt-10 sm:pt-28'>
      <div className='bg-red-0 max-w-screen-lg mx-auto p-10'>
        <div className='hidden sm:block'>
          <h3 className='text-orange-500 text-4xl text-center font-bold mb-2'>
            "The Best Quotes"
          </h3>
          <p className='text-gray-600 text-base text-center mb-10'>
            More advantages of joining{' '}
            <span className='text-orange-500'>Autosure.</span>
          </p>
        </div>

        <div className='bg-red-0 grid gap-10 sm:grid-cols-2 sm:grid-rows-2'>
          <article className='flex flex-col items-center justify-center rounded-3xl sm:order-2 sm:h-96 sm:bg-gray-100 sm:border'>
            <span className='text-gray-600 text-xs text-center block mb-2'>
              Save per year on average
            </span>
            <h3 className='text-orange-500 text-6xl text-center font-bold'>
              $1123
            </h3>
          </article>

          <article className='bg-blue-0 sm:order-1 sm:h-96'>
            <img
              src='https://images.unsplash.com/photo-1518658761661-a3c568ee7b64?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='mockup'
              className='bg-gray-200 w-full h-full rounded-3xl object-cover transition-transform sm:hover:scale-105'
            />
          </article>

          <article className='flex flex-col items-center justify-center rounded-3xl sm:order-3 sm:h-96 sm:bg-gray-100 sm:border'>
            <h3 className='text-orange-300 text-4xl font-bold sm:text-5xl'>
              Less Hassle.
            </h3>
            <h3 className='text-orange-500 text-4xl font-bold sm:text-5xl'>
              More Money.
            </h3>
            <h3 className='text-orange-700 text-4xl font-bold sm:text-5xl'>
              More Time.
            </h3>
          </article>

          <article className='bg-blue-0 sm:order-4 sm:h-96'>
            <img
              src='https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='mockup'
              className='bg-gray-200 w-full h-full rounded-3xl object-cover  transition-transform sm:hover:scale-105'
            />
          </article>
        </div>
      </div>
    </section>
  )
}
