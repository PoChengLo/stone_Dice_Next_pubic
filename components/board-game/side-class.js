import Form from 'react-bootstrap/Form'
import styles from '@/styles/board-game-css/board-game-style.module.css'

export default function SideClass({ onClick = () => {}, onChange = () => {} }) {
  return (
    <>
      <div className={`${styles.side_class} `} id={`${styles.side_class}`}>
        <div>
          <button className={`${styles.button}`}>
            <h4 className={`${styles.p}`}>彼此競爭</h4>
          </button>
        </div>
        <hr className={`${styles.hr}`} />
        <div>
          <button className={`${styles.button}`}>
            <h4 className={`${styles.p}`}>闔家歡樂</h4>
          </button>
        </div>
        <hr className={`${styles.hr}`} />

        <div>
          <button className={`${styles.button}`}>
            <h4 className={`${styles.p}`}>親子互動</h4>
          </button>
        </div>
        <hr className={`${styles.hr}`} />

        <div>
          <button className={`${styles.button}`}>
            <h4 className={`${styles.p}`}>輕鬆小品</h4>
          </button>
        </div>
        <hr className={`${styles.hr}`} />

        <div>
          <button className={`${styles.button}`}>
            <h4 className={`${styles.p}`}>資源收集</h4>
          </button>
        </div>
        <hr className={`${styles.hr}`} />

        <div>
          <button className={`${styles.button}`}>
            <h4 className={`${styles.p}`}>策略遊戲</h4>
          </button>
        </div>
        <hr className={`${styles.hr}`} />

        <div>
          <button className={`${styles.button}`}>
            <h4 className={`${styles.p}`}>腦力計算</h4>
          </button>
        </div>
        <hr className={`${styles.hr}`} />

        <div className={`${styles.price_selection}`}>
          <h4 className={`${styles.p} ${styles.price_title}`}>價格區間篩選</h4>
          <Form.Select
            aria-label="price-selection"
            onChange={onChange}
            className={`${styles.white_to_text}`}
          >
            <option value="default">所有價格</option>
            <option value="1">NT$1,000 ~ NT$1,499</option>
            <option value="2">NT$1,500 ~ NT$1,999</option>
            <option value="3">NT$2,000 ~ NT$2,499</option>
            <option value="4">NT$2,500 ~ NT$2,999</option>
          </Form.Select>
        </div>
      </div>
    </>
  )
}
