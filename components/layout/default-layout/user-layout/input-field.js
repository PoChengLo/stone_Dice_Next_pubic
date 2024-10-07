import React from 'react'
import styles from '@/styles/user-profile/input-field.module.scss'

const InputField = ({
  label,
  type,
  value,
  onChange,
  name,
  error,
  helperText,
  defaultHelperText,
}) => {
  return (
    <div className={styles.input_container}>
      <input
        className={`${styles.input} ${error ? styles.error : ''}`}
        type={type}
        id={`${name}Input`}
        placeholder=" "
        value={value}
        onChange={onChange}
        name={name}
      />
      <label className={styles.label} htmlFor={`${name}Input`}>
        {label}
      </label>
      <p className={`${styles.helper_text} ${error ? styles.error_text : ''}`}>
        {error ? helperText : defaultHelperText}
      </p>
    </div>
  )
}

export default InputField
