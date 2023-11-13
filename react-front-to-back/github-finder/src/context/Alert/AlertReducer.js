import { ALERT_ACTION_TYPE } from '../../utils/actionTypes';

const alertReducer = (state, action) => {
  const { SET_ALERT, REMOVE_ALERT } = ALERT_ACTION_TYPE;

  switch (action.type) {
    case SET_ALERT:
      return action.payload;
    case REMOVE_ALERT:
      return null;

    default:
      return state;
  }
};

export default alertReducer;
