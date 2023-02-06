import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
  getCurrentUser,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { signInFailed, signInSuccess } from './user.action';
import { USER_ACTION_TYPES } from './user.types';

function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data }));
  } catch (e) {
    yield put(signInFailed(e));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);

    if (!userAuth) return;

    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (e) {
    yield put(signInFailed(e));
  }
}

function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

function* userSagas() {
  yield all([call(onCheckUserSession)]);
}

export { userSagas, isUserAuthenticated, onCheckUserSession };
