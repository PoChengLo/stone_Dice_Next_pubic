import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Image from 'react-bootstrap/Image'
import { BsStar, BsStarFill } from 'react-icons/bs'

import styles from '@/styles/board-game-css/board-game-style.module.css'
export default function BgCommit({ prodDesc }) {
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
              className="px-xxl-5 py-xxl-3 px-3 "
            >
              <div className="row ">
                <div className="col-12 col-xxl-3 d-flex flex-xxl-column flex-row justify-content-center">
                  <div
                    className={`card mb-3 ${styles.card_commit}`}
                    style={{ maxWidth: 540 }}
                  >
                    <div className="row  ">
                      <div className="col-6 col-xxl-4">
                        <Image
                          src="https://i.postimg.cc/rwY9s7N0/image06.jpg"
                          className={`${styles.img}`}
                          alt="..."
                          width={70}
                          height={70}
                        />
                      </div>
                      <div className="col-6 col-xxl-8">
                        <div className="">
                          <h3 className="">關羽</h3>
                          <p className="">會員ID: U00000001</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 my-3 my-xxl-0 col-xxl-3 justify-content-around align-items-center d-flex  flex-xxl-column">
                  <p className={`${styles.p}`}>購買日期</p>
                  <p className={`${styles.p}`}>2024/05/21</p>
                </div>
                <div className="col-12 my-3 my-xxl-0 col-xxl-3 justify-content-around align-items-center d-flex  flex-xxl-column">
                  <p className={`${styles.p}`}>商品整體評價</p>
                  <div>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                  </div>
                </div>
                <div className="col-12 my-3  my-xxl-0 col-xxl-3 justify-content-around align-items-center d-flex  flex-xxl-column">
                  <p className={`${styles.p}`}>關羽的評論內容</p>
                  <p
                    className={`${styles.card_commit} ${styles.p}`}
                    name="user-commit"
                    id="user-commit"
                  >
                    糞GAME!!!
                  </p>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}
