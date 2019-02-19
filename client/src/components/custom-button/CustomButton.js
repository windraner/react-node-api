import React from 'react';
import PropTypes from 'prop-types';

import styles from  './CustomButton.module.css';

const CustomButton = ({ text, className, disabled, clickHandler}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`${styles['custom-button']} ${className || ''}`}
      onClick={clickHandler}
    >
      {text}
    </button>
  )
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

export default CustomButton;
