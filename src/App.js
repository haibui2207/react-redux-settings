import React from 'react';
import { Switch } from 'react-router';

import { ROUTES } from './constants';
import { generateRoutes } from './utils';

const App = () => <Switch>{generateRoutes(ROUTES)}</Switch>;

export default App;
