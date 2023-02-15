import { createSelector } from 'reselect';

import { RootState } from './../store';
import { CategoryMapType } from './category.types';
import { CategoriesState } from './category.reducer';

const selectCategoryReducer = (state: RootState): CategoriesState => {
  return state.categories;
};

/**
 * Create a memoized selector to cache categories state.
 */
const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice;
  }
);

/**
 * As long as the categories array does not change, do not re-run reduce method.
 * Then just return the previous values.
 * This will prevent to running unnecessary call to get the data
 */
const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMapType => {
    return categories.categoriesArray.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMapType);
  }
);

const selectHomeCategoriesArray = createSelector(
  [selectCategories],
  (categories) => {
    return categories.homeCategoriesArray;
  }
);

const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categories) => categories.isLoading
);

export {
  selectCategoriesMap,
  selectHomeCategoriesArray,
  selectCategoriesIsLoading,
};
