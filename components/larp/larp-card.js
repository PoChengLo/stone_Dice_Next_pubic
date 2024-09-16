import Card from 'react-bootstrap/Card'
import styles from '@/styles/larp/larp-card.module.css'
import { Image } from 'react-bootstrap'
import Link from 'next/link'

function LarpCard() {
  return (
    <Card
      className={`${styles.card} card bg-transparent`}
      style={{ width: 342, color: '#f8f0e5' }}
    >
      <Image
        src="https://i.postimg.cc/MK1Y8ZvC/image.png"
        className="card-img-top"
        alt=""
      />
      <Card.Body className="card-body">
        <Card.Title>
          <h4 className="card-title text-center"> 午夜圖書館</h4>
        </Card.Title>
        <p className="card-text">商品價格</p>
        <div className={`d-flex justify-content-between ${styles.btns}`}>
          <Link href="" className={`btn ${styles.btn}`}>
            主題預約
          </Link>
          <Link href="" className={`btn  ${styles.btn}`}>
            查看更多
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default LarpCard
