import React from 'react'
import Image from 'next/image'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import { BsArrowUpCircle, BsHeart, BsShare } from 'react-icons/bs'
import { FiPlus } from 'react-icons/fi'
import { FiMinus } from 'react-icons/fi'
import { Button } from 'react-bootstrap'

export default function SingleProductCard({ product }) {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          {/* 商品圖片 */}
          <div className="col-12 col-xxl-6">
            <Image
              src={product.prod_img}
              className="img-fluid rounded-start"
              alt="..."
              width={700}
              height={700}
            />
          </div>
          {/* 商品介紹 */}
          <div className="col-12 col-xxl-6">
            <div className="card-body">
              <h2 className="card-title">{product.prod_name}</h2>
              <p className="card-text">{product.prod_intro}</p>
              <p className="card-text">{product.prod_rule}</p>
              <p className="card-text">{product.prod_people}</p>
              <p className="card-text">{product.prod_time}</p>
              <div className="d-flex justify-content-between">
                <h3 className="card-title">{product.price}</h3>
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
                <Button
                  href="@/pages/board-game/cart"
                  className={`btn btn-primary ${styles.btn}`}
                >
                  立即購買
                </Button>
                <Button
                  href="@/pages/board-game/cart"
                  className={`btn btn-primary ${styles.btn}`}
                >
                  加入購物車
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
