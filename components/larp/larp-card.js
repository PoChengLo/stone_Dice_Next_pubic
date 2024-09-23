import Card from 'react-bootstrap/Card'
import styles from '@/styles/larp/larp-card.module.css'
import { Image } from 'react-bootstrap'
import Link from 'next/link'

function LarpCard({ larpImg, larpName, larpPrice }) {
  return (
    <Card
      className={`${styles.card} card bg-transparent`}
      style={{ maxWidth: '342px', height: '752px', color: '#f8f0e5' }}
    >
      <Image
        src={larpImg}
        className="card-img-top"
        style={{
          height: '603px',
          objectFit: 'cover',
        }}
        alt=""
      />
      <Card.Body className="card-body">
        <Card.Title>
          <h4 className="card-title text-center"> {larpName}</h4>
        </Card.Title>
        <p className="card-text">$ {larpPrice} 元 /位</p>
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
