import TaskBoard from '../containers/TaskBoard';
import AdminHomePage from '../containers/AdminHomePage';
import LoginPage from '../containers/LoginPage';
import SignupPage from '../containers/SignupPage';

export const ADMIN_ROUTES = [
  {
    path: '/admin',
    name: 'Trang Chủ',
    exact: true,
    component: AdminHomePage
  },
  {
    path: '/admin/task-board',
    name: 'Danh Sách Công Việc',
    component: TaskBoard,
    exact: true
  }
];

export const ROUTES = [
  {
    path: '/login',
    name: 'Đăng Nhập',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'Đăng Ký',
    component: SignupPage
  }
];

export const STATUSES = [
  {
    value: 0,
    label: 'READY'
  },
  {
    value: 1,
    label: 'INPROGRESS'
  },
  {
    value: 2,
    label: 'COMPLETED'
  }
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202
};

export const API_ENDPOINT = 'http://139.180.137.150:3000/api';
export const AUTHORIZATION_KEY = 'TOKEN';
