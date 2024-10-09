import Accordion from 'react-bootstrap/Accordion'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

function SideCartAccordion({ items }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }
  const boardTotal = items.length
  const preTotal = items
    .map((item) => item.subtotal)
    .reduce((acc, curr) => acc + curr, 0)

  const finalTotal = items
    .map((item) => item.subtotal)
    .reduce((acc, curr) => acc + curr, 0)
  return (
    <Accordion
      defaultActiveKey={['0', '1']}
      alwaysOpen
      className={`${styles.side_cart_accordion} `}
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header
          onClick={() => {
            toggleAccordion()
          }}
        >
          購物車內容
          {isOpen ? (
            <BsChevronUp className="ms-3" />
          ) : (
            <BsChevronDown className="ms-3" />
          )}
        </Accordion.Header>
        <Accordion.Body>
          {items.map((v, i) => {
            return (
              <div className="d-flex flex-column" key={v.id}>
                <p>{v.prod_name}</p>
                <p className="text-end">數量：{v.quantity}</p>
              </div>
            )
          })}
          <div className="d-flex justify-content-between">
            <h4>合計共有{boardTotal}項商品</h4>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header
          onClick={() => {
            toggleAccordion()
          }}
        >
          結帳明細
          {isOpen ? (
            <BsChevronUp className="ms-4" />
          ) : (
            <BsChevronDown className="ms-4" />
          )}
        </Accordion.Header>{' '}
        <Accordion.Body>
          {' '}
          <div className="d-flex justify-content-between">
            <p>小計</p>
            <p>NT${preTotal.toLocaleString()}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>運費</p>
            <p>N/A</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>優惠卷</p>
            <p>N/A</p>
          </div>
          <div className="d-flex justify-content-between">
            <h4>應付總額</h4>
            <h4>NT${finalTotal.toLocaleString()}</h4>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default SideCartAccordion
