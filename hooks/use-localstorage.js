import { useState } from 'react'

export default function useLocalStorage(key, initialValue) {
  // 用來儲存我們的值的狀態
  // 傳遞初始狀態函數給 useState，這樣邏輯只會執行一次
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      // 通過 key 從 local storage 取得
      const item = window.localStorage.getItem(key)
      // 解析儲存的 json，如果沒有則返回 initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // 如果發生錯誤，也返回 initialValue
      console.log(error)
      return initialValue
    }
  })
  // 返回一個包裝過的 useState 設定函數版本，該版本會將新的值持久化到 localStorage
  const setValue = (value) => {
    try {
      // 允許值為函數，這樣我們的 API 就和 useState 一樣
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // 保存狀態
      setStoredValue(valueToStore)
      // 保存到 local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      // 更進階的實作會處理錯誤情況
      console.log(error)
    }
  }
  return [storedValue, setValue]
}
