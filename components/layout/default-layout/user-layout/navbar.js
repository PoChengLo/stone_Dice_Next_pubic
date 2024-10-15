import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './navbar.module.scss'
import {
  BsPersonCircle,
  BsFillSignpostFill,
  BsFillFileTextFill,
  BsFillBagHeartFill,
  BsBoxArrowInRight,
  BsBoxArrowInLeft,
} from 'react-icons/bs'
import SideCart from '@/components/board-game/side-cart'
import useLogout from '@/hooks/use-logout'

import { checkAuth } from '@/services/user'

const imageStyle = {
  borderRadius: '50%',
  border: '2px solid rgba(99, 83, 54, 0.8)',
  flexShrink: '0',
  objectFit: 'cover',
  cursor: 'pointer',
  width: '40px',
  height: '40px',
}

export default function Navbar() {
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [userId, setUserId] = useState(null)
  const menuRef = useRef(null)
  const avatarRef = useRef(null)
  const handleLogout = useLogout()

  // 切換頭像選單的顯示狀態
  const toggleAvatarMenu = () => {
    setIsAvatarMenuOpen((prev) => !prev)
  }

  // 檢查使用者登入狀態
  const checkLoginStatus = async () => {
    try {
      const response = await checkAuth()
      console.log('API Response:', response)

      if (
        response &&
        response.data &&
        response.data.status === 'success' &&
        response.data.data &&
        Array.isArray(response.data.data.user) &&
        response.data.data.user.length > 0
      ) {
        const user = response.data.data.user[0]
        setIsLoggedIn(true)
        setUserId(user.user_id)
        setUserName(user.nick_name || user.user_name)
        setUserAvatar(
          user.user_img
            ? `http://localhost:3006/avatar/${
                user.user_img
              }?t=${new Date().getTime()}`
            : 'https://i.postimg.cc/C1L1cpS1/DALL-E-2024-10-14-03-01-56-Flat-minimalistic-user-icon-in-grayscale-and-gold-featuring-a-person.png'
        )
      } else {
        setIsLoggedIn(false)
        setUserAvatar(
          'https://i.postimg.cc/C1L1cpS1/DALL-E-2024-10-14-03-01-56-Flat-minimalistic-user-icon-in-grayscale-and-gold-featuring-a-person.png'
        )
        setUserName('訪客')
      }
    } catch (error) {
      console.error('檢查登入狀態失敗', error)
      setIsLoggedIn(false)
      setUserAvatar(
        'https://i.postimg.cc/sDN53bgC/775cc6a9-b051-43ae-8cb9-ecd2f7fe2ebe.png'
      )
      setUserName('訪客')
    }
  }

  useEffect(() => {
    checkLoginStatus()
  }, [])

  // 點擊外部關閉選單
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        avatarRef.current &&
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

  useEffect(() => {
    const handleUserDataUpdate = async () => {
      console.log('重新獲取用戶資料')
      await checkLoginStatus()

      // 從 localStorage 中獲取更新的頭像
      const storedAvatar = localStorage.getItem('userAvatar')
      if (storedAvatar) {
        setUserAvatar(storedAvatar)
      }
    }
    window.addEventListener('userDataUpdated', handleUserDataUpdate)
    return () => {
      window.removeEventListener('userDataUpdated', handleUserDataUpdate)
    }
  }, [])

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles['logo-image']}>
          <Link href="/">
            <Image
              src="https://i.postimg.cc/VLShYqpZ/Rectangle-2.png"
              alt="logo"
              width={197}
              height={60}
              priority={true}
              style={{ height: '60px', width: '197px' }}
            />
          </Link>
        </div>

        {/* 主導航選單 */}
        <div className={styles['main-list']}>
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
                <Link href="/mystery-game">劇本殺</Link>
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
        </div>

        {/* 使用者選單和頭像 */}
        <div className={styles['user-list']}>
          <ul>
            <li>
              <SideCart />
            </li>
            {isLoggedIn && (
              <li>
                <Link href="#">
                  <h6>歡迎回來！{userName}</h6>{' '}
                </Link>
              </li>
            )}
            <li className={styles['avatar-wrapper']} ref={avatarRef}>
              <Image
                src={userAvatar}
                alt={isLoggedIn ? '用戶頭像' : '預設頭像'}
                width={40}
                height={40}
                layout="fixed"
                objectFit="cover"
                style={imageStyle}
                onClick={toggleAvatarMenu} // 綁定點擊事件切換選單顯示
              />
            </li>
          </ul>

          {/* 頭像下拉選單 */}
          {isAvatarMenuOpen && (
            <div
              ref={menuRef}
              className={`${styles.avatarMenu} ${
                isAvatarMenuOpen ? styles.visible : ''
              }`}
            >
              <ul>
                {isLoggedIn ? (
                  <>
                    <li className={styles.menuItem}>
                      <Link href={`/user-profile/${userId}/home`}>
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
                        <span>我的最愛</span>
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
                  </>
                ) : (
                  <>
                    <li className={styles.menuItem}>
                      <Link href="/user-profile/login">
                        <BsBoxArrowInLeft />
                        <span>登入</span>
                      </Link>
                    </li>
                    <li className={styles.menuItem}>
                      <Link href="/user-profile/signup">
                        <BsPersonCircle />
                        <span>立即註冊</span>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
