import Card from 'react-bootstrap/Card'
import styles from '@/styles/larp/larp-card.module.css'
import { Image } from 'react-bootstrap'
import Link from 'next/link'

function LarpCard({ larpImg, larpName, larpPrice, seeMoreLink, orderLink }) {
  return (
    <Card className={`${styles.card} card bg-transparent`}>
      <Image
        src={larpImg}
        className={`${styles.cardImg} card-img-top`}
        alt=""
      />
      <Card.Body className={`${styles.cardBody} card-body`}>
        <Card.Title>
          <h4 className={`${styles.cardTitle} card-title text-center`}>
            {' '}
            {larpName}
          </h4>
        </Card.Title>
        <p className={`${styles.cardText} card-text`}>$ {larpPrice} 元 /位</p>
        <div className={`d-flex justify-content-between ${styles.btns}`}>
          <Link href={orderLink} className={`btn ${styles.btn}`}>
            主題預約
          </Link>
          <Link href={seeMoreLink} className={`btn  ${styles.btn}`}>
            查看更多
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default LarpCard
