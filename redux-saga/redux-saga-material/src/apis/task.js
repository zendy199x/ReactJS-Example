import axiosService from '../services/axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'tasks';

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};

export const addTask = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateTask = (data, taskId) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${taskId}`, data);
};

export const deleteTask = taskId => {
  return axiosService.delete(`${API_ENDPOINT}/${url}/${taskId}`);
};
