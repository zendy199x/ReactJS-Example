import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from './../../constains/';
import TaskList from './../../components/TaskList';

const listTask = [
    {
        id: 1,
        title: "Read book",
        description: "React Material UI book",
        status: 0
    },
    {
        id: 2,
        title: "Play soccer",
        description: "Invite Crush",
        status: 2
    },
    {
        id: 3,
        title: "Online Facebook",
        description: "Online 12AM",
        status: 1
    }
]

class Taskboard extends Component {

    renderBoard() {
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map(status => {
                        const taskFiltered = listTask.filter(
                            task => task.status === status.value
                        );
                        return (
                            <TaskList key={status.value} tasks={taskFiltered} status={status}/>
                        )
                    })
                }
            </Grid>
        )
        return xhtml;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskBoard}>
                <Button variant="contained" color="primary" className={classes.button}>
                    <AddIcon /> Thêm mới công việc
                </Button>
                {this.renderBoard()}
            </div>
        );
    }
}

export default withStyles(styles)(Taskboard);