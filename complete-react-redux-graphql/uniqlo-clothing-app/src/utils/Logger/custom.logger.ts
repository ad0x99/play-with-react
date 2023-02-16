import { Middleware } from 'redux';

import { RootState } from '../../store/store';

/**
 * Custom logger middleware. The same with logger from redux-logger
 * @param store - The Redux store that holds the state tree.
 * @returns A function that takes a store and returns a function that takes a next and returns a
 * function that takes an action and returns a function that takes an action.
 */
const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (!action.type) {
      return next(action);
    }

    console.log('type', action.type);
    console.log('payload', action.payload);
    console.log('currentState', store.getState());

    next(action);

    console.log('next state', store.getState());
  };

export { loggerMiddleware };
