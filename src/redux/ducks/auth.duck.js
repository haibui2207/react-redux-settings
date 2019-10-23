import { createAction, handleActions } from 'redux-actions';
import {
  apiInitialStates,
  apiDuckActions,
  apiDuckHandleActions,
} from './api.duck';

const PREFIX = 'AUTH';
const initialStates = {};

const apiActions = apiDuckActions(PREFIX);
const { setFetching, requestFailed, requestSuccess } = apiActions;

const signIn = createAction(`${PREFIX}/SIGN_IN`);
const signUp = createAction(`${PREFIX}/SIGN_UP`);
const signOut = createAction(`${PREFIX}/SIGN_OUT`);

const getFetching = (state) => state.auth.fetching;
const getSuccess = (state) => state.auth.success;
const getError = (state) => state.auth.error;

export {
  setFetching,
  requestFailed,
  requestSuccess,
  signIn,
  signUp,
  signOut,
  getFetching,
  getSuccess,
  getError,
};
export default handleActions(new Map([...apiDuckHandleActions(apiActions)]), {
  ...apiInitialStates,
  ...initialStates,
});
