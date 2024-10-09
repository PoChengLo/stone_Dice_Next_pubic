import React, { useState } from 'react'
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
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(!!value) // 如果有值，label 不會回到原位

  return (
    <div className={styles.input_container}>
      <div className={styles.input_wrapper}>
        <input
          className={`${styles.input} ${isFocused ? styles.input_focus : ''} ${
            error ? styles.error : ''
          }`}
          type={type}
          id={`${name}Input`}
          placeholder=" "
          value={value}
          onChange={onChange}
          name={name}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <label
          className={`${styles.label} ${
            isFocused || value ? styles.label_float : ''
          }`}
          htmlFor={`${name}Input`}
        >
          {label}
        </label>
      </div>
      <p className={`${styles.helper_text} ${error ? styles.error_text : ''}`}>
        {error ? helperText : defaultHelperText}
      </p>
    </div>
  )
}

export default InputField
