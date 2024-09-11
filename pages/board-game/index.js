import React from 'react'
import Image from 'next/image'

export default function BoardGame() {
  return (
    <>
      <div className="container">
        {/* 搜尋欄，標籤 */}
        <div className="row my-3">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="搜尋"
            />
          </div>
          <div className="col-6">
            <button className="btn btn-primary">單人遊戲</button>
          </div>
        </div>
        {/* 總共商品數，下拉式選單，卡片，詳細資訊 */}
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-primary me-3">
              共二十件商品
            </button>
            <div className="btn-group me-3">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                預設排序
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    預設排序
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    價錢由高到低
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    價錢由低到高
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    銷售數量由高到低
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    銷售數量由低到高
                  </a>
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-primary me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-grid-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
              </svg>
            </button>
            <button type="button" className="btn btn-primary me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-card-text"
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* 側邊欄，商品卡片 */}
      <div className="container-fluid p-5">
        <div className="row">
          {/* 側邊欄 */}
          <div className="col-2 m-auto ">
            <ul className="list-group side-bar">
              <li
                className="list-group-item list-group-item-action bg-transparent text-warning"
                type="button"
              >
                熱賣桌遊
              </li>
              <li
                className="list-group-item list-group-item-action bg-transparent text-warning"
                type="button"
              >
                店家推薦
              </li>
              <li
                className="list-group-item list-group-item-action bg-transparent text-warning"
                type="button"
              >
                最新到貨
              </li>
              <li
                className="list-group-item list-group-item-action bg-transparent text-warning"
                type="button"
              >
                降價促銷
              </li>
              <li
                className="list-group-item list-group-item-action bg-transparent text-warning"
                type="button"
              >
                派對遊戲
              </li>
              <li
                className="list-group-item list-group-item-action bg-transparent text-warning"
                type="button"
              >
                親子互動
              </li>
              <li
                className="list-group-item list-group-item-action bg-transparent text-warning"
                type="button"
              >
                陣營對抗
              </li>
              <li
                className="list-group-item list-group-item-action bg-transparent text-warning"
                type="button"
              >
                策略遊戲
              </li>
              <li
                className="list-group-item list-group-item-action bg-transparent text-warning"
                type="button"
              >
                桌遊周邊/配件
              </li>
            </ul>
            <div className="card bg-transparent text-warning">
              <div className="card-body">
                <h5 className="card-title">價格</h5>
                <div className="row">
                  <div className="col-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="$"
                    />
                  </div>
                  <div className="col-2">
                    <p>~</p>
                  </div>
                  <div className="col-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="$"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 商品卡片 */}
          <div className="col-10">
            <div className="row">
              <div className="col-3">
                <div className="card border-0 bg-transparent text-warning m-4">
                  <Image
                    src="https://i.postimg.cc/t4f6cdQw/043.jpg"
                    className="card-img-top"
                    alt=""
                    width={280}
                    height={280}
                  />
                  <div className="card-body">
                    <p className="card-text d-flex justify-content-between px-1">
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
                    <p className="card-text px-1">商品價格</p>
                    <div className="d-flex justify-content-between">
                      <button type="button" className="btn btn-primary buy-now">
                        立即購買
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary add-in-cart"
                      >
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card border-0 bg-transparent text-warning m-4">
                  <Image
                    src="https://i.postimg.cc/t4f6cdQw/043.jpg"
                    className="card-img-top"
                    alt=""
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
                    src="https://i.postimg.cc/t4f6cdQw/043.jpg"
                    className="card-img-top"
                    alt=""
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
                    src="https://i.postimg.cc/t4f6cdQw/043.jpg"
                    className="card-img-top"
                    alt=""
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
                    src="https://i.postimg.cc/t4f6cdQw/043.jpg"
                    className="card-img-top"
                    alt=""
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
                    src="https://i.postimg.cc/t4f6cdQw/043.jpg"
                    className="card-img-top"
                    alt=""
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
                    src="https://i.postimg.cc/t4f6cdQw/043.jpg"
                    className="card-img-top"
                    alt=""
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
                    src="https://i.postimg.cc/t4f6cdQw/043.jpg"
                    className="card-img-top"
                    alt=""
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
            <div className="row">
              <div className="col">
                <nav aria-label="Page navigation example d-flex justify-content-center">
                  <ul class="pagination d-flex justify-content-center">
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}