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

  const loginRoute = '/user-profile/login'
  // 隱私頁面路由，未登入時會，檢查後跳轉至登入頁
  const protectedRoutes = [
    '/user-profile/status',
    '/user-profile/home',
    '/user-profile/profile-password',
  ]

  const handleCheckAuth = async () => {
    const res = await checkAuth()

    if (res.data.status === 'success') {
      const dbUser = res.data.data.user
      const userData = { ...initUserData }

      userData.id = dbUser.user_id || 0
      userData.username = dbUser.user_name || ''
      userData.google_uid = dbUser.google_uid || ''
      userData.line_uid = dbUser.line_uid || ''
      userData.email = dbUser.email || ''

      setAuth({ isAuth: true, userData })
    } else {
      console.warn(res.data)

      if (protectedRoutes.includes(router.pathname)) {
        router.push(loginRoute)
      }
    }
  }

  useEffect(() => {
    if (router.isReady && !auth.isAuth) {
      handleCheckAuth()
    }
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
