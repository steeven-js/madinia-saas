import { ReactNode } from 'react';

// @project
import { AuthProvider } from '../contexts/AuthContext';
import AuthGuard from '../utils/route-guard/AuthGuard';
import RoleGuard from '../utils/route-guard/RoleGuard';
import DashboardLayout from './AdminLayout';
// Props
interface LayoutProps {
  children: ReactNode;
}

/***************************  LAYOUT - ADMIN  ***************************/

export default function Layout({ children }: LayoutProps) {
  return (
    <AuthProvider>
      <AuthGuard>
        <RoleGuard>
          <DashboardLayout>{children}</DashboardLayout>
        </RoleGuard>
      </AuthGuard>
    </AuthProvider>
  );
} 