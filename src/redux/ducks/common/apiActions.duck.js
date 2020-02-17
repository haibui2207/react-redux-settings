import { createAction } from 'redux-actions';

/**
 ******** Handle API common actions like
 ******** Detect is calling API
 ******** Detect response success or failed
 */

/**
 * Api default actions
 */
const actions = {
  fetching: 'FETCHING',
  requestFailed: 'REQUEST_FAILED',
  requestSuccess: 'REQUEST_SUCCESS',
};

/**
 * Generate api default actions
 * @param PREFIX define current saga which is using this api duck
 */
const generateActions = (PREFIX) => {
  const apiStates = { fetching: false, success: false, error: null };
  const setFetching = createAction(`${PREFIX}/${actions.fetching}`);
  const requestFailed = createAction(`${PREFIX}/${actions.requestFailed}`);
  const requestSuccess = createAction(`${PREFIX}/${actions.requestSuccess}`);
  const preveousState = (state) => ({ ...state, ...apiStates });

  const apiHandleActions = [
    [
      setFetching,
      (state, { payload }) => ({
        ...preveousState(state),
        ...payload,
        fetching: true,
      })],
    [
      requestFailed,
      (state, { payload }) => ({
        ...preveousState(state),
        error: payload,
      }),
    ],
    [
      requestSuccess,
      (state, { payload }) => ({
        ...preveousState(state),
        ...payload,
        success: true,
      }),
    ],
  ];

  return {
    apiStates,
    setFetching,
    requestFailed,
    requestSuccess,
    apiHandleActions,
  };
};

// eslint-disable-next-line import/prefer-default-export
export { generateActions };
