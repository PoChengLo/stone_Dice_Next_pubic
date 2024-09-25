import { useState, useEffect } from 'react'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import ProdCard from '@/components/board-game/prod-card'
import BgCommit from '@/components/board-game/bg-commit'
import SingleProductCard from '@/components/board-game/single-product-card'
import { useRouter } from 'next/router'

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

  // 向伺服器獲取資料(建議寫在useEffect外，用async-await)
  const getProduct = async (id) => {
    const baseURL = `http://127.0.0.1:3006/board-game/${id}`
    try {
      const res = await fetch(baseURL)
      const resData = await res.json()
      console.log(resData[0])

      // 設定到狀態中
      // (3.) 設定到狀態後 -> 觸發update(re-render)
      if (typeof resData[0] === 'object' && resData[0].id) {
        setProduct(resData[0])
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
      <pre>{console.log(product)}</pre>
      <div className="container">
        {/* 商品圖片，商品介紹 */}
        <div className="row">
          <div className="col">
            <SingleProductCard product={product} />
          </div>
        </div>
        {/* 商品背景故事，會員商品評論 */}
        <div className="row">
          <div className="col">
            <BgCommit prodDesc={product.prod_desc} />
          </div>
        </div>

        {/* 相關熱門商品 */}
        {/* <div className="row">
          <div className="col">
            <h4>相關熱門商品</h4>
            <div className="row">
              <div className="col-6 col-xxl-3">
                <ProdCard />
              </div>
              <div className="col-6 col-xxl-3">
                <ProdCard />
              </div>
              <div className="col-6 col-xxl-3">
                <ProdCard />
              </div>
              <div className="col-6 col-xxl-3">
                <ProdCard />
              </div>
            </div>
          </div>
        </div> */}
        {/* 我的瀏覽紀錄 */}
        {/* <div className="row">
          <div className="col">
            <h4>我的瀏覽紀錄</h4>
            <div className="row">
              <div className="col-6 col-xxl-3">
                <ProdCard />
              </div>
              <div className="col-6 col-xxl-3">
                <ProdCard />
              </div>
              <div className="col-6 col-xxl-3">
                <ProdCard />
              </div>
              <div className="col-6 col-xxl-3">
                <ProdCard />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}
