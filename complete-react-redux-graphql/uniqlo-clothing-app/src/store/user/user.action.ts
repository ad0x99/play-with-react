import { User } from 'firebase/auth';

import { AdditionalInformation } from './../../utils/firebase/firebase.utils';
import { createAction, withMatcher } from '../../utils/reducer/reducer.utils';
import {
  USER_ACTION_TYPES,
  SetCurrentUser,
  EmailSignInStart,
  SignInSuccess,
  SignUpStart,
  SignUpSuccess,
  SignUpFailed,
  SignOutStart,
  SignOutSuccess,
  SignOutFailed,
  CheckUserSession,
  GoogleSignInStart,
  SignInFailed,
} from './user.types';
import { UserData } from '../../utils/firebase/firebase.utils';

const checkUserSession = withMatcher((): CheckUserSession => {
  return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
});

const setCurrentUser = withMatcher((user: UserData): SetCurrentUser => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
});

const googleSignInStart = withMatcher((): GoogleSignInStart => {
  return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
});

const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart => {
    return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
      email,
      password,
    });
  }
);

const signInSuccess = withMatcher(
  (user: UserData & { id: string }): SignInSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
  }
);

const signInFailed = withMatcher((error: Error): SignInFailed => {
  return createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);
});

const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart => {
    return createAction(USER_ACTION_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    });
  }
);

const signUpSuccess = withMatcher(
  (user: User, additionalDetails: AdditionalInformation): SignUpSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
      user,
      additionalDetails,
    });
  }
);

const signUpFailed = withMatcher((error: Error): SignUpFailed => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);
});

const signOutStart = withMatcher((): SignOutStart => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_START);
});

const signOutSuccess = withMatcher((): SignOutSuccess => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
});

const signOutFailed = withMatcher((error: Error): SignOutFailed => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
});

export {
  setCurrentUser,
  checkUserSession,
  googleSignInStart,
  emailSignInStart,
  signInSuccess,
  signInFailed,
  signUpStart,
  signUpSuccess,
  signUpFailed,
  signOutStart,
  signOutSuccess,
  signOutFailed,
};
