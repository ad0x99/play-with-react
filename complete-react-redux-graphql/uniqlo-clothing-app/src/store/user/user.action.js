import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from '../../Constants/userAction.const';

const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

export { setCurrentUser };
