import { useRouter } from 'next/router.js'
import useLocalStorage from './use-localstorage.js'
import OrderModal from '../components/larp/order-Modal.js'
import { useEffect, useState } from 'react'

export default function useBookFormState(bookForm, initialFormValues) {
  // 使用 useLocalStorage 來儲存表單的資料
  const [formData, setFormData] = useLocalStorage(bookForm, initialFormValues)

  const router = useRouter()

  // 設定會員資料
  const [authInfo, setAuthInfo] = useState({ isAuth: false })

  // 判斷是否登入會員
  // 修正 Next hydration 問題
  // https://stackoverflow.com/questions/72673362/error-text-content-does-not-match-server-rendered-html
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    // 提取 localStorage 的 auth 資料，使用useState 放入變數
    try {
      const auth_info = JSON.parse(localStorage.getItem('auth'))

      if (auth_info) {
        setAuthInfo(auth_info)
      }
    } catch (e) {
      console.log(e)
    }

    setHydrated(true)
  }, [])

  const BtnSubmit = (e) => {
    e.preventDefault()

    const query = { ...router.query }
    if (authInfo.isAuth) {
      query.user_id = authInfo.userData.id
      setFormData((prevData) => ({
        ...prevData,
        userid: query.user_id,
      }))
      router.push(`/larp/check-page?` + new URLSearchParams(query))
    } else {
      router.push('/user-profile/login')
    }
  }

  return { formData, setFormData, BtnSubmit }
}
