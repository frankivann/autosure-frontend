import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@pages/home'
import { SignUpPage } from '@pages/signup'
import { UserPage } from '@pages/user'
import { ErrorPage } from '@pages/error'
import { SignInPage } from '@pages/signin'
import { UserRecordPage } from '@pages/user-record'
import { BaseLayout } from '@layouts/base'
import { UserLayout } from '@layouts/user'

// https://reactrouter.com/en/main
const router = createBrowserRouter([
  {
    path: '/',
    Component: BaseLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: 'signin',
        Component: SignInPage
      },
      {
        path: 'signup',
        Component: SignUpPage
      }
    ]
  },

  {
    path: 'user',
    Component: UserLayout,
    children: [
      {
        index: true,
        element: <UserPage />
      },
      {
        path: 'record',
        element: <UserRecordPage />
      }
    ]
  }
])

export function Routes() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<p>Initial Load...</p>}
    />
  )
}
