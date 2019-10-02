import * as taskConstants from '../constants/task';

export const fetchListTask = () => ({
  type: taskConstants.FETCH_TASK
});

export const fetchListTaskSuccess = data => ({
  type: taskConstants.FETCH_TASK_SUCCESS,
  payload: {
    data
  }
});

export const fetchListTaskFailed = error => ({
  type: taskConstants.FETCH_TASK_FAILED,
  payload: {
    error
  }
});

export const filterTask = keyword => ({
  type: taskConstants.FILTER_TASK,
  payload: {
    keyword
  }
});

export const filterTaskSuccess = data => ({
  type: taskConstants.FILTER_TASK_SUCCESS,
  payload: {
    data
  }
});

export const addTask = (title, description) => ({
  type: taskConstants.ADD_TASK,
  payload: {
    title,
    description
  }
});

export const addTaskSuccess = data => ({
  type: taskConstants.ADD_TASK_SUCCESS,
  payload: {
    data
  }
});

export const addTaskFailed = error => ({
  type: taskConstants.ADD_TASK_FAILED,
  payload: {
    error
  }
});

export const setTaskEditing = data => ({
  type: taskConstants.SET_TASK_EDITING,
  payload: {
    data
  }
});

export const updateTask = (title, description, status, taskId) => ({
  type: taskConstants.UPDATE_TASK,
  payload: {
    title,
    description,
    taskStatus: status,
    taskId
  }
});

export const updateTaskSuccess = data => ({
  type: taskConstants.UPDATE_TASK_SUCCESS,
  payload: {
    data
  }
});

export const updateTaskFailed = error => ({
  type: taskConstants.UPDATE_TASK_FAILED,
  payload: {
    error
  }
});

export const toggleConfirmDeleteTask = (data, id) => ({
  type: taskConstants.TOGGLE_CONFIRM_DELETE_TASK,
  payload: {
    data,
    id
  }
});

export const deleteTask = () => ({
  type: taskConstants.DELETE_TASK
});

export const deleteTaskSuccess = data => ({
  type: taskConstants.DELETE_TASK_SUCCESS,
  payload: {
    data
  }
});

export const deleteTaskFailed = error => ({
  type: taskConstants.DELETE_TASK_FAILED,
  payload: {
    error
  }
});
