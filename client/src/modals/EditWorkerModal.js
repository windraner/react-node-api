import React, { Component } from 'react'
import CustomInput from '../components/custom-input/CustomInput';
import CustomButton from '../components/custom-button/CustomButton';
import ErrorBar from '../components/error/ErrorBar';
import { connect } from 'react-redux';
import { sendEditWorkerAttempt } from '../actions';
import * as CONSTANT from '../constant';

import styles from  './PortalModal.module.css';

class EditWorkerModal extends Component {
  constructor(props) {
    super();
    const { firstName, lastName, gender, contactInformation, salary, position } = props.openedModalItem;
    this.state = {
      firstName,
      lastName,
      gender,
      contactInformation,
      salary,
      position,
    }
  }


  editWorkerHandler = () => {
    const { firstName, lastName, gender, contactInformation, salary, position } = this.state;
    const { _id } = this.props.openedModalItem;

    const data = {
      firstName,
      lastName,
      gender,
      contactInformation,
      salary,
      position
    };

    this.props.sendEditWorkerAttempt(_id, data);
  }

  render() {
    const { firstName, lastName, gender, contactInformation, salary, position } = this.state;

    return (
      <div className={styles['modal-wrapper']}>
        <div className={styles['modal-title']}>Edit modal</div>

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
          text="edit worker"
          clickHandler={this.editWorkerHandler}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const openedModalItem = state[CONSTANT.OPENED_MODAL_ITEM];

  return (
    { openedModalItem }
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendEditWorkerAttempt: (id, data) => dispatch(sendEditWorkerAttempt(id, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkerModal);
