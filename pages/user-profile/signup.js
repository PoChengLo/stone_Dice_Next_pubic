import React from 'react'
import Image from 'next/image'
import InputField from '@/components/layout/default-layout/user-layout/input-field'
import styles from '@/styles/user-profile/signup.module.scss'

const backgroundStyle = {
  height: '100vh',
  backgroundColor: '#1E1E1E',
  backgroundImage: 'url(https://i.postimg.cc/wTS865ZT/rocky-wall.png)',
  backgroundRepeat: 'repeat',
  backgroundPosition: 'center 0',
  backgroundAttachment: 'fixed',
}

export default function SignupPage() {
  return (
    <div style={backgroundStyle}>
      <div className={styles.body}>
        <main className={styles['main-container']}>
          <div className={styles['art-section']}>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73d1faff86a6a7216d6599e924d5feac8382cc80757abd1111aa9a5779c75936?placeholderIfAbsent=true&apiKey=efb5b4cc8c044d4a8cc81c446806a7df"
              alt=""
              layout="fill"
              objectFit="cover"
              className={styles['art-image']}
            />
          </div>
          <section className={styles['login-section']}>
            <h1 className={styles['welcome-title']}>註冊</h1>
            <div className={styles['form-container']}>
              <div className={styles['login-form']}>
                <form className={styles.form}>
                  <InputField label="Email" name="email" type="email" />
                  <InputField
                    label="Password"
                    name="password"
                    type="password"
                  />
                  <InputField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                  />
                  <button type="submit" className={styles['submit-button']}>
                    Sign up
                  </button>
                </form>
                <p className={styles['signup-prompt']}>
                  <span>已經有帳號了？</span>
                  <a href="/login">Login</a>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer className={styles.copyright}>© 2024 THE DICE IN THE STONE</footer>
    </div>
  )
}
