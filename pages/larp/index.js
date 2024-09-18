import React from 'react'
import { Image } from 'react-bootstrap'
import styles from '@/styles/larp/Larp.module.css'
import Line from '@/components/larp/title-line.js'
import Card from '@/components/larp/larp-card'
import DropdownButton from '@/components/larp/select-button.js'

export default function LarpPage() {
  return (
    <body className={styles.larpBody}>
      {/* 置頂大圖 */}
      <Image
        src="https://i.postimg.cc/qqgTnCn5/image.png"
        alt="石之骰密室逃脫"
        width={'100%'}
        height={'auto'}
      />
      <div className={styles.larpContainer}>
        {/* 遊戲主題分隔線 */}
        <Line title="遊戲主題" />
        {/* 館別按鈕 */}
        <div id={styles.larpLocation} className="d-flex justify-content-evenly">
          <button
            type="button"
            className={`${styles.active} btn btn-primary btn-lg`}
          >
            <h2>台北館</h2>
          </button>
          <button
            type="button"
            className={`btn btn-lg ${styles.secondaryText}`}
          >
            <h2>台中館</h2>
          </button>
          <button
            type="button"
            className={`btn btn-lg ${styles.secondaryText}`}
          >
            <h2>高雄館</h2>
          </button>
        </div>

        {/* 篩選小助理 */}
        <DropdownButton />
        {/* 密室逃脫卡片 */}
        <div
          className="row text-white d-flex justify-content-between"
          style={{ padding: '40px 0 0 0' }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </body>
  )
}
