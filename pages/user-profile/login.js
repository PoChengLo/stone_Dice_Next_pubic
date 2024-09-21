import React from 'react'
import InputField from '@/components/layout/default-layout/user-layout/input-field'
import Image from 'next/image'
import styles from '@/styles/user-profile/login.module.scss'
import SocialButton from '@/components/layout/default-layout/user-layout/social-butt'

const backgroundStyle = {
  height: '100vh',
  backgroundImage:
    'url(https://www.toptal.com/designers/subtlepatterns/uploads/binding_dark.png)',
  backgroundRepeat: 'repeat',
  backgroundPosition: 'center 0',
  backgroundAttachment: 'fixed',
}

const artImage = {
  aspectRatio: '0.76',
  objectFit: 'contain',
  objectPosition: 'center',
  width: '100%',
  borderRadius: '24px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  minWidth: '240px',
  flex: '1',
  flexBasis: '0%',
}

export default function LoginPage() {
  return (
    <>
      <div style={backgroundStyle}>
        <div className={styles['body']}>
          <main className={styles['main-container']}>
            <section className={styles['login-section']}>
              <div className={styles['login-form']}>
                <header className={styles['intro']}>
                  <h1 className={styles['welcome-title']}>歡迎來到石之骰！</h1>
                  <p className={styles['welcome-description']}>
                    傳說在非洲，每過去六十秒，就有一分鐘流逝，想想長頸鹿 <br />
                    喝咖啡的時候，到肚子裡面永遠都是冷咖啡，擲兩次公平的 <br />
                    硬幣你就會有兩個公平的硬幣。
                  </p>
                </header>
                <form className={styles['form']}>
                  <InputField
                    label="Email"
                    type="email"
                    placeholder="Example@email.com"
                  />
                  <InputField
                    label="Password"
                    type="password"
                    placeholder="At least 8 characters"
                  />
                  <a href="#" className={styles['forgot-password']}>
                    Forgot Password?
                  </a>
                  <button type="submit" className={styles['submit-button']}>
                    Sign in
                  </button>
                </form>
                <div className={styles['social-sign-in']}>
                  <div className={styles['divider']}>
                    <div className={styles['divider-line']} />
                    <span className={styles['divider-text']}>Or</span>
                    <div className={styles['divider-line']} />
                    <div className={styles['social-buttons']}>
                      <SocialButton
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9002037aa47f6718674f900f6e231f6dbb37e7345b6d153386f2c821a75ff990?placeholderIfAbsent=true&apiKey=efb5b4cc8c044d4a8cc81c446806a7df"
                        text="Sign in with Google"
                      />
                      <SocialButton
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ffa5553a82763214792e8519750d4ccddf094d8413a32354ddcbb06d1cfc93f5?placeholderIfAbsent=true&apiKey=efb5b4cc8c044d4a8cc81c446806a7df"
                        text="Sign in with Facebook"
                      />
                    </div>
                  </div>
                  <div className={styles['social-buttons']}></div>
                </div>
                <p className={styles['signup-prompt']}>
                  <span>還沒有帳號嗎？</span>
                  <a href="#" style={{ color: 'rgba(217,38,38,1)' }}>
                    Sign up
                  </a>
                </p>

                <footer className="copyright">
                  © 2023 ALL RIGHTS RESERVED
                </footer>
              </div>{' '}
              <div className={styles['art-section']}>
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/73d1faff86a6a7216d6599e924d5feac8382cc80757abd1111aa9a5779c75936?placeholderIfAbsent=true&apiKey=efb5b4cc8c044d4a8cc81c446806a7df"
                  alt=""
                  width={707}
                  height={932}
                  style={artImage}
                />
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
