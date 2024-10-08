import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import styles from '@/styles/user-profile/home-page.module.scss'

const HomePage = () => {
  const [showTitle, setShowTitle] = useState(false)
  const containerRef = useRef(null)
  const textContainerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const { scrollYProgress: textScrollProgress } = useScroll({
    target: textContainerRef,
    offset: ['start end', 'end start'],
  })

  const leftImageX = useTransform(scrollYProgress, [0.3, 0.5], ['-100%', '0%'])
  const rightImageX = useTransform(scrollYProgress, [0.5, 0.7], ['100%', '0%'])
  const imageOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])

  // 調整 lightBeam 的動畫範圍，使其與 textContainer 的滾動同步
  const lightBeamY = useTransform(textScrollProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const titleTimer = setTimeout(() => setShowTitle(true), 8000)
    const hideTitleTimer = setTimeout(() => setShowTitle(false), 18000)

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
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              The Dice in the Stone
            </motion.h1>
          )}
        </AnimatePresence>
      </header>

      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageContainer}>
            <motion.div
              className={styles.imageWrapper}
              style={{ x: leftImageX, opacity: imageOpacity }}
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
              style={{ x: rightImageX, opacity: imageOpacity }}
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

          <div className={styles.textContainer} ref={textContainerRef}>
            <motion.div
              className={styles.lightBeam}
              style={{ y: lightBeamY }}
            />
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
        </div>
      </main>
    </div>
  )
}

export default HomePage
