const SocialButton = ({ icon, text }) => {
  return (
    <button className="social-button">
      <img src={icon} alt="" className="social-icon" />
      <span className="social-text">{text}</span>
    </button>
  )
}

export default SocialButton
