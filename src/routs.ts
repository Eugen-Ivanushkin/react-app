// import TodosPage from './components/pages/';
import UserProfile from './components/pages/user-profile';

import Auth from './components/pages/auth';
import Register from './components/pages/register';

import {
  // TODOS_ROUTE,
  USER_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from './const/routes';

export const authRoutes = [
  // {
  //   path: TODOS_ROUTE,
  //   Component: TodosPage,
  // },
  {
    path: USER_ROUTE,
    Component: UserProfile,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Register,
  },
];
