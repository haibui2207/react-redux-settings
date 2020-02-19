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
 * Actions - using for calling, getting, setting from component
 */
export { setFetching, requestFailed, requestSuccess };
export const signIn = createAction(`${PREFIX}/SIGN_IN`);
export const signUp = createAction(`${PREFIX}/SIGN_UP`);
export const signOut = createAction(`${PREFIX}/SIGN_OUT`);

export const getFetching = (state) => state.auth.fetching;
export const getSuccess = (state) => state.auth.success;
export const getError = (state) => state.auth.error;
export const getToken = (state) => state.auth.token;
export const getUser = (state) => state.auth.user;

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
