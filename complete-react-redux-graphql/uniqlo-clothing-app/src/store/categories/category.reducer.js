import { CATEGORIES_ACTION_TYPE } from './category.types';

const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
  homeCategoriesMap: [],
};

const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };

    case CATEGORIES_ACTION_TYPE.SET_HOME_CATEGORIES_MAP:
      return { ...state, homeCategoriesMap: payload };

    default:
      return state;
  }
};

export { categoriesReducer };
