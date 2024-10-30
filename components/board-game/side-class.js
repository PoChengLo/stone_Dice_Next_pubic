import Form from 'react-bootstrap/Form'
import styles from '@/styles/board-game-css/board-game-style.module.css'

export default function SideClass({ onClick = () => {}, onChange = () => {} }) {
  const side_class_name = [
    { name: '全部商品', tag_id: 'default' },
    { name: '彼此競爭', tag_id: '28' },
    { name: '闔家歡樂', tag_id: '26' },
    { name: '親子互動', tag_id: '30' },
    { name: '輕鬆小品', tag_id: '35' },
    { name: '資源收集', tag_id: '39' },
    { name: '策略遊戲', tag_id: '42' },
    { name: '腦力計算', tag_id: '52' },
  ]
  return (
    <>
      <div className={`${styles.side_class} `} id={`${styles.side_class}`}>
        {/* 側邊欄標籤 */}
        {side_class_name.map((v, i) => (
          <div key={i}>
            <div>
              <button
                className={`${styles.button}`}
                onClick={onClick}
                value={v.tag_id}
              >
                <h4 className={`${styles.p}`} style={{ pointerEvents: 'none' }}>
                  {v.name}
                </h4>
              </button>
            </div>
            <hr className={`${styles.hr}`} />
          </div>
        ))}
        {/* 價格區間篩選 */}
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
