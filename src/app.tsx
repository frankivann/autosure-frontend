import createStore from 'react-auth-kit/createStore'
import AuthProvider from 'react-auth-kit'
import { Routes } from '@routes/index'
import { Toaster } from 'sonner'

// https://authkit.arkadip.dev/
const store = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: import.meta.env.PROD
})

export default function App() {
  return (
    <AuthProvider store={store}>
      <Routes />
      <Toaster richColors />
    </AuthProvider>
  )
}
