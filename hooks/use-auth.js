import React, { useState, useContext, createContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import axiosInstance from '@/services/axios-instance'
import { checkAuth, getFavs } from '@/services/user'

const AuthContext = createContext(null)

export const initUserData = {
  id: 0,
  username: '',
  google_uid: '',
  line_uid: '',
  name: '',
  email: '',
}

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuth: false,
    userData: initUserData,
  })

  // 我的最愛清單使用
  const [favorites, setFavorites] = useState([])

  const handleGetFavorites = async () => {
    const res = await getFavs()
    if (res.data.status === 'success') {
      setFavorites(res.data.data.favorites)
    }
  }

  useEffect(() => {
    if (auth.isAuth) {
      handleGetFavorites()
    } else {
      setFavorites([])
    }
  }, [auth])

  const router = useRouter()

  // 登入頁路由
  const loginRoute = '/user-profile/login'
  // 隱私頁面路由，未登入時會，檢查後跳轉至登入頁
  const protectedRoutes = [
    '/user-profile/user-setting',
    '/user-profile/home',
    '/user-profile/profile-password',
  ]

  // 檢查會員認証用
  const handleCheckAuth = async () => {
    const res = await checkAuth()

    if (res.data.status === 'success') {
      const dbUser = res.data.data.user
      const userData = { ...initUserData }

      // 手動對應後端欄位名稱到前端
      userData.id = dbUser.user_id || 0
      userData.username = dbUser.user_name || ''
      userData.google_uid = dbUser.google_uid || ''
      userData.line_uid = dbUser.line_uid || ''
      userData.email = dbUser.email || ''
      userData.name = dbUser.name || ''

      // 設到全域狀態中
      setAuth({ isAuth: true, userData })
    } else {
      console.warn(res.data)

      // 在這裡實作隱私頁面路由的跳轉
      if (protectedRoutes.includes(router.pathname)) {
        router.push(loginRoute)
      }
    }
  }

  // didMount(初次渲染)後，向伺服器要求檢查會員是否登入中
  useEffect(() => {
    if (router.isReady && !auth.isAuth) {
      handleCheckAuth()
    }
    // eslint-disable-next-line
  }, [router.isReady, router.pathname])

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
