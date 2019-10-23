import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './home.styles';

const Home = ({ classes }) => <div className={classes.root}>Home</div>;

Home.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(Home);
