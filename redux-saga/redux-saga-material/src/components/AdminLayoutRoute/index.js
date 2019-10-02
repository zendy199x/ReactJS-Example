import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AUTHORIZATION_KEY } from '../../constants';
import axiosService from '../../services/axiosService';
import Dashboard from '../Dashboard';

class AdminLayoutRoute extends Component {
  componentWillMount() {
    const token = localStorage.getItem(AUTHORIZATION_KEY);
    if (token) {
      axiosService.setHeader('Authorization', `Bearer ${token}`);
    }
  }

  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    const token = localStorage.getItem(AUTHORIZATION_KEY);
    return (
      <Route
        {...remainProps}
        render={routeProps => {
          return token ? (
            <Dashboard>
              <YourComponent {...routeProps} />
            </Dashboard>
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    );
  }
}

export default AdminLayoutRoute;
