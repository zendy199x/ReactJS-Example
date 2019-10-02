import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import styles from './styles';
import TaskItem from '../TaskItem';

class TaskList extends Component {
  handleShowConfirmDialog = id => {
    const { onShowConfirmDialog } = this.props;
    if (onShowConfirmDialog && id) {
      onShowConfirmDialog(id);
    }
  };

  render() {
    const { classes, status, tasks, onClickEditButton } = this.props;
    return (
      <div className="task-list">
        <Box mb={1}>
          <div className={classes.taskTitle} mt={1}>
            <strong>{status.label}</strong>
          </div>
        </Box>
        <div className={classes.wrapperList}>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onClickEditButton={() => onClickEditButton(task)}
              onShowConfirmDialog={() => this.handleShowConfirmDialog(task.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(TaskList);
