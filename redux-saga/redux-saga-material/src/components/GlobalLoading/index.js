import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import LoadingIcon from '../../assets/images/giphy.gif';
import styles from './styles';
import * as uiActions from '../../actions/ui';

class GlobalLoading extends Component {
  render() {
    let xhtml = null;
    const { classes, showLoading } = this.props;
    if (showLoading) {
      xhtml = (
        <div className={classes.backdrop}>
          <img
            src={LoadingIcon}
            alt="loading"
            className={classes.iconLoading}
          />
        </div>
      );
    }
    return xhtml;
  }
}

GlobalLoading.defaultProps = {};

GlobalLoading.propTypes = {
  showLoading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    showLoading: state.ui.showLoading
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
)(GlobalLoading);
