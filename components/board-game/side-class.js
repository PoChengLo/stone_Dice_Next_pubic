import React from 'react'
import styles from '@/styles/board-game-css/board-game-style.module.css'

export default function SideClass() {
  return (
    <>
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
              <input type="text" className="form-control" placeholder="$" />
            </div>
            <div className="col-2">
              <p>~</p>
            </div>
            <div className="col-5">
              <input type="text" className="form-control" placeholder="$" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
