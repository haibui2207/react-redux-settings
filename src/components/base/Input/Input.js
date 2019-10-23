import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import injectSheet from 'react-jss';

import styles from './input.styles';

const propTypes = {
  /** @ignore Default button styles */
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  /** Button label */
  children: PropTypes.node.isRequired,
  /** HTML tags */
  tag: PropTypes.node,
  /** Button type */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Custom styles */
  className: PropTypes.string,
  /** Button color present */
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'gradient']),
  /** Swap color and background color of button */
  reverse: PropTypes.bool,
};

const defaultProps = {
  type: 'button',
  tag: 'button',
  className: null,
  color: 'default',
  reverse: false,
};

const Input = ({
  children,
  classes,
  tag: Com,
  color,
  className,
  type,
  reverse,
  ...rest
}) => {
  console.log(rest);

  return <input />;
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default injectSheet(styles)(Input);
