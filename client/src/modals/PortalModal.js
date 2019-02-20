import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as CONSTANT from '../constant';
import PropTypes from 'prop-types';

import styles from  './PortalModal.module.css';

const PortalModal = ({ openedModal, closeModal }) => {
  const modalList = ['CreateWorkerModal', 'EditWorkerModal'];
  if(!modalList.includes(openedModal)) return null;

  const Component = require(`./${openedModal}`).default;

  const result = (
    <>
      <div
        className={styles['modal-container']}
      >
        <Component />
      </div>
      <div
        className={styles['modal-overlay']}
        onClick={closeModal}
      />
    </>
  );

  return ReactDOM.createPortal(
    result,
    document.getElementById('modal'),
  );
};

PortalModal.propTypes = {
  openedModal: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const openedModal = state[CONSTANT.OPENED_MODAL];

  return (
    { openedModal }
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch({ type: CONSTANT.OPENED_MODAL, payload: null }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PortalModal);
