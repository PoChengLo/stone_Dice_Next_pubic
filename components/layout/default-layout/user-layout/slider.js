import React, { useState } from 'react'
import styles from './slider.module.scss'
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const items = [
    {
      image: 'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg',
      title: 'Lossless Youths',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
    },
    {
      image: 'https://i.redd.it/tc0aqpv92pn21.jpg',
      title: 'Estrange Bond',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
    },
    {
      image: 'https://wharferj.files.wordpress.com/2015/11/bio_north.jpg',
      title: 'The Gate Keeper',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
    },
    {
      image: 'https://images7.alphacoders.com/878/878663.jpg',
      title: 'Last Trace Of Us',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
    },
    {
      image:
        'https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg',
      title: 'Urban Decay',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
    },
  ]

  const handleSlide = (index) => {
    setCurrentIndex(index)
  }

  const handleKeyPress = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleSlide(index)
    }
  }

  return (
    <main className={styles.main}>
      {/* 大圖顯示區 */}
      <div className={styles.largeDisplay}>
        <div
          className={styles.largeImage}
          style={{ backgroundImage: `url(${items[currentIndex].image})` }}
        ></div>
        <div className={styles.content}>
          <h2 className={styles.title}>{items[currentIndex].title}</h2>
          <p className={styles.description}>
            {items[currentIndex].description}
          </p>
          <button className={styles.readMoreButton}>Read More</button>
        </div>
      </div>

      {/* 小卡片展示區 */}
      <div className={styles.cardContainer}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              index === currentIndex ? styles.activeCard : ''
            }`}
            style={{ backgroundImage: `url(${item.image})` }}
            onClick={() => handleSlide(index)}
            onKeyDown={(event) => handleKeyPress(event, index)}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.title}`}
          />
        ))}
      </div>

      {/* 滑動按鈕 */}
      <nav className={styles.nav}>
        <button
          className={`${styles.btn} ${styles.prev}`}
          onClick={() =>
            setCurrentIndex(
              (prevIndex) => (prevIndex - 1 + items.length) % items.length
            )
          }
        >
          <IoArrowBackOutline />
        </button>
        <button
          className={`${styles.btn} ${styles.next}`}
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
          }
        >
          <IoArrowForwardOutline />
        </button>
      </nav>
    </main>
  )
}

export default Slider
