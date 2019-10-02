import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import styles from './styles';

class DialogContainer extends Component {
  renderTitle() {
    const { title } = this.props;
    let xhtml = null;
    if (typeof title === 'string') {
      xhtml = title;
    } else if (typeof title === 'function') {
      xhtml = title();
    }
    return xhtml;
  }

  renderContent() {
    const { content } = this.props;
    let xhtml = null;
    if (typeof content === 'string') {
      xhtml = content;
    } else if (typeof content === 'function') {
      xhtml = content();
    }
    return xhtml;
  }

  renderAction() {
    const { action, onClose } = this.props;
    let xhtml = null;
    if (typeof action === 'string') {
      xhtml = action;
    } else if (typeof action === 'function') {
      xhtml = action();
    } else {
      xhtml = (
        <>
          <Button color="primary" onClick={onClose}>
            CANCEL
          </Button>
          <Button type="submit" color="primary" autoFocus>
            OK
          </Button>
        </>
      );
    }
    return xhtml;
  }

  render() {
    const { classes, open, onSubmit } = this.props;
    return (
      <Dialog
        maxWidth="md"
        className={classes.dialog}
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={onSubmit}>
          <DialogTitle id="alert-dialog-title">
            {this.renderTitle()}
          </DialogTitle>
          <DialogContent className={classes.dialogContent}>
            {this.renderContent()}
          </DialogContent>
          <DialogActions>{this.renderAction()}</DialogActions>
        </form>
      </Dialog>
    );
  }
}

export default withStyles(styles)(DialogContainer);
