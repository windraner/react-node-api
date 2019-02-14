import requestHandler from './utils/request-handler';
import * as CONSTANT from './constant';
import { browserHistory } from './App';

export const sendRegistrationAttempt = (data) => {
  return dispatch => {
    const options = {
      type: 'post',
      url: '/register',
      data,
    };

    requestHandler(options)
      .then(response => {
        window.localStorage.setItem('token', response.data.token);
        dispatch({ type: CONSTANT.TOKEN, payload: response.data.token });
        browserHistory.push('/');
      }).catch(function (error) {
        if(error.response && error.response.status === 409) {
          dispatch({ type: CONSTANT.ERROR, payload: error.response.data.message });
        }
        if(error.response && error.response.status === 422) {
          dispatch({ type: CONSTANT.ERROR, payload: error.response.data.message });
        }
      });
  };
};

export const sendLoginAttempt = (data) => {
  return dispatch => {
    const options = {
      type: 'post',
      url: '/login',
      data,
    };

    requestHandler(options)
      .then(response => {
        window.localStorage.setItem('token', response.data.token);
        dispatch({ type: CONSTANT.TOKEN, payload: response.data.token });
        browserHistory.push('/');
      }).catch(function (error) {

      });
  };
};
