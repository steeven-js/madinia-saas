import { ReactNode } from 'react';

// @project
import { AuthProvider } from '../contexts/AuthContext';
import AuthGuard from '../utils/route-guard/AuthGuard';
import RoleGuard from '../utils/route-guard/RoleGuard';
import AdminLayout from './AdminLayout';

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
          <AdminLayout>{children}</AdminLayout>
        </RoleGuard>
      </AuthGuard>
    </AuthProvider>
  );
} 