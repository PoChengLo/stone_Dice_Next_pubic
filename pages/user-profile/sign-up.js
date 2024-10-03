import React, { useState } from 'react'
import InputField from '@/components/layout/default-layout/user-layout/input-field'
import Image from 'next/image'
import styles from '@/styles/user-profile/signup.module.scss'

// 背景樣式設定
const backgroundStyle = {
  height: '100vh',
  backgroundColor: '#1E1E1E',
  backgroundImage: 'url(https://i.postimg.cc/wTS865ZT/rocky-wall.png)',
  backgroundRepeat: 'repeat',
  backgroundPosition: 'center 0',
  backgroundAttachment: 'fixed',
}

// 藝術圖像樣式設定
const artImage = {
  objectFit: 'cover',
  objectPosition: 'center',
  width: '100%',
  height: '100%',
  minWidth: '240px',
}

export default function SignUpPage() {
  return (
    <>
      <div style={backgroundStyle}>
        <div className={styles['body']}>
          <main className={styles['main-container']}>
            <section className={styles['login-section']}>
              <div className={styles['login-form']}>
                <header className={styles['intro']}>
                  <h1 className={styles['welcome-title']}>立即註冊：</h1>
                  <div className={styles['divider-line']} />

                  <form className={styles['form']}>
                    <InputField
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Example@email.com"
                    />
                    <InputField
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="At least 8 characters"
                    />
                    <InputField
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="At least 8 characters"
                    />
                    <InputField
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="At least 8 characters"
                    />

                    <button type="submit" className={styles['submit-button']}>
                      Sign Up
                    </button>
                  </form>
                </header>
              </div>
              <div className={styles['art-section']}>
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/73d1faff86a6a7216d6599e924d5feac8382cc80757abd1111aa9a5779c75936?placeholderIfAbsent=true&apiKey=efb5b4cc8c044d4a8cc81c446806a7df"
                  alt=""
                  width={622}
                  height={820}
                  style={artImage}
                />
                <footer className={styles['copyright']}>
                  © 2024 THE DICE IN THE STONE
                </footer>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
