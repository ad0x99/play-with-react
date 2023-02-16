import { all, call } from 'typed-redux-saga/macro';

import { categoriesSaga } from './categories/category.saga';
import { userSagas } from './user/user.saga';

function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSagas)]);
}

export { rootSaga };
