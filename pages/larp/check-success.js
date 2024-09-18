import React from 'react'
import styles from '@/styles/larp/checkpage.module.css'
import PaymentTabs from '@/components/larp/payment-tabs'
import GroupButton from '@/components/larp/next-button'
import { FaCircleCheck } from 'react-icons/fa6'

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
          {/* 付款資訊 */}
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
            </div>
            <GroupButton />
          </div>
        </div>
      </div>
    </div>
  )
}
