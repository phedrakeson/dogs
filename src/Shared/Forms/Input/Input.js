import React from 'react'
import styles from './Input.module.css'

const Input = ({ label, type, name }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} className={styles.input} />
    </div>
  )
}

export default Input