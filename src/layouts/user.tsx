import { Header } from '@components/user/header'
import { Footer } from '@components/common/footer'
import { Navigate, Outlet } from 'react-router-dom'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'

export function UserLayout() {
  const isAuthenticated = useIsAuthenticated()

  // if (!isAuthenticated()) {
  //   return <Navigate to='/' />
  // }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
