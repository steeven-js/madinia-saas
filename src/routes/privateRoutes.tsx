import { RouteObject } from 'react-router-dom';

import AuthLayout from 'src/layouts/AuthLayout';

import Dashboard from 'src/pages/Dashboard';

import { PRIVATE_PATHS } from 'src/routes/path';

/**
 * Routes privées (accessibles uniquement avec authentification)
 */
const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: PRIVATE_PATHS.DASHBOARD,
        element: <Dashboard />
      },
      // Ajoutez d'autres routes privées ici
    ]
  }
];

export default privateRoutes; 