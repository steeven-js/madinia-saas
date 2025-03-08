import { ReactNode, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// @project
import AuthGuard from '../utils/route-guard/AuthGuard';
import RoleGuard from '../utils/route-guard/RoleGuard';
import DashboardLayout from './AdminLayout';
import { SplashScreen } from 'src/components/loading-screen';

// Props
interface LayoutProps {
  children?: ReactNode;
}

/***************************  LAYOUT - ADMIN  ***************************/

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <AuthGuard>
      <RoleGuard>
        <DashboardLayout>
          <Suspense fallback={<SplashScreen />}>
            {children || <Outlet />}
          </Suspense>
        </DashboardLayout>
      </RoleGuard>
    </AuthGuard>
  );
} 