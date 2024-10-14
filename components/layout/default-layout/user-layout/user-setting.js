import React from 'react'
import styles from '@/styles/user-profile/user-setting.module.scss'
import ResetPasswordButton from '@/components/layout/default-layout/user-layout/reset-password-button'
import SocialButton from '@/components/layout/default-layout/user-layout/social-butt'

export default function UserSetting() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>帳號/密碼專區</h1>
      <div className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>修改密碼</h2>
          <div className={styles.resetPasswordWrapper}>
            <ResetPasswordButton />
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>與其他帳號連動</h2>
          <div className={styles.socialButtonsContainer}>
            <SocialButton
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9002037aa47f6718674f900f6e231f6dbb37e7345b6d153386f2c821a75ff990?placeholderIfAbsent=true&apiKey=efb5b4cc8c044d4a8cc81c446806a7df"
              text="Sign in with Google"
              className={styles.socialButton}
            />
            <SocialButton
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ffa5553a82763214792e8519750d4ccddf094d8413a32354ddcbb06d1cfc93f5?placeholderIfAbsent=true&apiKey=efb5b4cc8c044d4a8cc81c446806a7df"
              text="Sign in with Facebook"
              className={styles.socialButton}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
