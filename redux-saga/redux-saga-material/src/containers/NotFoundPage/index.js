import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styles from './styles';

class NotFoundPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.notfoundpage}>
        <div className={classes.content}>
          <Typography className={classes.title}>404</Typography>
          <Typography className={classes.subtitle}>Không Tìm Thấy!</Typography>
          <Typography variant="caption">
            Xin lỗi, nhưng trang này không tồn tại.
          </Typography>
          <Typography variant="caption">
            Trở lại trang <Link to="/login">đăng nhập</Link>
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(NotFoundPage);
