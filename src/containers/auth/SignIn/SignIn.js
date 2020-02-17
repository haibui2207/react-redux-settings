import React, { useState } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signIn } from '@/redux/ducks/auth.duck';

import styles from './signIn.styles';

const SignIn = ({ classes, signIn }) => {
  const [state, setState] = useState({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    signIn(state);
  };

  return (
    <div className={classes.root}>
      <p>Sign in</p>
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={handleInputChange}
        value={state.email}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleInputChange}
        value={state.password}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

SignIn.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  signIn: PropTypes.func.isRequired,
};

export default compose(
  connect(
    null,
    {
      signIn,
    },
  ),
  injectSheet(styles),
)(SignIn);
