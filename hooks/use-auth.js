import React, { useState, useContext, createContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import axiosInstance from '@/services/axios-instance'
import { checkAuth, getFavs } from '@/services/user'

const AuthContext = createContext(null)

export const initUserData = {
  id: '',
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
    isLoading: true, // 新增 isLoading 狀態
  })
  const [favorites, setFavorites] = useState([])
  const router = useRouter()

  const loginRoute = '/user-profile/login'
  const protectedRoutes = [
    '/user-profile/user-setting',
    '/user-profile/home',
    '/user-profile/profile-password',
  ]

  const handleGetFavorites = async () => {
    try {
      const res = await getFavs()
      if (res.data.status === 'success') {
        setFavorites(res.data.data.favorites)
      }
    } catch (error) {
      console.error('Error fetching favorites:', error)
    }
  }

  const handleCheckAuth = async () => {
    if (auth.isLoading) return // 如果正在加載，不進行檢查

    setAuth((prev) => ({ ...prev, isLoading: true }))
    try {
      const res = await checkAuth()
      if (res.data.status === 'success') {
        const dbUser = res.data.data.user
        const userData = { ...initUserData, ...dbUser }
        setAuth({ isAuth: true, userData, isLoading: false })
      } else {
        setAuth({ isAuth: false, userData: initUserData, isLoading: false })
      }
    } catch (error) {
      console.error('Authentication check failed:', error)
      setAuth({ isAuth: false, userData: initUserData, isLoading: false })
    }
  }

  useEffect(() => {
    if (router.isReady && !auth.isAuth && !auth.isLoading) {
      handleCheckAuth()
    }
  }, [router.isReady])

  useEffect(() => {
    if (auth.isAuth) {
      handleGetFavorites()
    } else {
      setFavorites([])
    }
  }, [auth.isAuth])

  useEffect(() => {
    if (
      !auth.isLoading &&
      !auth.isAuth &&
      protectedRoutes.includes(router.pathname)
    ) {
      router.push(loginRoute)
    }
  }, [auth, router.pathname])

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
