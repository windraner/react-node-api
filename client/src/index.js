import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducer from './reducer';
import './index.css';

export const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<App store={store} />, document.getElementById('root'));
