import { CATEGORIES_ACTION_TYPE } from './category.types';

const CATEGORIES_INITIAL_STATE = {
  categoriesArray: [],
  homeCategoriesArray: [],
};

const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPE.SET_CATEGORIES:
      return { ...state, categoriesArray: payload };

    case CATEGORIES_ACTION_TYPE.SET_HOME_CATEGORIES:
      return { ...state, homeCategoriesArray: payload };

    default:
      return state;
  }
};

export { categoriesReducer };
