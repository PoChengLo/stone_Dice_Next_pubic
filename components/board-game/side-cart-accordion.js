import Accordion from 'react-bootstrap/Accordion'

function SideCartAccordion() {
  return (
    <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>購物車內容</Accordion.Header>
        <Accordion.Body>
          {' '}
          <div className="d-flex flex-column">
            <p>產品名稱</p>
            <p className="text-end">數量：1</p>
          </div>
          <div className="d-flex flex-column">
            <p>產品名稱</p>
            <p className="text-end">數量：1</p>
          </div>
          <div className="d-flex flex-column">
            <p>產品名稱</p>
            <p className="text-end">數量：1</p>
          </div>
          <div className="d-flex justify-content-between">
            <h6>合計共有3項商品</h6>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>結帳明細</Accordion.Header>
        <Accordion.Body>
          {' '}
          <div className="d-flex justify-content-between">
            <p>小計</p>
            <p>NT$6,000</p>
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
            <h6>NT$6,000</h6>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default SideCartAccordion
