/**
 * Constantes pour les chemins de l'application
 * Centralise tous les chemins pour faciliter la maintenance
 */

// Routes publiques (non authentifiées)
export const PUBLIC_PATHS = {
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  ROOT: '/'
} as const;

// Routes privées (authentifiées)
export const PRIVATE_PATHS = {
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  PAGE1: '/dashboard/page1',
  PAGE2: '/dashboard/page2',
  PAGE3: '/dashboard/page3'
} as const;

// Tous les chemins
export const PATHS = {
  ...PUBLIC_PATHS,
  ...PRIVATE_PATHS
} as const;

// Type pour les chemins publics
export type PublicPathsType = typeof PUBLIC_PATHS[keyof typeof PUBLIC_PATHS];

// Type pour les chemins privés
export type PrivatePathsType = typeof PRIVATE_PATHS[keyof typeof PRIVATE_PATHS];

// Type pour tous les chemins
export type PathsType = typeof PATHS[keyof typeof PATHS]; 