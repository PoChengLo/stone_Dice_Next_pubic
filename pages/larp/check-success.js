import React, { useEffect, useState } from 'react'
import styles from '@/styles/larp/checkpage.module.css'
import GroupButton from '@/components/larp/next-button'
import { FaCircleCheck } from 'react-icons/fa6'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'
import { useRouter } from 'next/router'

export default function CheckSuccess() {
  const router = useRouter()
  const [ordData, setOrdData] = useState({})
  // 跟伺服器拿資料
  const getData = async (ord_id) => {
    try {
      const baseURL = `http://127.0.0.1:3006/larp/check-success/${ord_id}`
      const res = await fetch(baseURL)

      // 確保返回的狀態是成功的
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      const resData = await res.json()
      setOrdData(resData)
    } catch (error) {
      console.error('伺服器獲取資料失敗:', error)
    }
  }

  useEffect(() => {
    const ord_id = localStorage.getItem('ord_id')

    // 確保ord_id存在時調用getData
    if (ord_id) {
      getData(ord_id)
    }
  }, [router.isReady]) // 可以根據需要添加依賴項

  const theme = [
    { id: 1, name: '失落的魔法書' },
    { id: 2, name: '禁忌實驗室' },
    { id: 3, name: '時光機密' },
    { id: 4, name: '幽靈船的詛咒' },
    { id: 5, name: '地下墓穴的秘密' },
    { id: 6, name: '鬼屋實驗室' },
    { id: 7, name: '極地求生' },
    { id: 8, name: '午夜圖書館' },
    { id: 9, name: '遺失的皇宮' },
    { id: 10, name: '海底古城' },
    { id: 11, name: '黑暗馬戲團' },
    { id: 12, name: '雪嶺幽魂' },
  ]
  const larpname = theme.find((e) => e.id === ordData.ord_theme)
  const themeName = larpname ? larpname.name : null

  const loc = [
    {
      id: 1,
      name: '台北館',
    },
    {
      id: 2,
      name: '台中館',
    },
    {
      id: 3,
      name: '高雄館',
    },
  ]
  // 查找對應的地點名稱
  const location = loc.find((e) => e.id === ordData.ord_loc)

  // 獲取地點名稱，若找到則返回名稱，否則返回 null 或者其他適當值
  const locationName = location ? location.name : null

  useEffect(() => {
    localStorage.removeItem('bookForm')
    // localStorage.removeItem('ord_id')
    localStorage.removeItem('time')
  }, [router.isReady])

  return (
    <div className={`${styles.bodyBg}`} style={{ padding: '60px' }}>
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
              付款
            </p>
          </div>
          <div
            className={`${styles.line} flex-fill`}
            style={{ backgroundColor: '#D7BF7D' }}
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
              <circle cx="8.5" cy="8.5" r={8} stroke="#D7BF7D " />
            </svg>
            <p className="d-inline" style={{ margin: '0 0 0 10px' }}>
              預約完成
            </p>
          </div>
        </div>
        {/* 表單 */}
        {/* 訂單資料 */}
        <div
          id={styles.infoGroup}
          className={`d-block text-center ${styles.secondaryText}`}
        >
          {/* 預約成功 */}
          <div className={styles.secondaryText} style={{ padding: 10 }}>
            <div className={styles.orderInfo}>
              <h3 className="d-flex align-self-center">
                <FaCircleCheck
                  className="d-flex align-self-center"
                  style={{ marginRight: '10px ', color: '#D7BF7D' }}
                />
                預約成功！
              </h3>
              <h4 className="m-auto">
                提醒您：建議於活動開始前10分鐘開始進場報到
                <br />
                若因個人原因遲到，將壓縮玩家自身的遊玩時間，謝謝配合！
              </h4>

              {/* 訂單資料 */}
              <div className={styles.orderDetail}>
                <h4
                  style={{
                    padding: 10,
                    borderBottom: '1px solid #f8f0e5',
                    marginBottom: '4px',
                  }}
                >
                  訂單明細
                </h4>
                <div className={styles.orderLine1}>
                  <div className={styles.orderMin}>
                    <h4 className={styles.orderText}>訂單編號</h4>
                    <h4>{ordData.ord_id}</h4>
                  </div>
                  <div className={styles.orderMin}>
                    <h4 className={styles.orderText}>訂單金額</h4>
                    <h4>{ordData.ord_total.toLocaleString('zh-tw')} 元</h4>
                  </div>
                </div>
                <div className={styles.orderLine1}>
                  <div className={styles.orderMin}>
                    <h4 className={styles.orderText}>聯絡人姓名</h4>
                    <h4>{ordData.ord_name}</h4>
                  </div>
                  <div className={styles.orderMin}>
                    <h4 className={styles.orderText}>聯絡人電話</h4>
                    <h4>{ordData.ord_mobile}</h4>
                  </div>
                </div>
                <div className={styles.orderLine1}>
                  <div className={styles.orderMin}>
                    <h4 className={styles.orderText}>聯絡人信箱</h4>
                    <h4>{ordData.ord_email}</h4>
                  </div>
                  <div className={styles.orderMin}>
                    <h4 className={styles.orderText}>人數</h4>
                    <h4>{ordData.ord_people} 位</h4>
                  </div>
                </div>
                <div className={styles.orderLine1}>
                  <div className={styles.orderMin}>
                    <h4 className={styles.orderText}>預約主題</h4>
                    <h4>{themeName}</h4>
                  </div>
                  <div className={styles.orderMin}>
                    <h4 className={styles.orderText}>館別</h4>
                    <h4>{locationName}</h4>
                  </div>
                </div>
                <div className={styles.orderLine1}>
                  <div className={styles.orderMin}>
                    <h4 className={styles.orderText}>日期</h4>
                    <h4>{ordData.ord_date}</h4>
                  </div>
                  <div className={styles.orderMin}>
                    <h4 className={styles.orderText}>時段</h4>
                    <h4>{ordData.ord_time}</h4>
                  </div>
                </div>
              </div>
            </div>
            <GroupButton
              back="回到首頁"
              next="前往訂單列表"
              backSrc={`/larp`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
