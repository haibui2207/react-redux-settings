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
 * Api initial states
 */
export const apiInitialStates = {
  fetching: false,
  success: false,
  error: { rawResponse: undefined, code: undefined, message: undefined },
};

/**
 * Generate api default actions
 * @param PREFIX define current saga which is using this api duck
 */
export const apiDuckActions = (PREFIX) => ({
  setFetching: createAction(`${PREFIX}/${actions.fetching}`),
  requestFailed: createAction(`${PREFIX}/${actions.requestFailed}`),
  requestSuccess: createAction(`${PREFIX}/${actions.requestSuccess}`),
});

/**
 * Generate api default handle actions
 */
export const apiDuckHandleActions = ({
  setFetching,
  requestFailed,
  requestSuccess,
}) => [
  [
    setFetching,
    (state) => ({
      ...state,
      ...apiInitialStates,
      fetching: true,
    }),
  ],
  [
    requestFailed,
    (state, { payload: { rawResponse, code, message } }) => ({
      ...state,
      ...apiInitialStates,
      error: { rawResponse, code, message },
    }),
  ],
  [
    requestSuccess,
    (state) => ({
      ...state,
      ...apiInitialStates,
      success: true,
    }),
  ],
];
