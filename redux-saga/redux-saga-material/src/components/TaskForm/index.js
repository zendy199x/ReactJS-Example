import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DialogContainer from '../DialogContainer';
import styles from './styles';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
      status: 0
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.taskEditing !== this.props.taskEditing) {
      const { taskEditing } = this.props;
      if (taskEditing) {
        this.setState({
          title: taskEditing.title,
          description: taskEditing.description,
          status: taskEditing.status
        });
      } else {
        this.setState({
          title: '',
          description: '',
          status: null
        });
      }
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, description, status } = this.state;
    const { onSave, taskEditing } = this.props;
    onSave({ title, description, status }, taskEditing ? taskEditing.id : null);
  };

  renderStatusDropdown() {
    let xhtml = null;
    const { taskEditing, classes } = this.props;
    const { status } = this.state;
    if (taskEditing) {
      xhtml = (
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">Status:</InputLabel>
          <Select
            value={status}
            onChange={this.handleChange}
            inputProps={{
              name: 'status',
              id: 'age-native-simple',
              value: status
            }}
          >
            <MenuItem value={0}>READY</MenuItem>
            <MenuItem value={1}>IN PROGRESS</MenuItem>
            <MenuItem value={2}>COMPLETED</MenuItem>
          </Select>
        </FormControl>
      );
    }
    return xhtml;
  }

  renderTitle = () => {
    let xhtml = null;
    const { taskEditing } = this.props;
    if (taskEditing) {
      xhtml = 'Cập nhật thông tin công việc';
    } else {
      xhtml = 'Thêm mới công việc';
    }
    return xhtml;
  };

  renderContent = () => {
    const { title, description } = this.state;
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <>
        <TextField
          id="standard-name"
          label="Title"
          className={classes.textField}
          margin="normal"
          name="title"
          onChange={this.handleChange}
          value={title}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Description"
          multiline
          rowsMax="4"
          className={classes.textField}
          margin="normal"
          name="description"
          onChange={this.handleChange}
          value={description}
        />
        {this.renderStatusDropdown()}
      </>
    );
    return xhtml;
  };

  renderAction = () => {
    const { onClose } = this.props;
    let xhtml = null;
    xhtml = (
      <>
        <Button color="primary" onClick={onClose}>
          Close
        </Button>
        <Button type="submit" color="primary" autoFocus>
          Save
        </Button>
      </>
    );
    return xhtml;
  };

  render() {
    const { open } = this.props;
    return (
      <DialogContainer
        action={this.renderAction}
        content={this.renderContent}
        open={open}
        title={this.renderTitle}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

TaskForm.propTypes = {
  open: PropTypes.bool
};

export default withStyles(styles)(TaskForm);
