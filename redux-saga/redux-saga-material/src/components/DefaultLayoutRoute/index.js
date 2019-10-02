import React, { Component } from 'react';
import { Route } from 'react-router-dom';

export default class DefaultLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    return (
      <Route
        {...remainProps}
        render={routeProps => {
          return <YourComponent {...routeProps} />;
        }}
      />
    );
  }
}
