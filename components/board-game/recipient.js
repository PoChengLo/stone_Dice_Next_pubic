import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

export default function Recipient() {
  return (
    <>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
        variant="pills"
      >
        <Tab eventKey="user-same" title="同會員資訊">
          <p>姓名：</p>
          <p>聯絡電話：</p>
        </Tab>
        <Tab eventKey="user-recipient" title="常用收件人">
          <p>姓名：</p>
          <p>聯絡電話：</p>
        </Tab>
        <Tab eventKey="new-recipient" title="新增收件人">
          <div className="mb-3">
            <label htmlFor="new-recipient-name" className="form-label">
              姓名
            </label>
            <input
              type="text"
              className="form-control"
              id="new-recipient-name"
              aria-describedby="new-recipient-name"
              placeholder="收件人姓名"
            />
            <div id="new-recipient-name-commit" className="form-text">
              超商取貨請使用本名，並記得攜帶身分證前往取貨
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="new-recipient-phone" className="form-label">
              聯絡電話
            </label>
            <input
              type="text"
              className="form-control"
              id="new-recipient-phone"
              placeholder="收件人聯絡電話，例如：0987654321"
            />
            <div id="new-recipient-phone-commit" className="form-text">
              取貨通知將以此電話聯繫，請勿加入任何空格或符號，使用超商取貨請務必填寫10碼手機，如：0987654321
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  )
}
