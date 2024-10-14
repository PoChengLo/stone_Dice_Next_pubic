import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const TawkToChat = () => {
  const router = useRouter()

  useEffect(() => {
    const pattern = /^\/user-profile\/\d+\/home$/

    const loadTawkToScript = () => {
      if (document.getElementById('tawkToScript')) {
        return
      }

      // 動態創建腳本標籤
      const script = document.createElement('script')
      script.src = 'https://embed.tawk.to/670c920f4304e3196ad1274e/1ia4hl3c9'
      script.async = true
      script.charset = 'UTF-8'
      script.setAttribute('crossorigin', '*')
      script.id = 'tawkToScript'
      document.body.appendChild(script)

      script.onload = () => {
        if (window.Tawk_API && pattern.test(router.asPath)) {
          window.Tawk_API.showWidget()
        }
      }
    }

    const removeTawkToScript = () => {
      // 移除 Tawk.to 的腳本
      const tawkScript = document.getElementById('tawkToScript')
      if (tawkScript) {
        tawkScript.remove()
      }

      const tawkElements = document.querySelectorAll('iframe[src*="tawk.to"]')
      tawkElements.forEach((element) => element.remove())

      // 刪除全局變量，防止腳本殘留
      if (window.Tawk_API) {
        delete window.Tawk_API
      }
    }

    // 根據當前路徑加載或移除腳本
    if (pattern.test(router.asPath)) {
      loadTawkToScript()
    } else {
      removeTawkToScript()
    }

    // 監聽路由變化
    const handleRouteChange = (url) => {
      if (pattern.test(url)) {
        loadTawkToScript()
      } else {
        removeTawkToScript()
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    // 清理函數：當組件卸載時，解除監聽並移除腳本
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      removeTawkToScript()
    }
  }, [router.asPath, router.events])

  return null
}

export default TawkToChat
