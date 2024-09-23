import { useEffect, useState } from 'react'
import Image from 'next/image'
import SideCartAccordion from '@/components/board-game/side-cart-accordion'
import ETicketTabs from '@/components/board-game/e-ticket-tabs'
import Link from 'next/link'
import { useCart } from '@/hooks/use-cart-state'
export default function UserInfo() {
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

  // 修正 Next hydration 問題
  // https://stackoverflow.com/questions/72673362/error-text-content-does-not-match-server-rendered-html
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }
  // 修正 end

  return (
    <>
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
                    <button type="button" className="btn btn-primary m-1">
                      繼續購物
                    </button>
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
