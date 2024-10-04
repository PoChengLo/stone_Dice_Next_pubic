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

  const [singleQuantity, setSingleQuantity] = useState(1)

  // 對話盒
  const messageModal = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton className={`${styles.white_to_text}`}>
        <Modal.Title>加入購物車訊息</Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${styles.white_to_text}`}>
        {productName}{' '}
      </Modal.Body>
      <Modal.Footer className={`${styles.white_to_text} ${styles.modal_m}`}>
        <Button
          variant="secondary"
          className={`${styles.btn}`}
          onClick={() => {
            router.push('/board-game')
            // handleClose
          }}
        >
          回到商品列表
        </Button>
        <Button
          variant="primary"
          className={`${styles.btn}`}
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
      <div className={`card mb-3 ${styles.single_card}`}>
        <div className="row g-0">
          {/* 商品圖片 */}
          <div className="col-12 col-xxl-6 d-flex justify-content-center">
            <Image
              src={product.prod_img}
              className="img-fluid rounded-start"
              alt="..."
              width={600}
              height={600}
            />
          </div>
          {/* 商品介紹 */}
          <div className="col-12 col-xxl-6 ">
            <div
              className={`card-body d-flex flex-xxl-column justify-content-around ${styles.card_body}`}
            >
              <h2 className="card-title">{product.prod_name}</h2>
              <p className="card-text">遊戲介紹：{product.prod_intro}</p>
              <p className="card-text">遊戲規則：{product.prod_rules}</p>
              <p className="card-text">遊戲人數：{product.prod_people}</p>
              <p className="card-text">遊玩時間：{product.prod_time}</p>
              <div>
                <h2 className="card-title">
                  NT$ {product.price.toLocaleString()}
                </h2>
              </div>
              <div className="d-flex align-items-center">
                <h3 className="card-text my-0 py-0">數量</h3>
                <FiMinus
                  className={`${styles.icons} mx-3`}
                  onClick={() => {
                    const newSingleQuantity = singleQuantity - 1
                    if (newSingleQuantity >= 1) {
                      setSingleQuantity(newSingleQuantity)
                    }
                  }}
                />
                <h3 className="my-0 py-0 mx-3">{singleQuantity}</h3>
                <FiPlus
                  className={`${styles.icons} mx-3`}
                  onClick={() => {
                    const newSingleQuantity = singleQuantity + 1
                    setSingleQuantity(newSingleQuantity)
                  }}
                />
              </div>
              <div className={`${styles.icons}`}>
                <BsShare className="mx-3" />
                <BsHeart className="mx-3" />
                <BsArrowUpCircle className="mx-3" />
              </div>
              <div className={`d-flex ${styles.btns}`}>
                <Button
                  onClick={() => {
                    // 商品原本沒有數量屬性(quantity)，要先加上
                    const item = {
                      ...product,
                      quantity: singleQuantity,
                    }
                    // 注意: 重覆加入會自動+1產品數量
                    addItem(item)
                  }}
                  href="./cart"
                  className={`me-5 ${styles.btn} ${styles.a}`}
                >
                  立即購買
                </Button>
                <Button
                  onClick={() => {
                    // 商品原本沒有數量屬性(quantity)，要先加上
                    const item = {
                      ...product,
                      quantity: singleQuantity,
                    }
                    // 注意: 重覆加入會自動+1產品數量
                    addItem(item)
                    // 呈現跳出對話盒
                    showModal(product.prod_name)
                  }}
                  className={`btn btn-primary ${styles.btn} ${styles.p}`}
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
