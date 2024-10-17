import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView,
} from 'framer-motion'
import FocusCardsDemo from '@/components/layout/default-layout/user-layout/focus-cards'
import styles from '@/styles/user-profile/home-page.module.scss'
import Footer from '@/components/layout/default-layout/footer'
import LayeredAnimation from '@/components/layout/default-layout/user-layout/layered-animation'
import FloatingImages from '@/components/layout/default-layout/user-layout/fly-img'
import Slider from '@/components/layout/default-layout/user-layout/slider'
import LarpProductCard from '@/components/layout/default-layout/user-layout/larp-product-card'

const HomePage = () => {
  const [showTitle, setShowTitle] = useState(false)
  const containerRef = useRef(null)
  const callToActionRef = useRef(null)
  const isInView = useInView(callToActionRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const meteorY = useTransform(scrollYProgress, [0, 1], ['-80%', '180%'])
  const meteorX = useTransform(scrollYProgress, [0, 1], ['-50%', '100%'])
  const meteorOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  )

  const leftImageX = useTransform(scrollYProgress, [0, 0.5], ['-100%', '0%'])
  const rightImageX = useTransform(scrollYProgress, [0, 0.5], ['100%', '0%'])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  const textY = useTransform(scrollYProgress, [0, 0.5], ['50px', '0px'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

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

  const callToActionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

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
                width={950}
                height={250}
                className={styles.centerImage}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <FloatingImages />
      <LayeredAnimation />

      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <motion.div
            className={styles.meteor}
            style={{ y: meteorY, x: meteorX, opacity: meteorOpacity }}
          />

          <div className={styles.imageTextContainer}>
            <motion.div
              className={styles.imageWrapper}
              style={{ x: leftImageX, opacity: imageOpacity }}
            >
              <Image
                src="/images/ai-generated-9045527_1920.png"
                alt="Left floating image"
                width={300}
                height={300}
                objectFit="contain"
              />
            </motion.div>

            <motion.div
              className={styles.textContainer}
              style={{ y: textY, opacity: textOpacity }}
            >
              {themedTexts.map((text, index) => (
                <motion.p
                  key={index}
                  className={styles.floatingText}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    delay: index * 0.5,
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              className={styles.imageWrapper}
              style={{ x: rightImageX, opacity: imageOpacity }}
            >
              <Image
                src="/images/crossbow-4578149_1920.png"
                alt="Right floating image"
                width={300}
                height={300}
                objectFit="contain"
              />
            </motion.div>
          </div>
        </div>
      </main>
      <Slider />

      <section className={styles.focusCardsSection}>
        <FocusCardsDemo />
      </section>

      <LarpProductCard style={{ marginButton: '5rem' }} />

      <section className={styles.callToActionSection} ref={callToActionRef}>
        <motion.div
          className={styles.textContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <motion.div
            animate={{ x: [0, 100, 0] }}
            className={styles.callToActionText}
            variants={callToActionVariants}
            custom={0}
            style={{
              marginTop: '5rem',
            }}
          >
            勇者啊，你的冒險正等待著你！
          </motion.div>
          <motion.div
            animate={{ x: [0, 100, 0] }}
            className={styles.callToActionText}
            variants={callToActionVariants}
            custom={1}
          >
            在這片神奇的桌遊世界中，無盡的故事與挑戰等待著你的探索。
          </motion.div>
          <motion.div
            animate={{ x: [0, 100, 0] }}
            className={styles.callToActionText}
            variants={callToActionVariants}
            custom={2}
          >
            準備好開啟你的傳奇之旅了嗎？
          </motion.div>
          <motion.div
            animate={{ x: [0, 100, 0] }}
            className={styles.callToActionText}
            variants={callToActionVariants}
            custom={3}
          >
            加入我們，共同書寫屬於你的精彩篇章！
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.buttonContainer}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          style={{
            marginBottom: '10rem',
          }}
        >
          <Link href="/user-profile/login">
            <motion.button
              className={`${styles.actionButton} ${styles.loginButton}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              登入
            </motion.button>
          </Link>
          <Link href="/user-profile/signup">
            <motion.button
              className={`${styles.actionButton} ${styles.signupButton}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              註冊
            </motion.button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
