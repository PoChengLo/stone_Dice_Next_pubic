import React from 'react'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'
import styles from '@/styles/user-profile/user-profile.module.scss'
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
  position: 'relative',
}

const secondImageStyle = {
  position: 'absolute',
  top: '50%',
  right: '5%',
  filter:
    'drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.10)) drop-shadow(0px 9px 9px rgba(0, 0, 0, 0.09)) drop-shadow(0px 20px 12px rgba(0, 0, 0, 0.05)) drop-shadow(0px 35px 14px rgba(0, 0, 0, 0.01)) drop-shadow(0px 55px 15px rgba(0, 0, 0, 0.00))',
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

            <div className={styles['side-wrapper']}>
              <div className={styles['side-title']}>最近瀏覽：</div>
              <div className={styles['side-menu']}>
                <div className={styles['search-bar']}>
                  <input type="text" placeholder="Search" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles['main-container']}>
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
            <div className={styles['user-info']}>
              <div className={styles['input-bar']}>
                暱稱：
                <input type="text" placeholder="長度限制二到十三個字" />
              </div>
              <div className={styles['input-bar']}>
                性別：
                <select>
                  <option value="">請選擇</option>
                  <option value="">男</option>
                  <option value="">女</option>
                  <option value="">非二元性別</option>
                  <option value="">不願透露</option>
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
            </div>
            <div className={styles['line']} />
            <div className={styles['small-header']}>電子報</div>
            <div className={styles['checkbox-group']}>
              <div className={styles['checkbox-item']}>
                <label>
                  <input type="checkbox" />
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
                  <input type="checkbox" />
                  <span className={styles['main-text']}>
                    我願意接收個人化商品資訊
                  </span>
                </label>
                <div className={styles['sub-text']}>
                  一些您可能感興趣的商品，或我們真的很想賣的東西。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
