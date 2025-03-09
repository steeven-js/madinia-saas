import { Navigate } from 'react-router-dom';

import { useAuth } from 'src/contexts/AuthContext';

import { getDefaultRedirect } from 'src/routes/utils/utils';

/**
 * Composant qui redirige l'utilisateur en fonction de son état d'authentification
 * Utilisé pour les routes racines ou par défaut
 */
export default function AuthRedirect() {
  const { currentUser } = useAuth();
  const isAuthenticated = !!currentUser;
  
  return <Navigate to={getDefaultRedirect(isAuthenticated)} replace />;
} 