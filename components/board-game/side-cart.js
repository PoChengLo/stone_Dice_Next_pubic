import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Image from 'next/image'
import { useCart } from '@/hooks/use-cart-state'
import { BsCart4, BsTrash } from 'react-icons/bs'
import { FiPlus, FiMinus } from 'react-icons/fi'
import Link from 'next/link'
import styles from '@/styles/board-game-css/board-game-style.module.css'

function SideCartOffcanvas({ ...props }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
      <Button variant="primary" onClick={handleShow} className="me-2">
        <BsCart4 />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>購物車</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* 單張卡片 */}
          {items.map((v, i) => {
            return (
              <div className={`card mb-3 ${styles.card_offcanvas}`} key={v.id}>
                <div className={`row g-0 `}>
                  <div
                    className={`col-4 align-middle  d-flex justify-content-xxl-center justify-content-start align-items-center`}
                  >
                    <Image
                      src={`/board-game/product-pic/${v.prod_img}`}
                      className={`img-fluid rounded-start`}
                      alt="..."
                      width={110}
                      height={110}
                    />
                  </div>
                  <div className="col-8 ">
                    <div className={`card-body ${styles.card_body_offcanvas}`}>
                      <div className="row">
                        <div className="col">
                          <p className="card-title">{v.prod_name} </p>
                          <p className="card-text">
                            NT${v.price.toLocaleString()}
                          </p>
                          <div className="d-flex justify-content-between ">
                            <div className="d-flex justify-content-center align-items-center">
                              <FiMinus
                                onClick={() => {
                                  decrement(v.id)
                                }}
                                className={`${styles.icons}`}
                              />
                              <p className={`card-text ${styles.p}`}>
                                {v.quantity}
                              </p>
                              <FiPlus
                                onClick={() => {
                                  increment(v.id)
                                }}
                              />
                            </div>
                            <BsTrash
                              onClick={() => {
                                removeItem(v.id)
                              }}
                              className={`${styles.icons}`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className={`${styles.hr} mt-1`} />
                </div>
              </div>
            )
          })}

          <div className="d-flex justify-content-between">
            <p>小計</p>
            <p>NT${preTotal.toLocaleString()}</p>
          </div>
          <div className="d-flex justify-content-between">
            <h4>總計</h4>
            <h4>NT${finalTotal.toLocaleString()}</h4>
          </div>
          <div className="d-flex flex-column">
            <Link href="./" className="btn btn-primary mb-3">
              繼續購物
            </Link>
            <Link href="./user-info" className="btn btn-primary">
              前往結帳
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

function SideCart() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <SideCartOffcanvas key={idx} placement={placement} name={placement} />
      ))}
    </>
  )
}

export default SideCart
