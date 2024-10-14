import React, { useEffect, useState } from 'react'
import styles from '@/styles/user-profile/user-order.module.scss'

export default function MyOrder({ userId }) {
  const [ordData, setOrdData] = useState([])

  const getData = async (userId) => {
    const baseURL = `http://127.0.0.1:3006/larp/userid/${userId}`
    if (!userId) return
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
    if (userId) {
      getData(userId)
    }
  }, [userId])

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>密室逃脫訂單紀錄</h1>
      {perUsers.map((item) => (
        <div key={item.ord_id} className={styles.content}>
          <table className={styles['anim']}>
            <h4 style={{ padding: '20px 20px 10px 20px' }}>
              訂單編號：{item.ord_id}
            </h4>
            <tbody>
              <tr>
                <td>下單時間：{item.place_time}</td>
              </tr>
              <tr>
                <td>預約主題：{larpName(item.ord_theme)}</td>
                <td>預約場地：{locName(item.ord_loc)}</td>
                <td>總金額：{item.ord_total}元</td>
              </tr>
              <tr>
                <td>預約日期：{item.ord_date}</td>
                <td>預約時段：{item.ord_time}</td>
                <td>預約人數：{item.ord_people}位</td>
              </tr>
              <tr>
                <td>聯絡人：{item.ord_name}</td>
                <td>聯絡電話：{item.ord_mobile}</td>
                <td>聯絡信箱：{item.ord_email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}
