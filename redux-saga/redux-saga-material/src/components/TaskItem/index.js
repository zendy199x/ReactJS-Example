import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import { STATUSES } from '../../constants';
import styles from './styles';

class TaskItem extends Component {
  showConfirmDialog = () => {
    const { onShowConfirmDialog } = this.props;
    if (onShowConfirmDialog) {
      onShowConfirmDialog();
    }
  };

  render() {
    const { task, classes, onClickEditButton } = this.props;
    return (
      <>
        <Card className={classes.card} key={task.id}>
          <CardContent>
            <Grid container justify="space-between">
              <Grid item md={8}>
                <Typography component="h2" variant="h4" gutterBottom>
                  {task.title}
                </Typography>
              </Grid>
              <Grid item md={4} className={classes.labelStatus}>
                {STATUSES[task.status].label}
              </Grid>
            </Grid>
            <Typography component="p">{task.description}</Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Fab
              size="small"
              color="primary"
              aria-label="Edit"
              className={classes.fab}
              onClick={onClickEditButton}
            >
              <Icon fontSize="small">edit_icon</Icon>
            </Fab>
            <Fab
              size="small"
              color="secondary"
              aria-label="Delete"
              className={classes.fab}
              onClick={this.showConfirmDialog}
            >
              <Icon fontSize="small">delete_icon</Icon>
            </Fab>
          </CardActions>
        </Card>
      </>
    );
  }
}

export default withStyles(styles)(TaskItem);
