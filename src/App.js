import React, { memo } from 'react';
import { Switch } from 'react-router';
import ROUTES from '@/constants/routes';
import generateRoutes from '@/utils/generateRoutes';

const App = () => <Switch>{generateRoutes(ROUTES)}</Switch>;

export default memo(App);
