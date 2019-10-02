import { fork, all } from 'redux-saga/effects';
import taskSaga from './task';
import authSaga from './auth';

function* rootSaga() {
  yield all([yield fork(taskSaga), yield fork(authSaga)]);
}

export default rootSaga;
