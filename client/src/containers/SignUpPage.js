import React, { Component } from 'react'
import CustomInput from '../components/custom-input/CustomInput';
import CustomButton from '../components/custom-button/CustomButton';
import ErrorBar from '../components/error/ErrorBar';
import { connect } from 'react-redux';
import { sendRegistrationAttempt } from '../actions';
import * as CONSTANT from '../constant';

class SignUpPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  }

  registrationHandler = () => {
    const { name, email, password } = this.state;
    const data = {
      name,
      email,
      password
    };

    this.props.sendRegistrationAttempt(data);
  }

  render() {
    const { name, email, password, confirm } = this.state;
    const { error } = this.props;

    return (
      <div>
        <CustomInput
          title="name"
          value={name}
          type="text"
          setValue={(value) => this.setState({ name: value})}
        />
        <CustomInput
          title="email"
          value={email}
          type="email"
          setValue={(value) => this.setState({ email: value})}
        />
        <CustomInput
          title="password"
          value={password}
          type="password"
          setValue={(value) => this.setState({ password: value})}
        />

        {error && <ErrorBar message={error} />}

        <CustomButton
          text="Create an account"
          clickHandler={this.registrationHandler}
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
    sendRegistrationAttempt: (data) => dispatch(sendRegistrationAttempt(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
