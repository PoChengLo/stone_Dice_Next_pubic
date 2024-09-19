import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { LiaCircleSolid } from 'react-icons/lia'
import { FaCircleCheck } from 'react-icons/fa6'
import styles from '@/styles/larp/checkpage.module.css'

export default function PaymentTabs() {
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
        className="d-flex w-100 justify-content-center align-item-center"
        style={{ gap: '24px', width: '100%' }}
      >
        <Tab
          tabClassName={styles.navButton}
          tabStyle={{ border: '1px solid #F8F0E5' }}
          eventKey="user-vehicle"
          title={
            <div className="d-flex">
              <div
                className="d-flex mb-0"
                style={{ gap: '24px', width: '270px' }}
              >
                {activeTab === 'user-vehicle' ? (
                  <FaCircleCheck style={{ width: '24px', height: '24px' }} />
                ) : (
                  <LiaCircleSolid style={{ width: '24px', height: '24px' }} />
                )}
                <p className="mb-0">綠界付款</p>
              </div>
              <h6
                className="m-0"
                style={{
                  alignSelf: 'center',
                }}
              >
                ( VISA, MasterCard, JCB )
              </h6>
            </div>
          }
        ></Tab>
        <Tab
          tabClassName={styles.navButton}
          tabStyle={{ border: '1px solid #F8F0E5' }}
          eventKey="company-vehicle"
          title={
            <div className="d-flex">
              <div
                className="d-flex mb-0"
                style={{ gap: '24px', width: '270px' }}
              >
                {activeTab === 'company-vehicle' ? (
                  <FaCircleCheck style={{ width: '24px', height: '24px' }} />
                ) : (
                  <LiaCircleSolid style={{ width: '24px', height: '24px' }} />
                )}
                <p className="mb-0">LinePay</p>
              </div>
              <h6
                className="m-0"
                style={{
                  alignSelf: 'center',
                }}
              >
                ( 可用LINE點數折抵 )
              </h6>
            </div>
          }
        ></Tab>
      </Tabs>
    </>
  )
}
