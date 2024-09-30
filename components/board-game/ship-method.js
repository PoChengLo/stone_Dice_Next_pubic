import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

export default function ShipMethod() {
  return (
    <>
      <Tabs
        defaultActiveKey="convenience-store"
        id="recipient-select"
        className="mb-3"
        variant="pills"
      >
        <Tab eventKey="convenience-store" title="超商取貨">
          {/* 超商取貨內容 */}
          <label htmlFor="convenience-store-select" className="form-label">
            選擇超商
          </label>
          <div className="d-flex">
            <input
              type="radio"
              className="btn-check"
              name="convenience-store"
              id="seven"
              autoComplete="off"
              defaultChecked=""
            />
            <label className="btn btn-primary flex-fill" htmlFor="seven">
              7-11便利商店取貨
            </label>
            <input
              type="radio"
              className="btn-check"
              name="convenience-store"
              id="family"
              autoComplete="off"
            />
            <label className="btn btn-primary flex-fill" htmlFor="family">
              全家便利商店取貨
            </label>
            <input
              type="radio"
              className="btn-check"
              name="convenience-store"
              id="hi-life"
              autoComplete="off"
            />
            <label className="btn btn-primary flex-fill" htmlFor="hi-life">
              萊爾富便利商店取貨
            </label>
          </div>
          <div className="d-flex">
            <button className="btn btn-primary flex-fill">請選擇門市</button>
          </div>
        </Tab>
        <Tab eventKey="recipient-address" title="宅配">
          {/* 宅配內容 */}
          <label htmlFor="user-recipient-address-select" className="form-label">
            宅配地址
          </label>
          <div className="d-flex">
            <select
              className="form-select"
              aria-label="country"
              defaultValue={'default'}
            >
              <option value={'default'}>縣市</option>
              <option value={1}>台北市</option>
              <option value={2}>台中市</option>
              <option value={3}>高雄市</option>
            </select>
            <select
              className="form-select"
              aria-label="region"
              defaultValue={'default'}
            >
              <option value={'default'}>鄉鎮市區</option>
              <option value={1}>信義區</option>
              <option value={2}>烏日區</option>
              <option value={3}>前金區</option>
            </select>
            <input
              type="text"
              className="form-control"
              id="postcode"
              placeholder="郵遞區號"
            />
          </div>
          <input
            type="text"
            className="form-control"
            id="user-recipient-address"
            placeholder="請詳細填寫宅配地址：路/巷/弄/號/樓"
          />
          <label htmlFor="user-recipient-time-select" className="form-label">
            配送時段
          </label>
          <select
            className="form-select"
            aria-label="time"
            defaultValue={'default'}
          >
            <option value={'default'}>請選擇配送時段</option>
            <option value={1}>不限時</option>
            <option value={2}>早上(09:00~13:00)</option>
            <option value={3}>下午(13:00~18:00)</option>
            <option value={3}>晚上(18:00~20:00)</option>
          </select>
        </Tab>
        <Tab eventKey="new-recipient" title="面交">
          {/* 面交內容 */}
          <label htmlFor="face-to-face-select" className="form-label">
            選擇面交地點
          </label>
          <div className="d-flex">
            <input
              type="radio"
              className="btn-check"
              name="options"
              id="taipei"
              autoComplete="off"
              defaultChecked=""
            />
            <label className="btn btn-primary flex-fill" htmlFor="taipei">
              台北館(台北101)
            </label>
            <input
              type="radio"
              className="btn-check"
              name="options"
              id="taichung"
              autoComplete="off"
            />
            <label className="btn btn-primary flex-fill" htmlFor="taichung">
              台中館(台中美術館)
            </label>
            <input
              type="radio"
              className="btn-check"
              name="options"
              id="kaohsiung"
              autoComplete="off"
            />
            <label className="btn btn-primary flex-fill" htmlFor="kaohsiung">
              高雄館(高雄駁二)
            </label>
          </div>
        </Tab>
      </Tabs>
    </>
  )
}
