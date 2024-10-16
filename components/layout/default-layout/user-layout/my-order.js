import React, { useEffect, useState, useCallback } from 'react'
import styles from '@/styles/user-profile/user-order.module.scss'
import Image from 'next/image'

export default function MyOrder({ userId }) {
  const [ordData, setOrdData] = useState([])

  const getData = useCallback(async (userId) => {
    if (!userId) return
    try {
      const baseURL = `http://127.0.0.1:3006/larp/userid/${userId}`
      const res = await fetch(baseURL)
      const resData = await res.json()

      if (Array.isArray(resData) && resData.length > 0) {
        setOrdData(resData.filter((v) => v.user_id === parseInt(userId)))
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    if (userId) {
      getData(userId)
    }
  }, [userId, getData])

  const locName = useCallback((ord_loc) => {
    const locations = {
      1: '台北館',
      2: '台中館',
      3: '高雄館',
    }
    return locations[ord_loc] || '未知場地'
  }, [])

  const larpName = useCallback((ord_theme) => {
    const themes = {
      1: '失落的魔法書',
      2: '禁忌實驗室',
      3: '時光機密',
      4: '幽靈船的詛咒',
      5: '地下墓穴的秘密',
      6: '鬼屋實驗室',
      7: '極地求生',
      8: '午夜圖書館',
      9: '遺失的皇宮',
      10: '海底古城',
      11: '黑暗馬戲團',
      12: '雪嶺幽魂',
    }
    return themes[ord_theme] || '未知主題'
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>密室逃脫訂單紀錄</h1>
      <div className={styles.content}>
        {ordData.map((item) => (
          <div key={item.ord_id} className={styles['order-item']}>
            <div className={styles['order-header']}>
              <span>訂單編號：{item.ord_id}</span>
              <span>下單時間：{item.place_time}</span>
            </div>
            <div className={styles['order-details']}>
              <div className={styles['image-container']}>
                <Image
                  src={`/larp/img/larp-product/larpImage-${item.ord_theme}.png`}
                  alt={`Theme image for ${larpName(item.ord_theme)}`}
                  width={150}
                  height={150}
                  objectFit="cover"
                />
              </div>
              <div className={styles['details-group']}>
                <div className={styles['detail-item']}>
                  <span className={styles['detail-label']}>預約主題</span>
                  <span className={styles['detail-value']}>
                    {larpName(item.ord_theme)}
                  </span>
                </div>
                <div className={styles['detail-item']}>
                  <span className={styles['detail-label']}>預約場地</span>
                  <span className={styles['detail-value']}>
                    {locName(item.ord_loc)}
                  </span>
                </div>
                <div className={styles['detail-item']}>
                  <span className={styles['detail-label']}>總金額</span>
                  <span className={styles['detail-value']}>
                    {item.ord_total}元
                  </span>
                </div>
                <div className={styles['detail-item']}>
                  <span className={styles['detail-label']}>預約日期</span>
                  <span className={styles['detail-value']}>
                    {item.ord_date}
                  </span>
                </div>
                <div className={styles['detail-item']}>
                  <span className={styles['detail-label']}>預約時段</span>
                  <span className={styles['detail-value']}>
                    {item.ord_time}
                  </span>
                </div>
                <div className={styles['detail-item']}>
                  <span className={styles['detail-label']}>預約人數</span>
                  <span className={styles['detail-value']}>
                    {item.ord_people}位
                  </span>
                </div>
                <div className={styles['detail-item']}>
                  <span className={styles['detail-label']}>聯絡人</span>
                  <span className={styles['detail-value']}>
                    {item.ord_name}
                  </span>
                </div>
                <div className={styles['detail-item']}>
                  <span className={styles['detail-label']}>聯絡電話</span>
                  <span className={styles['detail-value']}>
                    {item.ord_mobile}
                  </span>
                </div>
                <div className={styles['detail-item']}>
                  <span className={styles['detail-label']}>聯絡信箱</span>
                  <span className={styles['detail-value']}>
                    {item.ord_email}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
