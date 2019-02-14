import React from 'react'
import styles from  './CustomButton.module.css';

const CustomButton = ({ text, disabled, clickHandler}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={styles['custom-button']}
      onClick={clickHandler}
    >
      {text}
    </button>
  )
}

export default CustomButton;
