import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import Form from 'react-bootstrap/Form'
import { useRouter } from 'next/router'

function OffCanvasExample({
  onChange = () => {},
  onClick = () => {},
  ...props
}) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className={` ${styles.btn} ${styles.side_class_m_button}`}
      >
        <p className={`${styles.p_offcanvas}`}>桌遊分類</p>
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className={`${styles.side_class_offcanvas}`}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={``}>桌遊分類</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* 側邊欄 */}
          <div className="col-12 m-auto">
            <div className={`${styles.side_class} `}>
              <div>
                <button className={`${styles.button}`}>
                  <h4 className={`${styles.p}`}>彼此競爭</h4>
                </button>
              </div>
              <hr className={`${styles.hr}`} />
              <div>
                <button className={`${styles.button}`}>
                  <h4 className={`${styles.p}`}>闔家歡樂</h4>
                </button>
              </div>
              <hr className={`${styles.hr}`} />

              <div>
                <button className={`${styles.button}`}>
                  <h4 className={`${styles.p}`}>親子互動</h4>
                </button>
              </div>
              <hr className={`${styles.hr}`} />

              <div>
                <button className={`${styles.button}`}>
                  <h4 className={`${styles.p}`}>輕鬆小品</h4>
                </button>
              </div>
              <hr className={`${styles.hr}`} />

              <div>
                <button className={`${styles.button}`}>
                  <h4 className={`${styles.p}`}>資源收集</h4>
                </button>
              </div>
              <hr className={`${styles.hr}`} />

              <div>
                <button className={`${styles.button}`}>
                  <h4 className={`${styles.p}`}>策略遊戲</h4>
                </button>
              </div>
              <hr className={`${styles.hr}`} />

              <div>
                <button className={`${styles.button}`}>
                  <h4 className={`${styles.p}`}>腦力計算</h4>
                </button>
              </div>
              <hr className={`${styles.hr}`} />

              <div className={`${styles.price_selection}`}>
                <h4 className={`${styles.p} ${styles.price_title}`}>
                  價格區間篩選
                </h4>
                <Form.Select
                  aria-label="order-selection"
                  onChange={onChange}
                  className={`${styles.white_to_text} ${styles.white_to_text_selection}`}
                >
                  <option value="default">所有價格</option>
                  <option value="1">NT$1,000 ~ NT$1,499</option>
                  <option value="2">NT$1,500 ~ NT$1,999</option>
                  <option value="3">NT$2,000 ~ NT$2,499</option>
                  <option value="4">NT$2,500 ~ NT$2,999</option>
                </Form.Select>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

function SideClassM() {
  const router = useRouter()

  return (
    <>
      {['start'].map((placement, idx) => (
        <OffCanvasExample
          key={idx}
          placement={placement}
          name={placement}
          onClick={(e) => {
            const query = { ...router.query }
            router.push(`?` + new URLSearchParams(query))
          }}
          onChange={(e) => {
            const query = { ...router.query }
            switch (e.target.value) {
              case '1':
                query.price_min = '1000'
                query.price_max = '1499'
                delete query.page

                break
              case '2':
                query.price_min = '1500'
                query.price_max = '1999'
                delete query.page

                break
              case '3':
                query.price_min = '2000'
                query.price_max = '2499'
                delete query.page

                break
              case '4':
                query.price_min = '2500'
                query.price_max = '2999'
                delete query.page

                break
              default:
                delete query.price_min
                delete query.price_max
                delete query.page
            }
            router.push(`?` + new URLSearchParams(query))
          }}
        />
      ))}
    </>
  )
}

export default SideClassM
