import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { signIn } from '../../../redux/ducks/auth.duck';

import styles from './signIn.styles';

const SignIn = ({ classes, submit }) => (
  <div className={classes.root}>
    <p>Sign in</p>
    <button
      onClick={() => {
        submit({ name: 'test' });
      }}
    >
      Test saga
    </button>
  </div>
);

SignIn.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  submit: PropTypes.func.isRequired,
};

export default compose(
  connect(
    null,
    {
      submit: signIn,
    },
  ),
  injectSheet(styles),
)(SignIn);
