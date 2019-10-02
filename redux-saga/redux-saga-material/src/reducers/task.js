import * as types from '../constants/task';
import { toastError, toastSuccess } from '../helpers/toastHelper';

const initialState = {
  list: [],
  taskDisplayed: [],
  error: null,
  success: null,
  keyword: '',
  taskEditing: null,
  showConfirmDeleteTask: false,
  idDeleting: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASK: {
      return {
        ...state,
        list: [],
        taskDisplayed: []
      };
    }
    case types.FETCH_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        list: data,
        taskDisplayed: data
      };
    }
    case types.FETCH_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        error
      };
    }
    case types.FILTER_TASK: {
      const { keyword } = action.payload;
      return {
        ...state,
        keyword
      };
    }
    case types.FILTER_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        taskDisplayed: data
      };
    }
    case types.ADD_TASK: {
      return {
        ...state,
        success: null,
        taskEditing: null
      };
    }
    case types.ADD_TASK_SUCCESS: {
      const { data } = action.payload;
      toastSuccess('Thêm mới thành công');
      return {
        ...state,
        list: [data].concat(state.list),
        taskDisplayed: [data].concat(state.taskDisplayed),
        success: types.SUCCESS_TYPES.ADD_FORM
      };
    }
    case types.ADD_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        error
      };
    }
    case types.SET_TASK_EDITING: {
      const { data } = action.payload;
      return {
        ...state,
        taskEditing: data
      };
    }
    case types.UPDATE_TASK: {
      return {
        ...state,
        success: null
      };
    }
    case types.UPDATE_TASK_SUCCESS: {
      const { data } = action.payload;
      toastSuccess('Cập nhật thành công');

      const { list, taskDisplayed } = state;

      const index = list.findIndex(item => item.id === data.id);
      const newList = [...list.slice(0, index), data, ...list.slice(index + 1)];

      const indexTaskDisplayed = taskDisplayed.findIndex(
        item => item.id === data.id
      );
      const newListDisplayed = [
        ...taskDisplayed.slice(0, indexTaskDisplayed),
        data,
        ...taskDisplayed.slice(indexTaskDisplayed + 1)
      ];

      return {
        ...state,
        list: newList,
        taskDisplayed: newListDisplayed,
        success: types.SUCCESS_TYPES.EDIT_FORM
      };
    }
    case types.UPDATE_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        error
      };
    }
    case types.TOGGLE_CONFIRM_DELETE_TASK: {
      const { data, id } = action.payload;
      return {
        ...state,
        showConfirmDeleteTask: data,
        idDeleting: data === true ? id : null
      };
    }
    case types.DELETE_TASK: {
      return {
        ...state,
        success: null
      };
    }
    case types.DELETE_TASK_SUCCESS: {
      const { data } = action.payload;
      toastSuccess('Xóa thành công');
      return {
        ...state,
        list: state.list.filter(item => item.id !== data.id),
        taskDisplayed: state.taskDisplayed.filter(item => item.id !== data.id),
        success: types.SUCCESS_TYPES.ADD_FORM,
        idDeleting: null
      };
    }
    case types.DELETE_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        error
      };
    }
    default:
      return state;
  }
};

export default reducer;
