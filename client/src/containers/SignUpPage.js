import React, { Component } from 'react'
import CustomInput from '../components/custom-input/CustomInput';
import CustomButton from '../components/custom-button/CustomButton';
import { connect } from 'react-redux';
import { sendRegistrationAttempt } from '../actions';

class SignUpPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: ''
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
        <CustomInput
          title="confirm password"
          value={confirm}
          type="password"
          setValue={(value) => this.setState({ confirm: value})}
        />

        <CustomButton
          text="Create an account"
          clickHandler={this.registrationHandler}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { token } = state;

  return (
    { token }
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendRegistrationAttempt: (data) => dispatch(sendRegistrationAttempt(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
