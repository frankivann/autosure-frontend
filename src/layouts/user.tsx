import { UserHeader } from '@components/user-header'
import { Footer } from '@components/footer'
import { Navigate, Outlet } from 'react-router-dom'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'

export function UserLayout() {
  const isAuthenticated = useIsAuthenticated()

  if (!isAuthenticated()) {
    return <Navigate to='/' />
  }

  return (
    <>
      <UserHeader />
      <Outlet />
      <Footer />
    </>
  )
}
