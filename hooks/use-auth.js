import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const AuthContext = createContext()

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
    isLoading: true,
  })
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          'http://13.113.180.141:3006/user-profile/check',
          {
            withCredentials: true,
          }
        )
        if (response.data.status === 'success') {
          const userData = response.data.data.user

          const userDataObject = Array.isArray(userData)
            ? userData[0]
            : userData

          setAuth({
            isAuth: true,
            userData: {
              id: userDataObject.user_id || userDataObject.id,
              username: userDataObject.user_name || userDataObject.username,
              google_uid: userDataObject.google_uid || '',
              line_uid: userDataObject.line_uid || '',
              name: userDataObject.real_name || userDataObject.name,
              email: userDataObject.email,
            },
            isLoading: false,
          })
        } else {
          setAuth({
            isAuth: false,
            userData: initUserData,
            isLoading: false,
          })
        }
      } catch (error) {
        console.error('Error checking auth:', error)
        setAuth({
          isAuth: false,
          userData: initUserData,
          isLoading: false,
        })
      }
    }

    checkAuth()
  }, [])

  useEffect(() => {
    if (!auth.isLoading && !auth.isAuth) {
      const protectedRoutes = [
        '/user-profile/user-setting',
        '/user-profile/profile-password',
        /^\/user-profile\/\d+\/home$/,
      ]
      const currentPath = router.pathname
      const isProtected = protectedRoutes.some((route) => {
        if (typeof route === 'string') {
          return route === currentPath
        } else if (route instanceof RegExp) {
          return route.test(currentPath)
        }
        return false
      })

      if (isProtected) {
        router.push('/user-profile/login')
      }
    }
  }, [auth, router, router.pathname])

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default useAuth
