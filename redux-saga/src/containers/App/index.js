import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styles from './styles'
import { withStyles } from '@material-ui/styles';

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="App">
                <h1>Hello Redux Saga</h1>
                <Button variant="contained" color="primary">Material UI Button</Button>
                <div className={classes.box}>
                    <div className={classes.shape}>ReactJS</div>
                    <div className={classes.shape}>VueJS</div>
                    <div className={classes.shape}>AngularJS</div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
