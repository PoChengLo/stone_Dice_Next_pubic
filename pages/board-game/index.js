import { useState, useEffect } from 'react'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import ProdCard from '@/components/board-game/prod-card'
import SideClassM from '@/components/board-game/side-class-m'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'
import { BsGridFill, BsCardText } from 'react-icons/bs'
import OrderSelection from '@/components/board-game/order-selection'
import SideClass from './side-class'


export default function BoardGame() {
  // 商品物件陣列狀態
  // 注意1: 初始值至少要空陣列，初次渲染使用的是初始值
  // 注意2: 在應用程式執行過程中，一定要保持狀態的資料類型一致(陣列)
  const [products, setProducts] = useState([])

  // 向伺服器獲取資料(建議寫在useEffect外，用async-await)
  const getProducts = async () => {
    const baseURL = 'http://127.0.0.1:3006/board-game'

    try {
      const res = await fetch(baseURL)
      const resData = await res.json()

      console.log(resData)

      // 設定到狀態中
      // (3.) 設定到狀態後 -> 觸發update(re-render)


      }
    } catch (e) {
      console.error(e)
    }
  }

  // 樣式2: didMount
  useEffect(() => {
    // (2.) 初次render之後，執行這裡一次
    getProducts()
  }, [])



  return (
    <>
      <div id={`${styles.backgroundImage}`} className="py-5">
        <div className="container py-3">
          <Navbar></Navbar>
          {/* 搜尋欄，標籤 */}
          <div className="row my-3">
            <div className="col-12 col-xxl-6">
              <input
                type="text"
                className="form-control"
                id="search"
                placeholder="搜尋"
              />
              <SideClassM />
            </div>
            <div className="col-6" id={`${styles.prod_tag}`}>
              <button className={`btn btn-primary ${styles.btnPrimary}`}>
                單人遊戲
              </button>
            </div>
          </div>
          {/* 總共商品數，下拉式選單，卡片，詳細資訊 */}
          <div className="row" id={`${styles.filter_order}`}>
            <div className="col">
              <button type="button" className="btn btn-primary me-3">
                共二十件商品
              </button>
              <div className="btn-group me-3">
                <OrderSelection />
              </div>
              <button type="button" className="btn btn-primary me-3">
                <BsGridFill />
              </button>
              <button type="button" className="btn btn-primary me-3">
                <BsCardText />
              </button>
            </div>
          </div>
        </div>
        {/* 側邊欄，商品卡片 */}
        <div className="container-fluid p-xxl-5">
          <div className="row">
            {/* 側邊欄 */}
            <div className="col-2 m-auto" id={`${styles.side_bar}`}>
              <SideClass />
            </div>
            {/* 商品卡片 */}
            <div className="col-12 col-xxl-10 ">
              <div className={`row`}>
                {products.map((product) => (
                  <div className="col-6 col-xxl-3" key={product.prod_id}>


                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col">
                  <nav aria-label="Page navigation example d-flex justify-content-center">
                    <ul className="pagination d-flex justify-content-center">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
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
