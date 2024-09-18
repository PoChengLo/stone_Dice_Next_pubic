import React from 'react'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import ProdCard from '@/components/board-game/prod-card'
import BgCommit from '@/components/board-game/bg-commit'
import SingleProductCard from '@/components/board-game/single-product-card'

export default function ProductPage() {
  return (
    <>
      <div className="container">
        {/* 商品圖片，商品介紹 */}
        <div className="row">
          <div className="col">
            <SingleProductCard />
          </div>
        </div>
        {/* 商品背景故事，會員商品評論 */}
        <div className="row">
          <div className="col">
            <BgCommit />
          </div>
        </div>

        {/* 相關熱門商品 */}
        <div className="row">
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
        </div>
        {/* 我的瀏覽紀錄 */}
        <div className="row">
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
        </div>
      </div>
    </>
  )
}
