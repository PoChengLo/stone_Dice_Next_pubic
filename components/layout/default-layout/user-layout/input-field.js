import React from 'react'

const inputStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-star',
  gap: '10px',
  alignSelf: 'stretch',
}

const fieldStyle = {
  borderRadius: '12px',
  border: '1px solid #D4D7E3',
  width: '80%',
  background: '#F7FBFF',
  padding: '10px',
}

const InputField = ({ label, type, placeholder, value, onChange, name }) => {
  return (
    <div className="input-group" style={inputStyle}>
      <label className="input-label" htmlFor={`${type}Input`}>
        {label}
      </label>
      <div className="input-wrapper">
        <input
          className="input-field"
          type={type}
          id={`${type}Input`}
          placeholder={placeholder}
          aria-label={label}
          style={fieldStyle}
          value={value}
          onChange={onChange}
          name={name}
        />
      </div>
    </div>
  )
}

export default InputField
