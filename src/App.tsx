import { Suspense, lazy } from 'react';
import { AuthProvider } from 'src/contexts/AuthContext';
import ProviderWrapper from 'src/components/ProviderWrapper';

// Lazy loading
const Router = lazy(() => import('src/routes'));

// Components
import ProgressBar from 'src/components/progress/ProgressBar';
import { SplashScreen } from 'src/components/loading-screen';

/**
 * Composant principal de l'application
 */
export default function App() {
  return (
    <AuthProvider>
      <ProviderWrapper>
        <ProgressBar />
        
        <Suspense fallback={<SplashScreen />}>
          <Router />
        </Suspense>
      </ProviderWrapper>
    </AuthProvider>
  );
}
