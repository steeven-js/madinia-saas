import { RouteObject, useRoutes } from 'react-router-dom';

import AuthRedirect from 'src/routes/AuthRedirect';
import publicRoutes from 'src/routes/publicRoutes';
import privateRoutes from 'src/routes/privateRoutes';

/**
 * Toutes les routes de l'application
 */
export const routes: RouteObject[] = [
  ...publicRoutes,
  ...privateRoutes,
  {
    path: '*',
    element: <AuthRedirect />
  }
];

/**
 * Composant Router qui utilise useRoutes pour rendre les routes
 */
export function Router() {
  const element = useRoutes(routes);
  return element;
}

export default routes; 