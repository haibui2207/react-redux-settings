import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { signUp } from '../../../redux/ducks/auth.duck';

import styles from './signUp.styles';

const SignUp = ({ classes, submit }) => (
  <div className={classes.root}>
    Sign up
    <button
      onClick={() => {
        submit({ name: 'test' });
      }}
    >
      Test saga
    </button>
  </div>
);

SignUp.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  submit: PropTypes.func.isRequired,
};

export default compose(
  connect(
    null,
    {
      submit: signUp,
    },
  ),
  injectSheet(styles),
)(SignUp);
