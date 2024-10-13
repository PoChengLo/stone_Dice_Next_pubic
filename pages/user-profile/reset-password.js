import React, { useState, useEffect } from 'react'
import styles from '@/styles/user-profile/reset-password.module.scss'
import axios from 'axios'
import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/router'

const ResetPassword = () => {
  const { auth } = useAuth()
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const [slideDirection, setSlideDirection] = useState('right')
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    console.log('Auth state updated:', auth)
    if (!auth.isLoading) {
      if (!auth.isAuth) {
        console.log('User not authenticated, redirecting to login')
        router.push('/user-profile/login')
      } else if (!auth.userData || !auth.userData.id) {
        console.error('User authenticated but no user data available:', auth)
      }
    }
  }, [auth, router])

  const handleNext = async () => {
    if (!auth.userData || !auth.userData.id) {
      console.error('User ID is not available:', auth)
      alert('尚未取得使用者資料，請稍後再試')
      return
    }

    if (step === 0) {
      try {
        console.log('Verifying old password for user ID:', auth.userData.id)
        const response = await axios.post(
          `http://localhost:3006/user-profile/${auth.userData.id}/verify-password`,
          {
            password: oldPassword,
          },
          {
            withCredentials: true,
          }
        )

        console.log('Password verification response:', response.data)

        if (response.data.status === 'success') {
          setIsSliding(true)
          setSlideDirection('left')
          setTimeout(() => {
            setStep((prevStep) => prevStep + 1)
            setIsSliding(false)
          }, 150)
        } else {
          alert('舊密碼不正確')
        }
      } catch (error) {
        console.error('Password verification error:', error)
        if (error.response) {
          console.error('Server response:', error.response.data)
          alert(`伺服器錯誤：${error.response.data.message || '請稍後再試'}`)
        } else {
          alert('伺服器錯誤，請稍後再試')
        }
      }
    } else {
      setIsSliding(true)
      setSlideDirection('left')
      setTimeout(() => {
        setStep((prevStep) => prevStep + 1)
        setIsSliding(false)
      }, 150)
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

  const handleSubmit = async () => {
    if (!auth.userData || !auth.userData.id) {
      console.error('User ID is not available:', auth)
      alert('尚未取得使用者資料，請稍後再試')
      return
    }

    if (!oldPassword || !newPassword || !confirmPassword) {
      alert('所有欄位為必填')
      return
    }

    if (newPassword !== confirmPassword) {
      alert('新密碼與確認密碼不同')
      return
    }

    try {
      console.log('Submitting password change for user ID:', auth.userData.id)
      const response = await axios.put(
        `http://localhost:3006/user-profile/${auth.userData.id}/password`,
        {
          originPassword: oldPassword,
          newPassword: newPassword,
        },
        {
          withCredentials: true,
        }
      )

      console.log('Password change response:', response.data)

      if (response.data.status === 'success') {
        alert('密碼修改成功')
        router.push('/user-profile/login')
      } else {
        alert(response.data.message || '密碼修改失敗')
      }
    } catch (error) {
      console.error('Password change error:', error)
      if (error.response) {
        console.error('Server response:', error.response.data)
        alert(`伺服器錯誤：${error.response.data.message || '請稍後再試'}`)
      } else {
        alert('伺服器錯誤，請稍後再試')
      }
    }
  }

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            <h2 className={styles.title}>Reset Password</h2>
            <p className={styles.text}>
              Please enter your old password to continue.
            </p>
            <form
              className={styles.inputGroup}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="password"
                placeholder="Enter old password"
                className={styles.input}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </form>
          </>
        )
      case 1:
        return (
          <>
            <h2 className={styles.title}>Set New Password</h2>
            <p className={styles.text}>Please enter your new password.</p>
            <form
              className={styles.inputGroup}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="password"
                placeholder="Enter new password"
                className={styles.input}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </form>
          </>
        )
      case 2:
        return (
          <>
            <h2 className={styles.title}>Confirm New Password</h2>
            <p className={styles.text}>Please confirm your new password.</p>
            <form
              className={styles.inputGroup}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="password"
                placeholder="Confirm new password"
                className={styles.input}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </form>
          </>
        )
      default:
        return null
    }
  }

  if (auth.isLoading) {
    return <div>Loading...</div>
  }

  if (!auth.isAuth) {
    return <div>Please log in to access this page.</div>
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
              Back
            </button>
          )}
          {step < 2 ? (
            <button className={styles.nextButton} onClick={handleNext}>
              Next
            </button>
          ) : (
            <button className={styles.submitButton} onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
