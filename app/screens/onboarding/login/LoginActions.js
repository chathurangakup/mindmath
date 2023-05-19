import {put, takeLatest} from 'redux-saga/effects';

import {GET_LOGIN, GET_LOGIN_OK} from './LoginActionTypes';

import {createUrl, ajaxCall} from '../../lib/Utils';

const getLogin = function* (payload) {
    console.log(  payload.payload)
  const response = yield ajaxCall(
    createUrl('login'),
    payload.payload,
    true,
    'POST',
    true,
  );
  yield put({
    type: GET_LOGIN_OK,
    payload: {
      data: response,
    },
  });
};

export function* getLoginSaga() {
  yield takeLatest(GET_LOGIN, getLogin);
}
