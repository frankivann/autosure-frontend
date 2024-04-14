import { Hero } from '@components/sections/hero'
import { Gallery } from '@components/sections/gallery'
import { Customer } from '@components/sections/customer'
import { Newsletter } from '@components/sections/newsletter'

export function HomePage() {
  return (
    <>
      <Hero />
      <Customer />
      <Gallery />
      <Newsletter />
    </>
  )
}
