import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'
import styles from '@/styles/board-game-css/board-game-style.module.css'

export default function Success() {
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
              />
            </div>
          </div>
          {/* 訂單編號 */}
          <div className="row mt-3">
            <div className="col">
              <div className=" d-flex mt-3 justify-content-between">
                <h3>訂單編號</h3>
                <h3>1111111111</h3>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>訂單日期</p>
                <p>1989-06-04</p>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>會員編號</p>
                <p>11111111</p>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>收件人姓名</p>
                <p>張飛</p>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>收件人電話</p>
                <p>0987654321</p>
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

              <div className=" d-flex mt-3 justify-content-between">
                <p>訂單商品價格*數量</p>
                <p>$NT2,220</p>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>訂單商品價格*數量</p>
                <p>$NT2,500</p>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>小計：</p>
                <p>$NT5,840</p>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>運送方式：</p>
                <p>宅配</p>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>優惠卷折扣</p>
                <p>-NT$60</p>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>付款方式：</p>
                <p>綠界付款</p>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>總計：</p>
                <p>$NT5,840</p>
              </div>
              <hr className={`${styles.success_hr}`} />
            </div>
          </div>
          {/* 帳單地址 */}
          <div className="row mt-3">
            <div className="col">
              <div className=" d-flex mt-3 justify-content-between">
                <h3>帳單地址</h3>
              </div>
              <hr className={`${styles.success_hr}`} />

              <div className=" d-flex mt-3 justify-content-between">
                <p>會員地址</p>
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
                <p>收件人地址</p>
              </div>
              <hr className={`${styles.success_hr}`} />
            </div>
          </div>
          {/* 前往會員中心，回到首頁 */}
          <div className="row">
            <div className="col">
              <div className="d-flex ">
                <Link
                  href="/user-profile"
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
