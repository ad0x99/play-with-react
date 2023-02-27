import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware is useful if you want to add some custom middleware, but also still want to have the default middleware added as well
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
});
