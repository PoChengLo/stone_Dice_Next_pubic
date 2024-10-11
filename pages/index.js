import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import FocusCardsDemo from '@/components/layout/default-layout/user-layout/focus-cards' // 引入 FocusCards 組件
import styles from '@/styles/user-profile/home-page.module.scss'
import Footer from '@/components/layout/default-layout/footer'

const HomePage = () => {
  const [showImages, setShowImages] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const leftImageX = useTransform(scrollYProgress, [0, 0.3], ['-100%', '0%'])
  const rightImageX = useTransform(scrollYProgress, [0.2, 0.5], ['100%', '0%'])
  const lightBeamY = useTransform(scrollYProgress, [0, 1], ['-50%', '100%'])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      if (scrollPosition > windowHeight * 0.5) {
        setShowImages(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const titleTimer = setTimeout(() => setShowTitle(true), 8000)
    const hideTitleTimer = setTimeout(() => setShowTitle(false), 16000)

    return () => {
      clearTimeout(titleTimer)
      clearTimeout(hideTitleTimer)
    }
  }, [])

  const themedTexts = [
    '在古老的石頭中,藏著無盡的傳說;在骰子的轉動間,編織著你的命運。',
    '巨龍的咆哮震撼大地,而你的策略將決定這場史詩之戰的勝負。',
    '每一個棋子,都是一個英雄;每一次擲骰,都是一次冒險。歡迎來到傳奇的殿堂。',
  ]

  return (
    <div className={styles.container} ref={containerRef}>
      <header className={styles.header}>
        <video className={styles.video} autoPlay loop muted playsInline>
          <source src="/user-profile/index_3840x2160.mp4" type="video/mp4" />
        </video>
        <AnimatePresence>
          {showTitle && (
            <motion.div
              className={styles.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/user-profile/a-horizontal-logo-for-the-board-game-e-commerce-st-wFd7X15XTUqPGFVfIlZtTg-pQqTY0_UTKCR8FckmdvWoQ.png"
                alt="The Dice in the Stone logo"
                layout="intrinsic"
                width={1200}
                height={600}
                className={styles.centerImage}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className={styles.main}>
        {showImages && (
          <div className={styles.imageContainer}>
            <motion.div
              className={styles.imageWrapper}
              style={{ x: leftImageX }}
            >
              <Image
                src="/user-profile/animal_hitsuji.png"
                alt="左側浮動圖片"
                width={300}
                height={300}
                objectFit="contain"
              />
            </motion.div>
            <motion.div
              className={styles.imageWrapper}
              style={{ x: rightImageX }}
            >
              <Image
                src="/user-profile/dog_shetland_sheepdog.png"
                alt="右側浮動圖片"
                width={300}
                height={300}
                objectFit="contain"
              />
            </motion.div>
          </div>
        )}

        <div className={styles.textContainer}>
          <motion.div className={styles.lightBeam} style={{ y: lightBeamY }} />
          {themedTexts.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.5 }}
              className={styles.textBlock}
            >
              <p className={styles.floatingText}>{text}</p>
            </motion.div>
          ))}
        </div>
      </main>

      <section className={styles.focusCardsSection}>
        <FocusCardsDemo /> {/* 傳入卡片資料的組件 */}
      </section>
      <Footer />
    </div>
  )
}

export default HomePage
