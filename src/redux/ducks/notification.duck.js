import { createAction, handleActions } from 'redux-actions';

/**
 * Setup state and prefix
 */
const initialStates = { type: undefined, message: undefined };
const PREFIX = 'NOTIFICATION';

/**
 * Duck's actions
 */
const emitNotification = createAction(`${PREFIX}/EMIT`);

const getNotification = (state) => state.notification;

/**
 * Actions - using for calling, getting, setting from component
 */
export { emitNotification, getNotification };

/**
 * Reducers - using for redux store
 */
export default handleActions(
  new Map([
    [
      emitNotification,
      (state, { payload }) => ({
        ...state,
        ...payload,
      }),
    ],
  ]),
  {
    ...initialStates,
  },
);
