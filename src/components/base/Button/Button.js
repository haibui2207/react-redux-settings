import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';

import styles from './button.styles';

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
};

const defaultProps = {
  type: 'button',
  tag: 'button',
  className: null,
  color: 'default',
};

const Button = ({
  children,
  classes,
  tag: Com,
  color,
  className,
  type,
  ...rest
}) => {
  const buttonAttributes = { ...rest };
  buttonAttributes.className = classNames(
    classes.root,
    classes[color],
    className,
  );
  if (Com !== 'button') {
    delete buttonAttributes.type;
  }

  return <Com {...buttonAttributes}>{children}</Com>;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default injectSheet(styles)(Button);
