import { useState, useEffect } from 'react';
import { auth } from 'src/firebase/config';
import { refreshUserClaims as _refreshUserClaims } from 'src/auth/context/firebase/action';

interface UseAuthReturn {
  currentUser: any;
  userClaims: any;
  userRole: string | null;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  displayRole: string;
  refreshUserClaims: () => Promise<void>;
  isRefreshing: boolean;
}

export function useAuth(): UseAuthReturn {
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userClaims, setUserClaims] = useState<any>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Fonction pour récupérer les claims directement depuis Firebase
  const fetchUserClaims = async () => {
    try {
      const claims = await _refreshUserClaims();
      if (claims) {
        console.log('Claims récupérées:', claims);
        
        // Récupérer le rôle depuis les claims
        const role = claims.role as string;
        setUserRole(role || 'user');
        setUserClaims(claims);
      } else {
        setUserRole('user');
        setUserClaims(null);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des claims:', error);
      setUserRole('user');
    }
  };

  // Fonction pour rafraîchir les claims
  const refreshUserClaims = async () => {
    setIsRefreshing(true);
    try {
      await fetchUserClaims();
      console.log("Claims rafraîchies avec succès");
    } catch (error) {
      console.error("Erreur lors du rafraîchissement des claims:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  // Écouter les changements d'état de l'authentification
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      if (user) {
        fetchUserClaims();
      } else {
        setUserRole('user');
        setUserClaims(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Déterminer si l'utilisateur est admin ou super-admin
  const isAdmin = userRole === 'admin';
  const isSuperAdmin = userRole === 'super-admin';
  
  // Obtenir le rôle à afficher
  const displayRole = 
    userRole === 'admin' ? 'administrateur' :
    userRole === 'super-admin' ? 'super administrateur' :
    'utilisateur';

  return {
    currentUser,
    userClaims,
    userRole,
    isAdmin,
    isSuperAdmin,
    displayRole,
    refreshUserClaims,
    isRefreshing
  };
}