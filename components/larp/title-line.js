import styles from '@/styles/larp/line.module.css'

const TitleLine = () => {
  return (
    <>
      <div
        className="d-flex w-100 justify-content-evenly align-items-center"
        style={{ padding: '90px 20% 0 20%' }}
      >
        <div className={`${styles.line} flex-fill`} />
        <h3
          className={`${styles.primaryText} text-center`}
          style={{ fontSize: 40, padding: '0 30px' }}
        >
          遊戲主題
        </h3>
        <div className={`${styles.line} flex-fill`} />
      </div>
    </>
  )
}

export default TitleLine
