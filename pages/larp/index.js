import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import styles from '@/styles/larp/Larp.module.css'
import Line from '@/components/larp/title-line.js'
import Card from '@/components/larp/larp-card'
import DropdownButton from '@/components/larp/select-button.js'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'
import Link from 'next/link'

export default function LarpPage() {
  const [escapes, setEscapes] = useState([])

  //跟伺服器抓資料
  const getEscapes = async () => {
    const baseURL = 'http://127.0.0.1:3006/larp'

    const res = await fetch(baseURL)
    const resData = await res.json()

    console.log(resData)

    setEscapes(resData)
  }
  
  useEffect(() => {
    getEscapes()
  }, [])

  return (
    <div className={styles.larpBody}>
      <Navbar />
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
            onClick={() => {
              escapes.map((r) => {
                return (
                  <Card
                    key={r.id}
                    larpImg={r.larp_img}
                    larpName={r.larp_name}
                    larpPrice={r.larp_price}
                  />
                )
              })
            }}
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
          {escapes.map((r) => {
            return (
              <Card
                key={r.id}
                larpImg={r.larp_img}
                larpName={r.larp_name}
                larpPrice={r.larp_price}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
