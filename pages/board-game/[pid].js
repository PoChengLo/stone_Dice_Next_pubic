import { useState, useEffect } from 'react'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import ProdCard from '@/components/board-game/prod-card'
import BgCommit from '@/components/board-game/bg-commit'
import SingleProductCard from '@/components/board-game/single-product-card'
import { useRouter } from 'next/router'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'

export default function ProductPage() {
  // 商品物件狀態
  // 注意1: 初始值至少要空物件，比較好的選擇是加入屬性名稱的物件，初次渲染使用的是初始值
  // 注意2: 在應用程式執行過程中，一定要保持狀態的資料類型一致(物件)
  const [product, setProduct] = useState({
    id: 0,
    prod_img: '',
    prod_name: '',
    prod_desc: '',
    prod_intro: '',
    prod_rules: '',
    prod_people: '',
    prod_time: '',
    price: 0,
  })
  const hotsales = [
    {
      id: 247,
      prod_img: '047.jpeg',
      prod_name: '台灣偶像種田 Taiwan Idol Farmers',
      prod_desc:
        '在台灣的一個農村裡，偶像團體為了支持自己的音樂事業，開始種植農作物。他們在田間忙碌，種植不同種類的作物，希望在收穫季節賣出好價錢來籌措經費。不僅要顧好自己的田地，還要與其他團體合作或競爭，看看誰能成為農場界的偶像！',
      prod_intro:
        '偶像種田是一款輕鬆有趣的卡牌遊戲，玩家需要通過種植不同種類的作物來賺取金幣，並利用偶像魅力與其他玩家交易或合作。隨著遊戲的進行，玩家可以選擇擴大農場或提升偶像團體的影響力，最終成為台灣最成功的偶像農夫。',
      prod_rules:
        '玩家需按順序種植卡片上的作物並進行交易，目標是賺取最多的金幣。',
      prod_people: '3-7人',
      prod_time: '30-60分鐘',
      price: 1850,
    },
    {
      id: 276,
      prod_img: '076.jpeg',
      prod_name: '南極冒險 Antarctic Adventure',
      prod_desc:
        '在遙遠的南極大陸，一群可愛的小企鵝正在進行一場緊張刺激的冒險。他們需要在冰雪覆蓋的迷宮中尋找食物，同時避免滑入冰窟窿。這場冒險不僅考驗他們的智慧，也考驗他們的靈巧。',
      prod_intro:
        '南極冒險是一款適合全家人一起玩的桌遊，玩家需要操控企鵝在冰迷宮中滑行，躲避陷阱，並搶奪冰塊。遊戲節奏快，操作簡單，但充滿挑戰和樂趣。每個玩家都要小心自己的行動，因為一個錯誤的滑動就可能掉入陷阱。',
      prod_rules:
        '透過輕推企鵝滑行，收集冰塊並躲避陷阱，最先集滿冰塊的玩家獲勝。',
      prod_people: '2-4人',
      prod_time: '20-30分鐘',
      price: 2240,
    },
    {
      id: 214,
      prod_img: '014.jpeg',
      prod_name: '克蘇魯的遺產 Cthulhu’s Legacy',
      prod_desc:
        '艾莉森·格雷（Allison Gray）是一位年輕的小說家，她的作品以神秘和超自然元素為主題。某天，她在一個寒冷的冬夜中，做了一個奇怪的夢。在這個夢中，她置身於一個古老的神廟，四周是腐朽的雕像和神秘的符號。在夢中，艾莉森遇見了一位神秘的長者，他名為克蘇魯。克蘇魯是一個失落的神祇，被囚禁在地球上的沉沒城市拉萊耶之下。他的存在超越了人類的理解，他的眼睛閃爍著宇宙的秘密。艾莉森醒來時，她感到自己被這個夢境深深吸引。她開始研究克蘇魯神話，追尋這個失落的神秘世界。她的小說開始受到克蘇魯的影響，她的文字中充滿了古老的符號、禁忌的知識和不可名狀的恐怖。艾莉森的小說逐漸引起了讀者的注意，但同時也引來了危險。她的作品似乎喚醒了克蘇魯，而他的遺產開始影響現實世界。艾莉森必須解開克蘇魯的謎團，找到真相，並保護自己和她所愛的人。',
      prod_intro:
        '探索克蘇魯的遺產，揭示失落的神秘！艾莉森的筆下，文字中流淌著古老的力量，禁忌的知識和不可名狀的恐怖。你準備好追尋克蘇魯的足跡，還是被他的遺產所吞噬？',
      prod_rules: '玩家探索遺產，解開謎題，收集日記頁面，並避免瘋狂的影響。',
      prod_people: '2-4人',
      prod_time: '15-30分鐘',
      price: 1780,
    },
    {
      id: 232,
      prod_img: '032.jpeg',
      prod_name: '京都商道 Kyoto Commerce',
      prod_desc:
        '在古老的京都，作為一名精明的商人，你的目標是通過在繁忙的市場中交易稀有商品來獲取財富。你需要運用智慧和策略，在競爭激烈的市場中與其他商人競爭，利用不同的地點來最大化你的收益。各個地點充滿了機會與挑戰，而你的選擇將決定你能否成為京都最富有的商人。',
      prod_intro:
        '《京都商道》帶你回到古老的京都，扮演一位精明的商人。通過在繁忙的市場中交易稀有商品，你需要運用智慧和策略，在激烈的競爭中脫穎而出。選擇不同的地點以最大化收益，最終成為京都最富有的商人。',
      prod_rules:
        '在市場中選擇地點進行交易，利用資源和策略擊敗對手。每個地點提供不同的機會與挑戰，最大化收益即可獲勝。',
      prod_people: '2-5人',
      prod_time: '20-30分鐘',
      price: 1440,
    },
  ]

  const handleCardClick = (prod) => {
    setProduct(prod)
  }

  // 向伺服器獲取資料(建議寫在useEffect外，用async-await)
  const getProduct = async (id) => {
    const baseURL = `http://127.0.0.1:3006/board-game/${id}`
    try {
      const res = await fetch(baseURL)
      const resData = await res.json()
      console.log(resData)
      console.log(resData.row)
      console.log(resData.data.row[0])

      // 設定到狀態中
      // (3.) 設定到狀態後 -> 觸發update(re-render)
      if (typeof resData.data.row[0] === 'object' && resData.data.row[0].id) {
        setProduct(resData.data.row[0])
      }
    } catch (e) {
      console.error(e)
    }
  }

  // 第1步: 宣告路由器
  // router.query 一個物件值，裡面會包含productId屬性
  // router.isReady 一個布林值，一開始是false(初次渲染)，當next完成水合化作用(SSR)後，會改變為true，此時可以得到router.query的值
  const router = useRouter()

  // 第2步: 用useEffect監聽router.isReady變化，當為true時代表query裡有productId可以使用
  useEffect(() => {
    if (router.isReady) {
      // 這裡可以確保一定可以得到router.query的值
      console.log(router.query)
      // 向伺服器要求資料
      getProduct(router.query.pid)
    }

    // 以下為省略eslint檢查一行，這裡再加上router.query意義會有所不同目前會是多餘的
    // eslint-disable-next-line
  }, [router.isReady])

  return (
    <>
      <Navbar />{' '}
      <div id={`${styles.backgroundImage}`} className="pt-5">
        <div className="container pt-5">
          {/* 商品圖片，商品介紹 */}
          <div className="row">
            <div className="col">
              <SingleProductCard product={product} />
            </div>
          </div>
          {/* 商品背景故事，會員商品評論 */}
          <BgCommit prodDesc={product.prod_desc} />
          {/* 相關熱門商品 */}
          <div className="row" style={{ left: '-20px', position: 'relative' }}>
            <div className="col">
              <h4 className={`${styles.h4}`}>熱門商品</h4>
              <div className="row" style={{ width: '1400px' }}>
                {hotsales.map((v, i) => (
                  <div className="col-6 col-xxl-3">
                    <ProdCard product={v} onClick={handleCardClick} />
                  </div>
                ))}
                {/* <div className="col-6 col-xxl-3">
                  <ProdCard product={hotsales[0]} />
                </div>
                <div className="col-6 col-xxl-3">
                  <ProdCard product={hotsales[1]} />
                </div>
                <div className="col-6 col-xxl-3">
                  <ProdCard product={hotsales[2]} />
                </div>
                <div className="col-6 col-xxl-3">
                  <ProdCard product={hotsales[3]} />
                </div> */}
              </div>
            </div>
          </div>
          {/* 我的瀏覽紀錄 */}
          {/* <div className="row">
            <div className="col">
              <h4 className={`${styles.h4}`}>我的瀏覽紀錄</h4>
              <div className="row">
                <div className="col-6 col-xxl-3">
                  <ProdCard product={product} />
                </div>
                <div className="col-6 col-xxl-3">
                  <ProdCard product={product} />
                </div>
                <div className="col-6 col-xxl-3">
                  <ProdCard product={product} />
                </div>
                <div className="col-6 col-xxl-3">
                  <ProdCard product={product} />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}
