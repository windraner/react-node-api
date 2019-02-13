import React from 'react';
import styles from './CustomInput.module.css';

const CustomInput = ({title, value, type, setValue}) => {
  return (
    <div className={styles['custom-input-wrapper']}>
      <div>{title}</div>
      <input
        type={type}
        className={styles['custom-input']}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => setValue(e.target.value.trim())}
      />
    </div>
  )
}

export default CustomInput;
