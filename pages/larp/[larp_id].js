import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import styles from '@/styles/larp/Larp-info.module.css'
import Link from 'next/link'
import Line from '@/components/larp/title-line'
import AccordionItem from '@/components/larp/Accordion'
import Calender from '@/components/larp/calender'
import BookForm from '@/components/larp/book-form'
import CarouselCard from '@/components/larp/Carousel'
import { useRouter } from 'next/router'

export default function LarpId() {
  const router = useRouter()
  //設定larpid是從queryString抓下來的
  const { larpid } = router.query
  const [escape, setEscape] = useState([])

  //跟伺服器抓資料
  const getEscape = async () => {
    if (!larpid) return // 檢查 larpid 是否已經存在，避免 undefined 錯誤
    const baseURL = `http://127.0.0.1:3006/larp/${larpid}`
    try {
      const res = await fetch(baseURL)
      const resData = await res.json()

      console.log(resData)
      setEscape(resData) // 使用 `[resData]` 將資料包裝成一個陣列
      console.log('Fetched data:', resData)

    } catch (error) {
      console.error('Error fetching escape data:', error)
    }
  }

  //id改變的時候，重新載入資料
  useEffect(() => {
    getEscape()
  }, [larpid])

  return (
    <div className={styles.larpBody}>
      {/* 置頂大圖 */}
      {escape.map((v) => {
        return (
          <div key={v.id}>
            <h1>{v.larp_name}</h1>
            <div className="position-relative">
              <Image src={v.larp_top_img} alt={v.larp_name} className="w-100" />
            </div>
          </div>
        )
      })}
      {/* <div className="position-relative">
        <Image
          src="https://i.postimg.cc/jdwKtVNh/T.png"
          alt=""
          className="w-100"
        /> */}

      {/* 立即預約按鈕 */}
      <Link href="#bookGroup" className={styles.orderButton}>
        <svg
          width="100%"
          height={49}
          viewBox="0 0 392 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H392L338.154 49H0V0Z" fill="#D7BF7D" />
          <path
            d="M179.472 17.824H199.824V20.656H179.472V17.824ZM178.68 32.344H200.544V35.224H178.68V32.344ZM188.04 13.624H191.064V19.408H188.04V13.624ZM193.464 21.496L196.776 22.072C195.84 26.032 194.544 30.424 193.416 33.256L190.608 32.632C191.736 29.704 192.912 25.048 193.464 21.496ZM182.568 22.288L185.304 21.568C186.456 24.544 187.344 28.264 187.584 30.808L184.632 31.6C184.464 29.104 183.6 25.216 182.568 22.288ZM210.048 19.456H216.384V22H210.048V19.456ZM208.752 14.8H211.488V32.632L208.752 33.112V14.8ZM207.096 32.056C209.4 31.6 212.952 30.736 216.288 29.896L216.624 32.608C213.648 33.472 210.408 34.36 207.936 35.032L207.096 32.056ZM213.024 28.216L215.352 27.088C216.84 29.152 218.448 31.864 219.024 33.712L216.504 35.008C215.976 33.16 214.464 30.328 213.024 28.216ZM210.024 14.8H218.112V26.608H210.024V23.944H215.448V17.464H210.024V14.8ZM225.792 14.752H228.768V29.32C228.768 30.712 228.552 31.624 227.664 32.152C226.8 32.704 225.672 32.776 224.088 32.776C224.016 31.888 223.56 30.448 223.104 29.608C224.04 29.68 225.048 29.656 225.384 29.656C225.696 29.656 225.792 29.56 225.792 29.248V14.752ZM219.432 14.752H227.328V17.656H222.384V36.136H219.432V14.752ZM236.376 14.632H244.032V17.128H236.376V14.632ZM235.824 22.36H244.944V24.904H235.824V22.36ZM239.4 23.752H242.16V33.088C242.16 34.408 241.944 35.176 241.032 35.608C240.168 36.064 238.968 36.112 237.336 36.112C237.24 35.296 236.856 34.12 236.472 33.352C237.504 33.376 238.632 33.376 238.968 33.376C239.304 33.376 239.4 33.304 239.4 33.016V23.752ZM243.168 14.632H243.768L244.296 14.488L246.048 15.736C244.872 17.632 243.168 19.816 241.632 21.184C241.248 20.68 240.504 19.888 240.024 19.48C241.224 18.352 242.568 16.432 243.168 15.16V14.632ZM244.104 22.36H244.464L244.848 22.264L246.624 22.672C246.12 24.688 245.448 26.944 244.92 28.384L242.784 27.904C243.216 26.608 243.768 24.448 244.104 22.696V22.36ZM236.808 19.84L238.248 17.944C240.216 18.856 242.76 20.32 243.984 21.472L242.424 23.608C241.272 22.408 238.8 20.824 236.808 19.84ZM245.928 14.56H258.216V16.984H245.928V14.56ZM249.384 24.184V25.72H254.736V24.184H249.384ZM249.384 27.688V29.224H254.736V27.688H249.384ZM249.384 20.704V22.216H254.736V20.704H249.384ZM246.744 18.592H257.496V31.336H246.744V18.592ZM250.608 15.88L253.896 16.24C253.44 17.752 252.936 19.264 252.528 20.296L250.032 19.84C250.272 18.688 250.536 17.056 250.608 15.88ZM249.096 31.36L251.448 32.896C250.128 34.168 247.848 35.512 245.976 36.232C245.52 35.704 244.68 34.84 244.056 34.36C245.928 33.688 248.04 32.392 249.096 31.36ZM252.576 32.968L254.712 31.528C256.056 32.392 257.88 33.712 258.816 34.624L256.56 36.232C255.72 35.344 253.944 33.928 252.576 32.968ZM275.832 24.496L278.136 23.32C279.384 24.976 280.752 27.208 281.28 28.744L278.76 30.04C278.328 28.552 277.056 26.224 275.832 24.496ZM276.624 17.704H285.24V20.416H276.624V17.704ZM284.016 17.704H286.8C286.8 17.704 286.8 18.664 286.776 19.024C286.416 29.608 286.104 33.424 285.096 34.696C284.424 35.608 283.776 35.872 282.768 36.04C281.88 36.16 280.416 36.16 279 36.088C278.952 35.272 278.568 34.024 278.04 33.208C279.552 33.328 280.944 33.328 281.568 33.328C282.048 33.328 282.336 33.256 282.6 32.92C283.392 32.104 283.728 28.048 284.016 18.28V17.704ZM276.768 13.6L279.744 14.248C278.736 17.824 277.08 21.352 275.256 23.536C274.68 23.056 273.408 22.192 272.688 21.784C274.512 19.888 275.976 16.744 276.768 13.6ZM268.32 13.648L270.864 14.536C269.88 16.408 268.752 18.544 267.816 19.864L265.872 19.072C266.736 17.632 267.768 15.328 268.32 13.648ZM271.2 16.48L273.624 17.488C271.848 20.248 269.496 23.584 267.648 25.624L265.896 24.736C267.744 22.576 269.928 19.048 271.2 16.48ZM264.624 19.336L265.968 17.344C267.264 18.448 268.752 19.984 269.376 21.04L267.912 23.296C267.312 22.144 265.848 20.488 264.624 19.336ZM270.6 22.264L272.64 21.376C273.6 22.984 274.56 25.072 274.872 26.464L272.688 27.472C272.4 26.104 271.512 23.92 270.6 22.264ZM264.6 24.208C266.832 24.136 270.144 23.992 273.36 23.824V26.104C270.336 26.344 267.216 26.56 264.84 26.704L264.6 24.208ZM271.032 28.288L273.144 27.592C273.768 29.032 274.416 30.904 274.704 32.128L272.448 32.944C272.232 31.696 271.608 29.752 271.032 28.288ZM265.632 27.736L268.008 28.144C267.768 30.448 267.24 32.848 266.544 34.384C266.04 34.072 264.96 33.568 264.36 33.328C265.056 31.912 265.44 29.776 265.632 27.736ZM268.416 25.48H270.984V36.184H268.416V25.48Z"
            fill="black"
          />
        </svg>
      </Link>
      {/* </div> */}
      <div className={styles.larpContainer} id={styles.larpStory}>
        {/* 故事背景分隔線 */}
        <Line title="故事背景" />
        {/* 故事內容 */}
        <h4>
          在海上漂流多年的幽靈船突然現身，據說這艘船承載著一個古老的詛咒，所有踏上這艘船的人都無法活著離開。你和你的團隊是尋寶者，因為傳說中的寶藏而登上這艘神秘的船。船內到處都是失落靈魂的低語，隱藏著解開詛咒的關鍵線索。你們必須在幽靈和詛咒的威脅下，找到寶藏，並逃出這艘致命的船，否則你們將永遠成為幽靈船的一部分。
        </h4>
      </div>
      {/* 第一段大圖 */}
      <div id={styles.p1} className="position-relative">
        <Image
          alt=""
          src="https://i.postimg.cc/c15Zp1KH/1.png"
          width={'100%'}
        />
        <div className={styles.p1Text}>
          <h3>扭曲的歷史迷宮</h3>
          <h4>
            你們發現自己被困在一個不斷變化的歷史迷宮中，這裡的時間線已經被篡改。每個錯誤的抉擇都可能使歷史更加扭曲，必須迅速修復時間錯誤。
          </h4>
        </div>
      </div>
      {/* 第二段大圖 */}
      <div id={styles.p2} className="position-relative">
        <Image
          alt=""
          src="https://i.postimg.cc/HxhKhxS1/2.png"
          width={'100%'}
        />
        <div className={styles.p2Text}>
          <h3>追逐時光之影</h3>
          <h4>
            隨著時間流逝，你們發現邪惡組織正加速進行他們的計劃。你們必須在時光機徹底失控之前找到它，並將時間線恢復至原本的軌道。
          </h4>
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
              <h3>4-8人</h3>
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
              <h3>600元/人</h3>
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
              <h3>60分鐘</h3>
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
            height: 670,
            backgroundColor: 'rgb(82, 95, 117)',
          }}
        />
        {/* 立即預約分隔線 */}
        <Line title="立即預約" />
        {/* 立即預約進度條 */}
        <div
          id={styles.orderStep}
          className="d-flex justify-content-around align-items-center"
          style={{ margin: '60px 189px 0 189px' }}
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
          <BookForm />
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
