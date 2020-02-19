import Home from '@/containers/Home';
import SignIn from '@/containers/auth/SignIn/SignIn';
import SignUp from '@/containers/auth/SignUp';
import NotFound from '@/containers/NotFound';

const paths = {
  root: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  notFound: '/not-found',
};

export { paths };

/**
 * Using generate app routes
 */
export default [
  {
    path: paths.root,
    title: 'Welcome to my app',
    component: Home,
    exact: true,
  },
  {
    path: paths.signIn,
    title: 'Sign in to my app',
    component: SignIn,
    exact: true,
  },
  {
    path: paths.signUp,
    title: 'Sign up',
    component: SignUp,
    exact: true,
  },
  {
    path: paths.notFound,
    title: 'Page not found',
    component: NotFound,
    exact: true,
  },
  {
    path: `${paths.root}**`,
    title: 'Redirect to root',
    redirect: true,
    to: paths.notFound,
    exact: true,
  },
];
