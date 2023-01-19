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

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));

const store = createStore(persistedReducer, undefined, composedEnhancers);

const persistor = persistStore(store);

export { store, persistor };
