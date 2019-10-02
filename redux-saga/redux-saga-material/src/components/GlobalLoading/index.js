import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import LoadingIcon from './../../assets/image/loading.gif';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as uiActions from './../../actions/ui';

class GlobalLoading extends Component {
    render() {
        const { classes, showLoading } = this.props;
        let xhtml = null;
        if (showLoading) {
            return (
                <div className={classes.globalLoading}>
                    <img
                        src={LoadingIcon}
                        alt="loading"
                        className={classes.icon}
                    />
                </div>
            );
        }
        return xhtml;
    }
}

GlobalLoading.propTypes = {
    classes: PropTypes.object,
    showLoading: PropTypes.bool,
};

const mapStateToProps = state => {
    return { showLoading: state.ui.showLoading };
};

const withConnect = connect(
    mapStateToProps,
    null
);

export default compose(
    withStyles(styles),
    withConnect,
)(GlobalLoading);
