import React from 'react'
import Image from 'next/image'

export default function MyFavorite() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Image
        src="/images/cry4.png"
        alt="No favorite items"
        width={360}
        height={360}
        style={{ opacity: 0.5 }}
      />
      <p style={{ color: '#404040' }}>
        噢噢，你還沒有最愛商品，快去把錢錢變成喜歡的形狀吧。
      </p>
    </div>
  )
}
