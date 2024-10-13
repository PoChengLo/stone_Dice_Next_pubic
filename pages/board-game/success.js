import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import { useCart } from '@/hooks/use-cart-state'
import { useRouter } from 'next/router'

export default function Success() {
  // 清除購物車
  const { clearCart } = useCart()

  // 會員資料
  const [authInfo, setAuthInfo] = useState({
    isAuth: false,
    userData: { id: 0 },
  })

  // 獲取資料並放入state裡面
  const [newOrderData, setNewOrderData] = useState({
    ord_id: 0,
    ord_date: '',
    user_id: 0,
    ord_total: 0,
    ord_pay: 0,
    ord_recipient_name: '',
    ord_contact_number: '',
    ord_contact_address: '',
  })

  // 獲取資料並放入state裡面
  const [newOrderItem, setNewOrderItem] = useState([
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
    const baseURL = `http://127.0.0.1:3006/board-game/success?user_id=${authInfo.userData.id}`
    try {
      const res = await fetch(baseURL)
      const resData = await res.json()
      setNewOrderData(resData.new_ord[0])
      setNewOrderItem(resData.new_ord_item)
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
    // 清除購物車
    clearCart()
  }, [])

  // 獲取訂單，監聽auth_info
  useEffect(() => {
    getOrderList()
  }, [authInfo])

  return (
    <>
      <Navbar />
      <div id={`${styles.backgroundImage}`} className="pt-5">
        {' '}
        <div className={`container pt-5 ${styles.success}`}>
          {/* ICON，付款成功 */}
          <div className="row">
            <div className="col d-flex justify-content-center">
              <Image
                src="https://i.postimg.cc/bN7K9cLb/success-fail1.png"
                alt="success"
                width={738}
                height={84}
                id={`${styles.success_pic}`}
                priority={true} // {false} | {true}
              />
            </div>
          </div>
          {/* 訂單編號 */}
          <div className="row mt-3">
            <div className="col">
              <div className=" d-flex mt-3 justify-content-between">
                <h3>訂單編號</h3>
                <h3>{newOrderData.ord_id}</h3>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>訂單日期與時間</p>
                <p>{newOrderData.ord_date}</p>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>會員編號</p>
                <p>{newOrderData.user_id}</p>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>收件人姓名</p>
                <p>{newOrderData.ord_recipient_name}</p>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>收件人電話</p>
                <p>{newOrderData.ord_contact_number}</p>
              </div>
              <hr className={`${styles.success_hr}`} />
            </div>
          </div>
          {/* 訂單項目 */}
          <div className="row mt-3">
            <div className="col">
              <div className=" d-flex mt-3 justify-content-between">
                <h3>訂單項目</h3>
              </div>
              <hr className={`${styles.success_hr}`} />
              {newOrderItem.map((v, i) => (
                <div key={v.ord_detail_id}>
                  <div className="mt-3">
                    <p>{v.prod_name}</p>
                  </div>
                  <div className=" d-flex mt-3 justify-content-between">
                    <p>{`NT$ ${v.item_price.toLocaleString()} * 數量 ${
                      v.item_qty
                    }`}</p>

                    <p>NT$ {v.item_total.toLocaleString()}</p>
                  </div>
                  <hr className={`${styles.success_hr}`} />
                </div>
              ))}

              <div className=" d-flex mt-3 justify-content-between">
                <p>小計：</p>
                <p>NT$ {newOrderData.ord_total.toLocaleString()}</p>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>運送方式：</p>
                <p>宅配</p>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>優惠卷折扣</p>
                <p>N/A</p>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>付款方式：</p>
                <p>綠界付款</p>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>總計：</p>
                <p>NT$ {newOrderData.ord_total.toLocaleString()}</p>
              </div>
              <hr className={`${styles.success_hr}`} />
            </div>
          </div>
          {/* 帳單地址 */}
          <div className="row mt-3">
            <div className="col">
              <div className=" d-flex mt-3 justify-content-between">
                <h3>會員載具</h3>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>/XX4567</p>
              </div>
              <hr className={`${styles.success_hr}`} />
            </div>
          </div>
          {/* 運送地址 */}
          <div className="row mt-3">
            <div className="col">
              <div className=" d-flex mt-3 justify-content-between">
                <h3>運送地址</h3>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>{newOrderData.ord_contact_address}</p>
              </div>
              <hr className={`${styles.success_hr}`} />
            </div>
          </div>
          {/* 前往會員中心，回到首頁 */}
          <div className="row">
            <div className="col">
              <div className="d-flex ">
                <Link
                  href={`/user-profile/${authInfo.userData.id}/home`}
                  className={`btn btn-primary me-3 mt-3 ${styles.btn}`}
                >
                  前往會員中心
                </Link>
                <Link href="/" className={`btn btn-primary mt-3 ${styles.btn}`}>
                  回到首頁
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
