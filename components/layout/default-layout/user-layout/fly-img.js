import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const FloatingImages = () => {
  const controls1 = useAnimation()
  const controls2 = useAnimation()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const triggerPoint = window.innerHeight * 0.1
    if (scrollY > triggerPoint) {
      controls1.start({
        x: '0%',
        opacity: 1,
        transition: { type: 'spring', stiffness: 100, damping: 20 },
      })
      controls2.start({
        x: '0%',
        opacity: 1,
        transition: { type: 'spring', stiffness: 100, damping: 20 },
      })
    } else {
      controls1.start({ x: '-100%', opacity: 0 })
      controls2.start({ x: '100%', opacity: 0 })
    }
  }, [scrollY, controls1, controls2])

  return (
    <div
      style={{
        position: 'absolute',
        top: '100vh', // 將容器放置在第一個視口高度之後
        left: 0,
        width: '100%',
        height: '100px', // 給予一個固定高度
        pointerEvents: 'none',
        zIndex: 10,
      }}
    >
      <motion.img
        src="/user-profile/animal_hitsuji.png"
        alt="Floating Image 1"
        initial={{ x: '-100%', opacity: 0 }}
        animate={controls1}
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '10%',
          width: '150px',
        }}
      />

      <motion.img
        src="/user-profile/dog_shetland_sheepdog.png"
        alt="Floating Image 2"
        initial={{ x: '100%', opacity: 0 }}
        animate={controls2}
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '10%',
          width: '150px',
        }}
      />
    </div>
  )
}

export default FloatingImages
