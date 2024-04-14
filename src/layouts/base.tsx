import { Footer } from '@src/components/common/footer'
import { Header } from '@src/components/common/header'
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
