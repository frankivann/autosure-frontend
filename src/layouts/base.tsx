import { Footer } from '@components/footer'
import { Header } from '@components/header'
import { Outlet } from 'react-router-dom'

export function BaseLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
