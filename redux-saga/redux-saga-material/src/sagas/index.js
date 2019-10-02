import { fork, take, call, put, delay } from 'redux-saga/effects';
import { fetchListTaskSuccess, fetchListTaskFailed } from '../actions/task';
import * as taskTypes from './../constants/task';
import { getList } from './../apis/task';
import { STATUS_CODE } from './../constants';
import { showLoading, hideLoading } from '../actions/ui'

/**
 * B1: Thưc thi action fetch task
 * B2: Gọi API
 * B2.2 Hien thi thanh tien trinh loading
 * B3: Kiem tra status code
 * Neu thanh cong...
 * Neu that bai
 * B4: Tat loading
 * B5: Thuc thi cong viec tiep theo
 */
function* watchFetchListTaskAction() {
    while (true) {
        yield take(taskTypes.FETCH_TASK);
        yield put(showLoading());
        const resp = yield call(getList);
        const { status, data } = resp;
        if (status === STATUS_CODE.SUCCESS) {
            //dispatch action fetchListTaskSuccess
            yield put(fetchListTaskSuccess(data));
        } else {
            //dispatch action fetchListTaskSuccess fail
            yield put(fetchListTaskFailed(data));
        }
        yield delay(1000);
        yield put(hideLoading());
    }
}

function* watchCreateTaskAction() {
    console.log('watch create task action');
}

function* rootSaga() {
    yield fork(watchFetchListTaskAction);
    yield fork(watchCreateTaskAction);
}

export default rootSaga;
