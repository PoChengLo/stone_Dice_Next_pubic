import { useState, useEffect } from 'react'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import { Modal, Button } from 'react-bootstrap'

export default function AllOrderList() {
  const [authInfo, setAuthInfo] = useState({
    isAuth: false,
    userData: { id: 0 },
  })

  const [orderData, setOrderData] = useState([])
  const [queryData, setQueryData] = useState([])

  const getOrderList = async () => {
    if (!authInfo.userData || !authInfo.userData.id) {
      console.log('Order List is not available')
      return
    }
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
      console.log(queryData)
    } catch (e) {
      console.log(e)
    }
  }

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
    getOrderList()
  }, [authInfo])

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const showModal = () => {
    handleShow()
  }

  const messageModal = (
    <Modal
      show={show}
      onHide={handleClose}
      keyboard={true}
      className={`${styles.ord_modal}`}
    >
      <Modal.Header closeButton className={`${styles.white_to_text}`}>
        <Modal.Title>訂單詳情</Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${styles.white_to_text}`}>
        {' '}
        <div>
          <table className={`${styles.table}`}>
            <thead className={`${styles.thead}`}>
              <tr>
                <th>商品名稱</th>
                <th>價格</th>
                <th>數量</th>
                <th>小計</th>
              </tr>
            </thead>
            <tbody className={`${styles.tbody}`}>
              {queryData.map((v, i) => (
                <tr key={v.ord_detail_id}>
                  <td className={`${styles.td}`}>{v.prod_name}</td>
                  <td>{v.item_price.toLocaleString()}</td>
                  <td className="ps-2">{v.item_qty}</td>
                  <td>{v.item_total.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal.Body>
      <Modal.Footer className={`${styles.white_to_text}`}></Modal.Footer>
    </Modal>
  )

  return (
    <>
      <div className={`${styles.table_div}`}>
        <h3 style={{ fontSize: '32px' }} className="mt-5 mb-3">
          桌遊商品訂單紀錄
        </h3>
        {orderData.length > 0 ? (
          orderData.map((v, i) => (
            <div key={v.ord_id}>
              <table className={`${styles.table}`}>
                <thead className={`${styles.thead}`}>
                  <tr>
                    <th className={`${styles.font_size_th}`}>訂單編號</th>
                    <th className={`${styles.font_size_th}`}>訂單日期</th>
                    <th className={`${styles.font_size_th}`}>訂單金額</th>
                    <th className={`${styles.font_size_th}`}>付款狀態</th>
                    <th className={`${styles.font_size_th}`}>查看訂單</th>
                  </tr>
                </thead>
                <tbody className={`${styles.tbody}`}>
                  <tr>
                    <td className={`${styles.font_size_td}`}>{v.ord_id}</td>
                    <td className={`${styles.font_size_td}`}>{v.ord_date}</td>
                    <td className={`${styles.font_size_td}`}>
                      NT$ {v.ord_total.toLocaleString()}
                    </td>
                    <td className={`${styles.font_size_td}`}>
                      付款狀態：{!v.ord_pay ? `未付款` : `已付款`}
                    </td>
                    <td className={`${styles.font_size_td}`}>
                      <button
                        className={`${styles.table_btn}`}
                        onClick={() => {
                          if (getOrderItem(v.ord_id)) {
                            showModal(queryData)
                          } else {
                            console.log('no data')
                          }
                        }}
                      >
                        查看
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        ) : (
          <p>沒有訂單資料。</p>
        )}
        {messageModal}
      </div>
    </>
  )
}
