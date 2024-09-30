import React from 'react'
import Image from 'next/image'
import styles from './navbar.module.scss'
import { BsCart4 } from 'react-icons/bs'
import SideCart from '@/components/board-game/side-cart'

const imageStyle = {
  borderRadius: '50%',
  border: '2px solid rgba(99, 83, 54, 0.8)',
  flexShrink: '0',
  objectFit: 'cover',
}

export default function Navbar() {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles['logo-image']}>
          <a href="./">
            <Image
              src="https://i.postimg.cc/VLShYqpZ/Rectangle-2.png"
              alt=""
              width={197}
              height={60}
            />
          </a>
        </div>
        <div className={styles['main-list']}>
          <ul>
            <li>
              <div className={styles['main-item']}>
                <a href="#">桌遊商品</a>
              </div>
            </li>
            <li>
              <div className={styles['main-item']}>
                <a href="#">密室逃脫</a>
              </div>
            </li>
            <li>
              <div className={styles['main-item']}>
                <a href="#">劇本殺</a>
              </div>
            </li>
            <li>
              <div className={styles['main-item']}>
                <a href="#">活動頁面</a>
              </div>
            </li>
            <li className={styles['dropdown']}>
              <div className={styles['main-item']}>
                <a href="#">關於我們</a>
                <ul className={styles['dropdown-menu']}>
                  <li>
                    <a href="#">團隊理念</a>
                  </li>
                  <li>
                    <a href="#">店面資訊</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles['user-list']}>
          <ul>
            <li>
              <SideCart />
              {/* <a href="#">
                <BsCart4 />
                購物車
              </a> */}
            </li>
            <li>
              <a href="#">
                <h6>歡迎回來！汪汪大隊長</h6>
              </a>
            </li>
            <li>
              <a>
                <Image
                  src="https://i.postimg.cc/XYZ6wqcD/26-2.jpg"
                  alt=""
                  width={40}
                  height={40}
                  style={imageStyle}
                />
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
