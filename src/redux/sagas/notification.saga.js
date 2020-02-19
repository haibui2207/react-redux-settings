import { takeEvery, all, put } from 'redux-saga/effects';
import { emitNotification } from '@/redux/ducks/notification.duck';
import { NOTIFICATION } from '@/configs';
import { generateId } from '@/utils';

const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

function* handleRequestSuccessFlow() {
  yield takeEvery((action) => /\/REQUEST_SUCCESS$/.test(action.type),
    function* onRequestSuccess({ payload = { dismiss: false } }) {
      if (payload.dismiss) return;

      const data = {
        id: payload.id || generateId(),
        type: NOTIFICATION_TYPES.SUCCESS,
        message: payload.message || NOTIFICATION.MESSAGE_SUCCESS,
      };

      yield put(emitNotification(data));
    });
}

function* handleRequestFailedFlow() {
  yield takeEvery((action) => /\/REQUEST_FAILED$/.test(action.type),
    function* onRequestFailed({ payload = { dismiss: false } }) {
      if (payload.dismiss) return;

      const data = {
        id: payload.id || generateId(),
        type: NOTIFICATION_TYPES.ERROR,
        message: payload.message || NOTIFICATION.MESSAGE_ERROR,
      };

      yield put(emitNotification(data));
    });
}

export default function* notificationSaga() {
  yield all([handleRequestSuccessFlow(), handleRequestFailedFlow()]);
}
