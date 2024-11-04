import React, { useEffect, useState } from 'react'
import styles from '@/styles/user-profile/shipping-info.module.scss'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function ShippingInfo() {
  const router = useRouter()
  const { id } = router.query
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      axios
        .get(`http://13.113.180.141:3006/user-profile/${id}/home`)
        .then((res) => {
          if (res.data.status === 'success') {
            setUserData(res.data.data.user)
          } else {
            console.error('User not found')
          }
        })
        .catch((err) => {
          console.error('Error fetching user data:', err)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [id])

  if (loading) {
    return <p>Loading...</p>
  }

  // 如果 userId 不是 2024001，只顯示 headerContainer
  if (userData?.user_id !== 2024001) {
    return (
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>收件地址 / 取貨方式</h1>
        <div className={styles.buttonGroup}>
          <button className={styles.myButton}>
            <p>+ 新增郵寄地址</p>
          </button>
          <button className={styles.myButton}>
            <p>+ 新增超商</p>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>收件地址 / 取貨方式</h1>
        <div className={styles.buttonGroup}>
          <button className={styles.myButton}>
            <p>+ 新增郵寄地址</p>
          </button>
          <button className={styles.myButton}>
            <p>+ 新增超商</p>
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.addressBlock}>
          <h2 className={styles.blockTitle}>711 超商取貨</h2>
          <div className={styles.addressDetails}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>收件者姓名</span>
              <span className={styles.detailValue}>陳家豪</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>電子郵件</span>
              <span className={styles.detailValue}>example@email.com</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>手機號碼</span>
              <span className={styles.detailValue}>0912345678</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>超商</span>
              <span className={styles.detailValue}>7-11和平門市</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>地址</span>
              <span className={styles.detailValue}>
                台北市中正區羅斯福路二段7號
              </span>
            </div>
          </div>
          <button className={styles.myButton}>
            <p>設為常用地址</p>
          </button>
        </div>
        <div className={styles.addressBlock}>
          <h2 className={styles.blockTitle}>宅配配送</h2>
          <div className={styles.addressDetails}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>收件者姓名</span>
              <span className={styles.detailValue}>陳正雄</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>電子郵件</span>
              <span className={styles.detailValue}>example2@email.com</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>手機號碼</span>
              <span className={styles.detailValue}>0987654321</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>地址</span>
              <span className={styles.detailValue}>
                台北市信義區信義路五段7號
              </span>
            </div>
          </div>
          <button className={styles.myButton}>
            <p>設為常用地址</p>
          </button>
        </div>
      </div>
    </div>
  )
}
