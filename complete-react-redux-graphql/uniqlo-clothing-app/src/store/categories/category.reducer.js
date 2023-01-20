import { CATEGORIES_ACTION_TYPE } from './category.types';

const CATEGORIES_INITIAL_STATE = {
  categoriesArray: [],
  homeCategoriesArray: [],
  isLoading: false,
  error: null,
};

const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };

    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categoriesArray: payload, isLoading: false };

    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
      return { ...state, error: payload, isLoading: false };

    case CATEGORIES_ACTION_TYPE.SET_HOME_CATEGORIES:
      return { ...state, homeCategoriesArray: payload };

    default:
      return state;
  }
};

export { categoriesReducer };
