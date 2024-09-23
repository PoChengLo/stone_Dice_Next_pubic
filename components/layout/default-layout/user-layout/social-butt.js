const buttonStyle = {
  display: 'flex',
  padding: '12px 9px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
  alignSelf: 'stretch',
  borderRadius: '12px',
}

const SocialButton = ({ icon, text }) => {
  return (
    <button className="social-button" style={buttonStyle}>
      <img src={icon} alt="" className="social-icon" />
      <span className="social-text">{text}</span>
    </button>
  )
}

export default SocialButton
