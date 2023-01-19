import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
  process.env.REACT_APP_ENVIRONMENT === 'dev' && logger,
].filter(Boolean);

/**
 * Redux Devtools is not Allowed in the production environment
 */
const composeEnhancer =
  (process.env.REACT_APP_ENVIRONMENT !== 'prod' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

const store = createStore(persistedReducer, undefined, composedEnhancers);

const persistor = persistStore(store);

export { store, persistor };
