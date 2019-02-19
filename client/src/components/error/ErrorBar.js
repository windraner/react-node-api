import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CONSTANT from '../../constant';
import PropTypes from 'prop-types';

import styles from './ErrorBar.module.css';

class ErrorBar extends Component {
  componentWillUnmount() {
    this.props.removeError();
  }

  render() {
    const { error } = this.props;

    if(!error) return null;

    return (
      <div className={styles['custom-error']}>
        {error}
      </div>
    )
  }
}

ErrorBar.propTypes = {
  error: PropTypes.string,
  removeError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const error = state[CONSTANT.ERROR];

  return (
    { error }
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeError: () => dispatch({ type: CONSTANT.ERROR, payload: '' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBar);
