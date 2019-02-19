import React from 'react';
import PropTypes from 'prop-types';

import styles from './CustomInput.module.css';

const CustomInput = ({title, value, type, setValue}) => {
  return (
    <div className={styles['custom-input-wrapper']}>
      <div className={styles['custom-input-title']}>{title}</div>
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

CustomInput.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default CustomInput;
