import { push } from 'connected-react-router';
import _get from 'lodash/get';
import { call, put, takeLatest } from 'redux-saga/effects';
import { hideLoading, showLoading } from '../actions/ui';
import { STATUS_CODE, AUTHORIZATION_KEY } from '../constants';
import {
  loginFailed,
  loginSuccess,
  signupFailed,
  signupSuccess
} from '../actions/auth';
import { login, signup } from '../apis/auth';
import * as authTypes from '../constants/auth';
import axiosService from '../services/axiosService';

function* processSignup({ payload }) {
  const { email, password } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(signup, {
      email,
      password
    });
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(signupSuccess(data));
      yield put(push(authTypes.REDIRECT_AFTER_SIGNUP_SUCCESS));
    } else {
      yield put(signupFailed(data));
    }
  } catch (error) {
    const details = _get(error, 'response.data.detail', {});
    yield put(signupFailed(details));
  } finally {
    yield put(hideLoading());
  }
}

function* processLogin({ payload }) {
  const { email, password } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(login, {
      email,
      password
    });
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(loginSuccess(data));

      const { token } = data;
      axiosService.setHeader('Authorization', `Bearer ${token}`);
      localStorage.setItem(AUTHORIZATION_KEY, token);

      yield put(push(authTypes.REDIRECT_AFTER_LOGIN_SUCCESS));
    } else {
      yield put(loginFailed(data));
    }
  } catch (error) {
    const err = _get(error, 'response.data', {});
    yield put(loginFailed(err));
  } finally {
    yield put(hideLoading());
  }
}

function* authSaga() {
  yield takeLatest(authTypes.SIGNUP, processSignup);
  yield takeLatest(authTypes.LOGIN, processLogin);
}

export default authSaga;
