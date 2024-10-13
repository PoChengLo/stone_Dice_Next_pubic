import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import SideCartAccordion from '@/components/board-game/side-cart-accordion'
import ETicketTabs from '@/components/board-game/e-ticket-tabs'
import Link from 'next/link'
import { useCart } from '@/hooks/use-cart-state'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import { BsCircle } from 'react-icons/bs'
import { Button } from 'react-bootstrap'

export default function UserInfo() {
  // 會員物件狀態
  const [userInfo, setUserInfo] = useState({
    user_id: 0,
    user_name: '',
    mobile: '',
    real_name: '',
  })

  // 向伺服器獲取資料(建議寫在useEffect外，用async-await)
  const getUser_info = async (user_id) => {
    const baseURL = `http://127.0.0.1:3006/board-game/user-info?user_id=${user_id}`
    try {
      const res = await fetch(baseURL)
      const resData = await res.json()
      console.log(resData.data.user)
      // 設定到狀態中
      // (3.) 設定到狀態後 -> 觸發update(re-render)
      if (
        typeof resData.data.user[0] === 'object' &&
        resData.data.user[0].user_id
      ) {
        setUserInfo(resData.data.user[0])
      }
    } catch (e) {
      console.log(e)
    }
  }

  //可從useCart中獲取的各方法與屬性，參考README檔中說明
  const { items } = useCart()

  // 修正 Next hydration 問題
  // https://stackoverflow.com/questions/72673362/error-text-content-does-not-match-server-rendered-html
  const [hydrated, setHydrated] = useState(false)

  // 第1步: 宣告路由器
  // router.query 一個物件值，裡面會包含productId屬性
  // router.isReady 一個布林值，一開始是false(初次渲染)，當next完成水合化作用(SSR)後，會改變為true，此時可以得到router.query的值
  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      setHydrated(true)
      // 這裡可以確保一定可以得到router.query的值
      console.log(router.query)
      // 向伺服器要求資料
      getUser_info(router.query.user_id)
    }
    // 以下為省略eslint檢查一行，這裡再加上router.query意義會有所不同目前會是多餘的
    // eslint-disable-next-line
  }, [router.isReady])

  if (!hydrated) {
    return null
  }
  // 修正 end

  return (
    <>
      <Navbar />
      <div id={`${styles.backgroundImage}`} className="pt-5">
        <div className={`container pt-5 ${styles.user_info}`}>
          {/* 步驟提示，填寫購買人資訊 */}
          <div className="row my-3">
            <div className="col d-flex align-items-xxl-center justify-content-xxl-evenly flex-xxl-row flex-column justify-content-evenly align-items-center">
              <div className="d-flex align-items-center mb-2 mb-xxl-0">
                <BsCircle className={`${styles.cart_icon} me-2`} />
                <p className={`${styles.p} ${styles.steps_active}`}>
                  確認購物車內容
                </p>
              </div>
              <hr className={`${styles.hr} ${styles.hr_active}`} />

              <div className="d-flex align-items-center  mb-2 mb-xxl-0">
                <BsCircle
                  className={`${styles.cart_icon} ${styles.cart_icon_active} me-2`}
                />
                <p className={`${styles.p} ${styles.steps_active}`}>
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
          <div
            className={`row my-5 mx-xxl-0  p-xxl-5 py-3  px-3 ${styles.user_info_main}`}
          >
            {/* 側邊購物車明細，商品明細 */}
            <div className={`col-3 ${styles.side_cart_accordion_m}`}>
              <SideCartAccordion items={items} />
            </div>
            <div className="col-xxl-9 col-12">
              <form>
                {/* 聯絡人資訊，姓名，電話 */}
                <div className={`row ${styles.user_info_border}`}>
                  <div className="col">
                    <div className="my-3">
                      <label
                        htmlFor="user-name"
                        className={`form-label my-xxl-3 my-1 ${styles.p}`}
                      >
                        姓名
                      </label>
                      <input
                        type="text"
                        className={`form-control ${styles.white_to_text}`}
                        id="user-name"
                        aria-describedby="user-name"
                        placeholder="購買人姓名"
                        defaultValue={`${userInfo.real_name}`}
                      />
                      <div
                        id="user-name-commit"
                        className={`form-text mt-2 ${styles.input_text}`}
                      >
                        超商取貨請使用本名，並記得攜帶身分證前往取貨
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="user-phone"
                        className={`form-label my-xxl-3 my-1 ${styles.p}`}
                      >
                        聯絡電話
                      </label>
                      <input
                        type="text"
                        className={`form-control ${styles.white_to_text}`}
                        id="user-phone"
                        placeholder="購買人聯絡電話，例如：0987654321"
                        defaultValue={`${userInfo.mobile}`}
                      />
                      <div
                        id="user-phone-commit"
                        className={`form-text mt-2 ${styles.input_text}`}
                      >
                        出貨通知將以此電話聯繫，請勿加入任何空格或符號，請務必填寫10碼手機，如：0987654321
                      </div>
                    </div>
                  </div>
                </div>
                {/* 電子發票，公司統編，手機載具 */}
                {/* 找測試用的API */}
                <div className={`row mt-3 ${styles.user_info_border}`}>
                  <div className={`col ${styles.eticket}`}>
                    <label
                      htmlFor="e-ticket"
                      className={`form-label my-xxl-3 my-1 ${styles.p}`}
                    >
                      電子發票
                    </label>
                    <ETicketTabs />
                  </div>
                </div>

                {/* 繼續購物，付款與運送，按鈕 */}
                <div className="row mt-3">
                  <div className="col">
                    <Button
                      onClick={() => {
                        const query = { ...router.query }
                        try {
                          router.push(`/board-game/cart`)
                        } catch (e) {
                          console.log(e)
                        }
                      }}
                      className={` me-xxl-3 ${styles.btn}`}
                    >
                      返回購物車
                    </Button>
                    <Button
                      onClick={() => {
                        const query = { ...router.query }
                        try {
                          router.push(
                            `/board-game/pay-ship?user_id=${userInfo.user_id}`
                          )
                        } catch (e) {
                          console.log(e)
                        }
                      }}
                      className={` my-xxl-3  mt-3 mb-1 ${styles.btn}`}
                    >
                      選擇運送與付款方式
                    </Button>
                    {/* <Button href="./" className={`${styles.btn} mb-3`}>
                        繼續購物
                      </Button>
                      <Button
                        onClick={() => {
                          const query = { ...router.query }
                          if (authInfo.isAuth) {
                            query.user_id = authInfo.userData.id
                            router.push(
                              `/board-game/user-info?` +
                                new URLSearchParams(query)
                            )
                          } else {
                            router.push('/user-profile/login')
                          }
                        }}
                        className={`${styles.btn} `}
                      >
                        填寫購買人資訊
                      </Button> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
