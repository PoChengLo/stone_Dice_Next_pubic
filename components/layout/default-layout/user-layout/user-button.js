import React from 'react'
import style from '@/styles/user-profile/user-button.module.scss'

const textStyle = {
  color: '#635336',
  fontSize: '18px',
  position: 'relative',
  top: '0.3rem',
}

export default function UserButton() {
  return (
    <>
      <button class={style['myButton']}>
        <p style={textStyle}>送出變更</p>
      </button>
    </>
  )
}
