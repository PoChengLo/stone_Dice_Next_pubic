import Image from 'next/image'
import UserButton from '@/components/layout/default-layout/user-layout/user-button'
import styles from '@/styles/user-profile/main-user-profile.module.scss'
import { BsPencilSquare } from 'react-icons/bs'
import React, { useState, useEffect } from 'react'
import { getUserById, updateProfile } from '@/services/user'
import { useAuth } from '@/hooks/use-auth'
import toast, { Toaster } from 'react-hot-toast'

const imageStyle = {
  borderRadius: '50%',
  border: '17px solid #A6977C;',
  flexShrink: '0',
  objectFit: 'cover',
  boxShadow:
    '130px 107px 47px 0px rgba(0, 0, 0, 0.00), 83px 68px 43px 0px rgba(0, 0, 0, 0.01), 47px 38px 36px 0px rgba(0, 0, 0, 0.05), 21px 17px 27px 0px rgba(0, 0, 0, 0.09), 5px 4px 15px 0px rgba(0, 0, 0, 0.10)',
  position: 'relative',
}

const secondImageStyle = {
  position: 'absolute',
  top: '50%',
  right: '5%',
  filter:
    'drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.10)) drop-shadow(0px 9px 9px rgba(0, 0, 0, 0.09)) drop-shadow(0px 20px 12px rgba(0, 0, 0, 0.05)) drop-shadow(0px 35px 14px rgba(0, 0, 0, 0.01)) drop-shadow(0px 55px 15px rgba(0, 0, 0, 0.00))',
}

const initUserProfile = {
  user_name: '',
  email: '',
  phone: '',
  birth_date: '',
}

export default function MainProfile() {
  const { auth } = useAuth()
  const [userProfile, setUserProfile] = useState(initUserProfile)
  const [hasProfile, setHasProfile] = useState(false)

  const getUserData = async (id) => {
    const res = await getUserById(id) // 調用後端API取得使用者資料
    if (res.data.status === 'success') {
      const dbUser = res.data.data.user
      const dbUserProfile = { ...initUserProfile }

      for (const key in dbUserProfile) {
        if (Object.hasOwn(dbUser, key)) {
          dbUserProfile[key] = dbUser[key] || ''
        }
      }

      setUserProfile(dbUserProfile)
      toast.success('會員資料載入成功')
    } else {
      toast.error('會員資料載入失敗')
    }
  }

  useEffect(() => {
    if (auth.isAuth) {
      getUserData(auth.userData.id) // 登入後從後端獲取資料
    }
  }, [auth])

  const handleFieldChange = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await updateProfile(auth.userData.id, userProfile) // 更新資料
    if (res.data.status === 'success') {
      toast.success('會員資料修改成功')
    } else {
      toast.error('會員資料修改失敗')
    }
  }

  if (!auth.isAuth) return <></>
  return (
    <>
      <div className={styles['main-blogs']}>
        <div className={styles['main-blog']}>
          <Image
            src="https://i.postimg.cc/XYZ6wqcD/26-2.jpg"
            alt=""
            width={260}
            height={260}
            style={imageStyle}
          />
          <a href="#">
            <Image
              src="https://i.postimg.cc/dtzxD7Ks/cccccrrr.png"
              alt=""
              width={80}
              height={80}
              style={secondImageStyle}
            />
          </a>
          <div className={styles['main-blog-author']}>
            <div className={styles['author-img-wrapper']}></div>
            <div className={styles['author-detail']}>
              <div className={styles['author-info1']}>
                個人圖片檔案限制 : 1MB以下 .JPEG, .PNG
              </div>
            </div>
          </div>
        </div>
        <div className={styles['main-blog1']}>
          <div className={styles['main-header']}>個人資料</div>
          <div className={styles['main-blog-title']}>
            <p>
              您好！汪汪大隊長！維持宇宙和平的任務就靠您了！
              <br />
              目前消費累積金額 1500 元 點數：15 點
            </p>
          </div>
          <div className={styles['main-blog-author tips']}>
            <div className={styles['author-img-wrapper']}>
              <Image
                src="https://i.postimg.cc/bN4mc4Z3/9600ab6937c3a9c668afea4183baa0bb.png"
                alt=""
                width={160}
                height={160}
              />
              <div className={styles['user-level']}>
                <p>
                  會員等級 <span>金骰子</span>
                  <br />
                  消費累積滿 5000 即可升級柏金骰子
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <table className={styles['anim']}>
        <tbody>
          <tr>
            <td>使用者帳號</td>
            <input
              type="text"
              name="user_name"
              value={userProfile.user_name}
              disabled
            />
            <td> </td>
          </tr>
        </tbody>
      </table>
      <table className={styles['anim']}>
        <tbody>
          <tr>
            <td>電子郵件</td>
            <td>DoggGood2024@email.com</td>
            <td>
              <a href="#">
                <BsPencilSquare />
                修改
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <table className={styles['anim']}>
        <tbody>
          <tr>
            <td>手機號碼</td>
            <td>0988***655</td>
            <td>
              <a href="#">
                <BsPencilSquare />
                修改
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles['line']} />
      <div className={styles['small-header']}>詳細資料</div>
      <from className={styles['user-info']}>
        <div className={styles['input-bar']}>
          暱稱：
          <input type="text" placeholder="長度限制二到十三個字" />
        </div>
        <div className={styles['input-bar']}>
          性別：
          <select name="gender">
            <option value="">請選擇</option>
            <option value="male">男</option>
            <option value="female">女</option>
            <option value="nonbinary">非二元性別</option>
            <option value="preferNotSay">不願透露</option>
          </select>
        </div>
        <div className={styles['input-bar']}>
          生日：
          <input
            type="date"
            value="1990-01-01"
            min="1900-01-01"
            max="2020-01-01"
            placeholder="請選擇"
          />
        </div>
      </from>
      <div className={styles['line']} />
      <div className={styles['small-header']}>電子報</div>
      <div className={styles['checkbox-group']}>
        <div className={styles['checkbox-item']}>
          <label>
            <input type="checkbox" name="isSubscribedGeneral" />
            <span className={styles['main-text']}>
              我願意訂閱活動優惠電子報
            </span>
          </label>
          <div className={styles['sub-text']}>
            當期最強新品通知！還有外星人的目擊情報
          </div>
        </div>

        <div className={styles['checkbox-item']}>
          <label>
            <input type="checkbox" name="isSubscribedPersonal" />
            <span className={styles['main-text']}>
              我願意接收個人化商品資訊
            </span>
          </label>
          <div className={styles['sub-text']}>
            一些您可能感興趣的商品，或我們真的很想賣的東西。
          </div>
        </div>
      </div>
      <div className={styles['button-wrapper']}>
        <UserButton />
      </div>
    </>
  )
}
