import React from 'react'
import SideCartAccordion from '@/components/board-game/side-cart-accordion'
import Image from 'next/image'
import ShipMethod from '@/components/board-game/ship-method'

export default function PayShip() {
  return (
    <>
      <div className="container">
        {/* 步驟提示圖，付款與運送 */}
        <div className="row">
          <div className="col">
            <Image
              src="https://i.postimg.cc/595rtHC2/steps-part3.png"
              alt=""
              width={1536}
              height={145}
            />
          </div>
        </div>
        <div className="row">
          {/* 結帳金額，側邊購物車 */}
          <div className="col-3">
            <SideCartAccordion />
          </div>
          <div className="col-9">
            {/* 優惠卷 */}
            <div className="row">
              <div className="col d-flex flex-column">
                <label htmlFor="discount-input" className="form-label">
                  優惠卷
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="discount-input"
                  placeholder="優惠卷代碼"
                />
                <div id="discount-help" className="form-text">
                  優惠將於左側結帳明細顯示
                </div>
                <button type="button" className="btn btn-primary mb-3">
                  選擇優惠卷
                </button>
              </div>
            </div>
            {/* 收件人資訊 */}
            <div className="row">
              <div className="col">
                <label htmlFor="e-ticket" className="form-label">
                  收件人資訊
                </label>
                <select className="form-select" aria-label="user-recipient">
                  <option selected="">選擇常用收件人</option>
                  <option value={1}>吉伊卡哇</option>
                  <option value={2}>小八貓</option>
                  <option value={2}>兔兔</option>
                  <option value={3}>新增收件人</option>
                </select>
                <div className="mb-3">
                  <label htmlFor="new-recipient-name" className="form-label">
                    姓名
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="new-recipient-name"
                    aria-describedby="new-recipient-name"
                    placeholder="收件人姓名"
                  />
                  <div id="new-recipient-name-commit" className="form-text">
                    超商取貨請使用本名，並記得攜帶身分證前往取貨
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="new-recipient-phone" className="form-label">
                    聯絡電話
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="new-recipient-phone"
                    placeholder="收件人聯絡電話，例如：0987654321"
                  />
                  <div id="new-recipient-phone-commit" className="form-text">
                    取貨通知將以此電話聯繫，請勿加入任何空格或符號，使用超商取貨請務必填寫10碼手機，如：0987654321
                  </div>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="user-recipient-add"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="user-recipient-add"
                  >
                    將新增收件人加入常用收件人
                  </label>
                </div>
              </div>
            </div>
            {/* 配送方式，超商取貨，宅配，面交 */}
            <div className="row">
              <div className="col">
                <ShipMethod />
              </div>
            </div>
            {/* 付款方式，綠界付款，Line Pay */}
            <div className="row">
              <div className="col">
                <label htmlFor="payment" className="form-label">
                  付款方式
                </label>
                <div className="d-flex">
                  <input
                    type="radio"
                    className="btn-check"
                    name="payment-method"
                    id="ecpay"
                    autoComplete="off"
                    defaultChecked=""
                  />
                  <label className="btn btn-primary flex-fill" htmlFor="ecpay">
                    綠界付款
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="payment-method"
                    id="line-pay"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-primary flex-fill"
                    htmlFor="line-pay"
                  >
                    Line Pay
                  </label>
                </div>
                <label htmlFor="payment" className="form-label">
                  備註
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pay-ship-commit"
                  placeholder="填寫您的備註"
                />
                <label htmlFor="payment" className="form-label">
                  結帳須知
                </label>
                <p>
                  我們提供綠界付款與 LINE Pay
                  支付方式，請選擇您喜歡的付款方式完成訂單。
                  當我們收到付款確認通知後，將於三天內出貨。
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex">
                <button className="btn btn-primary flex-fill">立即結帳</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
