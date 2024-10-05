import { useEffect, useState, useContext, createContext } from 'react'
import useLocalStorage from './use-localstorage.js'
import { init, initState, generateBookState } from './book-reducer-state.js'

const BookContext = createContext(null)

export const useBookFormState = ({
  children,
  initialBookItems = [],
  localStorageKey = 'BOOKForm',
}) => {
  // localStorage中只儲存 items。如果localStorage有此鍵中的值，則套入使用作為初始items。
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
  const bookItems = useState(items)
  const [bookState, setBookState] = useState(init(initialBookItems))

  // 初始化 setValue(localStorage), setValue用於存入localStorage中
  const [storedValue, setValue] = useLocalStorage(localStorageKey, items)

  // 當 bookItems 更動時，更動 localStorage 中的值，並更動 bookState
  useEffect(() => {
    // 使用字串比較
    if (JSON.stringify(bookItems) !== storedValue) {
      setValue(bookItems)
    }

    //有更動時，重新設定bookState
    setBookState(generateBookState(bookState, bookItems))
  }, [bookItems])

  return (
    <BookContext.Provider
      value={{
        cart: bookState,
        items: bookState.items,
      }}
    >
      {children}
    </BookContext.Provider>
  )
}

export const useCart = () => useContext(BookContext)
