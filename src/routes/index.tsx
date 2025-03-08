import { Routes, Route, Navigate } from 'react-router-dom';

// @project
import Layout from '../layouts/Layout';
import DashboardAnalytics from '../views/admin/dashboard/analytics';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

/**
 * Toutes les routes de l'application
 */
export function Router() {
  return (
    <Routes>
      {/* Routes publiques */}
      <Route path="/login" element={<Login />} />
      
      {/* Routes protégées */}
      <Route path="/" element={<Layout><Dashboard /></Layout>} />
      <Route path="/dashboard" element={<Navigate to="/dashboard/analytics" replace />} />
      <Route path="/dashboard/analytics" element={<Layout><DashboardAnalytics /></Layout>} />
      
      {/* Redirection par défaut */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Router; 