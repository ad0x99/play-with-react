import { getCategoriesAndDocuments } from '../../utils/firebase/product.utils';
import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPE } from './category.types';

const setHomeCategoriesArray = (homeCategoriesArray) => {
  return createAction(
    CATEGORIES_ACTION_TYPE.SET_HOME_CATEGORIES,
    homeCategoriesArray
  );
};

const fetchCategoriesStart = () => {
  return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);
};

const fetchCategoriesSuccess = (categoriesArray) => {
  return createAction(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
};

const fetchCategoriesFailed = (error) => {
  return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);
};

const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocuments(
      process.env.REACT_APP_FIREBASE_CATEGORIES_NAME
    );

    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};

export {
  setHomeCategoriesArray,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
  fetchCategoriesAsync,
};
