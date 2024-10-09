import { useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import styles from '@/styles/board-game-css/board-game-style.module.css'
import { BsCheckCircleFill, BsCircle } from 'react-icons/bs'
import { useShip711StoreOpener } from '@/hooks/use-ship-711-store'

export default function ShipMethod({ address }) {
  // 通路選擇樣式修改
  const [activeTab, setActiveTab] = useState('convenience-store')
  const handleSelect = (key) => {
    setActiveTab(key)
  }
  const getTabIcon = (tabKey) => {
    return activeTab === tabKey ? (
      <BsCheckCircleFill className={`me-xxl-2 ${styles.nav_icons}`} />
    ) : (
      <BsCircle className={`me-xxl-2 ${styles.nav_icons}`} />
    )
  }
  // 便利商店選擇樣式修改
  const [selectedStore, setSelectedStore] = useState('seven')
  const handleStoreSelect = (event) => {
    setSelectedStore(event.target.id)
  }
  const getRadioIcon = (storeKey) => {
    return selectedStore === storeKey ? (
      <BsCheckCircleFill className={`me-xxl-2 ${styles.nav_icons}`} />
    ) : (
      <BsCircle className={`me-xxl-2 ${styles.nav_icons}`} />
    )
  }
  const { store711, openWindow, closeWindow } = useShip711StoreOpener(
    'http://localhost:3006/shipment/711',
    { autoCloseMins: 3 } // x分鐘沒完成選擇會自動關閉，預設5分鐘。
  )

  return (
    <>
      <Tabs
        defaultActiveKey="convenience-store"
        id="recipient-select"
        className="mt-3"
        variant="pills"
        onSelect={handleSelect}
      >
        <Tab
          eventKey="convenience-store"
          title={<>{getTabIcon('convenience-store')} 超商取貨</>}
          tabClassName={` me-xxl-4 me-0 mb-xxl-0 mb-3 ${styles.btn} ${styles.nav_pills} `}
        >
          {/* 超商取貨內容 */}
          <label
            htmlFor="convenience-store-select"
            className={`form-label my-xxl-3 mb-2 ${styles.p}`}
          >
            選擇超商
          </label>
          <div className="d-flex justify-content-xxl-between flex-xxl-row flex-column mb-xxl-3 ">
            <input
              type="radio"
              className={`btn-check `}
              name="convenience-store"
              id="seven"
              autoComplete="off"
              checked={selectedStore === 'seven'}
              onChange={handleStoreSelect}
            />
            <label
              className={`btn btn-primary  mt-1 mt-xxl-0 ${styles.btn_pay_ship} ${styles.nav_pills}`}
              htmlFor="seven"
            >
              {getRadioIcon('seven')}
              7-11便利商店取貨
            </label>
            <input
              type="radio"
              className="btn-check"
              name="convenience-store"
              id="family"
              autoComplete="off"
              checked={selectedStore === 'family'}
              onChange={handleStoreSelect}
            />
            <label
              className={`btn btn-primary mt-3 mt-xxl-0 ${styles.btn_pay_ship} ${styles.nav_pills}`}
              htmlFor="family"
            >
              {getRadioIcon('family')}
              全家便利商店取貨
            </label>
            <input
              type="radio"
              className="btn-check"
              name="convenience-store"
              id="hi-life"
              autoComplete="off"
              checked={selectedStore === 'hi-life'}
              onChange={handleStoreSelect}
            />
            <label
              className={`btn btn-primary mt-3 mt-xxl-0 ${styles.btn_pay_ship} ${styles.nav_pills}`}
              htmlFor="hi-life"
            >
              {getRadioIcon('hi-life')}
              萊爾富便利商店取貨
            </label>
          </div>
          <div className="d-flex">
            <button
              className={`btn btn-primary mt-3 ${styles.btn} ${styles.btn_pay_ship_2}`}
              onClick={() => {
                openWindow()
              }}
            >
              選擇門市
            </button>
          </div>
          <input
            type="text"
            className={`form-control mt-3  ${styles.white_to_text} `}
            id="convenient-store-name"
            placeholder="超商名稱"
            value={store711.storename}
            disabled
          />{' '}
          <input
            type="text"
            className={`form-control mt-3  ${styles.white_to_text} `}
            id="convenient-store-address"
            placeholder="超商地址"
            value={store711.storeaddress}
            disabled
          />
        </Tab>
        <Tab
          eventKey="recipient-address"
          title={<>{getTabIcon('recipient-address')} 宅配</>}
          tabClassName={`me-xxl-4 me-0 mb-xxl-0 mb-3 ${styles.btn} ${styles.nav_pills} `}
        >
          {/* 宅配內容 */}
          <label
            htmlFor="user-recipient-address-select"
            className={`form-label my-xxl-3 my-1 ${styles.p}`}
          >
            宅配地址
          </label>
          {/* <div className="d-flex flex-xxl-row flex-column">
            <select
              className={`form-select me-xxl-4 mt-2 mt-xxl-0   ${styles.white_to_text} `}
              aria-label="country"
              defaultValue={'default'}
            >
              <option value={'default'}>縣市</option>
              <option value={1}>台北市</option>
              <option value={2}>台中市</option>
              <option value={3}>高雄市</option>
            </select>
            <select
              className={`form-select me-xxl-4 mt-3 mt-xxl-0 ${styles.white_to_text} `}
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
              className={`form-control mt-3 mt-xxl-0  ${styles.white_to_text} `}
              id="postcode"
              placeholder="郵遞區號"
            />
          </div> */}
          <input
            type="text"
            className={`form-control my-xxl-3 mt-3  mb-3 mb-xxl-0 ${styles.white_to_text} `}
            id="user-recipient-address"
            placeholder="請詳細填寫宅配地址：路/巷/弄/號/樓"
            value={`${address}`}
          />
          <label
            htmlFor="user-recipient-time-select"
            className={`form-label mb-xxl-3 mb-2 mt-xxl-3  ${styles.p}`}
          >
            配送時段
          </label>
          <select
            className={`form-select  ${styles.white_to_text} `}
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
        <Tab
          eventKey="face-to-face"
          title={<>{getTabIcon('face-to-face')} 面交</>}
          tabClassName={` ${styles.btn} ${styles.nav_pills} `}
        >
          {/* 面交內容 */}
          <label
            htmlFor="face-to-face-select"
            className={`form-label my-xxl-3  mb-2  ${styles.p}`}
          >
            選擇面交地點
          </label>
          <div className="d-flex justify-content-between flex-xxl-row flex-column">
            <input
              type="radio"
              className={`btn-check `}
              name="options"
              id="taipei"
              autoComplete="off"
              checked={selectedStore === 'taipei'}
              onChange={handleStoreSelect}
            />
            <label
              className={`btn btn-primary mt-1 mt-xxl-0 mb-3 mb-xxl-3  ${styles.btn_pay_ship} ${styles.nav_pills}`}
              htmlFor="taipei"
            >
              {getRadioIcon('taipei')}
              台北館(台北101)
            </label>
            <input
              type="radio"
              className={`btn-check `}
              name="options"
              id="taichung"
              autoComplete="off"
              checked={selectedStore === 'taichung'}
              onChange={handleStoreSelect}
            />
            <label
              className={`btn btn-primary  mt-1 mt-xxl-0 mb-3 mb-xxl-3   ${styles.btn_pay_ship} ${styles.nav_pills}`}
              htmlFor="taichung"
            >
              {getRadioIcon('taichung')}
              台中館(台中美術館)
            </label>
            <input
              type="radio"
              className={`btn-check `}
              name="options"
              id="kaohsiung"
              autoComplete="off"
              checked={selectedStore === 'kaohsiung'}
              onChange={handleStoreSelect}
            />
            <label
              className={`btn btn-primary  mt-1 mt-xxl-0 mb-3 mb-xxl-3   ${styles.btn_pay_ship} ${styles.nav_pills}`}
              htmlFor="kaohsiung"
            >
              {getRadioIcon('kaohsiung')}
              高雄館(高雄駁二)
            </label>
          </div>
        </Tab>
      </Tabs>
    </>
  )
}
