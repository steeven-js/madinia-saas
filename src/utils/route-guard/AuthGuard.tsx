import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// @project
import { useAuth } from '../../contexts/AuthContext';
import PageLoader from '../../components/PageLoader';

// Props
interface AuthGuardProps {
  children: ReactNode;
}

/***************************  AUTH GUARD  ***************************/

export default function AuthGuard({ children }: AuthGuardProps) {
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (!currentUser) {
        navigate('/login', { replace: true });
      }
      setChecked(true);
    }
  }, [currentUser, loading, navigate]);

  if (!checked) {
    return <PageLoader />;
  }

  return <>{children}</>;
} 