import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { BaseLayout } from '@layouts/base'
import { UserLayout } from '@layouts/user'
import { HomePage } from '@routes/base/home'
import { SignInPage } from '@routes/base/signin'
import { SignUpPage } from '@routes/base/signup'
import { ErrorPage } from '@routes/base/error'
import { UserPage } from '@routes/user/user'
import { UserRecordPage } from '@routes/user/record'

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
