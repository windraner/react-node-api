import React from 'react';
import { connect } from 'react-redux';
import * as CONSTANT from '../../constant';
import PropTypes from 'prop-types';

import stules from './Loader.module.css';

const Loader = ({ loading }) => {
  if(!loading) return null;

  return (
    <div className={stules['loader-container']}>
      <div className={stules['lds-ring']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const loading = state[CONSTANT.LOADING];

  return (
    { loading }
  );
};

export default connect(mapStateToProps)(Loader);
