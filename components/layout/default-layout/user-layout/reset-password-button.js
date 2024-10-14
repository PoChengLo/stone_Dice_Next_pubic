import React from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/user-profile/reset-password-button.module.scss'

export default function ResetPasswordButton() {
  const router = useRouter()

  const handleClick = () => {
    // 添加點擊動畫效果的類
    document.getElementById('resetPasswordBtn').classList.add(styles.clicked)

    // 延遲導航以顯示動畫效果
    setTimeout(() => {
      router.push('/user-profile/reset-password')
    }, 300) // 300ms 後導航，與 CSS 動畫持續時間匹配
  }

  return (
    <button
      id="resetPasswordBtn"
      className={styles.resetPasswordBtn}
      onClick={handleClick}
    >
      <span className={styles.buttonText}>立即修改</span>
      <span className={styles.arrow}>→</span>
    </button>
  )
}
