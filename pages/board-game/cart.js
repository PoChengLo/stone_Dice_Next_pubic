import React from 'react'
import Image from 'next/image'
import SideCart from '../../components/board-game/side-cart'
import { useCart } from '@/hooks/use-cart-state'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { BsXLg } from 'react-icons/bs'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import { Button } from 'react-bootstrap'
import { BsCircle, BsTrash } from 'react-icons/bs'
import { useAuth } from '@/hooks/use-auth'
import useLocalStorage from '@/hooks/use-localstorage'
import { useRouter } from 'next/router'
import ProdCard from '@/components/board-game/prod-card'

export default function ProductCart() {
  //可從useCart中獲取的各方法與屬性，參考README檔中說明
  const {
    cart,
    items,
    addItem,
    removeItem,
    updateItem,
    updateItemQty,
    clearCart,
    isInCart,
    increment,
    decrement,
  } = useCart()

  const preTotal = items
    .map((item) => item.subtotal)
    .reduce((acc, curr) => acc + curr, 0)

  const finalTotal = items
    .map((item) => item.subtotal)
    .reduce((acc, curr) => acc + curr, 0)

  // console.log('preTotal:', preTotal, 'finalTotal:', finalTotal)

  // 設定會員資料
  const [authInfo, setAuthInfo] = useState({ isAuth: false })
  console.log(authInfo)

  // 判斷是否登入會員
  const router = useRouter()

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

  // 修正 Next hydration 問題
  // https://stackoverflow.com/questions/72673362/error-text-content-does-not-match-server-rendered-html
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    // 提取 localStorage 的 auth 資料，使用useState 放入變數
    try {
      const auth_info = JSON.parse(localStorage.getItem('auth'))

      if (auth_info) {
        setAuthInfo(auth_info)
      }
    } catch (e) {
      console.log(e)
    }

    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }
  // 修正 end

  // console.log(authInfo)
  // console.log(authInfo.userData)
  // console.log(authInfo.userData.id)
  return (
    <>
      <Navbar />
      <div id={`${styles.backgroundImage}`} className="pt-5">
        <div className={`container pt-5 ${styles.cart}`}>
          {/* 步驟提示，購物車 */}
          <div className="row my-3">
            <div className="col d-flex align-items-xxl-center justify-content-xxl-evenly flex-xxl-row flex-column justify-content-evenly align-items-center">
              <div className="d-flex align-items-center mb-2 mb-xxl-0">
                <BsCircle className={`${styles.cart_icon} me-2`} />
                <p className={`${styles.p} ${styles.steps_active}`}>
                  確認購物車內容
                </p>
              </div>
              <hr className={`${styles.hr} ${styles.hr_no_active}`} />

              <div className="d-flex align-items-center  mb-2 mb-xxl-0">
                <BsCircle
                  className={`${styles.cart_icon} ${styles.cart_icon_no_active} me-2`}
                />
                <p className={`${styles.p} ${styles.steps_no_active}`}>
                  填寫購買人資訊
                </p>
              </div>
              <hr className={`${styles.hr} ${styles.hr_no_active}`} />

              <div className="d-flex align-items-center  mt-2 mt-xxl-0">
                <BsCircle
                  className={`${styles.cart_icon} ${styles.cart_icon_no_active} me-2`}
                />{' '}
                <p className={`${styles.p}  ${styles.steps_no_active}`}>
                  選擇運送與付款方式
                </p>
              </div>
            </div>
          </div>
          {/* 主要區域 */}
          <div className={`row my-5 p-xxl-5 py-3 ${styles.cart_main}`}>
            {/* 購物車卡片區域 */}
            <div className="col-12 col-xxl-8">
              {/* 單張卡片 */}
              {items.map((v, i) => {
                return (
                  <div className={`card mb-3 ${styles.cart_card}`} key={v.id}>
                    <div className="row g-0 p-3">
                      <div className="col-xxl-2 col-4">
                        <Image
                          src={`/board-game/product-pic/${v.prod_img}`}
                          className="img-fluid rounded-start"
                          alt="..."
                          width={130}
                          height={130}
                        />
                      </div>
                      <div className="col-xxl-10 col-8 d-flex align-items-xxl-center justify-content-xxl-evenly  ">
                        <div className="card-body px-4 py-0">
                          <div className="row">
                            <div className="col-xxl-4 col-12 mt-2 mt-xxl-0 px-xxl-3 px-0">
                              <p className="card-title m-0">{v.prod_name}</p>
                            </div>
                            <div className="col-xxl-2 col-12 p-0 mt-2 mt-xxl-0 d-flex align-items-xxl-center justify-content-xxl-center justify-content-start">
                              <p className="card-text">
                                NT$ {v.price.toLocaleString()}
                              </p>
                            </div>
                            <div className="col-xxl-2 col-12 p-0 mt-2 mt-xxl-0 d-flex align-items-xxl-center justify-content-xxl-center justify-content-start">
                              <FiMinus
                                onClick={() => {
                                  decrement(v.id)
                                }}
                                className={`me-xxl-1 me-2 ${styles.cart_card_icon}`}
                              />
                              <p className="card-text m-xxl-1 me-2">
                                {v.quantity}
                              </p>
                              <FiPlus
                                onClick={() => {
                                  increment(v.id)
                                }}
                                className={`m-0 ${styles.cart_card_icon}`}
                              />
                            </div>
                            <div className="col-xxl-2 col-6 p-0 mt-2 mt-xxl-0 d-flex align-items-xxl-center justify-content-xxl-center justify-content-start">
                              <p className="card-text">
                                NT$ {(v.price * v.quantity).toLocaleString()}
                              </p>
                            </div>
                            <div className="col-xxl-2 col-6 p-0 mt-2 mt-xxl-0 d-flex align-items-xxl-center justify-content-xxl-center justify-content-end ">
                              <BsTrash
                                onClick={() => {
                                  removeItem(v.id)
                                }}
                                className={`m-0 ${styles.cart_card_icon}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
              {/* 備註區域 */}
              <div className="row mt-3">
                <div className="col ">
                  <label
                    htmlFor="cart-commit"
                    className={`form-label ${styles.h4}`}
                  >
                    新增備註到您的訂單
                  </label>
                  <input
                    type="text"
                    className={`form-control mb-3 ${styles.white_to_text}`}
                    id="cart-commit"
                    placeholder="新增備註..."
                  />
                </div>
              </div>
            </div>
            {/* 優惠卷區域 */}
            <div className="col-xxl-4 col-12 p-xxl-5 p-3 d-flex flex-column justify-content-center">
              <div className="d-flex justify-content-between mb-3">
                <h4>小計</h4>
                <h4>NT$ {preTotal.toLocaleString()}</h4>
              </div>
              <hr className={`${styles.cart_hr}`} />
              <div className="my-3">
                <label
                  htmlFor="discount-input"
                  className={`form-label mb-3 ${styles.h4}`}
                >
                  有優惠卷嗎？
                </label>
                <input
                  type="text"
                  className={`form-control mb-3 ${styles.white_to_text}`}
                  id="discount-input"
                  placeholder="請輸入優惠碼"
                />
                <div id="discount-help" className="form-text mb-3 ">
                  <h5 className={`${styles.h5}`}>
                    輸入優惠碼，優惠將於結帳時顯示
                  </h5>
                </div>
                <hr className={`${styles.cart_hr}`} />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h4>總計</h4>
                <h4>NT$ {finalTotal.toLocaleString()}</h4>
              </div>
              <hr className={`${styles.cart_hr}`} />

              <div className="d-flex flex-column mt-3">
                <Button href="./" className={`${styles.btn} mb-3`}>
                  繼續購物
                </Button>
                <Button
                  onClick={() => {
                    const query = { ...router.query }
                    if (authInfo.isAuth) {
                      query.user_id = authInfo.userData.id
                      router.push(
                        `/board-game/user-info?` + new URLSearchParams(query)
                      )
                    } else {
                      router.push('/user-profile/login')
                    }
                  }}
                  className={`${styles.btn} `}
                >
                  填寫購買人資訊
                </Button>
              </div>
            </div>
          </div>
          {/* 相關熱門商品 */}
          <div className="row" style={{ left: '-30px', position: 'relative' }}>
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
        </div>
      </div>
    </>
  )
}
