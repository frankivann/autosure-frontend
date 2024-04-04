import { UserHeader } from '@components/user-header'
import { Footer } from '@components/footer'
import { Outlet } from 'react-router-dom'

export function UserLayout() {
  return (
    <main>
      <UserHeader />
      <Outlet />
      <Footer />
    </main>
  )
}
