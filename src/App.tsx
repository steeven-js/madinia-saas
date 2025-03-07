import { AuthProvider } from 'src/contexts/AuthContext';

import { Router } from 'src/routes';

/**
 * Composant principal de l'application
 */
export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
