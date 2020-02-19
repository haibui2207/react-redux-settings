import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { PATHS } from '@/constants/routes';

import styles from './home.styles';

const Home = ({ classes }) => (
  <div className={classes.root}>
    <p>Home</p>
    <a href={PATHS.SIGN_IN}>Go to sign in</a>
  </div>
);

Home.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(Home);
