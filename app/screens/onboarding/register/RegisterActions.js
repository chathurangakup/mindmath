import {put, takeLatest} from 'redux-saga/effects';

import {GET_REGISTER,GET_REGISTER_OK} from './RegisterActionTypes';

import {createUrl, ajaxCall} from '../../../lib/Utils';

const getRegister = function* (payload) {
    console.log(  payload.payload)
 
  yield put({
    type: GET_REGISTER_OK,
    payload: {
      data: 'response',
    },
  });
};

export function* getLoginSaga() {
  yield takeLatest(GET_REGISTER, getRegister);
}
