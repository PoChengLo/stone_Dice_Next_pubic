import Card from 'react-bootstrap/Card'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import { BsHeart } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useCart } from '@/hooks/use-cart-state'

function ProdCard({ product }) {
  // 跳轉使用
  const router = useRouter()
  // 對話盒使用
  const [show, setShow] = useState(false)
  // 對話盒中的商品名稱
  const [productName, setProductName] = useState('')

  // 加入購物車
  const { addItem } = useCart()

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
        <Button variant="secondary" onClick={handleClose}>
          繼續購物
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
    <Card
      className={`card border-0  d-flex align-items-xxl-center  bg-transparent text-warning m-xxl-4 ${styles.card}`}
    >
      <Link href={`/board-game/${product.id}`}>
        <Image
          src={product.prod_img}
          className={` ${styles.card_img_top}`}
          alt=""
          width={280}
          height={280}
        />
      </Link>

      <Card.Body className={`card-body ${styles.card_body}`}>
        <Card.Title>
          <p className="card-text d-flex justify-content-between">
            {product.prod_name}
            <BsHeart className={`${styles.bi_heart}`} />
          </p>
        </Card.Title>
        <Card.Text className="card-text">NT$ {product.prod_price}</Card.Text>
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
            href="/board-game/cart"
            className={`btn btn-primary ${styles.btn}`}
          >
            立即購買
          </Button>
          <button
            type="button"
            className={`btn btn-primary ${styles.btn}`}
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
          >
            加入購物車
          </button>
        </div>
        {messageModal}
      </Card.Body>
    </Card>
  )
}

export default ProdCard
