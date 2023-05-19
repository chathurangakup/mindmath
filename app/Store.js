import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import rootSaga from './saga/RootSaga';
import rootReducer from './reducers/index';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);
  //initSagas(sagaMiddleware);
  return {store};
}

