import React from 'react'
import styles from '@/styles/larp/checkpage.module.css'
// import BgImg from '@/public/larp/img/cart-bg.png'

export default function CheckPage() {
  const bodyBg = {
    backgroundImage: 'url(https://i.postimg.cc/3J578SB5/1.png)',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
  }
  return (
    // className={styles.bodyBg}
    <div style={bodyBg}>
      {/* 導覽列 */}
      <div className="text-white bg-dark" style={{ height: 60 }}>
        我是navbar
      </div>
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
                <h4>幽靈船的詛咒</h4>
              </div>
              <div className={styles.orderMin}>
                <h4 className={styles.orderTitle}>館別</h4>
                <h4>台北館</h4>
              </div>
            </div>
            <div className={styles.orderLine}>
              <div className={styles.orderMin}>
                <h4 className={styles.orderTitle}>日期</h4>
                <h4>2024/09/05</h4>
              </div>
              <div className={styles.orderMin}>
                <h4 className={styles.orderTitle}>時段</h4>
                <h4>10:00</h4>
              </div>
            </div>
            <div className={styles.orderLine}>
              <div className={styles.orderMin}>
                <h4 className={styles.orderTitle}>人數</h4>
                <h4>8人</h4>
              </div>
              <div className={styles.orderMin}>
                <h4 className={styles.orderTitle}>聯絡人信箱</h4>
                <h4>flower@test.com</h4>
              </div>
            </div>
            <div className={styles.orderLine}>
              <div className={styles.orderMin}>
                <h4 className={styles.orderTitle}>聯絡人姓名</h4>
                <h4>小蘭花</h4>
              </div>
              <div className={styles.orderMin}>
                <h4 className={styles.orderTitle}>聯絡人電話</h4>
                <h4>0912-345-678</h4>
              </div>
            </div>
            <div
              className={`${styles.orderLine} flex-row-reverse`}
              style={{ borderTop: '1px dashed #f8f0e5', paddingTop: 20 }}
            >
              <div div="" className={`${styles.orderMin} justify-content-end`}>
                <h4 className="orderTitle">訂單金額</h4>
                <h4>5,200 元</h4>
              </div>
            </div>
          </div>
          {/* 付款資訊 */}
          <h4
            className={styles.secondaryText}
            style={{ marginTop: 76, padding: 10 }}
          >
            付款資訊
          </h4>
          <div className={styles.orderInfo}>
            <h4 className={styles.orderTitle}>電子發票</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
