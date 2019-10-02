import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';
import styles from './styles';

class SearchBox extends Component {
    render() {
        const { classes, handleChange } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    autoComplete="off"
                    className={classes.textField}
                    onChange={handleChange}
                    margin="normal"
                    placeholder="Nhâp từ khóa"
                />
            </form>
        );
    }
}

SearchBox.proptypes = {
    classes: PropTypes.object,
    handleChange: PropTypes.func,
};

export default withStyles(styles)(SearchBox);
