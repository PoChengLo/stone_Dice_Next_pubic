import React from 'react'
import { Button } from 'react-bootstrap'
import styles from '@/styles/larp/checkpage.module.css'

export default function GroupButton({ backSrc = '', nextSrc = '' }) {
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ gap: '40px', margin: '40px auto 0 auto' }}
      >
        <Button className={styles.btnstyle} type="submit" href={backSrc}>
          回上頁
        </Button>
        <Button className={styles.btnstyle} type="submit" href={nextSrc}>
          下一步
        </Button>
      </div>
    </>
  )
}
