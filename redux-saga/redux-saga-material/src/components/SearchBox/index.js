import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

class SearchBox extends Component {
  render() {
    const { classes, textChange, value } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          className={classes.textField}
          onChange={textChange}
          margin="normal"
          placeholder="Your keyword..."
          value={value}
        />
      </form>
    );
  }
}

SearchBox.propTypes = {
  value: PropTypes.string
};

export default withStyles(styles)(SearchBox);
