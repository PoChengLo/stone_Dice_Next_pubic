import { useState } from 'react'
import { useRouter } from 'next/router'
import InputField from '@/components/layout/default-layout/user-layout/input-field'
import styles from '@/styles/user-profile/signup.module.scss'
import Image from 'next/image'
import { register } from '@/services/user'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const backgroundStyle = {
  height: '100vh',
  backgroundColor: '#1E1E1E',
  backgroundImage: 'url(https://i.postimg.cc/wTS865ZT/rocky-wall.png)',
  backgroundRepeat: 'repeat',
  backgroundPosition: 'center 0',
  backgroundAttachment: 'fixed',
}

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: '',
    user_name: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  const validateField = (name, value) => {
    let error = ''
    switch (name) {
      case 'email':
        if (!value || value.length < 3 || !value.includes('@')) {
          error = '請輸入正確的電子郵件'
        }
        break
      case 'user_name':
        if (value.length > 20) {
          error = '使用者名稱不得大於20字'
        } else if (!value || value.length < 3) {
          error = '請填寫至少3個字元以上的名稱'
        }
        break
      case 'password':
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value)) {
          error = '密碼長度至少6個字元，須包含英文與數字'
        }
        break
      case 'confirmPassword':
        if (value !== formData.password) {
          error = '密碼不相符'
        }
        break
    }
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 檢查所有欄位是否都已填寫且沒有錯誤
    if (
      Object.values(formData).some((v) => !v) ||
      Object.values(errors).some((e) => e)
    ) {
      setSubmitError('請檢查所有欄位並正確填寫')
      return
    }

    setIsLoading(true)
    setSubmitError('')

    try {
      const response = await register({
        email: formData.email,
        user_name: formData.user_name,
        password: formData.password,
      })

      if (response.data.status === 'success') {
        // 註冊成功，轉到登入頁面
        router.push('/user-profile/login')
      } else {
        setSubmitError(response.data.message || '註冊失敗，請稍後再試')
      }
    } catch (error) {
      setSubmitError(error.response?.data?.message || '發生錯誤，請稍後再試')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div style={backgroundStyle}>
      <div className={styles.body}>
        <main className={styles['main-container']}>
          <div className={styles['art-section']}>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73d1faff86a6a7216d6599e924d5feac8382cc80757abd1111aa9a5779c75936?apiKey=efb5b4cc8c044d4a8cc81c446806a7df"
              alt=""
              layout="fill"
              objectFit="cover"
              className={styles['art-image']}
            />
          </div>
          <section className={styles['login-section']}>
            <div className={styles['welcome-title']}>
              <h1>註冊</h1>
            </div>
            <div className={styles['form-container']}>
              <div className={styles['login-form']}>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    defaultHelperText="請輸入正確的電子郵件"
                    placeholder=" "
                  />
                  <InputField
                    label="User name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    error={!!errors.user_name}
                    helperText={errors.user_name}
                    defaultHelperText="須包含3到20個字元，只允許大小寫字母、數字及以下符號：_、-"
                    placeholder=" "
                  />
                  <InputField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={!!errors.password}
                    helperText={errors.password}
                    defaultHelperText="密碼長度至少6個字元，須包含英文與數字"
                    placeholder=" "
                  />
                  <InputField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                    defaultHelperText="請再次輸入您的密碼"
                    placeholder=" "
                  />

                  <label className={styles.checkbox_container}>
                    <input
                      type="checkbox"
                      required
                      className={styles.checkbox}
                    />
                    <span className={styles.checkmark}></span>
                    <span className={styles.main_text}>
                      我同意
                      <Link
                        href="/terms-and-privacy"
                        className={styles.terms_link}
                      >
                        服務條款與隱私政策
                        <FaExternalLinkAlt className={styles.link_icon} />
                      </Link>
                    </span>
                  </label>

                  {submitError && <p className={styles.error}>{submitError}</p>}
                  <button
                    type="submit"
                    className={styles['submit-button']}
                    disabled={isLoading}
                  >
                    {isLoading ? '註冊中...' : '註冊'}
                  </button>
                </form>
                <p className={styles['signup-prompt']}>
                  <span>已經有帳號了？</span>
                  <Link href="/user-profile/login">登入</Link>
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
