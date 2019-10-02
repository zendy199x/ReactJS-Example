import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as authActions from '../../actions/auth';
import TextField from '../../components/FormHelper/TextField';
import styles from './styles';
import validate from './validate';

class LoginPage extends Component {
  handleSubmitForm = values => {
    if (values) {
      const { email, password } = values;
      const { authActions } = this.props;
      const { login } = authActions;
      if (login) {
        login(email, password);
      }
    } else {
      console.log('data is not valid');
    }
  };

  render() {
    const { classes, handleSubmit, invalid, submitting } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <div className="text-xs-center pb-xs">
                  <img src="/static/images/logo-dark.svg" alt="" />
                  <Typography variant="caption">
                    Sign in with your app id to continue.
                  </Typography>
                </div>
                <Field
                  id="email"
                  label="Email"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                  name="email"
                  component={TextField}
                />
                <Field
                  id="password"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  fullWidth
                  margin="normal"
                  name="password"
                  component={TextField}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  disabled={invalid || submitting}
                >
                  Login
                </Button>
                <div className="pt-1 text-md-center">
                  <Link to="/signup">
                    <Button>Create new account.</Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

const FORM_NAME = 'LOGIN';
const withForm = reduxForm({
  form: FORM_NAME,
  validate
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch)
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withStyles(styles),
  withConnect,
  withForm
)(LoginPage);
