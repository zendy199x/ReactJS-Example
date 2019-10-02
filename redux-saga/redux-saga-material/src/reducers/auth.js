import { toastError, toastSuccess } from '../helpers/toastHelper';
import * as types from '../constants/auth';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP: {
      return {
        ...state
      };
    }
    case types.SIGNUP_SUCCESS: {
      toastSuccess('Đăng ký thành công');
      return {
        ...state
      };
    }
    case types.SIGNUP_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state
      };
    }
    case types.LOGIN: {
      return {
        ...state
      };
    }
    case types.LOGIN_SUCCESS: {
      toastSuccess('Đăng nhập thành công');
      return {
        ...state
      };
    }
    case types.LOGIN_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export default reducer;
