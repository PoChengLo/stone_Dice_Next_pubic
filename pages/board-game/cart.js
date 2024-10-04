import React from 'react'
import Image from 'next/image'
import SideCart from '../../components/board-game/side-cart'
import { useCart } from '@/hooks/use-cart-state'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { BsXLg } from 'react-icons/bs'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import { Button } from 'react-bootstrap'
import { BsCircle, BsTrash } from 'react-icons/bs'

export default function ProductCart() {
  //可從useCart中獲取的各方法與屬性，參考README檔中說明
  const {
    cart,
    items,
    addItem,
    removeItem,
    updateItem,
    updateItemQty,
    clearCart,
    isInCart,
    increment,
    decrement,
  } = useCart()

  const preTotal = items
    .map((item) => item.subtotal)
    .reduce((acc, curr) => acc + curr, 0)

  const finalTotal = items
    .map((item) => item.subtotal)
    .reduce((acc, curr) => acc + curr, 0)

  console.log('preTotal:', preTotal, 'finalTotal:', finalTotal)

  // 修正 Next hydration 問題
  // https://stackoverflow.com/questions/72673362/error-text-content-does-not-match-server-rendered-html
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }
  // 修正 end

  return (
    <>
      <Navbar />
      <div id={`${styles.backgroundImage}`} className="pt-5">
        <div className={`container pt-5 ${styles.cart}`}>
          {/* 步驟提示，購物車 */}
          <div className="row my-3">
            <div className="col d-flex align-items-xxl-center justify-content-xxl-evenly flex-xxl-row flex-column justify-content-evenly align-items-center">
              <div className="d-flex align-items-center mb-2 mb-xxl-0">
                <BsCircle className={`${styles.cart_icon} me-2`} />
                <p className={`${styles.p} ${styles.steps_active}`}>
                  確認購物車內容
                </p>
              </div>
              <hr className={`${styles.hr} ${styles.hr_no_active}`} />

              <div className="d-flex align-items-center  mb-2 mb-xxl-0">
                <BsCircle
                  className={`${styles.cart_icon} ${styles.cart_icon_no_active} me-2`}
                />
                <p className={`${styles.p} ${styles.steps_no_active}`}>
                  填寫購買人資訊
                </p>
              </div>
              <hr className={`${styles.hr} ${styles.hr_no_active}`} />

              <div className="d-flex align-items-center  mt-2 mt-xxl-0">
                <BsCircle
                  className={`${styles.cart_icon} ${styles.cart_icon_no_active} me-2`}
                />{' '}
                <p className={`${styles.p}  ${styles.steps_no_active}`}>
                  選擇運送與付款方式
                </p>
              </div>
            </div>
          </div>
          {/* 主要區域 */}
          <div className={`row my-5 p-xxl-5 py-3 ${styles.cart_main}`}>
            {/* 購物車卡片區域 */}
            <div className="col-12 col-xxl-8">
              {/* 單張卡片 */}
              {items.map((v, i) => {
                return (
                  <div className={`card mb-3 ${styles.cart_card}`} key={v.id}>
                    <div className="row g-0 p-3">
                      <div className="col-xxl-2 col-4">
                        <Image
                          src={`/board-game/product-pic/${v.prod_img}`}
                          className="img-fluid rounded-start"
                          alt="..."
                          width={130}
                          height={130}
                        />
                      </div>
                      <div className="col-xxl-10 col-8 d-flex align-items-xxl-center justify-content-xxl-evenly  ">
                        <div className="card-body px-4 py-0">
                          <div className="row">
                            <div className="col-xxl-4 col-12 mt-2 mt-xxl-0 px-xxl-3 px-0">
                              <p className="card-title m-0">{v.prod_name}</p>
                            </div>
                            <div className="col-xxl-2 col-12 p-0 mt-2 mt-xxl-0 d-flex align-items-xxl-center justify-content-xxl-center justify-content-start">
                              <p className="card-text">
                                NT$ {v.price.toLocaleString()}
                              </p>
                            </div>
                            <div className="col-xxl-2 col-12 p-0 mt-2 mt-xxl-0 d-flex align-items-xxl-center justify-content-xxl-center justify-content-start">
                              <FiMinus
                                onClick={() => {
                                  decrement(v.id)
                                }}
                                className={`me-xxl-1 me-2 ${styles.cart_card_icon}`}
                              />
                              <p className="card-text m-xxl-1 me-2">
                                {v.quantity}
                              </p>
                              <FiPlus
                                onClick={() => {
                                  increment(v.id)
                                }}
                                className={`m-0 ${styles.cart_card_icon}`}
                              />
                            </div>
                            <div className="col-xxl-2 col-6 p-0 mt-2 mt-xxl-0 d-flex align-items-xxl-center justify-content-xxl-center justify-content-start">
                              <p className="card-text">
                                NT$ {(v.price * v.quantity).toLocaleString()}
                              </p>
                            </div>
                            <div className="col-xxl-2 col-6 p-0 mt-2 mt-xxl-0 d-flex align-items-xxl-center justify-content-xxl-center justify-content-end ">
                              <BsTrash
                                onClick={() => {
                                  removeItem(v.id)
                                }}
                                className={`m-0 ${styles.cart_card_icon}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
              {/* 備註區域 */}
              <div className="row mt-3">
                <div className="col ">
                  <label
                    htmlFor="cart-commit"
                    className={`form-label ${styles.h4}`}
                  >
                    新增備註到您的訂單
                  </label>
                  <input
                    type="text"
                    className={`form-control mb-3 ${styles.white_to_text}`}
                    id="cart-commit"
                    placeholder="新增備註..."
                  />
                </div>
              </div>
            </div>
            {/* 優惠卷區域 */}
            <div className="col-xxl-4 col-12 p-xxl-5 p-3 d-flex flex-column justify-content-center">
              <div className="d-flex justify-content-between mb-3">
                <h4>小計</h4>
                <h4>{preTotal.toLocaleString()}</h4>
              </div>
              <hr className={`${styles.cart_hr}`} />
              <div className="my-3">
                <label
                  htmlFor="discount-input"
                  className={`form-label mb-3 ${styles.h4}`}
                >
                  有優惠卷嗎？
                </label>
                <input
                  type="text"
                  className={`form-control mb-3 ${styles.white_to_text}`}
                  id="discount-input"
                  placeholder="請輸入優惠碼"
                />
                <div id="discount-help" className="form-text mb-3 ">
                  <h5 className={`${styles.h5}`}>
                    輸入優惠碼，優惠將於結帳時顯示
                  </h5>
                </div>
                <hr className={`${styles.cart_hr}`} />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h4>總計</h4>
                <h4>{finalTotal.toLocaleString()}</h4>
              </div>
              <hr className={`${styles.cart_hr}`} />

              <div className="d-flex flex-column mt-3">
                <Button href="./" className={`${styles.btn} mb-3`}>
                  繼續購物
                </Button>
                <Button href="./user-info" className={`${styles.btn} `}>
                  填寫購買人資訊
                </Button>
              </div>
            </div>
          </div>
          {/* 相關熱門商品 */}
          {/* <div className="row">
            <div className="col">
              <h4>相關熱門商品</h4>
              <div className="row">
                <div className="col-3">
                  <div className="card border-0 bg-transparent text-warning m-4">
                    <Image
                      src="https://i.postimg.cc/rFMNG9M9/096.jpg"
                      className="card-img-top"
                      alt="..."
                      width={280}
                      height={280}
                    />
                    <div className="card-body">
                      <p className="card-text d-flex justify-content-between">
                        商品名稱
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-heart"
                          viewBox="0 0 16 16"
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                      </p>
                      <p className="card-text">商品價格</p>
                      <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-primary">
                          立即購買
                        </button>
                        <button type="button" className="btn btn-primary">
                          加入購物車
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card border-0 bg-transparent text-warning m-4">
                    <Image
                      src="https://i.postimg.cc/rFMNG9M9/096.jpg"
                      className="card-img-top"
                      alt="..."
                      width={280}
                      height={280}
                    />
                    <div className="card-body">
                      <p className="card-text d-flex justify-content-between">
                        商品名稱
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-heart"
                          viewBox="0 0 16 16"
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                      </p>
                      <p className="card-text">商品價格</p>
                      <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-primary">
                          立即購買
                        </button>
                        <button type="button" className="btn btn-primary">
                          加入購物車
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card border-0 bg-transparent text-warning m-4">
                    <Image
                      src="https://i.postimg.cc/rFMNG9M9/096.jpg"
                      className="card-img-top"
                      alt="..."
                      width={280}
                      height={280}
                    />
                    <div className="card-body">
                      <p className="card-text d-flex justify-content-between">
                        商品名稱
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-heart"
                          viewBox="0 0 16 16"
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                      </p>
                      <p className="card-text">商品價格</p>
                      <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-primary">
                          立即購買
                        </button>
                        <button type="button" className="btn btn-primary">
                          加入購物車
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card border-0 bg-transparent text-warning m-4">
                    <Image
                      src="https://i.postimg.cc/rFMNG9M9/096.jpg"
                      className="card-img-top"
                      alt="..."
                      width={280}
                      height={280}
                    />
                    <div className="card-body">
                      <p className="card-text d-flex justify-content-between">
                        商品名稱
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-heart"
                          viewBox="0 0 16 16"
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                      </p>
                      <p className="card-text">商品價格</p>
                      <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-primary">
                          立即購買
                        </button>
                        <button type="button" className="btn btn-primary">
                          加入購物車
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}
