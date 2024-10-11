// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/style.css'
import { CartProvider } from '@/hooks/use-cart-state'
import { AuthProvider } from '@/hooks/use-auth'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <AuthProvider>
      {' '}
      <CartProvider>{getLayout(<Component {...pageProps} />)}</CartProvider>
    </AuthProvider>
  )
}
