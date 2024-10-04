import axios from 'axios'
import { useRouter } from 'next/router'
import useLocalStorage from '@/hooks/use-localstorage'
import toast from 'react-hot-toast'

export default function useLogout() {
  const router = useRouter()
  const [auth, setAuth] = useLocalStorage('auth', {
    isAuth: false,
    userData: {},
  })

  const handleLogout = async () => {
    try {
      // 從 localStorage 或其他地方獲取 token（如果有的話）
      const accessToken = localStorage.getItem('accessToken')

      const res = await axios.post(
        'http://localhost:3006/backend/user-profile/logout',
        {},
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            // 如果使用 Authorization header，加上：
            ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
          },
        }
      )

      // 清除所有本地存儲的認證信息
      setAuth({
        isAuth: false,
        userData: {},
      })
      localStorage.removeItem('accessToken') // 如果有存儲 token

      toast.success('已成功登出')
      router.push('/user-profile/login')
    } catch (error) {
      console.error('登出失敗:', error)

      // 更詳細的錯誤處理
      if (error.response) {
        // 伺服器回應的錯誤
        toast.error(error.response.data.message || '登出失敗')
      } else if (error.request) {
        // 請求發送失敗
        toast.error('無法連接到伺服器')
      } else {
        // 其他錯誤
        toast.error('發生未知錯誤')
      }

      // 如果遇到 401，可能是 token 已經失效，直接清除本地存儲並重導向
      if (error.response?.status === 401) {
        setAuth({
          isAuth: false,
          userData: {},
        })
        localStorage.removeItem('accessToken')
        router.push('/user-profile/login')
      }
    }
  }

  return handleLogout
}
