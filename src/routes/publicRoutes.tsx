import { RouteObject } from 'react-router-dom';

import GuestLayout from 'src/layouts/GuestLayout';

import Login from 'src/pages/Login';
import Register from 'src/pages/Register';
import ForgotPassword from 'src/pages/ForgotPassword';

import { PUBLIC_PATHS } from 'src/routes/path';
import AuthRedirect from 'src/routes/AuthRedirect';

/**
 * Routes publiques (accessibles sans authentification)
 */
const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: PUBLIC_PATHS.LOGIN,
        element: <Login />
      },
      {
        path: PUBLIC_PATHS.REGISTER,
        element: <Register />
      },
      {
        path: PUBLIC_PATHS.FORGOT_PASSWORD,
        element: <ForgotPassword />
      },
      {
        path: PUBLIC_PATHS.ROOT,
        element: <AuthRedirect />
      }
    ]
  }
];

export default publicRoutes; 