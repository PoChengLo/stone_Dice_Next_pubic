import React, { useState } from 'react'
import InputField from '@/components/layout/default-layout/user-layout/input-field'
import Image from 'next/image'
import styles from '@/styles/user-profile/login.module.scss'
import SocialButton from '@/components/layout/default-layout/user-layout/social-butt'
import { login, parseJwt, getUserById } from '@/services/user'
import useLocalStorage from '@/hooks/use-localstorage'
import toast, { Toaster } from 'react-hot-toast'
import { initUserData } from '@/hooks/use-auth'
import { useRouter } from 'next/router'

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
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  minWidth: '240px',
}

export default function LoginPage() {
  const [user, setUser] = useState({ email: '', password: '' })
  const [auth, setAuth] = useLocalStorage('auth', {
    isAuth: false,
    userData: {},
  })
  const router = useRouter()

  // 處理表單欄位變更
  const handleFieldChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // 處理登入
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const res = await login(user)

      if (res.data.status === 'success') {
        const jwtUser = parseJwt(res.data.data.accessToken)
        const res1 = await getUserById(jwtUser.id)

        if (res1.data.status === 'success') {
          const dbUser = res1.data.data.user
          const userData = { ...initUserData }

          userData.id = dbUser.user_id || jwtUser.id
          userData.username = dbUser.user_name || jwtUser.username
          userData.google_uid = dbUser.google_uid || null
          userData.line_uid = dbUser.line_uid || jwtUser.line_uid
          userData.email = dbUser.email || jwtUser.email
          userData.name = dbUser.name || ''

          setAuth({
            isAuth: true,
            userData,
          })

          toast.success('已成功登入')
          router.push(`/user-profile/${jwtUser.id}/home`)
        } else {
          toast.error('登入後無法得到會員資料')
        }
      } else {
        toast.error('登入失敗')
      }
    } catch (error) {
      console.error('登入失敗', error)
      toast.error('伺服器錯誤，請稍後再試')
    }
  }

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

                  <form
                    className={styles['form']}
                    onSubmit={handleLogin} // 使用 onSubmit 處理表單提交
                  >
                    <InputField
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Example@email.com"
                      value={user.email} // 綁定 email 狀態
                      onChange={handleFieldChange} // 綁定變更處理函數
                    />
                    <InputField
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="At least 8 characters"
                      value={user.password} // 綁定 password 狀態
                      onChange={handleFieldChange} // 綁定變更處理函數
                    />
                    <a href="#" className={styles['forgot-password']}>
                      Forgot Password?
                    </a>
                    <button type="submit" className={styles['submit-button']}>
                      Sign in
                    </button>
                  </form>

                  <div className={styles['social-sign-in']}>
                    <div className={styles['divider-container']}>
                      <div className={styles['divider']}>
                        <div className={styles['divider-line']} />
                        <span className={styles['divider-text']}>Or</span>
                        <div className={styles['divider-line']} />
                      </div>
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
                      <p className={styles['signup-prompt']}>
                        <span>還沒有帳號嗎？</span>
                        <a href="#" style={{ color: 'rgba(217,38,38,1)' }}>
                          Sign up
                        </a>
                      </p>
                    </div>
                  </div>
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