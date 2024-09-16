import React from 'react'
import Image from 'next/image'
import { Tab, Tabs } from 'react-bootstrap'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import ProdCard from '@/components/board-game/prod-card'
import { BsShare } from 'react-icons/bs'
import BgCommit from '@/components/board-game/bg-commit'

export default function ProductPage() {
  return (
    <>
      <div className="container">
        {/* 商品圖片，商品介紹 */}
        <div className="row">
          <div className="col">
            <div className="card mb-3" style={{}}>
              <div className="row g-0">
                {/* 商品圖片 */}
                <div className="col-6">
                  <Image
                    src="https://i.postimg.cc/qq0yLkV7/099.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                    width={700}
                    height={700}
                  />
                </div>
                {/* 商品介紹 */}
                <div className="col-6">
                  <div className="card-body">
                    <h2 className="card-title">
                      小島洪水警報 Island Flood Alert
                    </h2>
                    <p className="card-text">
                      遊戲介紹：「小島洪水警報」是一款充滿刺激與挑戰的桌遊。玩家將面對一場突如其來的洪水災害，需要在有限的時間內作出迅速的決策，保護島上的居民免受洪水的侵襲。遊戲中，玩家需協作並運用策略，找到安全的避難所，避免洪水淹沒整個小島。這款遊戲充滿危機感和刺激，適合喜歡挑戰和團隊合作的玩家。
                    </p>
                    <p className="card-text">
                      遊戲規則：玩家需協作應對洪水，利用資源找到避難所，最先保護所有居民者獲勝。
                    </p>
                    <p className="card-text">遊戲人數：2-6人</p>
                    <p className="card-text">遊戲時間：30-45分鐘</p>
                    <h2 className="card-title">NT$1,750</h2>
                    <div className="d-flex">
                      <p className="card-text">數量</p>
                      <div className="d-flex">
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-dash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                          </svg>
                        </p>
                        <p className="card-text">1</p>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-plus"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                          </svg>
                        </p>
                      </div>
                    </div>
                    d
                    <div className="d-flex justify-content-between">
                      <button type="button" className="btn btn-primary">
                        立即購買
                      </button>
                      <button type="button" className="btn btn-primary">
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
