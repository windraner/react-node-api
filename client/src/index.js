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

requestHandler({ type: 'get', url: '/info' })
  .then((res) => {
    if(!res.data.auth) {
      browserHistory.push('/login');
      store.dispatch({ type: CONSTANT.TOKEN, payload: '' });
    }

    ReactDOM.render(<App store={store} />, document.getElementById('root'));
    // loading.hide();

  }).catch(() => {
    //debugger;
  });
