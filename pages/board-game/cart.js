import React from 'react'
import Image from 'next/image'
import SideCart from '../../components/board-game/side-cart'
import { useCart } from '@/hooks/use-cart-state'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { FiMinus } from 'react-icons/fi'
import { BsXLg } from 'react-icons/bs'

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
      <div className="container">
        {/* 步驟提示圖，購物車 */}
        <div className="row">
          <div className="col">
            <Image
              src="https://i.postimg.cc/Wz4sGbyw/steps-part.png"
              alt=""
              width={1536}
              height={145}
            />
          </div>
        </div>
        {/* 主要區域 */}
        <div className="row">
          {/* 購物車卡片區域 */}
          <div className="col-8">
            {/* 單張卡片 */}
            {items.map((v, i) => {
              return (
                <div className="card mb-3" key={v.id}>
                  <div className="row g-0">
                    <div className="col-md-3">
                      <Image
                        src={v.prod_img}
                        className="img-fluid rounded-start"
                        alt="..."
                        width={130}
                        height={130}
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-4">
                            <h5 className="card-title">{v.prod_name}</h5>
                          </div>
                          <div className="col-2">
                            <p className="card-text">NT${v.price}</p>
                          </div>
                          <div className="col-2">
                            <div className="d-flex">
                              <FiMinus />
                              <p className="card-text">{v.quantity}</p>
                              <FiPlus />
                            </div>
                          </div>
                          <div className="col-2">
                            <p className="card-text">
                              NT${v.price * v.quantity}
                            </p>
                          </div>
                          <div className="col-2">
                            <BsXLg />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {/* 備註區域 */}
            <div className="row">
              <div className="col">
                <div className="">
                  <label htmlFor="cart-commit" className="form-label">
                    新增備註到您的訂單
                  </label>
                  <textarea
                    className="form-control"
                    id="cart-commit"
                    rows={3}
                    placeholder="新增備註..."
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 優惠卷區域 */}
          <div className="col-4 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between">
              <p>小計</p>
              <p>{preTotal}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="discount-input" className="form-label">
                有優惠卷嗎？
              </label>
              <input
                type="text"
                className="form-control"
                id="discount-input"
                placeholder="請輸入優惠碼"
              />
              <div id="discount-help" className="form-text">
                輸入優惠碼，優惠將於結帳時顯示
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <h4>總計</h4>
              <h4>{finalTotal}</h4>
            </div>
            <div className="d-flex flex-column">
              <button type="button" className="btn btn-primary mb-3">
                繼續購物
              </button>
              <Link href="" className="btn btn-primary">
                前往結帳
              </Link>
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
      <SideCart />
    </>
  )
}
