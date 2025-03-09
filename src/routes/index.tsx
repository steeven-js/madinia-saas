import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// Layouts
import AuthLayout from 'src/layouts/AuthLayout';
import GuestLayout from 'src/layouts/GuestLayout';

// Config
import { APP_DEFAULT_PATH } from 'src/config';
import { PATHS } from './paths';

// Lazy loading des pages
const Login = lazy(() => import('src/pages/auth/Login'));
const Register = lazy(() => import('src/pages/auth/Register'));
const DashboardAnalytics = lazy(() => import('src/views/admin/dashboard/analytics'));
const Page1 = lazy(() => import('src/pages/dashboard/page1'));
const Page2 = lazy(() => import('src/pages/dashboard/page2'));
const Page3 = lazy(() => import('src/pages/dashboard/page3'));

/**
 * Toutes les routes de l'application
 */
export default function Router() {
  const routes = useRoutes([
    // Routes publiques (invités)
    {
      element: <GuestLayout />,
      children: [
        { path: PATHS.LOGIN, element: <Login /> },
        { path: PATHS.REGISTER, element: <Register /> },
      ],
    },

    // Routes protégées (authentifiées)
    {
      element: <AuthLayout />,
      children: [
        { path: PATHS.ROOT, element: <Navigate to={APP_DEFAULT_PATH} replace /> },
        { path: PATHS.DASHBOARD, element: <Navigate to={APP_DEFAULT_PATH} replace /> },
        { path: '/dashboard/analytics', element: <DashboardAnalytics /> },
        { path: PATHS.PAGE1, element: <Page1 /> },
        { path: PATHS.PAGE2, element: <Page2 /> },
        { path: PATHS.PAGE3, element: <Page3 /> },
      ],
    },

    // Redirection par défaut
    { path: '*', element: <Navigate to={PATHS.ROOT} replace /> },
  ]);

  return routes;
}