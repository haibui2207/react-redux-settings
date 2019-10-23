import { fork } from 'redux-saga/effects';

import auth from './auth.saga';

export default function* rootSagas() {
  yield fork(auth);
}
