import React from 'react'
import styles from '@/styles/larp/checkpage.module.css'
import PaymentTabs from '@/components/larp/payment-tabs'
import GroupButton from '@/components/larp/next-button'

export default function CheckPage() {
  return (
    <div className={`${styles.bodyBg}`} style={{ height: '100vh' }}>
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
          {/* 付款資訊 */}
          <h4 className={styles.secondaryText} style={{ padding: 10 }}>
            付款方式
          </h4>
          <div className={styles.orderInfo}>
            <h4>請選擇支付工具</h4>
            <PaymentTabs />
          </div>
          <GroupButton />
        </div>
      </div>
    </div>
  )
}
