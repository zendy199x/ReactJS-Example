import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import DialogContainer from '../../components/DialogContainer';
import SearchBox from '../../components/SearchBox';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import { STATUSES } from '../../constants';
import { SUCCESS_TYPES } from '../../constants/task';
import * as taskActions from '../../actions/task';
import styles from './styles';

class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openForm: false
    };
  }

  componentDidMount() {
    const { taskActions } = this.props;
    if (taskActions) {
      const { fetchListTask } = taskActions;
      fetchListTask();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.success !== this.props.success) {
      if (
        this.props.success === SUCCESS_TYPES.ADD_FORM ||
        this.props.success === SUCCESS_TYPES.EDIT_FORM
      ) {
        this.handleClose();
      }
    }
  }

  handleClose = () => {
    this.setState({
      openForm: false
    });
  };

  handleSave = (formData, taskId) => {
    const { taskActions } = this.props;
    const { addTask, updateTask } = taskActions;
    if (addTask && !taskId) {
      const { title, description } = formData;
      addTask(title, description);
    } else if (updateTask && taskId) {
      const { title, description, status } = formData;
      updateTask(title, description, status, taskId);
    }
  };

  handleClickEditButton = data => {
    const { taskActions } = this.props;
    const { setTaskEditing } = taskActions;
    if (setTaskEditing) {
      this.setState(
        {
          openForm: true
        },
        () => setTaskEditing(data)
      );
    }
  };

  renderForm() {
    const { openForm } = this.state;
    const { taskEditing } = this.props;
    let xhtml = null;
    if (openForm) {
      xhtml = (
        <TaskForm
          open={openForm}
          onClose={this.handleClose}
          onSave={this.handleSave}
          taskEditing={taskEditing}
        />
      );
    }
    return xhtml;
  }

  handleShowConfirmDialog = id => {
    const { taskActions } = this.props;
    const { toggleConfirmDeleteTask } = taskActions;
    if (toggleConfirmDeleteTask) {
      toggleConfirmDeleteTask(true, id);
    }
  };

  handleHideConfirmDialog = () => {
    const { taskActions } = this.props;
    const { toggleConfirmDeleteTask } = taskActions;
    if (toggleConfirmDeleteTask) {
      toggleConfirmDeleteTask(false);
    }
  };

  renderTaskList(status, tasks) {
    let xhtml = null;
    xhtml = (
      <TaskList
        tasks={tasks}
        status={status}
        onClickEditButton={this.handleClickEditButton}
        onShowConfirmDialog={this.handleShowConfirmDialog}
      />
    );
    return xhtml;
  }

  renderBoard() {
    let xhtml = null;
    const { list } = this.props;
    if (list) {
      xhtml = STATUSES.map((status, i) => {
        const tasksFilter = list.filter(task => task.status === status.value);
        return (
          <Grid item md={4} key={i}>
            {this.renderTaskList(status, tasksFilter)}
          </Grid>
        );
      });
    }
    return xhtml;
  }

  toggleForm = () => {
    const { taskActions } = this.props;
    const { setTaskEditing } = taskActions;
    if (setTaskEditing) {
      this.setState(
        {
          openForm: true
        },
        () => setTaskEditing(null)
      );
    }
  };

  handleSearch = e => {
    const { taskActions } = this.props;
    if (taskActions) {
      taskActions.filterTask(e.target.value);
    }
  };

  handleDeleteTask = e => {
    e.preventDefault();
    const { taskActions } = this.props;
    const { deleteTask } = taskActions;
    if (deleteTask) {
      deleteTask();
    }
  };

  renderSearchBox() {
    const { keyword } = this.props;
    let xhtml = null;
    xhtml = <SearchBox textChange={this.handleSearch} value={keyword} />;
    return xhtml;
  }

  renderConfirmDialog() {
    let xhtml = null;
    const { showConfirmDialog } = this.props;
    xhtml = (
      <DialogContainer
        open={showConfirmDialog}
        title="Xóa công việc"
        content="Bạn chắc chắn muốn xóa?"
        onClose={this.handleHideConfirmDialog}
        onSubmit={this.handleDeleteTask}
      />
    );
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="tasks">
        <Button
          variant="contained"
          className={classes.button}
          color="primary"
          onClick={this.toggleForm}
        >
          <AddIcon /> Add new tasks
        </Button>
        {this.renderSearchBox()}
        {this.renderForm()}
        <Grid container className={classes.root} spacing={2}>
          {this.renderBoard()}
        </Grid>
        {this.renderConfirmDialog()}
      </div>
    );
  }
}

TaskBoard.defaultProps = {};

TaskBoard.propTypes = {
  list: PropTypes.array,
  taskActions: PropTypes.shape({
    fetchListTaskRequest: PropTypes.func,
    addTask: PropTypes.func
  }),
  success: PropTypes.string
};

const mapStateToProps = state => {
  return {
    list: state.task.taskDisplayed,
    success: state.task.success,
    keyword: state.task.keyword,
    taskEditing: state.task.taskEditing,
    showConfirmDialog: state.task.showConfirmDeleteTask
  };
};

const mapDispatchToProps = dispatch => {
  return {
    taskActions: bindActionCreators(taskActions, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withStyles(styles),
  withConnect
)(TaskBoard);
