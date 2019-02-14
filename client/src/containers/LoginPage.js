import React, { Component } from 'react'
import CustomInput from '../components/custom-input/CustomInput';
import CustomButton from '../components/custom-button/CustomButton';

export default class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    const { email, password, confirm } = this.state;

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

        <CustomButton
          text="Log In"
        />
      </div>
    )
  }
}
