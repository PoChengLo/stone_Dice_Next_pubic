import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// 假資料
const mockLarpProducts = [
  {
    id: 1,
    larp_name: '失落的魔法書',
    price: 600,
    larp_people: '4-7 人',
    larp_duration: '60分鐘',
    larp_img: 'https://i.postimg.cc/HLk05QBm/image.png',
  },
  {
    id: 2,
    larp_name: '禁忌實驗室',
    price: 500,
    larp_people: '3-5 人',
    larp_duration: '90分鐘',
    larp_img: 'https://i.postimg.cc/rFG5PhHc/image.png',
  },
  {
    id: 3,
    larp_name: '時光機密',
    price: 700,
    larp_people: '4-6 人',
    larp_duration: '50分鐘',
    larp_img: 'https://i.postimg.cc/tgv3zYMx/image.png',
  },
  {
    id: 4,
    larp_name: '幽靈船的詛咒',
    price: 650,
    larp_people: '4-8 人',
    larp_duration: '60分鐘',
    larp_img: 'https://i.postimg.cc/2Sm7jpWV/image.png',
  },
  {
    id: 5,
    larp_name: '地下墓穴的秘密',
    price: 550,
    larp_people: '4-6 人',
    larp_duration: '60分鐘',
    larp_img: 'https://i.postimg.cc/7ZVMfB1X/image.png',
  },
  {
    id: 6,
    larp_name: '鬼屋實驗室',
    price: 600,
    larp_people: '3-6 人',
    larp_duration: '70分鐘',
    larp_img: 'https://i.postimg.cc/Jn9j9Sm7/image.png',
  },
  {
    id: 7,
    larp_name: '極地求生',
    price: 650,
    larp_people: '4-6 人',
    larp_duration: '80分鐘',
    larp_img: 'https://i.postimg.cc/1RqGpRc8/image.png',
  },
  {
    id: 8,
    larp_name: '午夜圖書館',
    price: 500,
    larp_people: '4-6 人',
    larp_duration: '90分鐘',
    larp_img: 'https://i.postimg.cc/MK1Y8ZvC/image.png',
  },
  {
    id: 9,
    larp_name: '遺失的皇宮',
    price: 700,
    larp_people: '4-6 人',
    larp_duration: '50分鐘',
    larp_img: 'https://i.postimg.cc/htSVWLFm/image.png',
  },
]

const AdvancedLarpProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mockLarpProducts.length)
  }

  const prevProduct = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + mockLarpProducts.length) % mockLarpProducts.length
    )
  }

  return (
    <div
      style={{
        maxWidth: '100%',
        margin: '0 auto',
        textAlign: 'center',
        perspective: '3000px',
        overflowX: 'hidden',
        padding: '50px 0',
      }}
    >
      <h2 style={{ color: '#f0e68c', marginTop: '5rem', fontSize: '2rem' }}>
        LARP 劇本殺商品
      </h2>
      <div
        style={{
          position: 'relative',
          height: '500px',
          transformStyle: 'preserve-3d',
        }}
      >
        <AnimatePresence initial={false}>
          {mockLarpProducts.map((product, index) => {
            const offset =
              (index - currentIndex + mockLarpProducts.length) %
              mockLarpProducts.length
            const absOffset = Math.abs(offset)
            return (
              <motion.div
                key={product.id}
                style={{
                  position: 'absolute',
                  width: '300px',
                  height: '400px',
                  top: '50%',
                  left: '50%',
                  borderRadius: '10px',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                  overflow: 'hidden',
                }}
                initial={{ opacity: 0, rotateY: offset * 45, z: -3000 }}
                animate={{
                  opacity: absOffset <= 2 ? 1 : 0,
                  rotateY: offset * 45,
                  z: absOffset === 0 ? 0 : -1500 - absOffset * 500,
                  x: `calc(-50% + ${offset * 400}px)`,
                  y: '-50%',
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={product.larp_img}
                  alt={product.larp_name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    color: 'white',
                    padding: '20px',
                  }}
                >
                  <h3 style={{ margin: '0 0 10px', fontSize: '1.3rem' }}>
                    {product.larp_name}
                  </h3>
                  <p style={{ margin: '5px 0', fontSize: '1.1rem' }}>
                    NT$ {product.price}
                  </p>
                  <p style={{ margin: '5px 0', fontSize: '0.9rem' }}>
                    {product.larp_people} | {product.larp_duration}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '40px',
          gap: '20px',
        }}
      >
        <motion.button
          onClick={prevProduct}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'rgba(200, 200, 200, 0.5)',
            border: 'none',
            fontSize: '24px',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          whileHover={{
            scale: 1.1,
            backgroundColor: 'rgba(200, 200, 200, 0.8)',
          }}
          whileTap={{ scale: 0.9 }}
        >
          &#60;
        </motion.button>
        <motion.button
          onClick={nextProduct}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'rgba(200, 200, 200, 0.5)',
            border: 'none',
            fontSize: '24px',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          whileHover={{
            scale: 1.1,
            backgroundColor: 'rgba(200, 200, 200, 0.8)',
          }}
          whileTap={{ scale: 0.9 }}
        >
          &#62;
        </motion.button>
      </div>
    </div>
  )
}

export default AdvancedLarpProductCarousel
