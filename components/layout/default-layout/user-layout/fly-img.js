import React, { useEffect, useState, useCallback } from 'react'
import { motion, useAnimation } from 'framer-motion'

const FloatingImages = () => {
  const controls = useAnimation()
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3, delay: 1.5 } },
  }

  const leftImageVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
      x: '0%',
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 20 },
    },
    exit: {
      x: '-100%',
      opacity: 0,
      transition: { type: 'spring', stiffness: 120, damping: 20, delay: 1 },
    },
  }

  const rightImageVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
      x: '0%',
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 20 },
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: { type: 'spring', stiffness: 120, damping: 20, delay: 1 },
    },
  }

  const handleScroll = useCallback(() => {
    if (!hasAnimated && window.scrollY > 20) {
      // 降低閾值到 20px
      setIsVisible(true)
      setHasAnimated(true)
    }
  }, [hasAnimated])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [handleScroll])

  useEffect(() => {
    if (isVisible) {
      controls
        .start('visible')
        .then(() => controls.start('exit'))
        .then(() => setIsVisible(false))
    }
  }, [isVisible, controls])

  if (!isVisible) return null

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      style={{
        position: 'fixed',
        top: '100vh',
        left: 0,
        width: '100%',
        height: '200px',
        pointerEvents: 'none',
        zIndex: 10,
        transform: 'translateY(-100%)',
      }}
    >
      <motion.img
        src="/images/silhouette-403695_1920.png"
        alt="Floating Image Left"
        variants={leftImageVariants}
        style={{
          position: 'absolute',
          bottom: 0,
          left: '-20%',
          width: '80%',
          height: 'auto',
        }}
      />
      <motion.img
        src="/images/silhouette-403695_1920.png"
        alt="Floating Image Right"
        variants={rightImageVariants}
        style={{
          position: 'absolute',
          bottom: 0,
          right: '-20%',
          width: '80%',
          height: 'auto',
        }}
      />
    </motion.div>
  )
}

export default FloatingImages
