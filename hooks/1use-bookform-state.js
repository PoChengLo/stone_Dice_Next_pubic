import useLocalStorage from './use-localstorage.js'

export default function useBookFormState(bookForm, initialFormValues) {
  // 使用 useLocalStorage 來儲存表單的資料
  const [formData, setFormData] = useLocalStorage(bookForm, initialFormValues)

  const handleSubmit = (e) => {
    e.preventDefault()
    // 可以在這裡處理表單提交的額外邏輯
    console.log('Form data saved to localStorage:', formData)
  }

  return { formData, handleSubmit }
}
