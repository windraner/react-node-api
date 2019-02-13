import React from 'react'
import styles from  './CustomButton.module.css';

const CustomButton = ({ text, disabled}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={styles['custom-button']}
    >
      {text}
    </button>
  )
}

export default CustomButton;
