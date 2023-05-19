import {all} from 'redux-saga/effects';

import {getLoginSaga} from '../screens/onboarding/login/LoginActions';




export default function* rootSaga() {
  yield all([
    getLoginSaga(),
 
  ]);
}

// export const initSagas = sagaMiddleware =>
//   sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));