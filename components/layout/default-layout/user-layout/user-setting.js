import React from 'react'
import styles from '@/styles/user-profile/user-setting.module.scss'

export default function UserSetting() {
  return (
    <>
      <div className={styles['header']}>帳號/密碼專區</div>
      <div className={styles['line']} />
      <div className={styles['small-header']}>修改密碼</div>
      <div className={styles['user-info']}>
        <div className={styles['input-bar']}>
          舊密碼：
          <input
            type="text"
            value=""
            name="nick_name"
            onChange=""
            placeholder="請輸入你的舊密碼"
          />
        </div>
        <div className={styles['input-bar']}>
          新密碼：
          <input
            type="text"
            value=""
            name="nick_name"
            onChange=""
            placeholder="密碼長度至少6個字元，須包含英文與數字"
          />
        </div>
        <div className={styles['input-bar']}>
          再次輸入新密碼：
          <input
            type="text"
            value=""
            name="nick_name"
            onChange=""
            placeholder="請再重複輸入新密碼"
          />
        </div>
      </div>

      <div className={styles['line']} />
      <div className={styles['small-header']}>與其他帳號連動</div>
    </>
  )
}
