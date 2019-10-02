import {
  call,
  fork,
  put,
  take,
  delay,
  takeLatest,
  select,
  takeEvery
} from 'redux-saga/effects';
import _get from 'lodash/get';
import {
  fetchListTaskFailed,
  fetchListTaskSuccess,
  filterTaskSuccess,
  addTaskSuccess,
  addTaskFailed,
  filterTask,
  updateTaskSuccess,
  updateTaskFailed,
  deleteTaskSuccess,
  deleteTaskFailed,
  toggleConfirmDeleteTask
} from '../actions/task';
import { showLoading, hideLoading } from '../actions/ui';
import { getList, addTask, updateTask, deleteTask } from '../apis/task';
import { STATUS_CODE, STATUSES } from '../constants';
import * as taskTypes from '../constants/task';

function* watchFetchListAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    // dispatch action show loading
    try {
      yield put(showLoading());
      const resp = yield call(getList);
      const { data, status } = resp;
      if (status === STATUS_CODE.SUCCESS) {
        // dispatch action fetch list thành công
        yield put(fetchListTaskSuccess(data));
      } else {
        // dispatch action fetch list thất bại
        yield put(fetchListTaskFailed(data));
      }
    } catch (error) {
      const details = _get(error, 'response.data.details', {});
      yield put(fetchListTaskFailed(details));
    } finally {
      yield delay(1000);
      yield put(hideLoading()); // nên làm sau để test
    }
  }
}

function* watchCreateTaskAction({ payload }) {
  const { title, description } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(addTask, {
      title,
      description,
      status: STATUSES[0].value
    });
    const { data, status } = resp;
    if (status === STATUS_CODE.CREATED) {
      yield put(addTaskSuccess(data));
      yield put(filterTask(''));
    } else {
      yield put(addTaskFailed(data));
    }
  } catch (error) {
    const details = _get(error, 'response.data.details', {});
    yield put(fetchListTaskFailed(details));
  } finally {
    yield put(hideLoading());
  }
}

function* filterTaskSaga({ payload }) {
  yield delay(500); // delay 0.5s mỗi lần user nhập
  const { keyword } = payload;
  const list = yield select(state => state.task.list);
  const filteredTask = list.filter(x =>
    x.title.toLowerCase().includes(keyword)
  );
  yield put(filterTaskSuccess(filteredTask));
}

function* processUpdateTask({ payload }) {
  const { title, description, taskStatus, taskId } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(
      updateTask,
      {
        title,
        description,
        status: taskStatus
      },
      taskId
    );
    const { data, status } = resp;
    if (status === STATUS_CODE.UPDATED) {
      yield put(updateTaskSuccess(data));
    } else {
      yield put(updateTaskFailed(data));
    }
  } catch (error) {
    const details = _get(error, 'response.data.details', {});
    yield put(fetchListTaskFailed(details));
  } finally {
    yield put(hideLoading());
  }
}

function* processDeleteTask({ payload }) {
  const id = yield select(state => state.task.idDeleting);
  if (id !== null) {
    yield put(showLoading());
    try {
      const resp = yield call(deleteTask, id);
      const { data, status } = resp;
      if (status === STATUS_CODE.UPDATED) {
        yield put(
          deleteTaskSuccess({
            id
          })
        );
        yield put(toggleConfirmDeleteTask(false));
      } else {
        yield put(deleteTaskFailed(data));
      }
    } catch (error) {
      const details = _get(error, 'response.data.details', {});
      yield put(deleteTaskFailed(details));
      yield put(toggleConfirmDeleteTask(false));
    } finally {
      yield put(hideLoading());
    }
  } else {
    yield put(deleteTaskFailed('Id không tồn tại'));
  }
}

function* taskSaga() {
  yield fork(watchFetchListAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, watchCreateTaskAction);
  yield takeLatest(taskTypes.UPDATE_TASK, processUpdateTask);
  yield takeLatest(taskTypes.DELETE_TASK, processDeleteTask);
}

export default taskSaga;
