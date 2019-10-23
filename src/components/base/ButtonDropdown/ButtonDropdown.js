import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';

import styles from './buttonDropdown.styles';

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

const ButtonDropdown = ({
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

  return (
    <div className="dropdown">
      <button
        className={classNames(
          'dropdown-toggle',
        )}
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {children}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="/">
          Action
        </a>
        <a className="dropdown-item" href="/">
          Another action
        </a>
        <a className="dropdown-item" href="/">
          Something else here
        </a>
      </div>
    </div>
  );
};

ButtonDropdown.propTypes = propTypes;
ButtonDropdown.defaultProps = defaultProps;

export default injectSheet(styles)(ButtonDropdown);
