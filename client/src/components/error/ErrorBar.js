import React from 'react'
import styles from './ErrorBar.module.css';

const ErrorBar = ({ message }) => {
  return (
    <div className={styles['custom-error']}>
      {message}
    </div>
  )
}

export default ErrorBar;
