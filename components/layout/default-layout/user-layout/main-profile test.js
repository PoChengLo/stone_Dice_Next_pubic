import React from 'react'

const MainProfile = ({ userData }) => {
  if (!userData) {
    return <p>Loading user data...</p> // 確保有資料時再渲染
  }

  return (
    <div>
      <h1>使用者帳號：{userData.user_name}</h1>
      <p>電子郵件：{userData.email}</p>
      <p>手機號碼：{userData.mobile}</p>
      {/* 顯示更多的使用者資料 */}
    </div>
  )
}

export default MainProfile
