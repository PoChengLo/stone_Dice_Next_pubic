import Image from 'next/image'
import styles from './navbarM.module.scss'
import {
  BsPersonCircle,
  BsFillSignpostFill,
  BsFillFileTextFill,
  BsFillBagHeartFill,
  BsBoxArrowInRight,
} from 'react-icons/bs'
import SideCartM from '@/components/board-game/side-cartM'
import React, { useState, useRef, useEffect } from 'react'
import useLogout from '@/hooks/use-logout'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown'
import { FiMenu } from 'react-icons/fi'

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
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={`${styles.logo_image}`}>
          <div>
            <Dropdown>
              <Dropdown.Toggle className={`${styles.btn}`}>
                <FiMenu />
              </Dropdown.Toggle>
              <Dropdown.Menu className={`${styles.a_bg}`}>
                <Dropdown.Item className={`${styles.a}`} href="/board-game">
                  桌遊商品
                </Dropdown.Item>
                <Dropdown.Item className={`${styles.a}`} href="/larp">
                  密室逃脫
                </Dropdown.Item>
                <Dropdown.Item className={`${styles.a}`} href="#">
                  劇本殺
                </Dropdown.Item>
                <Dropdown.Item className={`${styles.a}`} href="#">
                  活動頁面
                </Dropdown.Item>
                <Dropdown.Item className={`${styles.a}`} href="#">
                  關於我們
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <Link href="./">
          <Image
            src="user-profile/navbarM_logo.png"
            alt=""
            width={67}
            height={60}
            priority={true} // {false} | {true}
          />
        </Link>
        {/* <div className={styles['main-list']}>
          <ul>
            <li>
              <div className={styles['main-item']}>
                <Link href="/board-game">桌遊商品</Link>
              </div>
            </li>
            <li>
              <div className={styles['main-item']}>
                <Link href="/larp">密室逃脫</Link>
              </div>
            </li>
            <li>
              <div className={styles['main-item']}>
                <Link href="#">劇本殺</Link>
              </div>
            </li>
            <li>
              <div className={styles['main-item']}>
                <Link href="#">活動頁面</Link>
              </div>
            </li>
            <li className={styles['dropdown']}>
              <div className={styles['main-item']}>
                <Link href="#">關於我們</Link>
                <ul className={styles['dropdown-menu']}>
                  <li>
                    <Link href="#">團隊理念</Link>
                  </li>
                  <li>
                    <Link href="#">店面資訊</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div> */}
        <div className={`${styles.sideCart_M}`}>
          <SideCartM />
        </div>
        <div className={`${styles.user_list}`}>
          <ul>
            <li>
              {' '}
              <Image
                src="https://i.postimg.cc/XYZ6wqcD/26-2.jpg"
                alt="用戶頭像"
                width={40}
                height={40}
                style={imageStyle}
                onClick={toggleAvatarMenu}
              />
            </li>

            <li className={styles['avatar-wrapper']} ref={avatarRef}></li>
          </ul>

          <div
            ref={menuRef}
            className={`${styles.avatarMenu} ${
              isAvatarMenuOpen ? styles.visible : ''
            }`}
          >
            <ul>
              <li className={styles.menuItem}>
                <Link href="/user-profile/2024001/home">
                  <BsPersonCircle />
                  <span>個人資料</span>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="#">
                  <BsFillFileTextFill />
                  <span>我的訂單</span>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="#">
                  <BsFillBagHeartFill />
                  <span>我的收藏</span>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="#">
                  <BsFillSignpostFill />
                  <span>預約的活動</span>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="#" onClick={handleLogout}>
                  <BsBoxArrowInRight />
                  <span>登出</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
