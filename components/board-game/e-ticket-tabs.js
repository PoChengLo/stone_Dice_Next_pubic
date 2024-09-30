import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import styles from '@/styles/board-game-css/board-game-style.module.css'

export default function ETicketTabs() {
  return (
    <>
      <Tabs
        defaultActiveKey="user-vehicle"
        id="ETicketTabs"
        className={`mb-3 ${styles.btnPrimary}`}
        variant="pills"
      >
        <Tab
          eventKey="user-vehicle"
          title="會員載具（個人）"
          tabClassName={`${styles.nav_pills_form}`}
        >
          <input
            type="text"
            className="form-control"
            id="user-vehicle-input"
            placeholder="請輸入會員載具"
            defaultValue={'/XX4567'}
          />{' '}
          <p>
            依統一發票使用辦法規定
            依統一發票使用辦法規定：個人發票一經開立，無法更改或改開公司戶發票，需開立統編請選擇『公司用(統編)
            』，請務必確認選用之電子發票載具類型是否正確，一經開立不得要求更改。
            選用『會員載具(個人)』將開立「雲端發票」，開立後會提供由順立智慧股份有限公司代為開立之發票明細(內含發票號碼)，將不會提供發票紙本或電子檔案，請務必如實填寫購買人資料，若發票中獎將以當初購買人留存之連絡資訊發送通知，購買人收到通知後，可自行使用7-11的ibon機台操作列印中獎之發票，該紙本即可進行兌獎。如原資料錯誤或其他原因致使無法通知原購買人時，本公司不再另行通知亦無法協助後續中獎發票處理。
          </p>{' '}
        </Tab>
        <Tab eventKey="company-vehicle" title="公司統編">
          <div className="d-flex justify-content-between">
            <input
              type="text"
              className="form-control"
              id="company-vehicle-input"
              placeholder="請輸入統一編號"
            />
            <input
              type="text"
              className="form-control"
              id="company-title-input"
              placeholder="請輸入發票抬頭"
            />
          </div>{' '}
        </Tab>
        <Tab eventKey="phone-vehicle" title="手機載具">
          <input
            type="text"
            className="form-control"
            id="phone-vehicle-input"
            placeholder="手機條碼 第一碼務必為 /，後面為7碼（大寫英文、符號、數字）"
          />
          <p>
            依統一發票使用辦法規定
            請務必確認選用之電子發票載具代碼是否正確，一經開立不得要求更改。
          </p>{' '}
        </Tab>
      </Tabs>
    </>
  )
}
