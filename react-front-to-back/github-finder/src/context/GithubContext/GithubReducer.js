import { GITHUB_ACTION_TYPE } from '../../utils/actionTypes';

const githubReducer = (state, action) => {
  const {
    SET_LOADING,
    CLEAR_USERS,
    SEARCH_USERS,
    GET_USERS,
    GET_USER_AND_REPOS,
  } = GITHUB_ACTION_TYPE;

  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };

    case SEARCH_USERS:
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case GET_USER_AND_REPOS:
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };

    default:
      return state;
  }
};

export default githubReducer;
