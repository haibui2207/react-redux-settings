import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { signIn, getToken } from '@/redux/ducks/auth.duck';

import Button from './Button';
import styles from './signIn.styles';

const SignIn = ({ classes }) => {
  const [state, setState] = useState({
    email: 'eve.holt@reqres.in', password: 'cityslicka',
  });
  const token = useSelector(getToken, shallowEqual);
  const dispatch = useDispatch();

  const handleInputChange = useCallback(
    ({ target: { name, value } }) => { setState({ ...state, [name]: value }); },
    [],
  );

  const handleSubmit = () => { dispatch(signIn(state)); };

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
      <Button onClick={handleSubmit}>Login</Button>

      <br />
      <br />
      <p>
        Token:&nbsp;
        {token || 'null'}
      </p>
    </div>
  );
};

SignIn.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(SignIn);
