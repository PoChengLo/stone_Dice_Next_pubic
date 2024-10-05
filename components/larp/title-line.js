import styles from '@/styles/larp/line.module.css'

const TitleLine = ({ title = '' }) => {
  return (
    <>
      <div
        className={`${styles.titleMargin} d-flex w-100 justify-content-evenly align-items-center`}
      >
        <div className={`${styles.line} flex-fill`} />
        <h3 className={`${styles.primaryText} text-center`}>{title}</h3>
        <div className={`${styles.line} flex-fill`} />
      </div>
    </>
  )
}

export default TitleLine
