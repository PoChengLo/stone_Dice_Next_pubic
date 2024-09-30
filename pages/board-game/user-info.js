import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import SideCartAccordion from '@/components/board-game/side-cart-accordion'
import ETicketTabs from '@/components/board-game/e-ticket-tabs'
import Link from 'next/link'
import { useCart } from '@/hooks/use-cart-state'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'

export default function UserInfo() {
  // 會員物件狀態
  const [user_info, setUser_info] = useState({
    user_id: 0,
    user_name: '',
    mobile: '',
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
        setUser_info(resData.data.user[0])
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

      <div className="container">
        {/* 步驟提示圖，購物車 */}
        <div className="row">
          <div className="col">
            <Image
              src="https://i.postimg.cc/GmQ2bZTt/steps-part2.png"
              alt=""
              width={1536}
              height={145}
            />
          </div>
        </div>
        {/* 主要區域 */}
        <div className="row">
          {/* 側邊購物車明細，商品明細 */}
          <div className="col-3">
            <SideCartAccordion items={items} />
          </div>
          <div className="col-9">
            <form>
              {/* 聯絡人資訊，姓名，電話 */}
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="user-name" className="form-label">
                      姓名
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="user-name"
                      aria-describedby="user-name"
                      placeholder="購買人姓名"
                      defaultValue={`${user_info.user_name}`}
                    />
                    <div id="user-name-commit" className="form-text">
                      超商取貨請使用本名，並記得攜帶身分證前往取貨
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="user-phone" className="form-label">
                      聯絡電話
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="user-phone"
                      placeholder="購買人聯絡電話，例如：0987654321"
                      defaultValue={`${user_info.mobile}`}
                    />
                    <div id="user-phone-commit" className="form-text">
                      取貨通知將以此電話聯繫，請勿加入任何空格或符號，使用超商取貨請務必填寫10碼手機，如：0987654321
                    </div>
                  </div>
                </div>
              </div>
              {/* 電子發票，公司統編，手機載具 */}
              {/* 找測試用的API */}
              <div className="row">
                <div className="col">
                  <label htmlFor="e-ticket" className="form-label">
                    電子發票
                  </label>
                  <ETicketTabs />
                </div>
              </div>

              {/* 繼續購物，付款與運送，按鈕 */}
              <div className="row">
                <div className="col">
                  <div className="d-flex justify-content-end">
                    <Link href="./cart" className="btn btn-primary m-1">
                      返回購物車
                    </Link>
                    <Link href="./pay-ship" className="btn btn-primary m-1">
                      付款與運送
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
