import { useEffect, useState } from 'react'
import useLocalStorage from './use-localstorage.js'

export const useBookFormState = ({
  initialBookItems = [],
  localStorageKey = 'bookForm',
}) => {
  let items = initialBookItems

  if (!items.length) {
    try {
      // 修正nextjs中window is undefined的問題
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(localStorageKey)
        items = item ? JSON.parse(item) : []
      }
    } catch (error) {
      items = []
      console.log(error)
    }
  }

  // 初始化 bookItems, bookState
  const [bookItems, setBookItems] = useState(items)
  const [bookState, setBookState] = useState(init(initialBookItems))

  // 初始化 setValue(localStorage), setValue用於存入localStorage中
  const [storedValue, setValue] = useLocalStorage(localStorageKey, items)

  // 當 bookItems 更動時，更動 localStorage 中的值，並更動 cartState
  useEffect(() => {
    // 使用字串比較
    if (JSON.stringify(bookItems) !== storedValue) {
      setValue(bookItems)
    }

    setBookItems()
  })
}
