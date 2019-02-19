import React, { Component } from 'react'
import CustomInput from '../components/custom-input/CustomInput';
import CustomButton from '../components/custom-button/CustomButton';
import ErrorBar from '../components/error/ErrorBar';
import { connect } from 'react-redux';
import { sendLoginAttempt } from '../actions';
import PropTypes from 'prop-types';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  }

  loginHandler = () => {
    const { email, password } = this.state;
    const data = {
      email,
      password
    };

    this.props.sendLoginAttempt(data);
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
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

        <ErrorBar />

        <CustomButton
          text="Log In"
          clickHandler={this.loginHandler}
        />
      </div>
    )
  }
}

LoginPage.propTypes = {
  sendLoginAttempt: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendLoginAttempt: (data) => dispatch(sendLoginAttempt(data)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
