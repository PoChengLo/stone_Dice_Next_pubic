import Form from 'react-bootstrap/Form'

function OrderSelection() {
  return (
    <Form.Select aria-label="order-selection">
      <option>預設排序</option>
      <option value="1">價錢由高到低</option>
      <option value="2">價錢由低到高</option>
      <option value="3">銷售數量由高到低</option>
      <option value="4">銷售數量由低到高</option>
    </Form.Select>
  )
}

export default OrderSelection
