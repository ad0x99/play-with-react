import { CategoryAction } from './category.action';
import {
  CATEGORIES_ACTION_TYPE,
  Category,
  HomeCategory,
} from './category.types';

export type CategoryState = {
  readonly homeCategoriesArray: HomeCategory[];
  readonly categoriesArray: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const CATEGORIES_INITIAL_STATE: CategoryState = {
  categoriesArray: [],
  homeCategoriesArray: [],
  isLoading: false,
  error: null,
};

const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as CategoryAction
) => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };

    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categoriesArray: action.payload, isLoading: false };

    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
      return { ...state, error: action.payload, isLoading: false };

    case CATEGORIES_ACTION_TYPE.SET_HOME_CATEGORIES:
      return { ...state, homeCategoriesArray: action.payload };

    default:
      return state;
  }
};

export { categoriesReducer };
