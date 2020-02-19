import React from 'react';
import { Route, Redirect } from 'react-router';
import { withTitle } from '@/HOCs';

/**
 * @param routes is an object extends from RouteProps and RedirectProps
 * with more args
 * - isRedirect: boolean - in case using Redirect
 * - title: string required - using for title tag
 */
const generateRoutes = (routes) => {
  if (!routes || !Array.isArray(routes) || !routes.length) {
    return null;
  }

  return routes.map(({ redirect, component, ...rest }) => {
    if (redirect) {
      return <Redirect key={rest.title} {...rest} />;
    }

    return (
      <Route
        key={rest.title}
        component={withTitle(component, { title: rest.title })}
        {...rest}
      />
    );
  });
};

export default generateRoutes;
