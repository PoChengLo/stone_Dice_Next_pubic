import '@/styles/LarpTitle.module.css'

const LarpTitle = () => {
  return (
    <>
      <div className="larpContainer">
        <div
          className="d-flex w-100 justify-content-evenly align-items-center"
          style={{ padding: '0 20% 0 20%' }}
        >
          <div className="line flex-fill" />
          <div
            className="primary-text text-center"
            style={{ fontSize: 40, padding: '0 30px' }}
          >
            遊戲主題
          </div>
          <div className="line flex-fill" />
        </div>
      </div>
    </>
  )
}

export default LarpTitle
