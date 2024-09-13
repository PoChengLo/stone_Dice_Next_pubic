import React from 'react'
import Image from 'next/image'
import { Tab, Tabs } from 'react-bootstrap'
export default function ProductPage() {
  return (
    <>
      <div className="container">
        {/* 商品圖片，商品介紹 */}
        <div className="row">
          <div className="col">
            <div className="card mb-3" style={{}}>
              <div className="row g-0">
                {/* 商品圖片 */}
                <div className="col-6">
                  <Image
                    src="https://i.postimg.cc/qq0yLkV7/099.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                    width={700}
                    height={700}
                  />
                </div>
                {/* 商品介紹 */}
                <div className="col-6">
                  <div className="card-body">
                    <h2 className="card-title">
                      小島洪水警報 Island Flood Alert
                    </h2>
                    <p className="card-text">
                      遊戲介紹：「小島洪水警報」是一款充滿刺激與挑戰的桌遊。玩家將面對一場突如其來的洪水災害，需要在有限的時間內作出迅速的決策，保護島上的居民免受洪水的侵襲。遊戲中，玩家需協作並運用策略，找到安全的避難所，避免洪水淹沒整個小島。這款遊戲充滿危機感和刺激，適合喜歡挑戰和團隊合作的玩家。
                    </p>
                    <p className="card-text">
                      遊戲規則：玩家需協作應對洪水，利用資源找到避難所，最先保護所有居民者獲勝。
                    </p>
                    <p className="card-text">遊戲人數：2-6人</p>
                    <p className="card-text">遊戲時間：30-45分鐘</p>
                    <h2 className="card-title">NT$1,750</h2>
                    <div className="d-flex">
                      <p className="card-text">數量</p>
                      <div className="d-flex">
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-dash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                          </svg>
                        </p>
                        <p className="card-text">1</p>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-plus"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                          </svg>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button type="button" className="btn btn-primary">
                        立即購買
                      </button>
                      <button type="button" className="btn btn-primary">
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 商品背景故事，會員商品評論 */}
        <div className="row">
          <div className="col">
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              {/* 背景故事 Tab */}
              <Tab eventKey="home" title="桌遊故事背景">
                <div className="tab-content">
                  <div
                    className="tab-pane fade  show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    在遙遠的小島上，一場突如其來的洪水威脅著島上的生物。暴雨不斷，水位上升，島上的每一個角落都充滿了危險。玩家需要迅速應對這場危機，利用有限的資源與智慧，幫助島上的居民找到安全的避難所，抵擋洪水的侵襲，確保他們的安全。
                  </div>
                </div>
              </Tab>

              {/* 會員評論 Tab */}
              <Tab eventKey="profile" title="會員商品評論">
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-3">
                        <div className="card mb-3" style={{ maxWidth: 540 }}>
                          <div className="row g-0">
                            <div className="col-md-4">
                              <Image
                                src="https://i.postimg.cc/rwY9s7N0/image06.jpg"
                                className="img-fluid rounded-start"
                                alt="..."
                                width={280}
                                height={280}
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <h5 className="card-title">關羽</h5>
                                <p className="card-text">會員ID: U00000001</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-3">
                        <p>購買日期</p>
                        <p>2024/05/21</p>
                      </div>
                      <div className="col-6">
                        <p>關羽的評論內容</p>
                        <textarea
                          name="user-commit"
                          id="user-commit"
                          defaultValue={'糞GAME!!!'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>

        {/* 相關熱門商品 */}
        <div className="row">
          <div className="col">
            <h4>相關熱門商品</h4>
            <div className="row">
              <div className="col-3">
                <div className="card border-0 bg-transparent text-warning m-4">
                  <Image
                    src="https://i.postimg.cc/rFMNG9M9/096.jpg"
                    className="card-img-top"
                    alt="..."
                    width={280}
                    height={280}
                  />
                  <div className="card-body">
                    <p className="card-text d-flex justify-content-between">
                      商品名稱
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg>
                    </p>
                    <p className="card-text">商品價格</p>
                    <div className="d-flex justify-content-between">
                      <button type="button" className="btn btn-primary">
                        立即購買
                      </button>
                      <button type="button" className="btn btn-primary">
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card border-0 bg-transparent text-warning m-4">
                  <Image
                    src="https://i.postimg.cc/rFMNG9M9/096.jpg"
                    className="card-img-top"
                    alt="..."
                    width={280}
                    height={280}
                  />
                  <div className="card-body">
                    <p className="card-text d-flex justify-content-between">
                      商品名稱
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg>
                    </p>
                    <p className="card-text">商品價格</p>
                    <div className="d-flex justify-content-between">
                      <button type="button" className="btn btn-primary">
                        立即購買
                      </button>
                      <button type="button" className="btn btn-primary">
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card border-0 bg-transparent text-warning m-4">
                  <Image
                    src="https://i.postimg.cc/rFMNG9M9/096.jpg"
                    className="card-img-top"
                    alt="..."
                    width={280}
                    height={280}
                  />
                  <div className="card-body">
                    <p className="card-text d-flex justify-content-between">
                      商品名稱
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg>
                    </p>
                    <p className="card-text">商品價格</p>
                    <div className="d-flex justify-content-between">
                      <button type="button" className="btn btn-primary">
                        立即購買
                      </button>
                      <button type="button" className="btn btn-primary">
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card border-0 bg-transparent text-warning m-4">
                  <Image
                    src="https://i.postimg.cc/rFMNG9M9/096.jpg"
                    className="card-img-top"
                    alt="..."
                    width={280}
                    height={280}
                  />
                  <div className="card-body">
                    <p className="card-text d-flex justify-content-between">
                      商品名稱
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg>
                    </p>
                    <p className="card-text">商品價格</p>
                    <div className="d-flex justify-content-between">
                      <button type="button" className="btn btn-primary">
                        立即購買
                      </button>
                      <button type="button" className="btn btn-primary">
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 我的瀏覽紀錄 */}
        <div className="row">
          <div className="col">
            <h4>我的瀏覽紀錄</h4>
            <div className="row">
              <div className="col-3">
                <div className="card border-0 bg-transparent text-warning m-4">
                  <Image
                    src="https://i.postimg.cc/rFMNG9M9/096.jpg"
                    className="card-img-top"
                    alt="..."
                    width={280}
                    height={280}
                  />
                  <div className="card-body">
                    <p className="card-text d-flex justify-content-between">
                      商品名稱
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg>
                    </p>
                    <p className="card-text">商品價格</p>
                    <div className="d-flex justify-content-between">
                      <button type="button" className="btn btn-primary">
                        立即購買
                      </button>
                      <button type="button" className="btn btn-primary">
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card border-0 bg-transparent text-warning m-4">
                  <Image
                    src="https://i.postimg.cc/rFMNG9M9/096.jpg"
                    className="card-img-top"
                    alt="..."
                    width={280}
                    height={280}
                  />
                  <div className="card-body">
                    <p className="card-text d-flex justify-content-between">
                      商品名稱
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg>
                    </p>
                    <p className="card-text">商品價格</p>
                    <div className="d-flex justify-content-between">
                      <button type="button" className="btn btn-primary">
                        立即購買
                      </button>
                      <button type="button" className="btn btn-primary">
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card border-0 bg-transparent text-warning m-4">
                  <Image
                    src="https://i.postimg.cc/rFMNG9M9/096.jpg"
                    className="card-img-top"
                    alt="..."
                    width={280}
                    height={280}
                  />
                  <div className="card-body">
                    <p className="card-text d-flex justify-content-between">
                      商品名稱
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg>
                    </p>
                    <p className="card-text">商品價格</p>
                    <div className="d-flex justify-content-between">
                      <button type="button" className="btn btn-primary">
                        立即購買
                      </button>
                      <button type="button" className="btn btn-primary">
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card border-0 bg-transparent text-warning m-4">
                  <Image
                    src="https://i.postimg.cc/rFMNG9M9/096.jpg"
                    className="card-img-top"
                    alt="..."
                    width={280}
                    height={280}
                  />
                  <div className="card-body">
                    <p className="card-text d-flex justify-content-between">
                      商品名稱
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg>
                    </p>
                    <p className="card-text">商品價格</p>
                    <div className="d-flex justify-content-between">
                      <button type="button" className="btn btn-primary">
                        立即購買
                      </button>
                      <button type="button" className="btn btn-primary">
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
