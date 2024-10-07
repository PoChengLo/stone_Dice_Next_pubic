import React, { useEffect, useRef, useState } from 'react'
import { Image } from 'react-bootstrap'
import styles from '@/styles/larp/Larp-info.module.css'
import Link from 'next/link'
import Line from '@/components/larp/title-line'
import AccordionItem from '@/components/larp/Accordion'
import Calender from '@/components/larp/calender'
import BookForm from '@/components/larp/book-form'
import CarouselCard from '@/components/larp/Carousel'
import { useRouter } from 'next/router'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'

export default function LarpId() {
  const router = useRouter()

  const [escape, setEscape] = useState({
    id: 0,
    larp_name: '',
    larp_top_img: '',
    price: 0,
    larp_people: '',
    larp_duration: '',
    larp_p1_img: '',
    larp_p2_img: '',
    larp_title1: '',
    larp_title2: '',
    larp_p1: '',
    larp_p2: '',
    larp_intro: '',
  })

  const [escapes, setEscapes] = useState([])

  //跟伺服器抓資料
  const getEscape = async (larpid) => {
    const baseURL = `http://127.0.0.1:3006/larp/${larpid}`
    if (!larpid) return // 檢查 larpid 是否已經存在，避免 undefined 錯誤
    try {
      const res = await fetch(baseURL)
      const resData = await res.json()
      // console.log('API Response:', resData)
      // console.log(resData.single)

      // 檢查resData.single是否為陣列，且長度至少為1
      if (Array.isArray(resData.single) && resData.single.length > 0) {
        setEscape(resData.single[0])
      }
    } catch (e) {
      console.error(e)
    }
  }

  const getAllEscapes = async (larpid) => {
    const baseURL = `http://127.0.0.1:3006/larp/${larpid}`
    const res = await fetch(baseURL)
    const resData = await res.json()
    setEscapes(resData.all)
  }

  //id改變的時候，重新載入資料
  useEffect(() => {
    if (router.isReady) {
      // console.log('Router is ready with larpid:', router.query.larpid)
      getEscape(router.query.larpid)
      getAllEscapes()
    }
  }, [router.isReady, router.query.larpid])

  // 解決Accordion產生的滾輪滑動位置不準確問題
  useEffect(() => {
    // 檢查 URL 中是否包含 `#order`
    if (window.location.hash === '#order') {
      // 使用 `getElementById` 取得目標元素
      const order = document.getElementById('order')
      if (order) {
        order.scrollIntoView({ behavior: 'smooth' })
      }
    }
  })
  const sceneRef = useRef()

  useEffect(() => {
    // 確保這段代碼僅在客戶端運行
    if (typeof window !== 'undefined') {
      const PANOLENS = require('panolens') // 動態導入 PANOLENS

      if (sceneRef.current) {
        const panorama = new PANOLENS.ImagePanorama(
          'https://i.postimg.cc/WbFRqfh9/fotor-ai-2024100511526.png'
        )

        const viewer = new PANOLENS.Viewer({
          container: sceneRef.current, // 通過 ref 定位到 div
        })

        viewer.add(panorama)
      }
    }
  }, [])

  return (
    <div className={styles.larpBody}>
      {/* 置頂大圖 */}
      <Navbar />
      <div className="position-relative">
        <h1
          className={`position-absolute ${styles.larpName} strokeText`}
          data-storke={escape.larp_name}
        >
          {escape.larp_name}
        </h1>
        <Image src={escape.larp_top_img} alt="" className="w-100" />
        {/* 立即預約按鈕 */}
        <Link
          href="#order"
          scroll={true}
          className={styles.orderButton}
          style={{ zIndex: '1' }}
        >
          {/* <OrderRightNow /> */}
          <Image
            // width={'auto'}
            // height={'45px'}
            className={styles.svgImg}
            src="../larp/img/svgButton.png"
            alt=""
          />
        </Link>
      </div>
      <div className={styles.larpContainer} id={styles.larpStory}>
        {/* 故事背景分隔線 */}
        <Line title="故事背景" />
        {/* 故事內容 */}
        <h4 className={styles.h4Text}>{escape.larp_intro}</h4>
      </div>
      {/* 第一段大圖 */}
      <div id={styles.p1} className="position-relative">
        <Image alt="" src={escape.larp_p1_img} width={'100%'} />
        <div className={styles.p1Text}>
          <h3>{escape.larp_title1}</h3>
          <h4>{escape.larp_p1}</h4>
        </div>
      </div>
      {/* 第二段大圖 */}
      <div id={styles.p2} className="position-relative">
        <Image alt="" src={escape.larp_p2_img} width={'100%'} />
        <div className={styles.p2Text}>
          <h3>{escape.larp_title2}</h3>
          <h4>{escape.larp_p2}</h4>
        </div>
      </div>
      <div className={styles.larpContainer}>
        {/* 遊戲須知分隔線 */}
        <Line title="遊戲須知" />
        {/* icon */}
        <div
          id={styles.icons}
          className="d-flex flex-row justify-content-around"
        >
          {/* 人數 */}
          <div className="d-inline flex-column text-white text-center">
            <svg
              width={100}
              height={99}
              viewBox="0 0 100 99"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.5"
                y="1.5"
                width={97}
                height="95.4733"
                rx="47.7366"
                stroke="white"
                strokeWidth={3}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M61.2622 55.2495C65.4567 57.5035 68.5709 61.1535 70.1825 65.9136C73.3983 65.4676 76.1943 64.4791 78.6668 62.969L79.4831 62.45L79.2119 61.5346C77.308 55.5723 72.2612 52.1609 65.3366 52.1609H65.287C63.9904 52.1489 62.7571 52.2625 61.5962 52.4942C60.2305 52.7669 58.9651 53.2031 57.8147 53.791C59.0307 54.1814 60.1823 54.6692 61.2622 55.2495ZM65.3279 54.769H65.3366C70.8398 54.769 74.6122 57.1838 76.3447 61.2908C74.9698 62.0173 73.4719 62.5778 71.8206 62.9623C70.3209 59.6428 68.1062 56.8776 65.3279 54.769Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M65.0471 46.2089C65.1265 46.2117 65.2064 46.2131 65.2868 46.2131C68.9652 46.2131 71.9532 43.2244 71.9532 39.544C71.9532 36.2281 69.4902 33.4536 66.2771 32.9743C66.8131 34.6125 67.102 36.358 67.102 38.1591C67.102 41.0742 66.3691 43.8149 65.0471 46.2089ZM63.4138 48.6309C64.0169 48.7558 64.6423 48.8213 65.2868 48.8213C70.4066 48.8213 74.5613 44.6639 74.5613 39.544C74.5613 34.4503 70.4066 30.293 65.2868 30.293C65.2348 30.293 65.183 30.2934 65.1313 30.2943C64.1735 30.3112 63.2603 30.4828 62.3917 30.7624C62.8547 31.5093 63.2493 32.3032 63.5673 33.1342C64.1666 34.7 64.4939 36.3973 64.4939 38.1591C64.4939 40.8751 63.7449 43.4003 62.4098 45.5526C61.9449 46.3022 61.4088 47.0066 60.8086 47.658C61.6168 48.1079 62.4891 48.4394 63.4138 48.6309Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.215 61.2959C25.4899 61.958 26.9123 62.4877 28.4718 62.8758C29.9709 59.5987 32.1737 56.8604 34.9253 54.7702C29.568 54.8514 25.8979 57.2603 24.215 61.2959ZM38.7229 52.4629C37.6468 52.2623 36.5064 52.1599 35.3058 52.1599H35.2067C28.2821 52.1599 23.2353 55.574 21.3548 61.5336L21.0575 62.449L21.8738 62.9681C24.2238 64.4051 26.9962 65.3675 30.0869 65.8631C31.7123 61.1047 34.8585 57.4453 39.0699 55.2073C40.1769 54.6191 41.3575 54.129 42.6034 53.7431C41.4257 53.155 40.1292 52.7251 38.7229 52.4629Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.7347 47.6572C39.1339 47.0058 38.5974 46.3016 38.1321 45.5521C36.7958 43.3997 36.0468 40.8744 36.0468 38.1583C36.0468 36.398 36.3741 34.7 36.9742 33.1343C37.2926 32.3036 37.6878 31.5101 38.1516 30.7642C37.283 30.4821 36.3699 30.3104 35.4122 30.2935C35.3604 30.2926 35.3085 30.2921 35.2565 30.2921C30.1368 30.2921 25.9794 34.4495 25.9794 39.5432C25.9794 44.6657 30.1368 48.8204 35.2565 48.8204C35.9011 48.8204 36.5261 48.755 37.1288 48.6301C38.053 48.4385 38.9249 48.1071 39.7347 47.6572ZM34.2644 32.9737C31.0511 33.4538 28.5875 36.2286 28.5875 39.5432C28.5875 43.2248 31.5767 46.2123 35.2565 46.2123C35.3363 46.2123 35.4156 46.2109 35.4945 46.2082C34.1715 43.8139 33.4387 41.0732 33.4387 38.1583C33.4387 36.3587 33.7275 34.6126 34.2644 32.9737Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.1009 66.8758C39.1334 69.0822 43.9821 70.2132 50.007 70.2132H50.2287C56.2596 70.2132 61.1114 69.0818 65.1444 66.8748C62.8857 61.101 57.6858 57.7124 50.1817 57.7124H50.0638C42.561 57.7124 37.3573 61.1018 35.1009 66.8758ZM67.458 68.5492C62.7425 71.4234 57.1063 72.8214 50.2287 72.8214H50.007C43.1345 72.8214 37.5009 71.4234 32.7854 68.5492L31.9586 68.0432L32.2507 67.12C34.6659 59.4807 41.1575 55.1042 50.0617 55.1042H50.1817C59.0885 55.1042 65.5776 59.4807 67.9953 67.12L68.2874 68.0432L67.458 68.5492Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50.271 47.3195C55.3144 47.3195 59.4203 43.2135 59.4203 38.1701C59.4203 33.1296 55.3147 29.0233 50.271 29.0233C45.2271 29.0233 41.1216 33.1296 41.1216 38.1701C41.1216 43.2135 45.2275 47.3195 50.271 47.3195ZM62.0285 38.1701C62.0285 44.654 56.7548 49.9276 50.271 49.9276C43.7871 49.9276 38.5134 44.654 38.5134 38.1701C38.5134 31.6888 43.7871 26.4152 50.271 26.4152C56.7548 26.4152 62.0285 31.6888 62.0285 38.1701Z"
                fill="white"
              />
            </svg>
            <div>
              <h3>遊玩人數</h3>
              <h3>{escape.larp_people}</h3>
            </div>
          </div>
          {/* 價錢 */}
          <div className="d-inline flex-column text-white text-center">
            <svg
              width={100}
              height={100}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.5"
                y="2.5"
                width={97}
                height="95.4733"
                rx="47.7366"
                stroke="white"
                strokeWidth={3}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50 97C75.9574 97 97 75.9574 97 50C97 24.0426 75.9574 3 50 3C24.0426 3 3 24.0426 3 50C3 75.9574 24.0426 97 50 97ZM50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43.7424 30.4281C39.8579 30.4281 36.5599 33.8086 36.5599 38.0898C36.5599 40.6294 37.1101 42.12 37.8788 43.0989C38.6613 44.0954 39.8279 44.7668 41.4868 45.3577C41.4882 45.3582 41.4896 45.3587 41.491 45.3592L59.515 51.6466C61.3963 52.3162 63.1886 53.2483 64.4831 54.906C65.7909 56.5808 66.4401 58.7992 66.4401 61.7424C66.4401 67.5876 61.9474 72.404 56.2574 72.404H45.0001C38.6005 72.404 33.5 66.9983 33.5 60.425C33.5 59.5966 34.1716 58.925 35 58.925C35.8284 58.925 36.5 59.5966 36.5 60.425C36.5 65.4685 40.3816 69.404 45.0001 69.404H56.2574C60.1481 69.404 63.4401 66.0768 63.4401 61.7424C63.4401 59.2365 62.8916 57.7423 62.1186 56.7524C61.333 55.7464 60.1628 55.0621 58.5135 54.4745L40.485 48.1855C38.6132 47.5193 36.817 46.6042 35.5194 44.9518C34.2074 43.2811 33.5599 41.0591 33.5599 38.0898C33.5599 32.311 38.0461 27.4281 43.7424 27.4281H54.9999C61.3995 27.4281 66.5 32.8338 66.5 39.4071C66.5 40.2355 65.8284 40.9071 65 40.9071C64.1716 40.9071 63.5 40.2355 63.5 39.4071C63.5 34.3637 59.6184 30.4281 54.9999 30.4281H43.7424Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M49.9701 21.5C50.7985 21.5 51.4701 22.1716 51.4701 23V76.8921C51.4701 77.7205 50.7985 78.3921 49.9701 78.3921C49.1417 78.3921 48.4701 77.7205 48.4701 76.8921V23C48.4701 22.1716 49.1417 21.5 49.9701 21.5Z"
                fill="white"
              />
            </svg>
            <div>
              <h3>遊玩價錢</h3>
              <h3>{escape.price} /人</h3>
            </div>
          </div>
          {/* 時間 */}
          <div className="d-inline flex-column text-white text-center">
            <svg
              width={100}
              height={100}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M97.8508 50.0001C97.8508 23.5724 76.427 2.14856 49.9993 2.14856C23.5716 2.14856 2.14771 23.5724 2.14771 50.0001C2.14771 76.4278 23.5716 97.8517 49.9993 97.8517C76.427 97.8517 97.8508 76.4278 97.8508 50.0001Z"
                stroke="white"
                strokeWidth={3}
                strokeMiterlimit={10}
              />
              <path
                d="M46.543 22.37V56.3153L69.5297 69.5312"
                stroke="white"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <h3>遊玩時間</h3>
              <h3>{escape.larp_duration}</h3>
            </div>
          </div>
        </div>
        {/* 注意事項手風琴 */}
        <AccordionItem />
        {/* 環境預覽分隔線 */}
        <Line title="環境預覽" />
        {/* 環境預覽API */}
        <div
          id={styles.VRspace}
          style={{
            width: '100%',
            height: 856,
            backgroundColor: 'rgb(82, 95, 117)',
          }}
        >
          <div
            id="scene"
            ref={sceneRef}
            style={{ width: '100%', height: '100%' }}
          ></div>
        </div>
        {/* 立即預約分隔線 */}
        <div id="order">
          <Line title="立即預約" />
        </div>
        {/* 立即預約進度條 */}
        <div
          id={styles.orderStep}
          className="d-flex justify-content-around align-items-center"
        >
          <div
            className="d-flex align-items-center"
            style={{ padding: '0 22px' }}
          >
            <svg
              width={17}
              height={17}
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.5" cy="8.5" r={8} stroke="#D7BF7D" />
            </svg>
            <p className="d-inline" style={{ margin: '0 0 0 10px' }}>
              填寫訂單資料
            </p>
          </div>
          <div
            className={`${styles.line} flex-fill`}
            style={{ backgroundColor: '#6e7c91' }}
          />
          <div
            className="d-flex align-items-center"
            style={{ padding: '0 22px' }}
          >
            <svg
              width={17}
              height={17}
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.5" cy="8.5" r={8} stroke="#6e7c91" />
            </svg>
            <p
              className="d-inline"
              style={{ margin: '0 0 0 10px', color: '#6e7c91' }}
            >
              確認訂單資料
            </p>
          </div>
          <div
            className={`${styles.line} flex-fill`}
            style={{ backgroundColor: '#6e7c91' }}
          />
          <div
            className="d-flex align-items-center"
            style={{ padding: '0 22px' }}
          >
            <svg
              width={17}
              height={17}
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.5" cy="8.5" r={8} stroke="#6e7c91" />
            </svg>
            <p
              className="d-inline"
              style={{ margin: '0 0 0 10px', color: '#6e7c91' }}
            >
              付款
            </p>
          </div>
          <div
            className={`${styles.line} flex-fill`}
            style={{ backgroundColor: '#6e7c91' }}
          />
          <div
            className="d-flex align-items-center"
            style={{ padding: '0 22px' }}
          >
            <svg
              width={17}
              height={17}
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.5" cy="8.5" r={8} stroke="#6e7c91" />
            </svg>
            <p
              className="d-inline"
              style={{ margin: '0 0 0 10px', color: '#6e7c91' }}
            >
              預約完成
            </p>
          </div>
        </div>
        {/* 預約 */}
        <div id={styles.bookGroup} className="d-flex" style={{ marginTop: 20 }}>
          {/* 行事曆 */}
          <Calender />
          {/* 預約表單 */}
          <BookForm
            // larpName={escape.larp_name}
            // price={escape.price}
            // NameValue={escapes.id}
            allName={escapes.larp_name}
            escapes={escapes}
            escape={escape}
          />
        </div>
        {/* 玩家反饋分隔線 */}
        <Line title="玩家反饋" />
        {/* 評論區 */}
        <div
          id={styles.commentGroup}
          className="d-flex justify-content-between"
        >
          <CarouselCard />
        </div>
      </div>
    </div>
  )
}
