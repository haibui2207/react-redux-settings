import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import App from './App';
import { configureStore } from './redux';
import * as serviceWorker from './serviceWorker';

const { store, history, runSagaMiddleware } = configureStore;

/**
 * both Provider and ConnectedRouter to make sure that the ConnectedRouter
 * doesn't pick up a different ReactReduxContext from
 * a different node_modules folder.
 * https://github.com/supasate/connected-react-router#development
 */
ReactDOM.render(
  <Provider store={store} context={ReactReduxContext}>
    <ConnectedRouter history={history} context={ReactReduxContext}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
runSagaMiddleware();
