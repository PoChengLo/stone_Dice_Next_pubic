import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { FaStar } from 'react-icons/fa6'
import Card from 'react-bootstrap/Card'
import styles from '@/styles/larp/Larp-info.module.css'

// export default function CarouselCard() {
//   return (
//     <>
//       <Carousel data-bs-theme="dark">
//         <Carousel.Item className={styles.carouselItem}>
//           <Card id={styles.commentCard} className="card">
//             <div className="d-flex">
//               <Card.Img
//                 id={styles.commentImage}
//                 variant="top"
//                 src="img/20200310154228_spsdz.jpeg"
//               />
//               <Card.Body id={styles.cardBody} style={{ padding: '0 16px' }}>
//                 <Card.Title>
//                   <h4>關*******</h4>
//                   <h5>2024/09/12</h5>
//                   <div>
//                     <FaStar style={{ margin: '0 5px 0 0' }} />
//                     <FaStar style={{ margin: '0 5px 0 0' }} />
//                     <FaStar style={{ margin: '0 5px 0 0' }} />
//                     <FaStar style={{ margin: '0 5px 0 0' }} />
//                     <FaStar style={{ margin: '0 5px 0 0' }} />
//                   </div>
//                 </Card.Title>
//               </Card.Body>
//             </div>
//             <Card.Text className={styles.cardText}>
//               <p style={{ margin: '10px 0 0 0' }}>
//                 這是一個精彩的作品，情節緊湊，扣人心弦，充滿驚喜。角色刻畫生動，氛圍營造得當，是一部不可錯過的佳作
//               </p>
//             </Card.Text>
//           </Card>
//         </Carousel.Item>
//         <Carousel.Item className={styles.carouselItem}>
//           <Card id={styles.commentCard} className="card">
//             <div className="d-flex">
//               <Card.Img
//                 id={styles.commentImage}
//                 variant="top"
//                 src="img/20200310154228_spsdz.jpeg"
//               />
//               <Card.Body id={styles.cardBody} style={{ padding: '0 16px' }}>
//                 <Card.Title>
//                   <h4>關*******</h4>
//                   <h5>2024/09/12</h5>
//                   <div>
//                     <FaStar style={{ margin: '0 5px 0 0' }} />
//                     <FaStar style={{ margin: '0 5px 0 0' }} />
//                     <FaStar style={{ margin: '0 5px 0 0' }} />
//                     <FaStar style={{ margin: '0 5px 0 0' }} />
//                     <FaStar style={{ margin: '0 5px 0 0' }} />
//                   </div>
//                 </Card.Title>
//               </Card.Body>
//             </div>
//             <Card.Text className={styles.cardText}>
//               <p style={{ margin: '10px 0 0 0' }}>
//                 這是一個精彩的作品，情節緊湊，扣人心弦，充滿驚喜。角色刻畫生動，氛圍營造得當，是一部不可錯過的佳作
//               </p>
//             </Card.Text>
//           </Card>
//         </Carousel.Item>
//         <Carousel.Item className={styles.carouselItem}>
//           <Card id={styles.commentCard} className="card">
//             <div className="d-flex">
//               <Card.Img
//                 id={styles.commentImage}
//                 variant="top"
//                 src="img/20200310154228_spsdz.jpeg"
//               />
//               <Card.Body id={styles.cardBody} style={{ padding: '0 16px' }}>
//                 <Card.Title>
//                   <h4>關*******</h4>
//                   <h5>2024/09/12</h5>
//                   <div>
//                     <FaStar style={{ margin: '0 5px 0 0' }} />
//                     <FaStar style={{ margin: '0 5px 0 0' }} />
//                     <FaStar style={{ margin: '0 5px 0 0' }} />
//                     <FaStar style={{ margin: '0 5px 0 0' }} />
//                     <FaStar style={{ margin: '0 5px 0 0' }} />
//                   </div>
//                 </Card.Title>
//               </Card.Body>
//             </div>
//             <Card.Text className={styles.cardText}>
//               <p style={{ margin: '10px 0 0 0' }}>
//                 這是一個精彩的作品，情節緊湊，扣人心弦，充滿驚喜。角色刻畫生動，氛圍營造得當，是一部不可錯過的佳作
//               </p>
//             </Card.Text>
//           </Card>
//         </Carousel.Item>
//       </Carousel>
//     </>
//   )
// }
const ReviewCarousel = () => {
  const reviews = [
    {
      id: 1,
      name: '關*******',
      date: '2024/05/21',
      stars: 4,
      review: '充滿驚喜。角色刻畫生動，氛圍營造得當，是一部不可錯過的佳作',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      name: '張*******',
      date: '2024/05/22',
      stars: 5,
      review:
        '劇情安排得當，讓人反思許多。演員表現出色，場景設計和氛圍營造非常好。',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 3,
      name: '李*******',
      date: '2024/05/23',
      stars: 3,
      review:
        '劇情有點平淡，但角色刻畫還算不錯。是一部可以一看的電影，但不能說是最好的一部。',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 4,
      name: '王*******',
      date: '2024/05/24',
      stars: 4,
      review:
        '氛圍營造的非常棒。雖然有些部分可以更精緻，但仍是一部很值得推薦的作品。',
      image: 'https://via.placeholder.com/80',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + reviews.length) % reviews.length
    setCurrentIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % reviews.length
    setCurrentIndex(newIndex)
  }

  // 计算显示的三张卡片：左边、正中间、右边
  const getLeftIndex = () =>
    (currentIndex - 1 + reviews.length) % reviews.length
  const getRightIndex = () => (currentIndex + 1) % reviews.length

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        {/* 左边轮播卡片 */}
        <div
          className="card text-center"
          style={{ width: '300px', padding: '20px', opacity: 0.5 }}
        >
          <Image
            src={reviews[getLeftIndex()].image}
            alt="Profile"
            className="rounded-circle"
            width="80"
            height="80"
          />
          <h5 className="mt-3">{reviews[getLeftIndex()].name}</h5>
          <p>{reviews[getLeftIndex()].date}</p>
          <div>
            {'★'.repeat(reviews[getLeftIndex()].stars) +
              '☆'.repeat(5 - reviews[getLeftIndex()].stars)}
          </div>
          <p className="mt-3">{reviews[getLeftIndex()].review}</p>
        </div>
        {/* 左箭头 */}
        <button className="btn btn-light" onClick={handlePrev}>
          &lt;
        </button>
        {/* 中间轮播卡片（当前） */}
        <div
          className="card text-center"
          style={{
            width: '350px',
            padding: '20px',
            backgroundColor: '#333',
            color: '#fff',
          }}
        >
          <Image
            src={reviews[currentIndex].image}
            alt="Profile"
            className="rounded-circle"
            width="80"
            height="80"
          />
          <h5 className="mt-3">{reviews[currentIndex].name}</h5>
          <p>{reviews[currentIndex].date}</p>
          <div>
            {'★'.repeat(reviews[currentIndex].stars) +
              '☆'.repeat(5 - reviews[currentIndex].stars)}
          </div>
          <p className="mt-3">{reviews[currentIndex].review}</p>
        </div>
        {/* 右箭头 */}
        <button className="btn btn-light" onClick={handleNext}>
          &gt;
        </button>
        {/* 右边轮播卡片 */}
        <div
          className="card text-center"
          style={{ width: '300px', padding: '20px', opacity: 0.5 }}
        >
          <Image
            src={reviews[getRightIndex()].image}
            alt="Profile"
            className="rounded-circle"
            width="80"
            height="80"
          />
          <h5 className="mt-3">{reviews[getRightIndex()].name}</h5>
          <p>{reviews[getRightIndex()].date}</p>
          <div>
            {'★'.repeat(reviews[getRightIndex()].stars) +
              '☆'.repeat(5 - reviews[getRightIndex()].stars)}
          </div>
          <p className="mt-3">{reviews[getRightIndex()].review}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCarousel
