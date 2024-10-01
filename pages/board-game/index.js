import { useState, useEffect } from 'react'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import ProdCard from '@/components/board-game/prod-card'
import SideClassM from '@/components/board-game/side-class-m'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'
import { BsGridFill, BsCardText, BsSearch } from 'react-icons/bs'
import OrderSelection from '@/components/board-game/order-selection'
import SideClass from '../../components/board-game/side-class'
import { Button } from 'react-bootstrap'
import { useRouter } from 'next/router'

export default function BoardGame() {
  const router = useRouter()
  // 商品物件陣列狀態
  // 注意1: 初始值至少要空陣列，初次渲染使用的是初始值
  // 注意2: 在應用程式執行過程中，一定要保持狀態的資料類型一致(陣列)
  // 從伺服器得到的資訊
  const [products, setProducts] = useState([])
  // 總筆數
  const [total, setTotal] = useState(0)
  // 總頁數
  const [pageCount, setPageCount] = useState(0)

  // 控制用資訊
  // 分頁用 （建議與後端的預設值要一致，減少錯誤）
  const [page, setPage] = useState(1)
  const [perpage, setPerpage] = useState(8)

  // 搜尋關鍵字
  const [search, setSearch] = useState('')

  // 向伺服器獲取資料(建議寫在useEffect外，用async-await)
  const getProducts = async () => {
    const baseURL = 'http://127.0.0.1:3006/board-game'
    // 轉換params為查詢字串
    const searchParams = new URLSearchParams(router.query)
    const qs = searchParams.toString()
    const url = `${baseURL}?${qs}`

    // try-catch
    try {
      const res = await fetch(url)
      const resData = await res.json()

      console.log(resData)

      // 設定到狀態中
      // (3.) 設定到狀態後 -> 觸發update(re-render)
      if (resData.status === 'success') {
        setProducts(resData.data.rows)
        setTotal(resData.data.total)
        setPageCount(resData.data.pageCount)
        setPage(resData.data.page)
        setPerpage(resData.data.perpage)
      }
    } catch (e) {
      console.error(e)
    }
  }

  // 樣式3: didMount + didUpdate
  useEffect(() => {
    // 頁面載入時+目前頁數改變時，取得商品資料
    // 捲動到最上層
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
    // 向伺服器要求資料
    getProducts()
  }, [router])

  return (
    <>
      <Navbar />
      <div id={`${styles.backgroundImage_index}`} className="pt-5">
        <div className="container pt-5">
          {/* 搜尋欄，標籤 */}
          <div className="row my-xxl-3">
            <div className="col-12 col-xxl-6 ">
              <input
                type="text"
                className={`form-control mb-3 ${styles.white_to_text}`}
                id="search_input"
                placeholder="請輸入關鍵字搜尋"
                onInput={(e) => {
                  const search_input = e.target.value
                  setSearch(search_input)
                }}
              />
              <button
                className={`btn btn-primary ${styles.btn} `}
                id={`${styles.prod_tag}`}
              >
                單人遊戲
              </button>
            </div>
            <div className=" col-12 col-xxl-6  d-flex mb-3 ">
              <button
                className={`btn btn-primary me-3 ${styles.btn} `}
                onClick={() => {
                  const query = { ...router.query }
                  if (search) {
                    delete query.sort
                    delete query.order
                    delete query.page
                    query.prod_name_like = `${search}`
                    query.prod_desc_like = `${search}`
                    query.prod_intro_like = `${search}`
                    query.prod_rules_like = `${search}`
                    router.push(`?` + new URLSearchParams(query))
                  }
                }}
              >
                搜尋
                <BsSearch className="ms-2" />
              </button>
              <button
                className={`btn btn-primary  me-3 ${styles.btn} `}
                onClick={() => {
                  const query = { ...router.query }
                  if (query.prod_name_like) {
                    delete query.prod_name_like
                    delete query.prod_desc_like
                    delete query.prod_intro_like
                    delete query.prod_rules_like
                    router.push(`?` + new URLSearchParams(query))
                  }
                  // 清除搜尋欄狀態
                  setSearch('')
                  // 清除 search_input 的文字內容
                  document.getElementById('search_input').value = ''
                }}
              >
                清除搜尋
              </button>
              <SideClassM />
            </div>
          </div>
          {/* 總共商品數，下拉式選單，卡片，詳細資訊 */}
          <div className="row" id={`${styles.filter_order}`}>
            <div className="col ">
              <button
                type="button"
                className={`btn btn-primary me-3 ${styles.btn} `}
              >
                總計共{total}件商品
              </button>
              <div className="btn-group me-3">
                <OrderSelection
                  onChange={(e) => {
                    const query = { ...router.query }
                    switch (e.target.value) {
                      case '1':
                        query.sort = 'price'
                        query.order = 'desc'
                        break
                      case '2':
                        query.sort = 'price'
                        query.order = 'asc'
                        break
                      case '3':
                        query.sort = 'prod_sales'
                        query.order = 'asc'
                        break
                      case '4':
                        query.sort = 'prod_update'
                        query.order = 'desc'
                        break
                      default:
                        delete query.sort
                        delete query.order
                    }
                    router.push(`?` + new URLSearchParams(query))
                  }}
                />
              </div>
              <button
                type="button"
                className={`btn btn-primary me-3 ${styles.btn} `}
              >
                <BsGridFill />
              </button>
              <button
                type="button"
                className={`btn btn-primary me-3 ${styles.btn} `}
              >
                <BsCardText />
              </button>
            </div>
          </div>
        </div>
        {/* 側邊欄，商品卡片 */}
        <div className="container-fluid p-xxl-5">
          <div className="row">
            {/* 側邊欄 */}
            <div className="col-2 m-auto" id={`${styles.side_class}`}>
              <SideClass />
            </div>
            {/* 商品卡片 */}
            <div className="col-12 col-xxl-10 ">
              <div className={`row`}>
                {products.map((product) => (
                  <div
                    className={`col-6 col-xxl-3 d-flex justify-content-center `}
                    key={product.id}
                  >
                    <ProdCard product={product} />
                  </div>
                ))}
              </div>
              {/* 分頁按鈕 */}
              <div className="row mt-3">
                <div className="col">
                  <nav aria-label="Page navigation example d-flex justify-content-center">
                    <ul className="pagination d-flex justify-content-center">
                      <li className="page-item">
                        <Button
                          className={`btn btn-primary me-3 ${styles.btn} `}
                          onClick={() => {
                            const query = { ...router.query }
                            const prePage = page - 1
                            // 最小是1
                            if (prePage >= 1) {
                              query.page = prePage
                              router.push(`?` + new URLSearchParams(query))
                            }
                          }}
                        >
                          上一頁
                        </Button>
                      </li>
                      {/* 頁碼 */}
                      {Array(5)
                        .fill(1)
                        .map((v, i) => {
                          const query = { ...router.query }
                          const p = page - 2 + i
                          if (p < 1 || p > pageCount) return null
                          return (
                            <li key={p}>
                              <Button
                                className={`btn btn-primary me-3 ${
                                  styles.btn
                                } ${p === page ? styles.active : ''}`}
                                onClick={() => {
                                  query.page = p
                                  router.push(`?` + new URLSearchParams(query))
                                }}
                              >
                                {p}
                              </Button>
                            </li>
                          )
                        })}
                      <li className="page-item">
                        <Button
                          className={`btn btn-primary me-3 ${styles.btn} `}
                          onClick={() => {
                            const query = { ...router.query }
                            const nextPage = page + 1
                            // 最大是pageCount
                            if (nextPage <= pageCount) {
                              query.page = nextPage
                              router.push(`?` + new URLSearchParams(query))
                            }
                          }}
                        >
                          下一頁
                        </Button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
