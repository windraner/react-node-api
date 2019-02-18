import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as CONSTANT from '../constant';

import styles from  './PortalModal.module.css';

class PortalModal extends Component {
  componentDidMount() {
    document.body.classList.add(styles['modal-open']);
  }

  componentWillUnmount () {
    document.body.classList.remove(styles['modal-open']);
  }

  render() {
    const { openedModal, closeModal } = this.props;

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
  }
}

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
