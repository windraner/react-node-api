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

    dispatch({ type: CONSTANT.LOADING, payload: true });

    requestHandler(options)
      .then(response => {
        window.localStorage.setItem('token', response.data.token);
        dispatch({ type: CONSTANT.TOKEN, payload: response.data.token });
        browserHistory.push('/');
        dispatch({ type: CONSTANT.LOADING, payload: false });
      }).catch(function (error) {
        if(error.response && error.response.data.message) {
          dispatch({ type: CONSTANT.ERROR, payload: error.response.data.message });
        }
        dispatch({ type: CONSTANT.LOADING, payload: false });
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

    dispatch({ type: CONSTANT.LOADING, payload: true });

    requestHandler(options)
      .then(response => {
        window.localStorage.setItem('token', response.data.token);
        dispatch({ type: CONSTANT.TOKEN, payload: response.data.token });
        browserHistory.push('/');
        dispatch({ type: CONSTANT.LOADING, payload: false });
      }).catch(function (error) {
        if(error.response && error.response.data.message) {
          dispatch({ type: CONSTANT.ERROR, payload: error.response.data.message });
        }
        dispatch({ type: CONSTANT.LOADING, payload: false });
      });
  };
};

export const fetchWorkersList = (data = {}) => {
  return (dispatch, getState) => {

    data.page = getState()[CONSTANT.PAGE];
    data.q = getState()[CONSTANT.QUERY];

    const options = {
      type: 'post',
      url: '/',
      data,
    };

    dispatch({ type: CONSTANT.LOADING, payload: true });

    requestHandler(options)
      .then(response => {
        dispatch({ type: CONSTANT.WORKERS_LIST, payload: response.data.workers });
        dispatch({ type: CONSTANT.PAGE, payload: response.data.page });
        dispatch({ type: CONSTANT.PAGE_COUNT, payload: response.data.pages });
        dispatch({ type: CONSTANT.LOADING, payload: false });
      }).catch(function (error) {
        if(error.response && error.response.data.message) {
          dispatch({ type: CONSTANT.ERROR, payload: error.response.data.message });
        }
        dispatch({ type: CONSTANT.LOADING, payload: false });
      });
  };
};

export const sendCreateWorkerAttempt = (data) => {
  return (dispatch) => {

    const options = {
      type: 'post',
      url: '/create',
      data,
    };

    dispatch({ type: CONSTANT.LOADING, payload: true });

    requestHandler(options)
      .then(() => {
        dispatch({ type: CONSTANT.OPENED_MODAL, payload: null });
        dispatch(fetchWorkersList());
      }).catch(function (error) {
        if(error.response && error.response.data.message) {
          dispatch({ type: CONSTANT.ERROR, payload: error.response.data.message });
        }
        dispatch({ type: CONSTANT.LOADING, payload: false });
      });
  };
};

export const sendEditWorkerAttempt = (id, data) => {
  return (dispatch) => {

    const options = {
      type: 'put',
      url: `/update/${id}`,
      data,
    };

    dispatch({ type: CONSTANT.LOADING, payload: true });

    requestHandler(options)
      .then(() => {
        dispatch({ type: CONSTANT.OPENED_MODAL, payload: null });
        dispatch(fetchWorkersList());
      }).catch(function (error) {
        if(error.response && error.response.data.message) {
          dispatch({ type: CONSTANT.ERROR, payload: error.response.data.message });
        }
        dispatch({ type: CONSTANT.LOADING, payload: false });
      });
  };
};

export const sendRemoveWorkerAttempt = (id) => {
  return (dispatch) => {

    const options = {
      type: 'delete',
      url: `/delete/${id}`,
    };

    dispatch({ type: CONSTANT.LOADING, payload: true });

    requestHandler(options)
      .then(() => {
        dispatch(fetchWorkersList());
      }).catch(function (error) {
        if(error.response && error.response.data.message) {
          dispatch({ type: CONSTANT.ERROR, payload: error.response.data.message });
        }
        dispatch({ type: CONSTANT.LOADING, payload: false });
      });
  };
};
