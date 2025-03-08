import { useState, useEffect } from 'react';
import { auth } from 'src/firebase/config';
import { useAuth as useAuthContext } from 'src/contexts/AuthContext';

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
  const { currentUser } = useAuthContext();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userClaims, setUserClaims] = useState<any>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Fonction pour récupérer les claims directement depuis Firebase
  const fetchUserClaims = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        // Forcer le rafraîchissement du token pour obtenir les dernières claims
        await user.getIdToken(true);
        
        // Récupérer le token ID qui contient les claims
        const idTokenResult = await user.getIdTokenResult();
        console.log('Claims récupérées:', idTokenResult.claims);
        
        // Récupérer le rôle depuis les claims
        const role = idTokenResult.claims.role as string;
        setUserRole(role || 'user');
        setUserClaims(idTokenResult.claims);
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

  // Récupérer les claims au chargement et quand l'utilisateur change
  useEffect(() => {
    if (currentUser) {
      fetchUserClaims();
    } else {
      setUserRole('user');
      setUserClaims(null);
    }
  }, [currentUser]);

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