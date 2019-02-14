import requestHandler from './utils/request-handler';
import * as CONSTANT from './constant';

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
        dispatch({ type: CONSTANT.SET_USER_DATA, payload: response.data });
      }).catch(function (error) {
        console.log(error);
      });
  };
};
