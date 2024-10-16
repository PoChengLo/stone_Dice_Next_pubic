import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const LayeredAnimation = () => {
  const containerRef = useRef(null)

  // 使用 useScroll 來監控滾動進度
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'], // 延後動畫觸發點
  })

  // 設置 spring 配置
  const springConfig = { stiffness: 100, damping: 30 }

  // 第二層：位移和透明度設置
  const y2 = useSpring(
    useTransform(scrollYProgress, [0.2, 0.4], ['0%', '-10%']),
    springConfig
  )
  // 調整第二層的透明度，使其在第三層即將完全出現時逐漸消失
  const opacity2 = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.5, 0.6],
    [0, 1, 1, 0]
  )

  // 第三層：位移和透明度設置
  const y3 = useSpring(
    useTransform(scrollYProgress, [0.4, 0.6], ['0%', '-15%']),
    springConfig
  )
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.5], [0, 1])

  const layers = [
    {
      image: '/images/castle-4139917.svg',
      filter: 'brightness(0.7) sepia(0.3)',
      size: '100% auto',
      y: '0%', // 固定不動，沒有動畫效果
      opacity: 1, // 一開始就完全顯示
      topOffset: '-5%', // 第一層位於頂部並稍微向上移動
    },
    {
      image: '/images/castle-5935495.png',
      filter: 'brightness(0.8) sepia(0.2)',
      size: '100% auto',
      y: y2,
      opacity: opacity2,
      topOffset: '0%', // 第二層稍微向下
    },
    {
      image: '/images/gate-2789803.png',
      filter: 'brightness(0.9) sepia(0.1)',
      size: '100% auto',
      y: y3,
      opacity: opacity3,
      topOffset: '5%', // 第三層更靠下
    },
  ]

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '150vh',
    overflow: 'hidden',
    background: 'linear-gradient(to bottom, #262626, #4a4a4a)',
    marginTop: '0vh', // 減少負 margin
  }

  const getLayerStyle = (layer, index) => ({
    position: 'absolute',
    top: layer.topOffset, // 設置每層的初始位置，確保它們不重疊
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: layer.size,
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    zIndex: index + 1,
    backgroundImage: `url(${layer.image})`,
    filter: layer.filter,
  })

  return (
    <div ref={containerRef} style={containerStyle}>
      {layers.map((layer, index) => (
        <motion.div
          key={index}
          style={{
            ...getLayerStyle(layer, index),
            y: layer.y,
            opacity: layer.opacity,
          }}
        />
      ))}
    </div>
  )
}

export default LayeredAnimation
