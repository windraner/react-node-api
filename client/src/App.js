import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux';

import Template from './components/template/Template';

import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import LogoutPage from './containers/LogoutPage';
import HomePage from './containers/HomePage';

import Loader from './components/loader/Loader';

import { store } from './index';

export const browserHistory = createHistory();

const checkIsAuth = (component) => {
  const { token } = store.getState();

  if(!token) return <Redirect to="/login" />;

  return (
    <Template>
      {component}
      <Loader />
    </Template>
  );
}

const checkIsNotAuth = (component) => {
  const { token } = store.getState();

  if(token) return <Redirect to="/" />;

  return (
    <Template>
      {component}
      <Loader />
    </Template>
  );
}

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Switch>
          <Route
            path="/login"
            render={(props) => checkIsNotAuth(<LoginPage />)}
          />

          <Route
            path="/signup"
            render={() => checkIsNotAuth(<SignUpPage />)}
          />

          <Route
            path="/logout"
            render={() => checkIsAuth(<LogoutPage />)}
          />

          <Route
            path="/"
            render={() => checkIsAuth(<HomePage />)}
          />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
