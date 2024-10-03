import { useRouter } from 'next/router.js'
import useLocalStorage from './use-localstorage.js'
import OrderModal from '../components/larp/order-Modal.js'

export default function useBookFormState(bookForm, initialFormValues) {
  // 使用 useLocalStorage 來儲存表單的資料
  const [formData, setFormData] = useLocalStorage(bookForm, initialFormValues)

  const router = useRouter()

  const BtnSubmit = (e) => {
    e.preventDefault()
    // 處理表單檢查邏輯
    // if (loc.value = '') {
    //   return
    // }

    // return modalWindow()
    router.push(`check-page`)
  }

  return { formData, setFormData, BtnSubmit }
}
