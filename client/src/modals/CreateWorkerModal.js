import React, { Component } from 'react'
import CustomInput from '../components/custom-input/CustomInput';
import CustomButton from '../components/custom-button/CustomButton';
import ErrorBar from '../components/error/ErrorBar';
import { connect } from 'react-redux';
import { sendCreateWorkerAttempt } from '../actions';
import PropTypes from 'prop-types';

import styles from  './PortalModal.module.css';

class CreateWorkerModal extends Component {
  state = {
    firstName: '',
    lastName: '',
    gender: '',
    contactInformation: '',
    salary: '',
    position: '',
  }

  componentDidMount() {
    document.body.classList.add(styles['modal-open']);
  }

  componentWillUnmount () {
    document.body.classList.remove(styles['modal-open']);
  }

  createWorkerHandler = () => {
    const { firstName, lastName, gender, contactInformation, salary, position } = this.state;

    const data = {
      firstName,
      lastName,
      gender,
      contactInformation,
      salary,
      position
    };

    this.props.sendCreateWorkerAttempt(data);
  }

  render() {
    const { firstName, lastName, gender, contactInformation, salary, position } = this.state;

    return (
      <div className={styles['modal-wrapper']}>
        <div className={styles['modal-title']}>Create modal</div>

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
        <CustomInput
          title="gender"
          value={gender}
          type="text"
          setValue={(value) => this.setState({ gender: value})}
        />
        <CustomInput
          title="contact information"
          value={contactInformation}
          type="text"
          setValue={(value) => this.setState({ contactInformation: value})}
        />
        <CustomInput
          title="salary"
          value={salary}
          type="text"
          setValue={(value) => this.setState({ salary: value})}
        />
        <CustomInput
          title="position"
          value={position}
          type="text"
          setValue={(value) => this.setState({ position: value})}
        />

        <ErrorBar />

        <CustomButton
          text="add worker"
          clickHandler={this.createWorkerHandler}
        />
      </div>
    )
  }
}

CreateWorkerModal.propTypes = {
  sendCreateWorkerAttempt: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendCreateWorkerAttempt: (data) => dispatch(sendCreateWorkerAttempt(data)),
  };
};

export default connect(null, mapDispatchToProps)(CreateWorkerModal);
