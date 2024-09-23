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

  getEscapes(setEscapes)

  const handleLoc = (loc) => {
    setLocSelect(loc) // 更新選擇的館別
  }
  const cardInfo = () => {
    // 使用 Set 來追蹤已經見過的 larp_id
    const seenIds = new Set()
    let filteredEscapes = []

    // 根據 locSelect 來篩選資料
    escapes.forEach((escape) => {
      // 根據選中的 loc_id 進行篩選
      if (
        (locSelect === '台北館' && escape.loc_id === 1) ||
        (locSelect === '台中館' && escape.loc_id === 2) ||
        (locSelect === '高雄館' && escape.loc_id === 3) ||
        locSelect === ''
      ) {
        // 如果 seenIds 中不存在此 larp_id，則加入到過濾結果中
        if (!seenIds.has(escape.id)) {
          seenIds.add(escape.id)
          filteredEscapes.push(escape)
        }
      }
    })

    // 生成卡片
    return filteredEscapes.map((r) => (
      <Card
        key={r.id}
        larpImg={r.larp_img}
        larpName={r.larp_name}
        larpPrice={r.price}
        orderLink={`/larp/${r.id}#order`}
        seeMoreLink={`/larp/${r.id}`}
      />
    ))
  }
  // const cardInfo = () => {
  //   const seenIds = new Set()
  //   const filteredEscapes = escapes.filter((r) => {
  //     if (seenIds.has(r.id)) {
  //       return false // 如果已經見過這個 id，則過濾掉
  //     } else {
  //       seenIds.add(r.id) // 如果沒見過，則加入到 Set 中
  //       return true
  //     }
  //   })

  //   let filterCards
  //   switch (locSelect) {
  //     case '台北館':
  //       filterCards = escapes.filter((r) => r.loc_id === 1)
  //       break
  //     case '台中館':
  //       filterCards = escapes.filter((r) => r.loc_id === 2)
  //       break
  //     case '高雄館':
  //       filterCards = escapes.filter((r) => r.loc_id === 3)
  //       break
  //     default:
  //       filterCards = escapes
  //   }
  //   return filterCards.map((r) => (
  //     <Card
  //       key={r.id}
  //       larpImg={r.larp_img}
  //       larpName={r.larp_name}
  //       larpPrice={r.price}
  //     />
  //   ))
  // }

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
            className={`${
              locSelect === '台北館' ? styles.active : ''
            } btn btn-primary btn-lg`}
            onClick={() => handleLoc('台北館')}
          >
            <h2>台北館</h2>
          </button>
          <button
            type="button"
            className={`${
              locSelect === '台中館' ? styles.active : ''
            } btn btn-primary btn-lg`}
            onClick={() => handleLoc('台中館')}
          >
            <h2>台中館</h2>
          </button>
          <button
            type="button"
            className={`${
              locSelect === '高雄館' ? styles.active : ''
            } btn btn-primary btn-lg`}
            onClick={() => handleLoc('高雄館')}
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
          {cardInfo()}
        </div>
      </div>
    </div>
  )
}
