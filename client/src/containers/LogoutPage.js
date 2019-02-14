import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as CONSTANT from '../constant';

class LogoutPage extends Component {
  componentDidMount() {
    window.localStorage.removeItem('token');
    this.props.setToken();
  }

  render() {
    return <Redirect to="/login" />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: () => dispatch({ type: CONSTANT.TOKEN, payload: '' }),
  };
};

export default connect(null, mapDispatchToProps)(LogoutPage);
