import Home from '@/containers/Home';
import SignIn from '@/containers/SignIn/SignIn';
import SignUp from '@/containers/SignUp';
import NotFound from '@/containers/NotFound';

const PATHS = {
  ROOT: '/',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  NOT_FOUND: '/not-found',
};

export { PATHS };

/**
 * Using generate app routes
 */
export default [
  {
    path: PATHS.ROOT,
    title: 'Welcome to my app',
    component: Home,
    exact: true,
  },
  {
    path: PATHS.SIGN_IN,
    title: 'Sign in to my app',
    component: SignIn,
    exact: true,
  },
  {
    path: PATHS.SIGN_UP,
    title: 'Sign up',
    component: SignUp,
    exact: true,
  },
  {
    path: PATHS.NOT_FOUND,
    title: 'Page not found',
    component: NotFound,
    exact: true,
  },
  {
    path: `${PATHS.root}**`,
    title: 'Redirect to root',
    redirect: true,
    to: PATHS.NOT_FOUND,
    exact: true,
  },
];
