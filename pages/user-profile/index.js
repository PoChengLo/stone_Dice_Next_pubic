import React from 'react'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'
import styles from './user-profile.module.scss'
import Image from 'next/image'
import {
  BsPersonCircle,
  BsPencilSquare,
  BsFillHouseAddFill,
  BsFillSignpostFill,
  BsFillFileTextFill,
  BsFillGearFill,
} from 'react-icons/bs'

const imageStyle = {
  borderRadius: '50%',
  border: '17px solid #A6977C;',
  flexShrink: '0',
  objectFit: 'cover',
  boxShadow:
    '130px 107px 47px 0px rgba(0, 0, 0, 0.00), 83px 68px 43px 0px rgba(0, 0, 0, 0.01), 47px 38px 36px 0px rgba(0, 0, 0, 0.05), 21px 17px 27px 0px rgba(0, 0, 0, 0.09), 5px 4px 15px 0px rgba(0, 0, 0, 0.10)',
}

const backgroundStyle = {
  height: '100%',
  backgroundImage:
    'url(https://i.postimg.cc/Y0vdC7nL/c98fa48b418557659182824425f2eb33.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center 0',
  backgroundAttachment: 'fixed',
}

export default function userProfile() {
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
                <a className={styles['sidebar-link']} href="#">
                  <BsPersonCircle size={30} style={{ marginRight: '16px' }} />
                  個人資料
                </a>
                <a className={styles['sidebar-link']} href="#">
                  <BsPencilSquare size={30} style={{ marginRight: '16px' }} />
                  帳號 / 密碼設定
                </a>
                <a className={styles['sidebar-link']} href="#">
                  <BsFillHouseAddFill
                    size={30}
                    style={{ marginRight: '16px' }}
                  />
                  配送資訊
                </a>
                <a className={styles['sidebar-link']} href="#">
                  <BsFillSignpostFill
                    size={30}
                    style={{ marginRight: '16px' }}
                  />
                  活動紀錄
                </a>
                <a className={styles['sidebar-link']} href="#">
                  <BsFillFileTextFill
                    size={30}
                    style={{ marginRight: '16px' }}
                  />
                  我的訂單
                </a>
                <a className={styles['sidebar-link']} href="#">
                  <BsFillGearFill size={30} style={{ marginRight: '16px' }} />
                  網站設定
                </a>
              </div>
            </div>
            <div className={styles['search-bar']}>
              <input type="text" placeholder="Search" />
            </div>
            <div className="{styles['side-wrapper']}">
              <div className={styles['side-title']}>CATEGORY</div>
              <div className={styles['side-menu']}></div>
            </div>
          </div>
          <div className={styles['main-container']}>
            <div className={styles['main-blogs']}>
              <div className={styles['main-blog']}>
                <Image
                  src="https://i.postimg.cc/XYZ6wqcD/26-2.jpg"
                  alt=""
                  width={280}
                  height={280}
                  style={imageStyle}
                />
                <Image
                  src="https://i.postimg.cc/dtzxD7Ks/cccccrrr.png"
                  alt=""
                  width={80}
                  height={80}
                />
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
                  您好！汪汪大隊長！維持宇宙和平的任務就靠您了！
                </div>
                <div className={styles['main-blog-author tips']}>
                  <div className={styles['main-blog-time']}>7 min</div>
                  <div className={styles['author-img-wrapper']}>
                    <Image
                      src="https://i.postimg.cc/bN4mc4Z3/9600ab6937c3a9c668afea4183baa0bb.png"
                      alt=""
                      width={160}
                      height={160}
                    />
                    <div>
                      <p>會員等級</p>
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
                  <td>SuperAdmin2024</td>
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
            <div className={styles['line']} />
            <div className={styles['small-header']}>電子報</div>
          </div>
        </div>
      </div>
    </>
  )
}
