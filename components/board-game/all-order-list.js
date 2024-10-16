import React, { useState, useEffect } from 'react'
import styles from '@/styles/board-game-css/board-game-style.module.scss'
import { Modal, Button } from 'react-bootstrap'

export default function OrderList() {
  const [authInfo, setAuthInfo] = useState({
    isAuth: false,
    userData: { id: 0 },
  })
  const [orderData, setOrderData] = useState([])
  const [queryData, setQueryData] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      const auth_info = JSON.parse(localStorage.getItem('auth'))
      if (auth_info) {
        setAuthInfo(auth_info)
      }
    } catch (e) {
      console.log(e)
    }
  }, [])

  useEffect(() => {
    if (authInfo.userData.id) {
      getOrderList()
    }
  }, [authInfo])

  const getOrderList = async () => {
    const baseURL = `http://127.0.0.1:3006/board-game/all-order-list?user_id=${authInfo.userData.id}`
    try {
      const res = await fetch(baseURL)
      const resData = await res.json()
      setOrderData(resData.data.all_ord_list)
    } catch (e) {
      console.log(e)
    }
  }

  const getOrderItem = async (ord_id) => {
    const baseURL = `http://127.0.0.1:3006/board-game/all-order-list?user_id=${authInfo.userData.id}&ord_id=${ord_id}`
    try {
      const res = await fetch(baseURL)
      const resData = await res.json()
      setQueryData(resData.data.query_ord_item)
      setShow(true)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>桌遊商品訂單紀錄</h1>
      <div className={styles['order-list']}>
        {orderData.length > 0 ? (
          orderData.map((order) => (
            <div key={order.ord_id} className={styles['order-item']}>
              <div className={styles['order-header']}>
                <span>訂單編號：{order.ord_id}</span>
                <span>訂單日期：{order.ord_date}</span>
              </div>
              <div className={styles['order-details']}>
                <div className={styles['detail-item']}>
                  <span className={styles['detail-label']}>訂單金額</span>
                  <span className={styles['detail-value']}>
                    NT$ {order.ord_total.toLocaleString()}
                  </span>
                </div>
                <div className={styles['detail-item']}>
                  <span className={styles['detail-label']}>付款狀態</span>
                  <span className={styles['detail-value']}>
                    {order.ord_pay ? '已付款' : '未付款'}
                  </span>
                </div>
                <div className={styles['detail-item']}>
                  <button
                    className={styles['view-button']}
                    onClick={() => getOrderItem(order.ord_id)}
                  >
                    查看訂單詳情
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>暫無訂單資料。</p>
        )}
      </div>

      <Modal show={show} onHide={() => setShow(false)} className={styles.modal}>
        <Modal.Header closeButton>
          <Modal.Title>訂單詳情</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className={styles['modal-table']}>
            <thead>
              <tr>
                <th>商品名稱</th>
                <th>價格</th>
                <th>數量</th>
                <th>小計</th>
              </tr>
            </thead>
            <tbody>
              {queryData.map((item) => (
                <tr key={item.ord_detail_id}>
                  <td>{item.prod_name}</td>
                  <td>NT$ {item.item_price.toLocaleString()}</td>
                  <td>{item.item_qty}</td>
                  <td>NT$ {item.item_total.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>
      </Modal>
    </div>
  )
}
