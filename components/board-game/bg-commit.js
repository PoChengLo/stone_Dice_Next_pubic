import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Image from 'react-bootstrap/Image'
import { BsStar, BsStarFill } from 'react-icons/bs'

import styles from '@/styles/board-game-css/board-game-style.module.css'
export default function BgCommit() {
  return (
    <>
      <Tabs
        defaultActiveKey="bg-story"
        id="bg-story-user-commit"
        className="mb-3"
      >
        {/* 背景故事 Tab */}
        <Tab eventKey="bg-story" title="桌遊故事背景">
          <p>
            在遙遠的小島上，一場突如其來的洪水威脅著島上的生物。暴雨不斷，水位上升，島上的每一個角落都充滿了危險。玩家需要迅速應對這場危機，利用有限的資源與智慧，幫助島上的居民找到安全的避難所，抵擋洪水的侵襲，確保他們的安全。
          </p>
        </Tab>

        {/* 會員評論 Tab */}
        <Tab eventKey="user-commit" title="會員商品評論">
          <div className="row">
            <div className="col-12 col-xxl-3">
              <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-6 col-xxl-4">
                    <Image
                      src="https://i.postimg.cc/rwY9s7N0/image06.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                      width={280}
                      height={280}
                    />
                  </div>
                  <div className="col-6 col-xxl-8">
                    <div className="card-body">
                      <h5 className="card-title">關羽</h5>
                      <p className="card-text">會員ID: U00000001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xxl-3">
              <p>購買日期</p>
              <p>2024/05/21</p>
            </div>
            <div className="col-12 col-xxl-3">
              <p>商品整體評價</p>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStar />
              <BsStar />
            </div>
            <div className="col-12 col-xxl-3">
              <p>關羽的評論內容</p>
              <textarea
                name="user-commit"
                id="user-commit"
                defaultValue={'糞GAME!!!'}
              />
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  )
}
