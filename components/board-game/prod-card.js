import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import { BsHeart } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

function ProdCard() {
  return (
    <Card
      className={`card border-0  d-flex align-items-xxl-center  bg-transparent text-warning m-xxl-4 ${styles.card}`}
    >
      <Link href="../single-page/1">
        <Image
          src="https://i.postimg.cc/t4f6cdQw/043.jpg"
          className={` ${styles.card_img_top}`}
          alt=""
          width={280}
          height={280}
        />
      </Link>

      <Card.Body className={`card-body ${styles.card_body}`}>
        <Card.Title>
          <p className="card-text d-flex justify-content-between">
            商品名稱
            <BsHeart className={`${styles.bi_heart}`} />
          </p>
        </Card.Title>
        <Card.Text className="card-text">商品價格</Card.Text>
        <div className={`d-flex justify-content-between ${styles.btns}`}>
          <Link
            href="../single-page/1"
            className={`btn btn-primary ${styles.btn}`}
          >
            立即購買
          </Link>
          <Link
            href="../single-page/1"
            className={`btn btn-primary ${styles.btn}`}
          >
            加入購物車
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProdCard
