import { fork, take, call } from 'redux-saga/effects';
import * as taskTypes from './../constants/task';
import { getList } from './../apis/task';
import { STATUS_CODE } from './../constants';

function* watchFetchListTaskAction() {
    yield take(taskTypes.FETCH_TASK);
    const resp  = yield call(getList);
    const { status, data} = resp;
    if(status === STATUS_CODE.SUCCESS) {
    //dispatch action fetchListTaskSuccess
    } else {
    //dispatch action fetchListTaskSuccess fail
    }
}

function* watchCreateTaskAction() {
    console.log('watch create task action')
}

function* rootSaga() {
    yield fork(watchFetchListTaskAction);
    yield fork(watchCreateTaskAction);
}

export default rootSaga;