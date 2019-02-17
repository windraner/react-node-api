import React, { Component } from 'react'
import CustomInput from '../components/custom-input/CustomInput';
import CustomButton from '../components/custom-button/CustomButton';
import ErrorBar from '../components/error/ErrorBar';
import { connect } from 'react-redux';
import { sendCreateWorkerAttempt } from '../actions';
import * as CONSTANT from '../constant';

import styles from  './PortalModal.module.css';

class CreateWorkerModal extends Component {
  state = {
    firstName: '',
    lastName: '',
  }

  createWorkerHandler = () => {
    const { firstName, lastName } = this.state;

    const data = {
      firstName,
      lastName
    };

    this.props.sendCreateWorkerAttempt(data);
  }

  render() {
    const { firstName, lastName } = this.state;
    const { error } = this.props;

    return (
      <div className={styles['modal-wrapper']}>
        <CustomInput
          title="first name"
          value={firstName}
          type="text"
          setValue={(value) => this.setState({ firstName: value})}
        />
        <CustomInput
          title="last name"
          value={lastName}
          type="text"
          setValue={(value) => this.setState({ lastName: value})}
        />

        {error && <ErrorBar message={error} />}

        <CustomButton
          text="add worker"
          clickHandler={this.createWorkerHandler}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const token = state[CONSTANT.TOKEN];
  const error = state[CONSTANT.ERROR];

  return (
    { token, error }
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendCreateWorkerAttempt: (data) => dispatch(sendCreateWorkerAttempt(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkerModal);
