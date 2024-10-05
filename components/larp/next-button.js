import React from 'react'
import { Button } from 'react-bootstrap'
import styles from '@/styles/larp/checkpage.module.css'

export default function GroupButton({
  backSrc = '',
  nextSrc = '',
  back,
  next,
}) {
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ gap: '40px', margin: '40px auto 0 auto' }}
      >
        <Button className={styles.btnstyle} type="submit" href={backSrc}>
          {back}
        </Button>
        <Button className={styles.btnstyle} type="submit" href={nextSrc}>
          {next}
        </Button>
      </div>
    </>
  )
}
