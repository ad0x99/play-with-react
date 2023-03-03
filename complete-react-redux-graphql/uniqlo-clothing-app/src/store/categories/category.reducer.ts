import { AnyAction } from 'redux';

import {
  fetchCategoriesFailed,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchHomeCategoriesSuccess,
} from './category.action';
import { Category, HomeCategory } from './category.types';

export type CategoriesState = {
  readonly homeCategoriesArray: HomeCategory[];
  readonly categoriesArray: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const CATEGORIES_INITIAL_STATE: CategoriesState = {
  homeCategoriesArray: [],
  categoriesArray: [],
  isLoading: false,
  error: null,
};

const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: AnyAction
): CategoriesState => {
  if (fetchHomeCategoriesSuccess.match(action)) {
    return { ...state, homeCategoriesArray: action.payload };
  }

  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categoriesArray: action.payload, isLoading: false };
  }

  if (fetchCategoriesFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};

export { categoriesReducer };
