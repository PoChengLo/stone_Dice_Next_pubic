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
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
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
