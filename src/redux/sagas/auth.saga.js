import { takeLatest, all, put } from 'redux-saga/effects';
import {
  setFetching,
  requestSuccess,
  requestFailed,
  signIn,
  signUp,
  signOut,
} from '../ducks/auth.duck';

function* onSignInFlow() {
  yield takeLatest(signIn, function* onSignIn({ payload }) {
    yield put(setFetching());
    console.log(payload);

    try {
      yield put(requestSuccess());
    } catch (error) {
      yield put(requestFailed(error));
    }
  });
}

function* onSignUpFlow() {
  yield takeLatest(signUp, function* onSignUp({ payload }) {
    yield put(setFetching());
    console.log(payload);

    try {
      yield put(requestSuccess());
    } catch (error) {
      yield put(requestFailed(error));
    }
  });
}

function* onSignOutFlow() {
  yield takeLatest(signOut, function* onSignOut({ payload }) {
    yield put(setFetching());
    console.log(payload);

    try {
      yield put(requestSuccess());
    } catch (error) {
      yield put(requestFailed(error));
    }
  });
}

export default function* authSaga() {
  yield all([onSignInFlow(), onSignUpFlow(), onSignOutFlow()]);
}
