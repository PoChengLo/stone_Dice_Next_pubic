import React from 'react'

const InputField = ({ label, type, placeholder }) => {
  return (
    <div className="input-group">
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
        />
      </div>
    </div>
  )
}

export default InputField
