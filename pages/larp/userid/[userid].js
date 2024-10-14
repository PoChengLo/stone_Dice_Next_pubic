import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function UserId() {
  const [ordData, setOrdData] = useState([])
  const router = useRouter()

  const getData = async (userid) => {
    const baseURL = `http://127.0.0.1:3006/larp/userid/${userid}`
    if (!userid) return
    try {
      const res = await fetch(baseURL)
      const resData = await res.json()

      if (Array.isArray(resData) && resData.length > 0) {
        setOrdData(resData)
        // console.log(resData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const userId = router.query.userid
  const perUsers = ordData.filter((v) => v.user_id === parseInt(userId))
  // 轉換場地名稱
  const locName = (ord_loc) => {
    if (ord_loc === 1) {
      return '台北館'
    }
    if (ord_loc === 2) {
      return '台中館'
    }
    if (ord_loc === 3) {
      return '高雄館'
    }
  }

  // 轉換主題名稱
  const larpName = (ord_theme) => {
    if (ord_theme === 1) {
      return '失落的魔法書'
    }
    if (ord_theme === 2) {
      return '禁忌實驗室'
    }
    if (ord_theme === 3) {
      return '時光機密'
    }
    if (ord_theme === 4) {
      return '幽靈船的詛咒'
    }
    if (ord_theme === 5) {
      return '地下墓穴的秘密'
    }
    if (ord_theme === 6) {
      return '鬼屋實驗室'
    }
    if (ord_theme === 7) {
      return '極地求生'
    }
    if (ord_theme === 8) {
      return '午夜圖書館'
    }
    if (ord_theme === 9) {
      return '遺失的皇宮'
    }
    if (ord_theme === 10) {
      return '海底古城'
    }
    if (ord_theme === 11) {
      return '黑暗馬戲團'
    }
    if (ord_theme === 12) {
      return '雪嶺幽魂'
    }
  }

  useEffect(() => {
    if (router.isReady) {
      const { userid } = router.query
      getData(userid)
    }
  }, [router.isReady])

  return (
    <div>
      {perUsers.map((item) => (
        <div key={item.ord_id} className="mt-3">
          <div>訂單編號：{item.ord_id}</div>
          <div>預約主題：{larpName(item.ord_theme)}</div>
          <div>預約場地：{locName(item.ord_loc)}</div>
          <div>預約日期：{item.ord_date}</div>
          <div>預約時段：{item.ord_time}</div>
          <div>預約人數：{item.ord_people}位</div>
          <div>總金額：{item.ord_total}元</div>
          <div>下單時間：{item.place_time}</div>
          <div>聯絡人：{item.ord_name}</div>
          <div>聯絡電話：{item.ord_mobile}</div>
          <div>聯絡信箱：{item.ord_email}</div>
        </div>
      ))}
    </div>
  )
}
