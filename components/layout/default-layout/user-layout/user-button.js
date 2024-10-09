import React from 'react'
import style from '@/styles/user-profile/user-button.module.scss'

export default function UserButton({
  onClick,
  buttonText = '送出變更',
  disabled = false,
}) {
  return (
    <button
      className={style['myButton']}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <p>{buttonText}</p>
    </button>
  )
}
