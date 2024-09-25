import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/layout/default-layout/user-layout/navbar'
export default function Fail() {
  return (
    <>
      <Navbar />
      <div className="container">
        {/* ICON，付款失敗 */}
        <div className="row">
          <div className="col d-flex justify-content-center">
            {' '}
            <Image
              src="https://i.postimg.cc/YCB1xbFj/success-fail2.png"
              alt="fail"
              width={738}
              height={84}
            />
          </div>
        </div>
        {/* 圖片 */}
        <div className="row">
          <div className="col d-flex justify-content-center">
            <Image
              src="https://i.postimg.cc/SQg4Cxnv/sorry.png"
              alt="sorry1"
              width={600}
              height={1070}
            />
          </div>
        </div>
        {/* 聯絡客服，重新選擇付款方式，回到首頁 */}
        <div className="row">
          <div className="col">
            <div className="d-flex ">
              <button type="button" className="btn btn-primary flex-fill">
                聯絡客服
              </button>
              <button type="button" className="btn btn-primary flex-fill">
                重新選擇付款方式
              </button>
              <button type="button" className="btn btn-primary flex-fill">
                回到首頁
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
