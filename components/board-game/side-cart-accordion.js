import Accordion from 'react-bootstrap/Accordion'

function SideCartAccordion({ items }) {
  console.log(items)

  const boardTotal = items.length
  const preTotal = items
    .map((item) => item.subtotal)
    .reduce((acc, curr) => acc + curr, 0)

  const finalTotal = items
    .map((item) => item.subtotal)
    .reduce((acc, curr) => acc + curr, 0)
  return (
    <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>購物車內容</Accordion.Header>
        <Accordion.Body>
          {items.map((v, i) => {
            return (
              <div className="d-flex flex-column" key={v.id}>
                <p>{v.prod_name}</p>
                <p className="text-end">數量：{v.quantity}</p>
              </div>
            )
          })}
          <div className="d-flex justify-content-between">
            <h6>合計共有{boardTotal}項商品</h6>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>結帳明細</Accordion.Header>
        <Accordion.Body>
          {' '}
          <div className="d-flex justify-content-between">
            <p>小計</p>
            <p>NT${preTotal}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>運費</p>
            <p>N/A</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>優惠卷</p>
            <p>N/A</p>
          </div>
          <div className="d-flex justify-content-between">
            <h6>應付總額</h6>
            <h6>NT${finalTotal}</h6>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default SideCartAccordion
