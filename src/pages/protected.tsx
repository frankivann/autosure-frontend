import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import { Navigate, Outlet } from 'react-router-dom'

export function ProtectedPage () {
  // const isAuthenticated = useIsAuthenticated()

  // if (!isAuthenticated()) {
  //   return <Navigate to='/' replace={true} />
  // }

  return <Outlet />
}
