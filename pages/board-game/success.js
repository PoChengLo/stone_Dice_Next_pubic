import React from 'react'
import Image from 'next/image'

export default function Success() {
  return (
    <>
      <div className="container">
        {/* ICON，付款成功 */}
        <div className="row">
          <div className="col d-flex justify-content-center">
            <Image
              src="https://i.postimg.cc/bN7K9cLb/success-fail1.png"
              alt="success"
              width={738}
              height={84}
            />
          </div>
        </div>
        {/* 訂單編號 */}
        <div className="row">
          <div className="col">
            <div className=" d-flex justify-content-between">
              <h5>訂單編號</h5>
              <h5>1111111111</h5>
            </div>
            <div className=" d-flex justify-content-between">
              <p>訂單日期</p>
              <p>1989-06-04</p>
            </div>
            <div className=" d-flex justify-content-between">
              <p>會員編號</p>
              <p>11111111</p>
            </div>
            <div className=" d-flex justify-content-between">
              <p>收件人姓名</p>
              <p>張飛</p>
            </div>
            <div className=" d-flex justify-content-between">
              <p>收件人電話</p>
              <p>0987654321</p>
            </div>
          </div>
        </div>
        {/* 訂單項目 */}
        <div className="row">
          <div className="col">
            <div className=" d-flex justify-content-between">
              <h5>訂單項目</h5>
            </div>
            <div className=" d-flex justify-content-between">
              <p>訂單商品價格*數量</p>
              <p>$NT2,220</p>
            </div>
            <div className=" d-flex justify-content-between">
              <p>訂單商品價格*數量</p>
              <p>$NT2,500</p>
            </div>
            <div className=" d-flex justify-content-between">
              <p>小計：</p>
              <p>$NT5,840</p>
            </div>
            <div className=" d-flex justify-content-between">
              <p>運送方式：</p>
              <p>宅配</p>
            </div>
            <div className=" d-flex justify-content-between">
              <p>優惠卷折扣</p>
              <p>-NT$60</p>
            </div>
            <div className=" d-flex justify-content-between">
              <p>付款方式：</p>
              <p>綠界付款</p>
            </div>
            <div className=" d-flex justify-content-between">
              <p>總計：</p>
              <p>$NT5,840</p>
            </div>
          </div>
        </div>
        {/* 帳單地址 */}
        <div className="row">
          <div className="col">
            <div className=" d-flex justify-content-between">
              <h5>帳單地址</h5>
            </div>
            <div className=" d-flex justify-content-between">
              <p>會員地址</p>
            </div>
          </div>
        </div>
        {/* 運送地址 */}
        <div className="row">
          <div className="col">
            <div className=" d-flex justify-content-between">
              <h5>運送地址</h5>
            </div>
            <div className=" d-flex justify-content-between">
              <p>收件人地址</p>
            </div>
          </div>
        </div>
        {/* 前往會員中心，回到首頁 */}
        <div className="row">
          <div className="col">
            <div className="d-flex ">
              <button type="button" className="btn btn-primary flex-fill">
                前往會員中心
              </button>
              <button type="button" className="btn btn-primary flex-fill">
                回到首頁
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
