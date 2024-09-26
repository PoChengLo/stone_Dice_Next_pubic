import React from 'react'
import style from '@/styles/user-profile/user-button.module.scss'

export default function UserButton() {
  return (
    <>
      <button class={style['myButton']}>
        <p>送出變更</p>
      </button>
    </>
  )
}
