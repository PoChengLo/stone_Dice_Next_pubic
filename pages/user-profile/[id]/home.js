import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'
import styles from '@/styles/user-profile/user-profile.module.scss'
import MainProfile from '@/components/layout/default-layout/user-layout/main-profile'
import UserSetting from '@/components/layout/default-layout/user-layout/user-setting'
import ShippingInfo from '@/components/layout/default-layout/user-layout/shipping-Info'
import ActivityOrder from '@/components/layout/default-layout/user-layout/activity-order'
import MyFavorite from '@/components/layout/default-layout/user-layout/my-favorite'
import MyOrder from '@/components/layout/default-layout/user-layout/my-order'
import WebsiteSettings from '@/components/layout/default-layout/user-layout/website-settings'

import {
  BsPersonCircle,
  BsPencilSquare,
  BsFillHouseAddFill,
  BsFillSignpostFill,
  BsFillFileTextFill,
  BsFillGearFill,
  BsFillBagHeartFill,
} from 'react-icons/bs'

const backgroundStyle = {
  height: '100%',
  backgroundImage:
    'url(https://i.postimg.cc/Y0vdC7nL/c98fa48b418557659182824425f2eb33.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center 0',
  backgroundAttachment: 'fixed',
}

export default function UserProfile() {
  const router = useRouter()
  const { id } = router.query
  const [userData, setUserData] = useState(null)
  const [activeContent, setActiveContent] = useState('profile') // 用來控制當前顯示的內容

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3006/user-profile/${id}/home`)
        .then((res) => {
          if (res.data.status === 'success') {
            setUserData(res.data.data.user)
          } else {
            console.error('User not found')
          }
        })
        .catch((err) => {
          console.error('Error fetching user data:', err)
        })
    }
  }, [id])

  // 用函數來渲染當前選擇的內容
  const renderContent = () => {
    switch (activeContent) {
      case 'profile':
        return <MainProfile />
      case 'account':
        return <UserSetting />
      case 'shipping':
        return <ShippingInfo />
      case 'activity':
        return <ActivityOrder />
      case 'favorite':
        return <MyFavorite />
      case 'order':
        return <MyOrder />
      case 'settings':
        return <WebsiteSettings />

      default:
        return <MainProfile />
    }
  }

  if (!userData) {
    return <div>Loading...</div> // 加載過程中顯示的內容
  }

  return (
    <>
      <Navbar />
      <div style={backgroundStyle}>
        <div className={styles['container']}>
          <div className={styles['sidebar']}>
            <span className={styles['logo']}>S</span>
            <a className={styles['logo-expand']} href="#">
              skateboard
            </a>
            <div className={styles['side-wrapper']}>
              <div className={styles['side-title']}>MENU</div>
              <div className={styles['side-menu']}>
                <a
                  className={styles['sidebar-link']}
                  href="#"
                  onClick={() => setActiveContent('profile')}
                >
                  <BsPersonCircle size={30} style={{ marginRight: '16px' }} />
                  個人資料
                </a>
                <a
                  className={styles['sidebar-link']}
                  href="#"
                  onClick={() => setActiveContent('account')}
                >
                  <BsPencilSquare size={30} style={{ marginRight: '16px' }} />
                  帳號 / 密碼設定
                </a>
                <a
                  className={styles['sidebar-link']}
                  href="#"
                  onClick={() => setActiveContent('shipping')}
                >
                  <BsFillHouseAddFill
                    size={30}
                    style={{ marginRight: '16px' }}
                  />
                  配送資訊
                </a>
                <a
                  className={styles['sidebar-link']}
                  href="#"
                  onClick={() => setActiveContent('activity')}
                >
                  <BsFillSignpostFill
                    size={30}
                    style={{ marginRight: '16px' }}
                  />
                  我的活動
                </a>
                <a
                  className={styles['sidebar-link']}
                  href="#"
                  onClick={() => setActiveContent('order')}
                >
                  <BsFillFileTextFill
                    size={30}
                    style={{ marginRight: '16px' }}
                  />
                  我的訂單
                </a>
                <a
                  className={styles['sidebar-link']}
                  href="#"
                  onClick={() => setActiveContent('favorite')}
                >
                  <BsFillBagHeartFill
                    size={30}
                    style={{ marginRight: '16px' }}
                  />
                  我的最愛
                </a>
                <a
                  className={styles['sidebar-link']}
                  href="#"
                  onClick={() => setActiveContent('settings')}
                >
                  <BsFillGearFill size={30} style={{ marginRight: '16px' }} />
                  網站設定
                </a>
              </div>
            </div>

            <div className={styles['side-wrapper']}>
              <div className={styles['side-title']}>最近瀏覽：</div>
              <div className={styles['side-menu']}>
                <div className={styles['search-bar']}>
                  <input type="text" placeholder="Search" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles['main-container']}>{renderContent()}</div>
        </div>
      </div>
    </>
  )
}
