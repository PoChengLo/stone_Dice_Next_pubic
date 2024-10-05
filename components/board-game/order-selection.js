import Form from 'react-bootstrap/Form'
import styles from '@/styles/board-game-css/board-game-style.module.css'

function OrderSelection({ onChange = () => {} }) {
  return (
    <Form.Select
      aria-label="order-selection"
      onChange={onChange}
      className={`${styles.white_to_text}`}
    >
      <option value="">預設排序</option>
      <option value="1">依價格排序：高至低</option>
      <option value="2">依價格排序：低至高</option>
      <option value="3">依熱銷排行</option>
      <option value="4">依最新到貨</option>
    </Form.Select>
  )
}

export default OrderSelection
