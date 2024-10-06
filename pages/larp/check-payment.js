import React from 'react'
import styles from '@/styles/larp/checkpage.module.css'
import PaymentTabs from '@/components/larp/payment-tabs'
import ETicketTabs from '@/components/larp/e-ticket-tabs.js'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'
import useBookFormState from '@/hooks/use-bookform-state'
import { Button } from 'react-bootstrap'

export default function CheckPayment() {
  const { formData: localData } = useBookFormState('bookForm', {})

  const finalTotal = localData.totalprice

  const date = new Date()
  const dateTimeDate = date.toISOString().slice(0, 19).replace('T', ' ')

  // 資料傳回後端
  const sbAPI = async () => {
    // 資料傳回後端前新增一些資料欄位
    const sbData = {
      ...localData,
      ordTime: dateTimeDate, // place_time
    }
    try {
      const res = await fetch(`http://localhost:3006/larp/ord-api`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sbData),
      })

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await res.json()
      console.log('資料回傳成功', data)
    } catch (error) {
      console.log('資料回傳失敗', error)
    }
  }

  // 導向至ECPay付款頁面
  const goECPay = () => {
    if (window.confirm('確認要導向至ECPay進行付款?')) {
      // 先連到node伺服器後，導向至ECPay付款頁面
      window.location.href = `http://localhost:3006/ecpay/larp?amount=${finalTotal}`
    }
  }

  return (
    <div className={`${styles.bodyBg}`} style={{ paddingTop: '60px' }}>
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
          {/* 付款資訊 */}
          <h4
            className={styles.secondaryText}
            style={{ marginTop: 76, padding: 10 }}
          >
            發票資訊
          </h4>
          <div className={styles.orderInfo}>
            <h4 className={styles.orderTitle}>電子發票</h4>
            <ETicketTabs />
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ gap: '40px', margin: '40px auto 0 auto' }}
          >
            <Button className={styles.btnstyle} type="submit">
              回上頁
            </Button>
            <Button
              className={styles.btnstyle}
              type="submit"
              onClick={() => {
                sbAPI
                goECPay
              }}
            >
              下一步
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
