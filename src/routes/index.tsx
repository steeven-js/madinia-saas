import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// Layouts
import AuthLayout from 'src/layouts/AuthLayout';
import GuestLayout from 'src/layouts/GuestLayout';

// Config
import { APP_DEFAULT_PATH } from 'src/config';

// Lazy loading des pages
const Login = lazy(() => import('src/pages/Login'));
const Register = lazy(() => import('src/pages/Register'));
const DashboardAnalytics = lazy(() => import('src/views/admin/dashboard/analytics'));

/**
 * Toutes les routes de l'application
 */
export default function Router() {
  const routes = useRoutes([
    // Routes publiques (invités)
    {
      element: <GuestLayout />,
      children: [
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
      ],
    },

    // Routes protégées (authentifiées)
    {
      element: <AuthLayout />,
      children: [
        { path: '/', element: <Navigate to={APP_DEFAULT_PATH} replace /> },
        { path: '/dashboard', element: <Navigate to={APP_DEFAULT_PATH} replace /> },
        { path: '/dashboard/analytics', element: <DashboardAnalytics /> },
      ],
    },

    // Redirection par défaut
    { path: '*', element: <Navigate to="/" replace /> },
  ]);

  return routes;
} 