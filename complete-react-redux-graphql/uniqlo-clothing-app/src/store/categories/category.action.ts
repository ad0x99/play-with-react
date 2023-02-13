import {
  Action,
  ActionWithPayload,
  createAction,
} from '../../utils/reducer/reducer.utils';
import {
  CATEGORIES_ACTION_TYPE,
  Category,
  HomeCategory,
} from './category.types';

type FetchHomeCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.SET_HOME_CATEGORIES,
  HomeCategory[]
>;

type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START>;

type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;
type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED,
  Error
>;

export type CategoryAction =
  | FetchHomeCategoriesSuccess
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategoriesFailed;

const setHomeCategoriesArray = (
  homeCategoriesArray: HomeCategory[]
): FetchHomeCategoriesSuccess => {
  return createAction(
    CATEGORIES_ACTION_TYPE.SET_HOME_CATEGORIES,
    homeCategoriesArray
  );
};

const fetchCategoriesStart = (): FetchCategoriesStart => {
  return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);
};

const fetchCategoriesSuccess = (
  categoriesArray: Category[]
): FetchCategoriesSuccess => {
  return createAction(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
};

const fetchCategoriesFailed = (error: Error): FetchCategoriesFailed => {
  return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);
};

export {
  setHomeCategoriesArray,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
};
