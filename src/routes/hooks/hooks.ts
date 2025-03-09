import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { PATHS, PathsType } from 'src/routes/paths';
import { buildRedirectOptions, RedirectOptions } from 'src/routes/utils/utils';

/**
 * Hook personnalisé pour la navigation dans l'application
 * Fournit des méthodes pour naviguer vers des routes spécifiques
 */
export const useAppNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * Navigue vers une route spécifique
   * @param path - Le chemin de destination
   * @param options - Les options de redirection
   */
  const navigateTo = useCallback(
    (path: PathsType, options?: RedirectOptions) => {
      const { to, options: navigateOptions } = buildRedirectOptions(path, options);
      navigate(to, navigateOptions);
    },
    [navigate]
  );

  /**
   * Navigue vers la page de connexion
   * @param options - Les options de redirection
   */
  const navigateToLogin = useCallback(
    (options?: RedirectOptions) => {
      navigateTo(PATHS.LOGIN, {
        ...options,
        state: { ...options?.state, from: location.pathname }
      });
    },
    [navigateTo, location.pathname]
  );

  /**
   * Navigue vers la page d'inscription
   * @param options - Les options de redirection
   */
  const navigateToRegister = useCallback(
    (options?: RedirectOptions) => {
      navigateTo(PATHS.REGISTER, options);
    },
    [navigateTo]
  );

  /**
   * Navigue vers la page de réinitialisation de mot de passe
   * @param options - Les options de redirection
   */
  const navigateToForgotPassword = useCallback(
    (options?: RedirectOptions) => {
      navigateTo(PATHS.FORGOT_PASSWORD, options);
    },
    [navigateTo]
  );

  /**
   * Navigue vers le tableau de bord
   * @param options - Les options de redirection
   */
  const navigateToDashboard = useCallback(
    (options?: RedirectOptions) => {
      navigateTo(PATHS.DASHBOARD, options);
    },
    [navigateTo]
  );

  return {
    navigateTo,
    navigateToLogin,
    navigateToRegister,
    navigateToForgotPassword,
    navigateToDashboard,
    currentPath: location.pathname
  };
}; 