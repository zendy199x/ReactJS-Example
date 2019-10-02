import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';
import TextField from '../../components/FormHelper/TextField';
import Checkbox from '../../components/FormHelper/Checkbox';
import validate from './validate';
import * as authActions from '../../actions/auth';

class SignupPage extends Component {
  handleSubmitForm = values => {
    if (values) {
      const { email, password } = values;
      const { authActions } = this.props;
      const { signup } = authActions;
      if (signup) {
        signup(email, password);
      }
    } else {
      console.log('data is not valid');
    }
  };

  render() {
    const { classes, handleSubmit, invalid, submitting } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.wrapper}>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <div className="text-xs-center pb-xs">
                  <img src="/static/images/logo-dark.svg" alt="" />
                  <Typography variant="caption">
                    Sign up with your app id to continue.
                  </Typography>
                </div>
                <Field
                  className={classes.textField}
                  fullWidth
                  label="Email"
                  margin="normal"
                  name="email"
                  component={TextField}
                />
                <Field
                  className={classes.textField}
                  fullWidth
                  label="Password"
                  margin="normal"
                  name="password"
                  component={TextField}
                  type="password"
                />
                <Field
                  className={classes.textField}
                  fullWidth
                  label="Confirm Password"
                  margin="normal"
                  name="confirmpassword"
                  component={TextField}
                  type="password"
                />
                <Field
                  component={Checkbox}
                  label="I have read and agree to the terms of service."
                  className={classes.fullWidth}
                  name="isAccept"
                />
                <Button
                  disabled={invalid || submitting}
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Create account
                </Button>
                <div className="pt-1 text-md-center">
                  <Link to="/login">
                    <Button>Already account.</Button>
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

const FORM_NAME = 'SIGN_UP';
const withForm = reduxForm({
  form: FORM_NAME,
  validate
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withStyles(styles),
  withConnect,
  withForm
)(SignupPage);
