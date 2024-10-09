import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from '@/styles/user-profile/focus-cards.module.scss'

const Card = ({ card, isSelected, onClick }) => (
  <motion.div
    className={`${styles.card} ${isSelected ? styles.selectedCard : ''}`}
    onClick={onClick}
    layout
    initial={{ scale: 1 }}
    animate={{ scale: isSelected ? 1.1 : 1 }}
    transition={{ duration: 0.3 }}
  >
    <Image
      src={card.image}
      alt={card.title}
      layout="fill"
      objectFit="cover"
      className={styles.cardImage}
    />
    <motion.div
      className={styles.cardOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: isSelected ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className={styles.cardTitle}>{card.title}</h3>
    </motion.div>
  </motion.div>
)

const FocusCardsDemo = () => {
  const [selectedCard, setSelectedCard] = useState(null)

  const cards = [
    {
      title: 'Forest Adventure',
      image:
        'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Valley of life',
      image:
        'https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Sala behta hi jayega',
      image:
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Camping is for pros',
      image:
        'https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'The road not taken',
      image:
        'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'The First Rule',
      image: 'https://assets.aceternity.com/the-first-rule.png',
    },
  ]

  return (
    <div className={styles.cardsContainer}>
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          isSelected={selectedCard === index}
          onClick={() => setSelectedCard(index === selectedCard ? null : index)}
        />
      ))}
    </div>
  )
}

export default FocusCardsDemo
