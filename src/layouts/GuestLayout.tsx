import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from 'src/contexts/AuthContext';

import { PATHS } from 'src/routes/path';

interface GuestLayoutProps {
  children?: ReactNode;
}

export default function GuestLayout({ children }: GuestLayoutProps) {
  const { currentUser } = useAuth();

  // Rediriger vers le dashboard si l'utilisateur est déjà connecté
  if (currentUser) {
    return <Navigate to={PATHS.DASHBOARD} replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Madinia SaaS
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {children || <Outlet />}
        </div>
      </div>
    </div>
  );
} 