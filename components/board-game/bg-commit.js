import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Image from 'react-bootstrap/Image'
import { BsStar, BsStarFill } from 'react-icons/bs'

import styles from '@/styles/board-game-css/board-game-style.module.css'
export default function BgCommit({ prodDesc }) {
  const contents = [
    {
      user_id: '2024017',
      user_name: '0401_garver4235',
      email: '0401_garver4235@gmail.com',
      password: '$2b$12$K14BkVJBCxu9czp0r5c97O1shwKhyabSmWGS4.h4PFRTvfsMfKVCu',
      real_name: '劉銘傳',
      nick_name: '霜之哀傷',
      user_img: 'commit_user_1.png',
      birthday: '1997-09-18',
      create_day: '2024-06-27',
      last_date: '2024-09-17',
      qr_img: '',
      mobile: '0968612788',
      line_uid: 'garver4235',
      google_uid: null,
      total_spending: '0',
      gender: null,
      is_subscribed_personal: '0',
      is_subscribed_general: '0',
      buy_date: '2024/05/30 12:22:22',
      commit: '真是太好玩了！！！',
    },
    {
      user_id: '2024018',
      user_name: 'aa_0985_aa',
      email: 'aa_0985_aa@yahoo.com.tw',
      password: '$2b$12$K14BkVJBCxu9czp0r5c97O1shwKhyabSmWGS4.h4PFRTvfsMfKVCu',
      real_name: '吳長慶',
      nick_name: '臭臭束褲',
      user_img: 'commit_user_2.png',
      birthday: '2001-06-06',
      create_day: '2024-07-08',
      last_date: '2024-07-21',
      qr_img: '',
      mobile: '0988924524',
      line_uid: 'aa0985aa',
      google_uid: null,
      total_spending: '0',
      gender: null,
      is_subscribed_personal: '0',
      is_subscribed_general: '0',
      buy_date: '2024/03/22 18:44:44',

      commit: '好玩，要是以後玩不到怎麼辦？！',
    },
    {
      user_id: '2024019',
      user_name: 'cecil3997',
      email: 'cecil3997@icloud.com',
      password: '$2b$12$K14BkVJBCxu9czp0r5c97O1shwKhyabSmWGS4.h4PFRTvfsMfKVCu',
      real_name: '賴文光',
      nick_name: '勇敢盜賊',
      user_img: 'commit_user_3.png',
      birthday: '1985-08-20',
      create_day: '2024-06-09',
      last_date: '2024-08-05',
      qr_img: '',
      mobile: '0917168168',
      line_uid: 'cecil3997',
      google_uid: null,
      total_spending: '0',
      gender: null,
      is_subscribed_personal: '0',
      is_subscribed_general: '0',
      buy_date: '2024/03/10 19:00:00',

      commit: '實際遊玩體驗非常棒。',
    },
    {
      user_id: '2024020',
      user_name: 'kelly1692',
      email: 'kelly1692@gmail.com',
      password: '$2b$12$K14BkVJBCxu9czp0r5c97O1shwKhyabSmWGS4.h4PFRTvfsMfKVCu',
      real_name: '鄒俊宥',
      nick_name: '火之高興',
      user_img: 'commit_user_4.png',
      birthday: '2002-12-18',
      create_day: '2024-06-21',
      last_date: '2024-09-09',
      qr_img: '',
      mobile: '0902728846',
      line_uid: 'kelly1692',
      google_uid: null,
      total_spending: '0',
      gender: null,
      is_subscribed_personal: '0',
      is_subscribed_general: '0',
      buy_date: '2024/01/24 07:13:55',

      commit: '訂購之後很快就收到，優良網站。',
    },
  ]
  return (
    <>
      <div className="row mt-xxl-5">
        <div className={`col mb-3 ${styles.bg_commit}`}>
          <Tabs
            defaultActiveKey="bg-story"
            id="bg-story-user-commit"
            className={`mb-3 ${styles.nav_tab_bg_commit} `}
          >
            {/* 背景故事 Tab */}
            <Tab
              eventKey="bg-story"
              title="桌遊故事背景"
              className={`px-xxl-5 py-xxl-3 px-3 `}
            >
              <p>{prodDesc}</p>
            </Tab>
            {/* 會員評論 Tab */}
            <Tab
              eventKey="user-commit"
              title="會員商品評論"
              className="px-xxl-5 py-xxl-3 px-3"
            >
              {contents.map((v, i) => (
                <div
                  key={v.user_id}
                  className="row align-items-stretch text-center"
                >
                  <div className="col-12 col-xxl-3 d-flex flex-xxl-column flex-row justify-content-center align-items-center mb-3 mb-xxl-0">
                    <div
                      className={`card mb-3 ${styles.card_commit}`}
                      style={{ maxWidth: 540 }}
                    >
                      <div className="row align-items-center">
                        <div className="col-6 col-xxl-4 d-flex justify-content-center">
                          <Image
                            src={`/board-game/commit_user/${v.user_img}`}
                            className={`${styles.img}`}
                            alt={v.user_name}
                            width={70}
                            height={70}
                          />
                        </div>
                        <div className="col-6 col-xxl-8 d-flex flex-column justify-content-center align-items-start">
                          <h3>{v.nick_name}</h3>
                          <p>會員ID：{v.user_id}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 my-3 my-xxl-0 col-xxl-3 d-flex flex-column justify-content-start align-items-center">
                    <p className={`${styles.p} mb-1`}>購買日期</p>
                    <p className={`${styles.p}`}>{v.buy_date}</p>
                  </div>
                  <div className="col-12 my-3 my-xxl-0 col-xxl-3 d-flex flex-column justify-content-start align-items-center">
                    <p className={`${styles.p} mb-1`}>商品整體評價</p>
                    <div>
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStar />
                    </div>
                  </div>
                  <div className="col-12 my-3 my-xxl-0 col-xxl-3 d-flex flex-column justify-content-start align-items-center">
                    <p className={`${styles.p} mb-1`}>
                      {v.nick_name}的評論內容
                    </p>
                    <p
                      className={`${styles.card_commit} ${styles.p}`}
                      name="user-commit"
                      id="user-commit"
                    >
                      {v.commit}
                    </p>
                  </div>
                </div>
              ))}
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}
