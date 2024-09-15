import React from 'react'
import Recipient from '@/components/board-game/recipient'

export default function PayShip() {
  return (
    <>
      {/* 取件人資訊 */}
      {/* 收件換到物流區 */}
      <div className="row">
        <div className="col">
          <label htmlFor="e-ticket" className="form-label">
            取件人資訊
          </label>
          <Recipient />
        </div>
      </div>
    </>
  )
}
