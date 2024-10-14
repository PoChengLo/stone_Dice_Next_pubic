import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const TawkToChat = () => {
  const router = useRouter()

  useEffect(() => {
    // 匹配特定的動態路由
    const pattern = /^\/user-profile\/\d+\/home$/

    if (pattern.test(router.asPath)) {
      // 只在符合路由模式的情況下加載 Tawk.to
      if (!window.Tawk_API) {
        var Tawk_API = Tawk_API || {}
        var Tawk_LoadStart = new Date()

        ;(function () {
          var s1 = document.createElement('script')
          s1.async = true
          s1.src = 'https://embed.tawk.to/670c920f4304e3196ad1274e/1ia4hl3c9'
          s1.charset = 'UTF-8'
          s1.setAttribute('crossorigin', '*')
          s1.setAttribute('id', 'tawkToScript')
          var s0 = document.getElementsByTagName('script')[0]
          s0.parentNode.insertBefore(s1, s0)
        })()
      } else {
        window.Tawk_API.showWidget() // 如果已加載，則顯示小工具
      }
    } else {
      if (window.Tawk_API) {
        window.Tawk_API.hideWidget() // 如果路由不匹配，則隱藏小工具
      }
    }

    // 清理函數：解除事件監聽
    return () => {
      if (window.Tawk_API) {
        window.Tawk_API.hideWidget() // 在離開時隱藏小工具
      }
    }
  }, [router.asPath])

  return null
}

export default TawkToChat
