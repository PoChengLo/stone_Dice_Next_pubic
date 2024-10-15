import React, { useState } from 'react'
import styles from './slider.module.scss'
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const items = [
    {
      image: 'images/fantasy-7452256.jpg',
      title: '桌遊商品',
      description:
        '在石中沉睡的骰子，等待著被喚醒的力量。每一款桌遊都是一把鑰匙，開啟通往奇幻國度的大門。從巫師塔到龍巢，無盡的冒險在此展開。你準備好擲出命運之骰了嗎？',
      link: '/board-game',
    },
    {
      image: '/larp/img/larp-product/underwaterTown-2.png',
      title: '密室逃脫',
      description:
        '踏入古老法師的密室，符文在黑暗中閃爍。時間如沙漏般流逝，而你必須解開千年的謎題。每個選擇都可能觸發魔法陷阱，唯有智慧與團隊合作，方能破解這場空間之謎。',
      link: '/larp',
    },
    {
      image: '/larp/img/larp-product/moonnoight-1.png',
      title: '劇本殺',
      description:
        '霧氣瀰漫的港口小鎮，古老的預言正在應驗。扮演你的角色，潛入錯綜複雜的劇情。每個人都有祕密，每句話都藏有線索。當迷霧散去，你是否能承受真相的重量？',
      link: '/mystery-game',
    },
    {
      image: 'https://images7.alphacoders.com/878/878663.jpg',
      title: '精彩活動',
      description:
        '一年一度的冒險者聚會，等待著你的參與。穿越時空的魔法競賽、馴龍大賽、迷宮探索...每一個活動都是一次難忘的冒險。在這裡，你將書寫屬於自己的英雄史詩。',
      link: '/events/adventures',
    },
    {
      image: 'images/painting-3995999.jpg',
      title: '關於我們',
      description:
        '石之骰，矗立在現實與幻想的交界。我們是來自不同位面的冒險者，共同編織一個讓想像力翱翔的王國。加入我們，成為這個魔法生態系統的一部分，在這裡，每次相遇都是新冒險的開始。',
      link: '/about',
    },
  ]

  const handleSlide = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    } else {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + items.length) % items.length
      )
    }
  }

  const handleKeyPress = (event, direction) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleSlide(direction)
    }
  }

  const getVisibleItems = () => {
    const visibleItems = []
    for (let i = 0; i < 3; i++) {
      visibleItems.push(items[(currentIndex + i) % items.length])
    }
    return visibleItems
  }

  return (
    <main className={styles.main}>
      {/* 大圖顯示區 */}
      <motion.div
        key={currentIndex}
        className={styles.largeDisplay}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundImage: `url(${items[currentIndex].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100vh',
        }}
      >
        <div className={styles.content}>
          <h2 className={styles.title}>{items[currentIndex].title}</h2>
          <p className={styles.description}>
            {items[currentIndex].description}
          </p>
          <a
            href={items[currentIndex].link}
            className={styles.readMoreButton}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Read More
          </a>
        </div>
      </motion.div>

      {/* 小卡片展示區 - 水平排列且保持三張，循環顯示 */}
      <div
        className={styles.cardContainerHorizontal}
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          position: 'absolute',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {getVisibleItems().map((item, index) => (
          <motion.div
            key={index}
            className={`${styles.card} ${index === 1 ? styles.activeCard : ''}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              backgroundImage: `url(${item.image})`,
              width: '200px',
              height: '300px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 0.5s ease-in-out',
              transform: index === 1 ? 'scale(1.2)' : 'scale(1)',
            }}
            onClick={() => handleSlide('next')}
            onKeyDown={(event) => handleKeyPress(event, 'next')}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.title}`}
          />
        ))}
      </div>

      {/* 滑動按鈕 */}
      <nav
        className={styles.nav}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <button
          className={`${styles.btn} ${styles.prev}`}
          onClick={() => handleSlide('prev')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IoArrowBackOutline />
        </button>
        <button
          className={`${styles.btn} ${styles.next}`}
          onClick={() => handleSlide('next')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IoArrowForwardOutline />
        </button>
      </nav>
    </main>
  )
}

export default Slider
