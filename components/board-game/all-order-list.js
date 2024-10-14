import { useState, useEffect } from 'react'

export default function AllOrderList() {
  // 會員資料
  const [authInfo, setAuthInfo] = useState({
    isAuth: false,
    userData: { id: 0 },
  })

  // 獲取資料並放入state裡面
  const [orderData, setOrderData] = useState([
    {
      ord_id: 0,
      ord_date: '',
      user_id: 0,
      ord_total: 0,
      ord_pay: 0,
      ord_recipient_name: '',
      ord_contact_number: '',
      ord_contact_address: '',
    },
  ])

  // 獲取資料並放入state裡面
  const [orderItem, setOrderItem] = useState([
    {
      ord_detail_id: 0,
      ord_id: 0,
      id: 0,
      prod_name: '',
      item_price: 0,
      item_qty: 0,
      item_total: 0,
      prod_comm: null,
      prod_star: null,
    },
  ])

  // 獲取訂單資料
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
      // setNewOrderItem(resData.new_ord_item)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    // 提取 localStorage 的 auth 資料，使用useState 放入變數
    try {
      const auth_info = JSON.parse(localStorage.getItem('auth'))
      if (auth_info) {
        setAuthInfo(auth_info)
      }
    } catch (e) {
      console.log(e)
    }
  }, [])

  // 獲取訂單，監聽auth_info
  useEffect(() => {
    getOrderList()
  }, [authInfo])
  console.log(orderData)
  return (
    <>
      {orderData.map((v, i) => (
        <div key={v.ord_id}>
          <h3>訂單編號{v.ord_id}</h3>
          <p>訂單日期{v.ord_date}</p>
          <p>訂單金額{v.ord_total}</p>
          <p>付款狀態{v.ord_pay}</p>
        </div>
      ))}
    </>
  )
}
