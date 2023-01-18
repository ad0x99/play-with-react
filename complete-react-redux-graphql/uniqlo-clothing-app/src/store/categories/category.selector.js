const selectCategoriesArray = (state) => {
  const categories = state.categories.categoriesArray.reduce(
    (acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    },
    {}
  );
  return categories;
};

const selectHomeCategoriesArray = (state) =>
  state.categories.homeCategoriesArray;

export { selectCategoriesArray, selectHomeCategoriesArray };
