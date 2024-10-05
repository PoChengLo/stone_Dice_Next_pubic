import { useRouter } from 'next/router'
import useLocalStorage from '@/hooks/use-localstorage'
import toast from 'react-hot-toast'
import axiosInstance from '@/services/axios-instance'

export default function useLogout() {
  const router = useRouter()
  const [auth, setAuth] = useLocalStorage('auth', {
    isAuth: false,
    userData: {},
  })

  const handleLogout = async () => {
    try {
      // 發送登出請求到後端
      await axiosInstance.post(
        '/user-profile/logout',
        {},
        { withCredentials: true }
      )

      // 清除本地存儲的認證信息
      localStorage.removeItem('accessToken')

      // 重置 axios 實例的默認 headers
      axiosInstance.defaults.headers.common['Authorization'] = ''

      // 更新本地認證狀態
      setAuth({
        isAuth: false,
        userData: {},
      })

      toast.success('已成功登出')
      router.push('/user-profile/login')
    } catch (error) {
      console.error('登出失敗:', error)

      if (error.response?.status === 401) {
        // 如果是 401 錯誤，直接清除認證信息並重定向
        setAuth({
          isAuth: false,
          userData: {},
        })
        localStorage.removeItem('accessToken')
        axiosInstance.defaults.headers.common['Authorization'] = ''
        router.push('/user-profile/login')
        return
      }

      if (error.response) {
        toast.error(error.response.data.message || '登出失敗')
      } else if (error.request) {
        toast.error('無法連接到伺服器')
      } else {
        toast.error('發生未知錯誤')
      }

      // 即使發生錯誤，也清除本地認證狀態
      setAuth({
        isAuth: false,
        userData: {},
      })
      localStorage.removeItem('accessToken')
      axiosInstance.defaults.headers.common['Authorization'] = ''
    }
  }

  return handleLogout
}
