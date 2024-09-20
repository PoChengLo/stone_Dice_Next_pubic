import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import styles from '@/styles/board-game-css/board-game-style.module.css'
function OffCanvasExample({ ...props }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className={`${styles.side_class}`}
      >
        <p>桌遊分類</p>
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className={`${styles.side_class_offcanvas}`}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>桌遊分類</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* 側邊欄 */}
          <div className="col-12 m-auto">
            <ul className="list-group side-bar">
              <li
                className="list-group-item list-group-item-action bg-transparent text-primary"
                type="button"
              >
                熱賣桌遊
              </li>
              <li
                className="list-group-item list-group-item-action bg-transparent text-primary"
                type="button"
              >
                店家推薦
              </li>
              <li
                className="list-group-item list-group-item-action bg-transparent text-primary"
                type="button"
              >
                最新到貨
              </li>
              <li
                className="list-group-item list-group-item-action bg-transparent text-primary"
                type="button"
              >
                降價促銷
              </li>
              <li
                className="list-group-item list-group-item-action bg-transparent text-primary"
                type="button"
              >
                派對遊戲
              </li>
              <li
                className="list-group-item list-group-item-action bg-transparent text-primary"
                type="button"
              >
                親子互動
              </li>
              <li
                className="list-group-item list-group-item-action bg-transparent text-primary"
                type="button"
              >
                陣營對抗
              </li>
              <li
                className="list-group-item list-group-item-action bg-transparent text-primary"
                type="button"
              >
                策略遊戲
              </li>
              <li
                className="list-group-item list-group-item-action bg-transparent text-primary"
                type="button"
              >
                桌遊周邊/配件
              </li>
            </ul>
            <div className="card bg-transparent text-primary">
              <div className="card-body">
                <h5 className="card-title">價格</h5>
                <div className="row">
                  <div className="col-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="$"
                    />
                  </div>
                  <div className="col-2">
                    <p>~</p>
                  </div>
                  <div className="col-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="$"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

function SideClass() {
  return (
    <>
      {['start'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  )
}

export default SideClass
