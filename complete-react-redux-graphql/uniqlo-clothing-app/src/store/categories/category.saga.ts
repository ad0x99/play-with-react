import { takeLatest, all, call, put } from 'typed-redux-saga';

import { getCategoriesAndDocuments } from '../../utils/firebase/product.utils';
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from './category.action';
import { CATEGORIES_ACTION_TYPE } from './category.types';

function* fetchCategoriesAsync() {
  try {
    // Fetch categories from firebase
    const categoriesArray = yield* call(getCategoriesAndDocuments);

    // Put categories data ti categoriesArray
    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}

export { fetchCategoriesAsync, categoriesSaga, onFetchCategories };
