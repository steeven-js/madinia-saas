import { Routes, Route, Navigate } from 'react-router-dom';

// @project
import Layout from 'src/layouts/Layout';
import DashboardAnalytics from 'src/views/admin/dashboard/analytics';
import Login from 'src/pages/Login';
import Dashboard from 'src/pages/Dashboard';
import Register from 'src/pages/Register';

/**
 * Toutes les routes de l'application
 */
export function Router() {
  return (
    <Routes>
      {/* Routes publiques */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
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