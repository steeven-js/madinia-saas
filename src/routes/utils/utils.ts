import { NavigateOptions } from 'react-router-dom';

import { PATHS, PathsType, PRIVATE_PATHS, PUBLIC_PATHS } from 'src/routes/paths';

/**
 * Vérifie si un chemin est une route publique
 * @param path - Le chemin à vérifier
 * @returns true si le chemin est une route publique
 */
export const isPublicPath = (path: string): boolean => {
  return Object.values(PUBLIC_PATHS).includes(path as any);
};

/**
 * Vérifie si un chemin est une route privée
 * @param path - Le chemin à vérifier
 * @returns true si le chemin est une route privée
 */
export const isPrivatePath = (path: string): boolean => {
  return Object.values(PRIVATE_PATHS).includes(path as any);
};

/**
 * Construit une URL avec des paramètres de requête
 * @param path - Le chemin de base
 * @param params - Les paramètres de requête à ajouter
 * @returns L'URL complète avec les paramètres
 */
export const buildUrl = (path: PathsType, params?: Record<string, string>): string => {
  if (!params) return path;
  
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, value);
  });
  
  return `${path}?${searchParams.toString()}`;
};

/**
 * Options pour la redirection
 */
export interface RedirectOptions extends NavigateOptions {
  params?: Record<string, string>;
}

/**
 * Construit les options de redirection pour react-router
 * @param path - Le chemin de destination
 * @param options - Les options de redirection
 * @returns Les options formatées pour react-router
 */
export const buildRedirectOptions = (
  path: PathsType,
  options?: RedirectOptions
): { to: string; options?: NavigateOptions } => {
  const to = options?.params ? buildUrl(path, options.params) : path;
  
  // Utiliser la syntaxe de déstructuration pour ignorer la propriété params
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { params, ...navigateOptions } = options || {};
  
  return {
    to,
    ...(Object.keys(navigateOptions || {}).length > 0 ? { options: navigateOptions } : {})
  };
};

/**
 * Détermine la redirection par défaut en fonction de l'état d'authentification
 * @param isAuthenticated - Si l'utilisateur est authentifié
 * @returns Le chemin de redirection par défaut
 */
export const getDefaultRedirect = (isAuthenticated: boolean): PathsType => {
  return isAuthenticated ? PATHS.DASHBOARD : PATHS.LOGIN;
}; 