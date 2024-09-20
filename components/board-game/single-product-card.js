import React from 'react'
import Image from 'next/image'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import { BsArrowUpCircle, BsHeart, BsShare } from 'react-icons/bs'
import { FiPlus } from 'react-icons/fi'
import { FiMinus } from 'react-icons/fi'

import Link from 'next/link'
export default function SingleProductCard({
  prodImg,
  prodName,
  prodIntro,
  prodRules,
  prodPeople,
  prodTime,
  prodPrice,
}) {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          {/* 商品圖片 */}
          <div className="col-12 col-xxl-6">
            <Image
              src={prodImg}
              className="img-fluid rounded-start"
              alt="..."
              width={700}
              height={700}
            />
          </div>
          {/* 商品介紹 */}
          <div className="col-12 col-xxl-6">
            <div className="card-body">
              <h2 className="card-title">{prodName}</h2>
              <p className="card-text">{prodIntro}</p>
              <p className="card-text">{prodRules}</p>
              <p className="card-text">{prodPeople}</p>
              <p className="card-text">{prodTime}</p>
              <div className="d-flex justify-content-between">
                <h3 className="card-title">{prodPrice}</h3>
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
