import React from 'react'
import styles from '@/styles/larp/checkpage.module.css'
import PaymentTabs from '@/components/larp/payment-tabs'
import ETicketTabs from '@/components/larp/e-ticket-tabs.js'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'
import useBookFormState from '@/hooks/use-bookform-state'
import { Button } from 'react-bootstrap'
import { useRouter } from 'next/router'

export default function CheckPayment() {
  const { formData: localData } = useBookFormState('bookForm', {})
  const router = useRouter()
  const date = new Date()
  // 將得到的時間轉換成台灣時間
  date.setHours(date.getHours() + 8)
  const dateTimeDate = date.toISOString().slice(0, 19).replace('T', ' ')

  // 資料傳回後端
  const saveAPI = async () => {
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
        alert('預約失敗，請稍後再試')
        router.push('/larp')
        throw new Error('伺服器連接失敗')
      }

      const data = await res.json()
      console.log('API response', data)

      if (data.success == true && data.ord_id) {
        // 成功儲存預約資料後，將 ord_id 存到localStorage
        console.log('ord_id:', data.ord_id) // 檢查 ord_id 是否有效
        localStorage.setItem('ord_id', data.ord_id)
        goECPay()
      } else {
        // 處理儲存失敗的情況
        console.log('失敗的回應資料:', data) // 顯示失敗時的回應資料
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const finalTotal = localData.totalprice
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
            <Button className={styles.btnstyle} type="submit" onClick={saveAPI}>
              付款
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
