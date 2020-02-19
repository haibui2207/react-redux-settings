import React, { memo } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './signIn.styles';

const Button = ({ onClick }) => <button onClick={onClick}>Login</button>;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default injectSheet(styles)(memo(Button));
