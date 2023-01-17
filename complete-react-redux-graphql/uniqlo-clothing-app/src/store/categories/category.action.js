import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPE } from './category.types';

const setCategoriesMap = (categoriesMap) => {
  return createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, categoriesMap);
};

const setHomeCategoriesMap = (homeCategoriesMap) => {
  return createAction(
    CATEGORIES_ACTION_TYPE.SET_HOME_CATEGORIES_MAP,
    homeCategoriesMap
  );
};

export { setCategoriesMap, setHomeCategoriesMap };
