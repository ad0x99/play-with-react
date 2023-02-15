import { createSelector } from 'reselect';

import { UserState } from './user.reducer';

const selectUserReducer = (state: any): UserState => state.user;

const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);

export { selectCurrentUser, selectUserReducer };
