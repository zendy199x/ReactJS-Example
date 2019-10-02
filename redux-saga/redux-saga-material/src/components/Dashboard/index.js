import { withStyles } from '@material-ui/core';
import cn from 'classnames';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as uiActions from '../../actions/ui';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './styles';

class Dashboard extends Component {
  handleToggleSidebar = value => {
    const { uiActions } = this.props;
    const { showSidebar, hideSidebar } = uiActions;
    if (value === true) {
      showSidebar();
    } else {
      hideSidebar();
    }
  };

  render() {
    const { classes, showSidebar, children } = this.props;
    return (
      <>
        <Header onToggleSidebar={this.handleToggleSidebar} open={showSidebar} />
        <div className={classes.wrapper}>
          <Sidebar
            showSidebar={showSidebar}
            onToggleSidebar={this.handleToggleSidebar}
          />
          <div
            className={cn(classes.wrapperContent, {
              [classes.shiftLeft]: showSidebar === true
            })}
          >
            {children}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    showSidebar: state.ui.showSidebar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uiActions: bindActionCreators(uiActions, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withStyles(styles),
  withConnect
)(Dashboard);
