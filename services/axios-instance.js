import axios from 'axios'
import { apiBaseUrl } from '@/configs'

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 8000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 添加請求攔截器
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log('Unauthorized, redirecting to login')
      // 清除本地存儲的認證信息
      localStorage.removeItem('accessToken')
      // 重定向到登入頁面
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// 保留原有的 fetcher 函數
export const fetcher = (url) => axiosInstance.get(url).then((res) => res.data)
export const fetchWithToken = (url, token) => {
  axiosInstance.get(`${url}&${token}`).then((res) => res.data)
}

export const fetcherWithObject = ({ url, args }) => {
  const extraParams = new URLSearchParams(args)
  const andSymbol = extraParams.toString() ? '&' : ''
  const combinedUrl = url + andSymbol + extraParams.toString()
  console.log(combinedUrl)
  return axiosInstance.get(combinedUrl).then((res) => res.data)
}

export default axiosInstance
