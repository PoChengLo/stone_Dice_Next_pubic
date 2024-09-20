import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { LiaCircleSolid } from 'react-icons/lia'
import { FaCircleCheck } from 'react-icons/fa6'
import styles from '@/styles/larp/checkpage.module.css'

export default function ETicketTabs() {
  const [activeTab, setActiveTab] = useState('user-vehicle')
  return (
    <>
      <Tabs
        defaultActiveKey={activeTab}
        onSelect={(i) => {
          setActiveTab(i)
        }}
        id="ETicketTabs"
        variant="pills"
        className="d-flex"
        style={{ gap: '41px' }}
      >
        <Tab
          tabClassName={`${styles.navButton}`}
          // Style={{ border: '1px solid #F8F0E5' }}
          eventKey="user-vehicle"
          title={
            <div
              className="d-flex align-item-center mb-0"
              style={{ gap: '12px' }}
            >
              {activeTab === 'user-vehicle' ? (
                <FaCircleCheck style={{ width: '24px', height: '24px' }} />
              ) : (
                <LiaCircleSolid style={{ width: '24px', height: '24px' }} />
              )}
              <p className="d-inline mb-0">會員載具 (個人)</p>
            </div>
          }
        >
          <h5>
            依統一發票使用辦法規定
            依統一發票使用辦法規定：個人發票一經開立，無法更改或改開公司戶發票，需開立統編請選擇『公司用(統編)
            』，請務必確認選用之電子發票載具類型是否正確，一經開立不得要求更改。
            選用『會員載具(個人)』將開立「雲端發票」，開立後會提供由順立智慧股份有限公司代為開立之發票明細(內含發票號碼)，將不會提供發票紙本或電子檔案，請務必如實填寫購買人資料，若發票中獎將以當初購買人留存之連絡資訊發送通知，購買人收到通知後，可自行使用7-11的ibon機台操作列印中獎之發票，該紙本即可進行兌獎。如原資料錯誤或其他原因致使無法通知原購買人時，本公司不再另行通知亦無法協助後續中獎發票處理。
          </h5>{' '}
        </Tab>
        <Tab
          tabClassName={styles.navButton}
          eventKey="company-vehicle"
          title={
            <div
              className="d-flex  align-item-center "
              style={{ gap: '12px', margin: 0 }}
            >
              {activeTab === 'company-vehicle' ? (
                <FaCircleCheck style={{ width: '24px', height: '24px' }} />
              ) : (
                <LiaCircleSolid style={{ width: '24px', height: '24px' }} />
              )}
              <p className="d-inline mb-0">公司統編</p>
            </div>
          }
        >
          <div className="d-flex justify-content-between">
            <input
              style={{ width: '300px' }}
              type="text"
              className={`form-control ${styles.inputColor}`}
              id="company-vehicle-input"
              placeholder="請輸入統一編號"
            />
            <input
              style={{ width: '300px' }}
              type="text"
              className={`form-control ${styles.inputColor}`}
              id="company-title-input"
              placeholder="請輸入發票抬頭"
            />
          </div>{' '}
        </Tab>
        <Tab
          tabClassName={styles.navButton}
          eventKey="phone-vehicle"
          title={
            <div
              className="d-flex align-item-center"
              style={{ gap: '12px', margin: 0 }}
            >
              {activeTab === 'phone-vehicle' ? (
                <FaCircleCheck style={{ width: '24px', height: '24px' }} />
              ) : (
                <LiaCircleSolid style={{ width: '24px', height: '24px' }} />
              )}
              <p className="d-inline mb-0">手機載具</p>
            </div>
          }
        >
          <input
            type="text"
            className={`form-control ${styles.inputColor}`}
            id="phone-vehicle-input"
            placeholder="手機條碼 第一碼務必為 /，後面為7碼（大寫英文、符號、數字）"
          />
          <h5 style={{ marginTop: '9px' }}>
            依統一發票使用辦法規定
            請務必確認選用之電子發票載具代碼是否正確，一經開立不得要求更改。
          </h5>{' '}
        </Tab>
      </Tabs>
    </>
  )
}
