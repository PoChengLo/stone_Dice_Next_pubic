import { useState, useEffect } from 'react'

const TotalPriceComponent = () => {
  const [totalPrice, setTotalPrice] = useState(null) // 初始為 null，等到 client 渲染後再更新

  useEffect(() => {
    const savedTotalPrice = localStorage.getItem('totalprice')
    if (savedTotalPrice) {
      setTotalPrice(Number(savedTotalPrice)) // 客戶端渲染後更新 totalPrice
    }
  }, [])

  useEffect(() => {
    if (totalPrice !== null) {
      localStorage.setItem('totalprice', totalPrice) // 僅在 totalPrice 有值時才存入 localStorage
    }
  }, [totalPrice])

  const handlePriceChange = (price, people) => {
    const newTotalPrice = price * people
    setTotalPrice(newTotalPrice)
  }

  if (totalPrice === null) {
    return null // 客戶端渲染完成前，不顯示內容
  }
}

export default TotalPriceComponent
