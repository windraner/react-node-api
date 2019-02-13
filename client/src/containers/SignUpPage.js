import React, { Component } from 'react'
import CustomInput from '../components/custom-input/CustomInput';
import CustomButton from '../components/custom-button/CustomButton';

export default class SignUpPage extends Component {
  state = {
    email: '',
    password: '',
    confirm: ''
  }

  render() {
    const { email, password, confirm } = this.state;
    console.log(email)
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
        <CustomInput
          title="confirm password"
          value={confirm}
          type="password"
          setValue={(value) => this.setState({ confirm: value})}
        />

        <CustomButton
          text="Create an account"
        />
      </div>
    )
  }
}
