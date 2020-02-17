import { createAction, handleActions } from 'redux-actions';
import { generateActions } from './common/apiActions.duck';

/**
 * Setup state and prefix
 */
const initialStates = { isLoggedIn: false, user: null, token: null };
const PREFIX = 'AUTH';

/**
 * Generate common api duck actions
 */
const {
  apiStates,
  setFetching,
  requestFailed,
  requestSuccess,
  apiHandleActions,
} = generateActions(PREFIX);

/**
 * Duck's actions
 */
const signIn = createAction(`${PREFIX}/SIGN_IN`);
const signUp = createAction(`${PREFIX}/SIGN_UP`);
const signOut = createAction(`${PREFIX}/SIGN_OUT`);

const getFetching = (state) => state.auth.fetching;
const getSuccess = (state) => state.auth.success;
const getError = (state) => state.auth.error;

/**
 * Actions - using for calling, getting, setting from component
 */
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

/**
 * Reducers - using for redux store
 */
export default handleActions(
  new Map([
    ...apiHandleActions,
    // Override common apiHandleActions
    [
      requestFailed,
      (state, { payload }) => ({
        ...state,
        ...initialStates,
        error: payload,
      }),
    ],
    [
      requestSuccess,
      (state, { payload }) => ({
        ...state,
        ...initialStates,
        ...payload,
        success: true,
        isLoggedIn: true,
      }),
    ],
    // Putting others action below
  ]),
  {
    ...apiStates,
    ...initialStates,
  },
);
