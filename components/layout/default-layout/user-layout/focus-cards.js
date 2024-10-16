import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from '@/styles/user-profile/focus-cards.module.scss'

const ProductCard = ({ product, isSelected, onClick }) => (
  <motion.div
    className={`${styles.card} ${isSelected ? styles.selectedCard : ''}`}
    onClick={onClick}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    layout
  >
    <Image
      src={`/board-game/product-pic/${product.prod_img}`}
      alt={product.prod_name}
      layout="fill"
      objectFit="cover"
      className={styles.cardImage}
    />
    <motion.div
      className={styles.cardOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3 className={styles.cardTitle}>{product.prod_name}</h3>
      <p className={styles.cardPrice}>NT$ {product.price}</p>
    </motion.div>
  </motion.div>
)

const AnimatedProductCarousel = () => {
  const mockProducts = [
    {
      id: 201,
      prod_name: '龍之遺跡 Dragons Legacy',
      price: 1280,
      prod_img: '001.jpeg',
    },
    {
      id: 202,
      prod_name: '幽靈船 Ghost Ship',
      price: 1540,
      prod_img: '002.jpeg',
    },
    {
      id: 203,
      prod_name: '奇幻競技場 Fantasy Arena',
      price: 2060,
      prod_img: '003.jpeg',
    },
    {
      id: 204,
      prod_name: '時光迷宮 Chrono Labyrinth',
      price: 2400,
      prod_img: '004.jpeg',
    },
    {
      id: 205,
      prod_name: '魔法糖果工廠 Enchanted Candy Factory',
      price: 1820,
      prod_img: '005.jpeg',
    },
    {
      id: 206,
      prod_name: '魔法餐廳 Enchanted Bistro',
      price: 1100,
      prod_img: '006.jpeg',
    },
    {
      id: 207,
      prod_name: '詭異時光錶 Eerie Hourglass',
      price: 1580,
      prod_img: '007.jpeg',
    },
    {
      id: 208,
      prod_name: '笑話大亂鬥 Joke Brawl',
      price: 1700,
      prod_img: '008.jpeg',
    },
    {
      id: 209,
      prod_name: '怪獸養成所 Monster Nursery',
      price: 2220,
      prod_img: '009.jpeg',
    },
  ]

  const [visibleProducts, setVisibleProducts] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const newVisibleProducts = []
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % mockProducts.length
      newVisibleProducts.push(mockProducts[index])
    }
    setVisibleProducts(newVisibleProducts)
  }, [currentIndex])

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mockProducts.length)
  }

  const prevProduct = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + mockProducts.length) % mockProducts.length
    )
  }

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>最新桌遊商品</h2>
      <div className={styles.carouselWrapper}>
        <motion.button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={prevProduct}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft size={24} />
        </motion.button>
        <div className={styles.cardsContainer}>
          <AnimatePresence initial={false}>
            {visibleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                custom={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                <ProductCard
                  product={product}
                  isSelected={index === 2}
                  onClick={() => {
                    /* Handle click */
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <motion.button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={nextProduct}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>
    </div>
  )
}

export default AnimatedProductCarousel
