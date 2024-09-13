import React from 'react'
import '@/styles/Larp.module.css'
import { Image } from 'react-bootstrap'

export default function LarpPage() {
  return (
    <>
      {/* 置頂大圖 */}
      <Image
        src="https://i.postimg.cc/qqgTnCn5/image.png"
        alt="石之骰密室逃脫"
        width={'100%'}
        height={'auto'}
      />
      <div className="larpContainer">
        {/* 遊戲主題分隔線 */}
        <div
          className="d-flex w-100 justify-content-evenly align-items-center"
          style={{ padding: '0 20% 0 20%' }}
        >
          <div className="line flex-fill" />
          <div
            className="primary-text text-center"
            style={{ fontSize: 40, padding: '0 30px' }}
          >
            遊戲主題
          </div>
          <div className="line flex-fill" />
        </div>
        {/* 密室逃脫/劇本殺選擇按鈕 */}
        <div id="larp-button">
          <button type="button" className="btn btn-warning btn-lg">
            密室逃脫
          </button>
          <button type="button" className="btn btn-outline-warning btn-lg">
            劇本殺
          </button>
          {/* 館別按鈕 */}
          <div id="larp-location" className="d-flex justify-content-evenly">
            <button type="button" className="active btn btn-primary btn-lg">
              台北館
            </button>
            <button type="button" className="btn btn-lg secondary-text">
              台中館
            </button>
            <button type="button" className="btn btn-lg secondary-text">
              高雄館
            </button>
          </div>
          {/* 篩選小助理 */}
          <div id="select" className="dropdown">
            <button
              className="btn btn-warning dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                width={20}
                height={16}
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.77771 1.00122H19H6.77771Z" fill="#7F5A3D" />
                <path
                  d="M6.77771 1.00122H19"
                  stroke="#7F5A3D"
                  strokeWidth="2.0053"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.33325 1.01234L2.34436 1L2.33325 1.01234Z"
                  fill="#7F5A3D"
                />
                <path
                  d="M2.33325 1.01234L2.34436 1"
                  stroke="#7F5A3D"
                  strokeWidth="2.0053"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.33325 7.67896L2.34436 7.66663L2.33325 7.67896Z"
                  fill="#7F5A3D"
                />
                <path
                  d="M2.33325 7.67896L2.34436 7.66663"
                  stroke="#7F5A3D"
                  strokeWidth="2.0053"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 14.1124L1.88889 15.0013L4.11111 12.7791"
                  fill="#7F5A3D"
                />
                <path
                  d="M1 14.1124L1.88889 15.0013L4.11111 12.7791"
                  stroke="#7F5A3D"
                  strokeWidth="2.0053"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M6.77771 7.66785H19H6.77771Z" fill="#7F5A3D" />
                <path
                  d="M6.77771 7.66785H19"
                  stroke="#7F5A3D"
                  strokeWidth="2.0053"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M6.77771 14.3346H19H6.77771Z" fill="#7F5A3D" />
                <path
                  d="M6.77771 14.3346H19"
                  stroke="#7F5A3D"
                  strokeWidth="2.0053"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span style={{ marginLeft: 15 }}>篩選小助理</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <label className="dropdown-item">
                  <input type="checkbox" defaultValue={1} /> 奇幻
                </label>
              </li>
              <li>
                <label className="dropdown-item">
                  <input type="checkbox" defaultValue={2} /> 懸疑
                </label>
              </li>
              <li>
                <label className="dropdown-item">
                  <input type="checkbox" defaultValue={3} /> 恐怖
                </label>
              </li>
              <li>
                <label className="dropdown-item">
                  <button>清除</button>
                </label>
              </li>
            </ul>
          </div>
        </div>
        {/* 密室逃脫卡片 */}
        {/*
        <div className="row text-white d-flex justify-content-between">
          <div className="card bg-transparent" style={{ width: 342 }}>
            <img
              src="img/larp-product/午夜圖書館.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title">午夜圖書館</h4>
              <p className="card-text">NT$ 600/人</p>
              <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-warning">
                  主題預約
                </a>
                <a href="#" className="btn btn-warning">
                  查看更多
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-transparent" style={{ width: 342 }}>
            <img
              src="img/larp-product/午夜圖書館.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title">午夜圖書館</h4>
              <p className="card-text">NT$ 600/人</p>
              <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-warning">
                  主題預約
                </a>
                <a href="#" className="btn btn-warning">
                  查看更多
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-transparent" style={{ width: 342 }}>
            <img
              src="img/larp-product/午夜圖書館.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title">午夜圖書館</h4>
              <p className="card-text">NT$ 600/人</p>
              <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-warning">
                  主題預約
                </a>
                <a href="#" className="btn btn-warning">
                  查看更多
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-transparent" style={{ width: 342 }}>
            <img
              src="img/larp-product/午夜圖書館.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title">午夜圖書館</h4>
              <p className="card-text">NT$ 600/人</p>
              <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-warning">
                  主題預約
                </a>
                <a href="#" className="btn btn-warning">
                  查看更多
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-white d-flex justify-content-between">
          <div className="card bg-transparent" style={{ width: 342 }}>
            <img
              src="img/larp-product/午夜圖書館.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title">午夜圖書館</h4>
              <p className="card-text">NT$ 600/人</p>
              <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-warning">
                  主題預約
                </a>
                <a href="#" className="btn btn-warning">
                  查看更多
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-transparent" style={{ width: 342 }}>
            <Image
              src="img/larp-product/午夜圖書館.png"
              alt="密室逃脫-午夜圖書館"
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title">午夜圖書館</h4>
              <p className="card-text">NT$ 600/人</p>
              <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-warning">
                  主題預約
                </a>
                <a href="#" className="btn btn-warning">
                  查看更多
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-transparent" style={{ width: 342 }}>
            <img
              src="img/larp-product/午夜圖書館.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title">午夜圖書館</h4>
              <p className="card-text">NT$ 600/人</p>
              <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-warning">
                  主題預約
                </a>
                <a href="#" className="btn btn-warning">
                  查看更多
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-transparent" style={{ width: 342 }}>
            <img
              src="img/larp-product/午夜圖書館.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title">午夜圖書館</h4>
              <p className="card-text">NT$ 600/人</p>
              <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-warning">
                  主題預約
                </a>
                <a href="#" className="btn btn-warning">
                  查看更多
                </a>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
    </>
  )
}
