import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';

import { ROUTES } from '../constants';

import rootSagas from './sagas';
import rootDucks from './ducks';

/**
 * Initial browser history
 */
const history = createBrowserHistory({ basename: ROUTES.root });
/**
 * Initial redux saga state
 */
const initialState = {};
/**
 * More infomation read here
 * https://redux-saga.js.org/docs/api/#createsagamiddlewareoptions
 */
const sagaMiddleware = createSagaMiddleware();
/**
 * Using Redux DevTools Extension to debug Redux's state on browser
 * https://github.com/zalmoxisus/redux-devtools-extension
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/**
 * Add external middlewares connect to Redux store
 */
const middlewares = [routerMiddleware(history), sagaMiddleware];
const rootReducers = combineReducers({
  router: connectRouter(history),
  ...rootDucks,
});
/**
 * Redux store
 */
const store = createStore(
  rootReducers,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default {
  store,
  history,
  runSagaMiddleware: () => sagaMiddleware.run(rootSagas),
};
