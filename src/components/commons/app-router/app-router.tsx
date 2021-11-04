import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GetIsAuth } from '../../../selectors/user';
import { useSelector } from 'react-redux';

//routs
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  TODOS_ROUTE,
  USER_ROUTE,
} from '../../../const/routes';

//components
import Auth from '../../pages/auth';
import UserProfile from '../../pages/user-profile';
import Register from '../../pages/register';
import Todos from '../../pages/todos';

const AppRouter: React.FC = () => {
  const isAuth = useSelector(GetIsAuth);
  return (
    <div>
      <Routes>
        {/* public */}
        {!isAuth && <Route path={REGISTRATION_ROUTE} element={<Register />} />}
        {!isAuth && <Route path={LOGIN_ROUTE} element={<Auth />} />}
        {!isAuth && <Route path={'/'} element={<Auth />} />}

        {/* private */}
        {isAuth && <Route path={USER_ROUTE} element={<UserProfile />} />}
        {isAuth && <Route path={TODOS_ROUTE} element={<Todos />} />}
        {isAuth && <Route path={'/'} element={<Todos />} />}

        {/* {isAuth && <Route path={'/login'} element={<Auth />} />} */}
        {/* {publicRoutes.map(({ path, Component }: any) => (
          <Route key={path} path={path} element={Component} />
        ))} */}
      </Routes>
    </div>
  );
};

export default AppRouter;
