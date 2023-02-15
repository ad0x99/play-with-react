import { createSelector } from 'reselect';

import { RootState } from './../store';
import { UserState } from './user.reducer';

const selectUserReducer = (state: RootState): UserState => state.user;

const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);

export { selectCurrentUser, selectUserReducer };
