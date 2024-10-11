import Image from 'next/image'
import UserButton from '@/components/layout/default-layout/user-layout/user-button'
import styles from '@/styles/user-profile/main-user-profile.module.scss'
import { BsPencilSquare } from 'react-icons/bs'
import React, { useState } from 'react'
import axios from 'axios'
import showCustomSwal from './sweet-alert'
import ImageUpload from './image-upload'

const MainProfile = ({ userData: initialUserData }) => {
  // 使用 useState 將 userData 初始化為從 props 傳入的值
  const [userData, setUserData] = useState(initialUserData)

  if (!userData) {
    return <p>Loading user data...</p>
  }

  // 處理表單變化
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setUserData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? (checked ? 1 : 0) : value, // 處理 checkbox 與其他 input 的更新
    }))
  }

  // 提交更新請求
  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('accessToken') // 確認從 localStorage 取得 token

    try {
      const response = await axios.put(
        `http://localhost:3006/user-profile/${userData.user_id}/home`,
        {
          nick_name: userData.nick_name,
          birthday: userData.birthday,
          mobile: userData.mobile,
          gender: userData.gender,
          is_subscribed_personal: userData.is_subscribed_personal,
          is_subscribed_general: userData.is_subscribed_general,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (response.data.status === 'success') {
        showCustomSwal('資料更新成功', '您的資料已經成功更新', 'success')
        window.dispatchEvent(new Event('userDataUpdated'))
      } else {
        showCustomSwal('更新失敗', response.data.message, 'error')
      }
    } catch (error) {
      showCustomSwal('伺服器錯誤', '請稍後再試', 'error')
    }
  }

  return (
    <>
      <div className={styles['main-blogs']}>
        <div className={styles['main-blog']}>
          <ImageUpload initialImage={userData.user_img} />
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
            <p>您好！{userData.nick_name}！維持宇宙和平的任務就靠您了！</p>

            <p>目前消費累積金額 {userData.total_spending} 元 點數：15 點</p>
          </div>
          <div className={styles['main-blog-author']}>
            <div className={styles['author-img-wrapper']}>
              <Image
                src="https://i.postimg.cc/bN4mc4Z3/9600ab6937c3a9c668afea4183baa0bb.png"
                alt=""
                width={160}
                height={160}
              />
            </div>
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
      <br />
      <br />
      <table className={styles['anim']}>
        <tbody>
          <tr>
            <td>使用者帳號</td>
            <td>{userData.user_name}</td>
            <td> </td>
          </tr>
        </tbody>
      </table>
      <table className={styles['anim']}>
        <tbody>
          <tr>
            <td>電子郵件</td>
            <td>{userData.email}</td>
            <td> </td>
          </tr>
        </tbody>
      </table>
      <table className={styles['anim']}>
        <tbody>
          <tr>
            <td>手機號碼</td>
            <td>{userData.mobile}</td>
            <td>
              <button onClick={() => {}}>
                <BsPencilSquare />
                修改
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles['line']} />
      <div className={styles['small-header']}>詳細資料</div>
      <div className={styles['user-info']}>
        <div className={styles['input-bar']}>
          暱稱：
          <input
            type="text"
            value={userData.nick_name || ''}
            name="nick_name"
            onChange={handleChange}
            placeholder="長度限制二到十三個字"
          />
        </div>
        <div className={styles['input-bar']}>
          性別：
          <select
            name="gender"
            value={userData.gender || ''}
            onChange={handleChange}
            className={styles['select-box']}
          >
            <option value="">請選擇</option>
            <option value="male">男</option>
            <option value="female">女</option>
            <option value="nonbinary">非二元性別</option>
            <option value="prefer_not_say">不願透露</option>
          </select>
        </div>
        <div className={styles['input-bar']}>
          生日：
          <input
            type="date"
            value={userData.birthday || ''}
            min="1900-01-01"
            max="2020-01-01"
            placeholder="請選擇"
            onChange={handleChange}
            name="birthday"
          />
        </div>
      </div>
      <div className={styles['line']} />
      <div className={styles['small-header']}>電子報</div>

      <div className={styles['checkbox-group']}>
        <div className={styles['checkbox-item']}>
          <label>
            <input
              type="checkbox"
              name="is_subscribed_general"
              checked={userData.is_subscribed_general === 1}
              onChange={handleChange}
            />
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
            <input
              type="checkbox"
              name="is_subscribed_personal"
              checked={userData.is_subscribed_personal === 1}
              onChange={handleChange}
            />
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
        <UserButton onClick={handleSubmit} buttonText="確認修改" />
      </div>
    </>
  )
}
export default MainProfile
