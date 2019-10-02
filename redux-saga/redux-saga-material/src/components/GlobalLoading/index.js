import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import LoadingIcon from './../../assets/image/loading.gif';
import PropTypes from 'prop-types';

class GlobalLoading extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.globalLoading}>
                <img src={LoadingIcon} alt="loading" className={ classes.icon }/>
            </div>
        )
    }
}

export default withStyles(styles)(GlobalLoading);