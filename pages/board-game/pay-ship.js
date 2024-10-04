import { useState } from 'react'
import SideCartAccordion from '@/components/board-game/side-cart-accordion'
import Image from 'next/image'
import ShipMethod from '@/components/board-game/ship-method'
import { useCart } from '@/hooks/use-cart-state'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import { BsCheckCircleFill, BsCircle } from 'react-icons/bs'
import { Button } from 'react-bootstrap'
export default function PayShip() {
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

  const finalTotal = items
    .map((item) => item.subtotal)
    .reduce((acc, curr) => acc + curr, 0)

  // 導向至ECPay付款頁面
  const goECPay = () => {
    if (window.confirm('確認要導向至ECPay進行付款?')) {
      // 先連到node伺服器後，導向至ECPay付款頁面
      window.location.href = `http://localhost:3006/ecpay/board-game?amount=${finalTotal}`
    }
  }
  // 付款方式選擇樣式
  const [selectedPay, setSelectedPay] = useState('ecpay')
  const handlePaySelect = (event) => {
    setSelectedPay(event.target.id)
  }
  const getRadioIcon = (storeKey) => {
    return selectedPay === storeKey ? (
      <BsCheckCircleFill className={`me-xxl-2 ${styles.nav_icons}`} />
    ) : (
      <BsCircle className={`me-xxl-2 ${styles.nav_icons}`} />
    )
  }
  return (
    <>
      <Navbar />
      <div id={`${styles.backgroundImage}`} className="pt-5">
        <div className={`container pt-5 ${styles.pay_ship}`}>
          {/* 步驟提示，選擇運送與付款方式 */}
          <div className="row my-3">
            <div className="col d-flex align-items-xxl-center justify-content-xxl-evenly flex-xxl-row flex-column justify-content-evenly align-items-center">
              <div className="d-flex align-items-center mb-2 mb-xxl-0">
                <BsCircle className={`${styles.cart_icon} me-2`} />
                <p className={`${styles.p} ${styles.steps_active}`}>
                  確認購物車內容
                </p>
              </div>
              <hr className={`${styles.hr} ${styles.hr_active}`} />

              <div className="d-flex align-items-center  mb-2 mb-xxl-0">
                <BsCircle
                  className={`${styles.cart_icon} ${styles.cart_icon_active} me-2`}
                />
                <p className={`${styles.p} ${styles.steps_active}`}>
                  填寫購買人資訊
                </p>
              </div>
              <hr className={`${styles.hr} ${styles.hr_active}`} />

              <div className="d-flex align-items-center  mt-2 mt-xxl-0">
                <BsCircle
                  className={`${styles.cart_icon} ${styles.cart_icon_active} me-2`}
                />{' '}
                <p className={`${styles.p}  ${styles.steps_active}`}>
                  選擇運送與付款方式
                </p>
              </div>
            </div>
          </div>
          {/* 主要區域 */}
          <div
            className={`row my-5 mx-xxl-0  p-xxl-5 py-3  px-3 ${styles.pay_ship_main}`}
          >
            {' '}
            {/* 結帳金額，側邊購物車 */}
            <div className={`col-3 ${styles.side_cart_accordion_m}`}>
              <SideCartAccordion items={items} />
            </div>
            <div className="col-xxl-9 col-12">
              {/* 優惠卷 */}
              <div className={`row mb-3 ${styles.pay_ship_border}`}>
                <div className="col d-flex flex-column align-items-start">
                  <label
                    htmlFor="discount-input"
                    className={`form-label my-xxl-3  my-2 ${styles.p}`}
                  >
                    優惠卷
                  </label>
                  <input
                    type="text"
                    className={`form-control ${styles.white_to_text}`}
                    id="discount-input"
                    placeholder="優惠卷代碼"
                  />
                  <div
                    id="discount-help"
                    className={`form-text mt-2 ${styles.input_text}`}
                  >
                    優惠將於左側結帳明細顯示
                  </div>
                  <div className="w-100 d-flex justify-content-start">
                    <button
                      type="button"
                      className={`btn btn-primary my-3 ${styles.btn}`}
                    >
                      選擇優惠卷
                    </button>
                  </div>
                </div>
              </div>
              {/* 收件人資訊 */}
              <div className={`row mb-3 ${styles.pay_ship_border}`}>
                <div className="col">
                  <label
                    htmlFor="e-ticket"
                    className={`form-label my-xxl-3 my-2 ${styles.p}`}
                  >
                    收件人資訊
                  </label>
                  <select
                    className={`form-select ${styles.white_to_text}`}
                    aria-label="user-recipient"
                    defaultValue={'default'}
                  >
                    <option value={'default'}>選擇常用收件人</option>
                    <option value={1}>吉伊卡哇</option>
                    <option value={2}>小八貓</option>
                    <option value={2}>兔兔</option>
                    <option value={3}>新增收件人</option>
                  </select>
                  <div className="mb-3">
                    <label
                      htmlFor="new-recipient-name"
                      className={`form-label my-xxl-3 my-2 ${styles.p}`}
                    >
                      姓名
                    </label>
                    <input
                      type="text"
                      className={`form-control ${styles.white_to_text}`}
                      id="new-recipient-name"
                      aria-describedby="new-recipient-name"
                      placeholder="收件人姓名"
                    />
                    <div
                      id="new-recipient-name-commit"
                      className={`form-text mt-2 ${styles.input_text}`}
                    >
                      超商取貨請使用本名，並記得攜帶身分證前往取貨
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="new-recipient-phone"
                      className={`form-label my-xxl-3 ${styles.p}`}
                    >
                      聯絡電話
                    </label>
                    <input
                      type="text"
                      className={`form-control ${styles.white_to_text}`}
                      id="new-recipient-phone"
                      placeholder="收件人聯絡電話，例如：0987654321"
                    />
                    <div
                      id="new-recipient-phone-commit"
                      className={`form-text mt-2 ${styles.input_text}`}
                    >
                      取貨通知將以此電話聯繫，請勿加入任何空格或符號，使用超商取貨請務必填寫10碼手機，如：0987654321
                    </div>
                  </div>
                  <div className="form-check mb-xxl-3">
                    <input
                      className={`form-check-input ${styles.form_check_input}`}
                      type="checkbox"
                      defaultValue=""
                      id="user-recipient-add"
                      defaultChecked=""
                    />
                    <label
                      className={`form-check-label ${styles.p}`}
                      htmlFor="user-recipient-add"
                    >
                      將新增收件人加入常用收件人
                    </label>
                  </div>
                </div>
              </div>
              {/* 配送方式，超商取貨，宅配，面交 */}
              <div className={`row mb-3 ${styles.pay_ship_border_method}`}>
                <div className="col">
                  <ShipMethod />
                </div>
              </div>
              {/* 付款方式，綠界付款，Line Pay */}
              <div className={`row mb-3 ${styles.pay_ship_border}`}>
                <div className="col">
                  <label
                    htmlFor="payment"
                    className={`form-label my-xxl-3 my-2 ${styles.p}`}
                  >
                    付款方式
                  </label>

                  <div className="d-flex flex-xxl-row flex-column">
                    <input
                      type="radio"
                      className="btn-check"
                      name="payment-method"
                      id="ecpay"
                      autoComplete="off"
                      checked={selectedPay === 'ecpay'}
                      onChange={handlePaySelect}
                    />
                    <label
                      className={`btn btn-primary me-xxl-5  ${styles.btn_pay_ship} ${styles.nav_pills}`}
                      htmlFor="ecpay"
                    >
                      {getRadioIcon('ecpay')}
                      綠界付款
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="payment-method"
                      id="line-pay"
                      autoComplete="off"
                      checked={selectedPay === 'line-pay'}
                      onChange={handlePaySelect}
                    />
                    <label
                      className={`btn btn-primary mt-3 mt-xxl-0 ${styles.btn_pay_ship} ${styles.nav_pills}`}
                      htmlFor="line-pay"
                    >
                      {getRadioIcon('line-pay')}
                      Line Pay
                    </label>
                  </div>
                  <label
                    htmlFor="payment"
                    className={`form-label my-xxl-3 my-2 ${styles.p}`}
                  >
                    備註
                  </label>
                  <input
                    type="text"
                    className={`form-control ${styles.white_to_text}`}
                    id="pay-ship-commit"
                    placeholder="填寫您的備註"
                  />
                  <label
                    htmlFor="payment"
                    className={`form-label my-xxl-3 my-2 ${styles.p}`}
                  >
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
                <div className="col">
                  <Button
                    href="./user-info"
                    className={` me-xxl-3 ${styles.btn} ${styles.btn_pay_ship_2} `}
                  >
                    回到上一頁
                  </Button>
                  <Button
                    className={`  my-3 ${styles.btn} ${styles.btn_pay_ship_2}`}
                    onClick={goECPay}
                  >
                    立即結帳
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
