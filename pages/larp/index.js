import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import styles from '@/styles/larp/Larp.module.css'
import Line from '@/components/larp/title-line.js'
import Card from '@/components/larp/larp-card'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { BsListUl } from 'react-icons/bs'
import Form from 'react-bootstrap/Form'
import { DropdownButton, Dropdown } from 'react-bootstrap'

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
    getEscapes(setEscapes)
  }, [])

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
        larpImg={`/larp/img/larp-product/${r.larp_img}`}
        larpName={r.larp_name}
        larpPrice={r.price}
        orderLink={`/larp/${r.id}#order`}
        seeMoreLink={`/larp/${r.id}`}
      />
    ))
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
        <Line title="密室主題" />
        {/* 館別按鈕 */}
        <div id={styles.larpLocation} className="d-flex justify-content-evenly">
          <button
            type="button"
            className={`${
              locSelect === '台北館' ? styles.active : ''
            } btn btn-primary btn-lg`}
            onClick={() => handleLoc('台北館')}
          >
            <h2 className={styles.h2Font}>台北館</h2>
          </button>
          <button
            type="button"
            className={`${
              locSelect === '台中館' ? styles.active : ''
            } btn btn-primary btn-lg`}
            onClick={() => handleLoc('台中館')}
          >
            <h2 className={styles.h2Font}>台中館</h2>
          </button>
          <button
            type="button"
            className={`${
              locSelect === '高雄館' ? styles.active : ''
            } btn btn-primary btn-lg`}
            onClick={() => handleLoc('高雄館')}
          >
            <h2 className={styles.h2Font}>高雄館</h2>
          </button>
        </div>

        {/* 篩選小助理 */}
        <ButtonGroup className={styles.dropDown}>
          <DropdownButton
            as={ButtonGroup}
            title={
              <>
                <BsListUl />
                <p style={{ margin: '0 0 0 18px', display: 'inline-block' }}>
                  篩選小助理
                </p>
              </>
            }
            id={`${styles.select} bg-vertical-dropdown-1`}
          >
            <div className="mb-3">
              {[
                '奇幻',
                '冒險',
                '魔法',
                '科幻',
                '驚悚',
                '懸疑',
                '海洋',
                '恐怖',
                '靈異',
                '探險',
                '解謎',
              ].map((type) => (
                <Dropdown.Item key={`default-${type}`} eventKey={type}>
                  <Form.Check
                    type="checkbox"
                    id={`default-${type}`}
                    label={type}
                  />
                </Dropdown.Item>
              ))}
            </div>
          </DropdownButton>
        </ButtonGroup>
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
