import React, { useEffect, useState } from 'react'
import styles from '@/styles/larp/checkpage.module.css'
import ETicketTabs from '@/components/larp/e-ticket-tabs.js'
import GroupButton from '@/components/larp/next-button.js'
import useBookFormState from '@/hooks/use-bookform-state.js'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'
import { useRouter } from 'next/router'

export default function CheckPage() {
  const { formData: localData } = useBookFormState('bookForm', {})
  // 儲存localStorage傳過來的ID
  const [locations, setLocations] = useState([])
  const [escapes, setEscapes] = useState([])
  // 儲存上面ID轉換後的文字
  const [loc, setLoc] = useState('')
  const [esc, setEsc] = useState('')
  const router = useRouter()

  // 跟伺服器拿資料
  const getData = async () => {
    const baseURL = `http://127.0.0.1:3006/larp/check-page`
    const res = await fetch(baseURL)
    const resData = await res.json()
    setEscapes(resData.escape)
    setLocations(resData.location)
  }

  //把從 localStorage 傳過來的larp id跟loc id 轉換成文字
  useEffect(() => {
    const larpName = escapes.find((e) => parseInt(localData.larpName) === e.id)
    if (larpName) {
      const larpNameValue = larpName.larp_name
      setEsc(larpNameValue)
    }

    const larpLoc = locations.find((e) => parseInt(localData.loc) === e.loc_id)
    if (larpLoc) {
      const larpLocValue = larpLoc.loc_name
      setLoc(larpLocValue)
    }
  })

  useEffect(() => {
    if (router.isReady) {
      getData()
    }
  }, [router.isReady])

  return (
    <div className={styles.bodyBg} style={{ padding: '60px', height: '100vh' }}>
      {/* 導覽列 */}
      <Navbar />
      <div className={styles.larpContainer}>
        {/* 立即預約進度條 */}
        <div
          id={styles.orderStep}
          className="d-flex justify-content-around align-items-center"
        >
          <div
            className="d-flex align-items-center"
            style={{ padding: '0 22px' }}
          >
            <svg
              width={17}
              height={17}
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.5" cy="8.5" r={8} stroke="#D7BF7D" />
            </svg>
            <p className="d-inline" style={{ margin: '0 0 0 10px' }}>
              填寫訂單資料
            </p>
          </div>
          <div className={`${styles.line} flex-fill`} />
          <div
            className="d-flex align-items-center"
            style={{ padding: '0 22px' }}
          >
            <svg
              width={17}
              height={17}
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.5" cy="8.5" r={8} stroke="#D7BF7D" />
            </svg>
            <p className="d-inline" style={{ margin: '0 0 0 10px' }}>
              確認訂單資料
            </p>
          </div>
          <div
            className={`${styles.line} flex-fill`}
            style={{ backgroundColor: '#6e7c91' }}
          />
          <div
            className="d-flex align-items-center"
            style={{ padding: '0 22px' }}
          >
            <svg
              width={17}
              height={17}
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.5" cy="8.5" r={8} stroke="#6e7c91" />
            </svg>
            <p
              className="d-inline"
              style={{ margin: '0 0 0 10px', color: '#6e7c91' }}
            >
              付款
            </p>
          </div>
          <div
            className={`${styles.line} flex-fill`}
            style={{ backgroundColor: '#6e7c91' }}
          />
          <div
            className="d-flex align-items-center"
            style={{ padding: '0 22px' }}
          >
            <svg
              width={17}
              height={17}
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.5" cy="8.5" r={8} stroke="#6e7c91" />
            </svg>
            <p
              className="d-inline"
              style={{ margin: '0 0 0 10px', color: '#6e7c91' }}
            >
              預約完成
            </p>
          </div>
        </div>
        {/* 表單 */}
        {/* 訂單資料 */}
        <div id={styles.infoGroup} className={styles.secondaryText}>
          <h4 style={{ padding: 10 }}>訂單資料</h4>
          <div className={styles.orderInfo}>
            <div className={styles.orderLine}>
              <div className={styles.orderMin}>
                <h4 className={styles.orderTitle}>預約主題</h4>
                <h4>{esc}</h4>
              </div>
              <div className={styles.orderMin}>
                <h4 className={styles.orderTitle}>館別</h4>
                <h4>{loc}</h4>
              </div>
            </div>
            <div className={styles.orderLine}>
              <div className={styles.orderMin}>
                <h4 className={styles.orderTitle}>日期</h4>
                <h4>{localData.date}</h4>
              </div>
              <div className={styles.orderMin}>
                <h4 className={styles.orderTitle}>時段</h4>
                <h4>{localData.datetime}</h4>
              </div>
            </div>
            <div className={styles.orderLine}>
              <div className={styles.orderMin}>
                <h4 className={styles.orderTitle}>人數</h4>
                <h4>{localData.people} 位</h4>
              </div>
              <div className={styles.orderMin}>
                <h4 className={styles.orderTitle}>聯絡人信箱</h4>
                <h4>{localData.email}</h4>
              </div>
            </div>
            <div className={styles.orderLine}>
              <div className={styles.orderMin}>
                <h4 className={styles.orderTitle}>聯絡人姓名</h4>
                <h4>{localData.name}</h4>
              </div>
              <div className={styles.orderMin}>
                <h4 className={styles.orderTitle}>聯絡人電話</h4>
                <h4>{localData.mobile}</h4>
              </div>
            </div>
            <div
              className={`${styles.orderLine} flex-row-reverse`}
              style={{ borderTop: '1px dashed #f8f0e5', paddingTop: 20 }}
            >
              <div div="" className={`${styles.orderMin} justify-content-end`}>
                <h3 className="orderTitle">訂單金額</h3>
                <h3>{localData.totalprice.toLocaleString('zh-tw', 0)} 元</h3>
              </div>
            </div>
          </div>
          <GroupButton back="回上頁" next="下一步" nextSrc={`check-payment`} />
        </div>
      </div>
    </div>
  )
}
