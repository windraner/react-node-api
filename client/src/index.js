import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducer from './reducer';
import { browserHistory } from './App';
import requestHandler from './utils/request-handler';
import * as CONSTANT from './constant';
import './index.css';

export const store = createStore(reducer, applyMiddleware(thunk));

let token = window.localStorage.getItem('token');

const options = {
  type: 'get',
  url: '/info',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token,
  }
}

requestHandler(options)
  .then(() => {
    store.dispatch({ type: CONSTANT.TOKEN, payload: token });

    ReactDOM.render(<App store={store} />, document.getElementById('root'));
  }).catch((error) => {
    if(error.response && error.response.status === 401) {
      window.localStorage.removeItem('token');
      browserHistory.push('/login');
      store.dispatch({ type: CONSTANT.TOKEN, payload: '' });
    }

    ReactDOM.render(<App store={store} />, document.getElementById('root'));
  });
