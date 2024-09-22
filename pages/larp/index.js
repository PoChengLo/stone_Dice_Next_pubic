import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import styles from '@/styles/larp/Larp.module.css'
import Line from '@/components/larp/title-line.js'
import Card from '@/components/larp/larp-card'
import DropdownButton from '@/components/larp/select-button.js'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'

export default function LarpPage() {
  const [escapes, setEscapes] = useState([])
  // 儲存當前被選擇的館別
  const [locSelect, setLocSelect] = useState('')

  // 跟伺服器抓資料
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

  const handleLoc = (loc) => {
    setLocSelect(loc) // 更新選擇的館別
  }

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
          {['台北館', '台中館', '高雄館'].map((location) => (
            <button
              key={location}
              type="button"
              className={`${
                locSelect === location ? styles.active : ''
              } btn btn-primary btn-lg`}
              onClick={() => handleLoc(location)}
            >
              <h2>{location}</h2>
            </button>
          ))}
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
