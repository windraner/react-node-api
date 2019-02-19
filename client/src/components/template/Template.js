import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as CONSTANT from '../../constant';
import PropTypes from 'prop-types';

import styles from './Template.module.css';

class Template extends Component {
  renderNavigation = () => {
    const { token } = this.props;

    if(token) {
      return (
        <div className={styles['nav-wrapper']}>
          <Link
            to="/"
            className={styles['nav-link']}
          >
            Home
          </Link>
          <Link
            to="/logout"
            className={styles['nav-link']}
          >
            Logout
          </Link>
        </div>
      );
    }

    return (
      <div className={styles['nav-wrapper']}>
        <Link
          to="/login"
          className={styles['nav-link']}
        >
          Login
        </Link>
        <Link
          to="/signup"
          className={styles['nav-link']}
        >
          Sign Up
        </Link>
      </div>
    );
  }

  render() {
    const { children } = this.props;
    return (
      <div className={styles['container']}>
        {this.renderNavigation()}

        <div className={styles['content-wrapper']}>
          {children}
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const token = state[CONSTANT.TOKEN];

  return (
    { token }
  );
};

export default connect(mapStateToProps)(Template);
