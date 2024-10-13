import React, { useState } from 'react'
import axios from 'axios'
import styles from '@/styles/user-profile/reset-password.module.scss'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [step, setStep] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const [slideDirection, setSlideDirection] = useState('right')

  const handleNext = async () => {
    if (step === 0) {
      await handleRequestOtp()
    } else if (step === 1) {
      await handleVerifyOtp()
    } else {
      await handleResetPassword()
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setIsSliding(true)
      setSlideDirection('right')
      setTimeout(() => {
        setStep((prevStep) => prevStep - 1)
        setIsSliding(false)
      }, 150)
    }
  }

  const handleRequestOtp = async () => {
    if (!email) {
      alert('請輸入信箱地址')
      return
    }

    try {
      const response = await axios.post('http://localhost:3006/request-otp', {
        email,
      })
      if (response.data.status === 'success') {
        alert('OTP 已發送，請檢查您的信箱')
        setIsSliding(true)
        setSlideDirection('left')
        setTimeout(() => {
          setStep((prevStep) => prevStep + 1)
          setIsSliding(false)
        }, 150)
      } else {
        alert(response.data.message)
      }
    } catch (error) {
      console.error('請求 OTP 時出錯:', error)
      alert('伺服器錯誤，請稍後再試')
    }
  }

  const handleVerifyOtp = async () => {
    if (!email || !otp) {
      alert('請輸入信箱和 OTP')
      return
    }

    try {
      const response = await axios.post('http://localhost:3006/verify-otp', {
        email,
        token: otp,
      })
      if (response.data.status === 'success') {
        alert('OTP 驗證成功')
        setIsSliding(true)
        setSlideDirection('left')
        setTimeout(() => {
          setStep((prevStep) => prevStep + 1)
          setIsSliding(false)
        }, 150)
      } else {
        alert(response.data.message)
      }
    } catch (error) {
      console.error('驗證 OTP 時出錯:', error)
      alert('伺服器錯誤，請稍後再試')
    }
  }

  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword) {
      alert('請輸入新密碼並確認')
      return
    }

    if (newPassword !== confirmPassword) {
      alert('兩次密碼輸入不一致')
      return
    }

    try {
      const response = await axios.put('http://localhost:3006/reset-password', {
        email,
        token: otp,
        newPassword,
      })
      if (response.data.status === 'success') {
        alert('密碼重置成功')
        // 這裡可以重定向到登入頁面
      } else {
        alert(response.data.message)
      }
    } catch (error) {
      console.error('重置密碼時出錯:', error)
      alert('伺服器錯誤，請稍後再試')
    }
  }

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            <h2 className={styles.title}>忘記密碼</h2>
            <p className={styles.text}>請輸入您的電子郵件地址以獲取 OTP。</p>
            <form
              className={styles.inputGroup}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="請輸入您的信箱"
                className={styles.input}
              />
            </form>
          </>
        )
      case 1:
        return (
          <>
            <h2 className={styles.title}>輸入 OTP</h2>
            <p className={styles.text}>請輸入您收到的 OTP 驗證碼。</p>
            <form
              className={styles.inputGroup}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="請輸入 OTP 驗證碼"
                className={styles.input}
              />
            </form>
          </>
        )
      case 2:
        return (
          <>
            <h2 className={styles.title}>重置密碼</h2>
            <p className={styles.text}>請輸入您的新密碼。</p>
            <form
              className={styles.inputGroup}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="請輸入新密碼"
                className={styles.input}
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="確認新密碼"
                className={styles.input}
              />
            </form>
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div
          className={`${styles.formContainer} ${
            isSliding ? styles.sliding : ''
          } ${styles[slideDirection]}`}
        >
          {renderStep()}
        </div>
        <div
          className={`${styles.buttonGroup} ${
            step === 0 ? styles.rightAligned : ''
          }`}
        >
          {step > 0 && (
            <button className={styles.backButton} onClick={handleBack}>
              返回
            </button>
          )}
          <button
            className={step < 2 ? styles.nextButton : styles.submitButton}
            onClick={handleNext}
          >
            {step < 2 ? '下一步' : '提交'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword