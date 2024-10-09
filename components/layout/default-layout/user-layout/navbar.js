import Image from 'next/image'
import styles from './navbar.module.scss'
import {
  BsPersonCircle,
  BsFillSignpostFill,
  BsFillFileTextFill,
  BsFillBagHeartFill,
  BsBoxArrowInRight,
} from 'react-icons/bs'
import SideCart from '@/components/board-game/side-cart'
import React, { useState, useRef, useEffect } from 'react'
import useLogout from '@/hooks/use-logout'

const imageStyle = {
  borderRadius: '50%',
  border: '2px solid rgba(99, 83, 54, 0.8)',
  flexShrink: '0',
  objectFit: 'cover',
  cursor: 'pointer',
}

export default function Navbar() {
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const avatarRef = useRef(null)
  const handleLogout = useLogout()

  // 點擊外部關閉選單
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !avatarRef.current.contains(event.target)
      ) {
        setIsAvatarMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleAvatarMenu = () => {
    setIsAvatarMenuOpen((prev) => !prev)
  }

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
              priority={true} // {false} | {true}
            />
          </a>
        </div>
        <div className={styles['main-list']}>
          <ul>
            <li>
              <div className={styles['main-item']}>
                <a href="/board-game">桌遊商品</a>
              </div>
            </li>
            <li>
              <div className={styles['main-item']}>
                <a href="/larp">密室逃脫</a>
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
            </li>
            <li>
              <a href="#">
                <h6>歡迎回來！汪汪大隊長</h6>
              </a>
            </li>
            <li className={styles['avatar-wrapper']} ref={avatarRef}>
              <Image
                src="https://i.postimg.cc/XYZ6wqcD/26-2.jpg"
                alt="用戶頭像"
                width={40}
                height={40}
                style={imageStyle}
                onClick={toggleAvatarMenu}
              />
            </li>
          </ul>

          <div
            ref={menuRef}
            className={`${styles.avatarMenu} ${
              isAvatarMenuOpen ? styles.visible : ''
            }`}
          >
            <ul>
              <li className={styles.menuItem}>
                <a href="/user-profile/2024001/home">
                  <BsPersonCircle />
                  <span>個人資料</span>
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#">
                  <BsFillFileTextFill />
                  <span>我的訂單</span>
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#">
                  <BsFillBagHeartFill />
                  <span>我的收藏</span>
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#">
                  <BsFillSignpostFill />
                  <span>預約的活動</span>
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" onClick={handleLogout}>
                  <BsBoxArrowInRight />
                  <span>登出</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
