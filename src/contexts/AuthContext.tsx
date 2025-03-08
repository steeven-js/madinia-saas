import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from 'src/firebase/config';
import { refreshUserClaims as _refreshUserClaims } from 'src/auth/context/firebase/action';

// Type pour les custom claims
interface UserClaims {
  role?: string;
  [key: string]: any;
}

// Définir le type pour le contexte
interface AuthContextType {
  currentUser: User | null;
  userClaims: UserClaims | null;
  loading: boolean;
}

// Créer le contexte
const AuthContext = createContext<AuthContextType | null>(null);

// Hook personnalisé pour utiliser le contexte
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth doit être utilisé à l'intérieur d'un AuthProvider");
  }
  return context;
}

// Props pour le provider
interface AuthProviderProps {
  children: ReactNode;
}

// Provider du contexte
export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userClaims, setUserClaims] = useState<UserClaims | null>(null);
  const [loading, setLoading] = useState(true);

  // Effet pour surveiller l'état de l'authentification
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        // Utiliser refreshUserClaims de action.ts
        try {
          const claims = await _refreshUserClaims();
          setUserClaims(claims);
        } catch (error) {
          console.error("Erreur lors de la récupération des claims:", error);
          setUserClaims(null);
        }
      } else {
        setUserClaims(null);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userClaims,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
} 