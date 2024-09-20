import React from 'react'
import Image from 'next/image'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import { BsArrowUpCircle, BsHeart, BsShare } from 'react-icons/bs'
import { FiPlus } from 'react-icons/fi'
import { FiMinus } from 'react-icons/fi'

import Link from 'next/link'
export default function SingleProductCard() {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          {/* 商品圖片 */}
          <div className="col-12 col-xxl-6">
            <Image
              src="https://i.postimg.cc/qq0yLkV7/099.jpg"
              className="img-fluid rounded-start"
              alt="..."
              width={700}
              height={700}
            />
          </div>
          {/* 商品介紹 */}
          <div className="col-12 col-xxl-6">
            <div className="card-body">
              <h2 className="card-title">小島洪水警報 Island Flood Alert</h2>
              <p className="card-text">
                遊戲介紹：「小島洪水警報」是一款充滿刺激與挑戰的桌遊。玩家將面對一場突如其來的洪水災害，需要在有限的時間內作出迅速的決策，保護島上的居民免受洪水的侵襲。遊戲中，玩家需協作並運用策略，找到安全的避難所，避免洪水淹沒整個小島。這款遊戲充滿危機感和刺激，適合喜歡挑戰和團隊合作的玩家。
              </p>
              <p className="card-text">
                遊戲規則：玩家需協作應對洪水，利用資源找到避難所，最先保護所有居民者獲勝。
              </p>
              <p className="card-text">遊戲人數：2-6人</p>
              <p className="card-text">遊戲時間：30-45分鐘</p>
              <div className="d-flex justify-content-between">
                <h3 className="card-title">NT$1,750</h3>
                <div className="d-flex">
                  <p className="card-text">數量</p>
                  <FiMinus />
                  <p className="card-text">1</p>
                  <FiPlus />
                </div>
              </div>
              <div className="d-flex">
                <BsShare />
                <BsHeart />
                <BsArrowUpCircle />
              </div>
              <div className={`d-flex justify-content-between ${styles.btns}`}>
                <Link
                  href="../single-page/1"
                  className={`btn btn-primary ${styles.btn}`}
                >
                  立即購買
                </Link>
                <Link
                  href="../single-page/1"
                  className={`btn btn-primary ${styles.btn}`}
                >
                  加入購物車
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
