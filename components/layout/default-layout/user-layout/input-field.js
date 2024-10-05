import React, { useState } from 'react'
import styles from '@/styles/user-profile/input-field.module.scss'

const InputField = ({ label, type, value, onChange, name }) => {
  return (
    <div className={styles.input_container}>
      <input
        className={styles.input}
        type={type}
        id={`${name}Input`}
        placeholder=" " // 使用空格作為佔位符
        value={value}
        onChange={onChange}
        name={name}
      />
      <label className={styles.label} htmlFor={`${name}Input`}>
        {label}
      </label>
    </div>
  )
}

export default InputField
