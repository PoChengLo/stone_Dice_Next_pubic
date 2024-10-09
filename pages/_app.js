// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/style.css'
import { CartProvider } from '@/hooks/use-cart-state'
import { AuthProvider } from '@/hooks/use-auth'
import '@/styles/tailwind-styles.css'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page)

  useEffect(() => {
    // 確保 Tailwind 在所有頁面應用
    import('tailwindcss/tailwind.css')
  }, [])

  return (
    <AuthProvider>
      {' '}
      <CartProvider>{getLayout(<Component {...pageProps} />)}</CartProvider>
    </AuthProvider>
  )
}
