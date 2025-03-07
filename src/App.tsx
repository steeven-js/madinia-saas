import { AuthProvider } from 'src/contexts/AuthContext';
import ProviderWrapper from 'src/components/ProviderWrapper';

import { Router } from 'src/routes';

/**
 * Composant principal de l'application
 */
export default function App() {
  return (
    <AuthProvider>
      <ProviderWrapper>
        <Router />
      </ProviderWrapper>
    </AuthProvider>
  );
}
