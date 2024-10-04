import axiosInstance, { fetcher } from './axios-instance'
import useSWR from 'swr'

/**
 * 檢查會員狀態使用
 */
export const checkAuth = async () => {
  return await axiosInstance.get('/auth/check')
}
/**
 * Google Login(Firebase)登入用，providerData為登入後得到的資料
 */
export const googleLogin = async (providerData = {}) => {
  return await axiosInstance.post('/google-login', providerData)
}

/**
 * LINE Login登入用，要求line登入的網址
 */
export const lineLoginRequest = async () => {
  // 向後端(express/node)伺服器要求line登入的網址，因密鑰的關係需要由後端產生
  axiosInstance.get('/line-login/login').then((res) => {
    console.log(res.data.url)
    // 重定向到line 登入頁
    if (res.data.url) {
      window.location.href = res.data.url
    }
  })
}
/**
 * LINE Login登入用，處理line方登入後，向我們的伺服器進行登入動作。query為router.query
 */
export const lineLoginCallback = async (query) => {
  const qs = new URLSearchParams({
    ...query,
  }).toString()

  return await axiosInstance.get(`/line-login/callback?${qs}`)
}
/**
 * LINE 登出用
 */
export const lineLogout = async (line_uid) => {
  return await axiosInstance.get(`/line-login/logout?line_uid=${line_uid}`)
}
/**
 * 登入用，loginData = { username, password }
 */
export const login = async (loginData = {}) => {
  return await axiosInstance.post('/user-profile/login', loginData)
}
/**
 * 登出用
 */
export const logout = async () => {
  return await axiosInstance.post(
    '/user-profile/logout',
    {},
    {
      withCredentials: true, // 確保攜帶 cookie
    }
  )
}
/**
 * 載入會員id的資料用，需要登入後才能使用。此API路由會檢查JWT中的id是否符合本會員，不符合會失敗。
 */
export const getUserById = async (id = 0) => {
  try {
    return await axiosInstance.get(`/user-profile/${id}/home`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error fetching user data:', error.response)
  }
}

/**
 * 忘記密碼/OTP 要求一次性密碼
 */
export const requestOtpToken = async (email = '') => {
  return await axiosInstance.post('/reset-password/otp', { email })
}
/**
 * 忘記密碼/OTP 重設密碼
 */
export const resetPassword = async (email = '', password = '', token = '') => {
  return await axiosInstance.post('/reset-password/reset', {
    email,
    token,
    password,
  })
}
/**
 * 註冊用
 */
export const register = async (user = {}) => {
  return await axiosInstance.post('/users', user)
}
/**
 * 修改會員一般資料用(排除password, username, email)
 */
export const updateProfile = async (id = 0, user = {}) => {
  return await axiosInstance.put(`/users/${id}/profile`, user)
}
/**
 * 修改會員頭像用，需要用FormData
 */
export const updateProfileAvatar = async (formData) => {
  return await axiosInstance.post(`/users/upload-avatar`, formData)
}
/**
 * 修改會員密碼專用, password = { originPassword, newPassword }
 */
export const updatePassword = async (id = 0, password = {}) => {
  return await axiosInstance.put(`/users/${id}/password`, password)
}
/**
 * 獲得會員有加在我的最愛的商品id，回傳為id陣列
 */
export const getFavs = async () => {
  return await axiosInstance.get('/favorites')
}
/**
 * 新增商品id在該會員的我的最愛清單中的
 */
export const addFav = async (pid) => {
  return await axiosInstance.put(`/favorites/${pid}`)
}
/**
 * 移除商品id在該會員的我的最愛清單中的
 */
export const removeFav = async (pid) => {
  return await axiosInstance.delete(`/favorites/${pid}`)
}

export const useUser = (id) => {
  const { data, error, isLoading } = useSWR(`/user-profile/${id}/home`, fetcher)

  return {
    data,
    isLoading,
    isError: error,
  }
}

// 解析accessToken用的函式
export const parseJwt = (token) => {
  try {
    const base64Payload = token.split('.')[1]
    const base64 = base64Payload.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    )
    return JSON.parse(jsonPayload)
  } catch (error) {
    console.error('Failed to parse JWT:', error)
    return null
  }
}
