import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPE } from './category.types';

const setCategoriesArray = (categoriesArray) => {
  return createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);
};

const setHomeCategoriesArray = (homeCategoriesArray) => {
  return createAction(
    CATEGORIES_ACTION_TYPE.SET_HOME_CATEGORIES,
    homeCategoriesArray
  );
};

export { setCategoriesArray, setHomeCategoriesArray };
