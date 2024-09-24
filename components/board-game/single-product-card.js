import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import { BsArrowUpCircle, BsHeart, BsShare } from 'react-icons/bs'
import { FiPlus } from 'react-icons/fi'
import { FiMinus } from 'react-icons/fi'
import { Button, Modal } from 'react-bootstrap'
import { useCart } from '@/hooks/use-cart-state'
import BoardGame from '@/pages/board-game'

export default function SingleProductCard({ product }) {
  //可從useCart中獲取的各方法與屬性，參考README檔中說明
  const { addItem } = useCart()

  // 跳轉使用
  const router = useRouter()
  // 對話盒使用
  const [show, setShow] = useState(false)
  // 對話盒中的商品名稱
  const [productName, setProductName] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const showModal = (name) => {
    setProductName('產品：' + name + '已成功加入購物車')
    handleShow()
  }

  // 對話盒
  const messageModal = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>加入購物車訊息</Modal.Title>
      </Modal.Header>
      <Modal.Body>{productName} </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            router.push('/board-game')
            // handleClose
          }}
        >
          回到商品列表
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            // 導向購物車頁面
            router.push('/board-game/cart')
          }}
        >
          前往購物車結帳
        </Button>
      </Modal.Footer>
    </Modal>
  )
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          {/* 商品圖片 */}
          <div className="col-12 col-xxl-6">
            <Image
              src={product.prod_img}
              className="img-fluid rounded-start"
              alt="..."
              width={700}
              height={700}
            />
          </div>
          {/* 商品介紹 */}
          <div className="col-12 col-xxl-6">
            <div className="card-body">
              <h2 className="card-title">{product.prod_name}</h2>
              <p className="card-text">{product.prod_intro}</p>
              <p className="card-text">{product.prod_rule}</p>
              <p className="card-text">{product.prod_people}</p>
              <p className="card-text">{product.prod_time}</p>
              <div className="d-flex justify-content-between">
                <h3 className="card-title">{product.price}</h3>
                <div className="d-flex">
                  <p className="card-text">數量</p>
                  <FiMinus />
                  <p className="card-text">1</p>
                  <FiPlus />
                </div>
              </div>
              <div className="d-flex">
                <BsShare />
                <BsHeart />
                <BsArrowUpCircle />
              </div>
              <div className={`d-flex justify-content-between ${styles.btns}`}>
                <Button
                  onClick={() => {
                    // 商品原本沒有數量屬性(quantity)，要先加上
                    const item = {
                      ...product,
                      quantity: 1,
                    }
                    // 注意: 重覆加入會自動+1產品數量
                    addItem(item)
                  }}
                  href="./cart"
                  className={`btn btn-primary ${styles.btn}`}
                >
                  立即購買
                </Button>
                <Button
                  onClick={() => {
                    // 商品原本沒有數量屬性(quantity)，要先加上
                    const item = {
                      ...product,
                      quantity: 1,
                    }
                    // 注意: 重覆加入會自動+1產品數量
                    addItem(item)
                    // 呈現跳出對話盒
                    showModal(product.prod_name)
                  }}
                  className={`btn btn-primary ${styles.btn}`}
                >
                  加入購物車
                </Button>
              </div>
              {messageModal}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
