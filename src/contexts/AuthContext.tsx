import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import { 
  User, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  sendPasswordResetEmail
} from 'firebase/auth';

import { auth } from 'src/firebase/config';

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
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
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

  // Fonction pour récupérer les claims de l'utilisateur - désactivée
  async function fetchUserClaims(_user: User) {
    // Fonction désactivée
    console.log("fetchUserClaims est désactivée");
    setUserClaims(null);
    
    // Code original commenté
    /*
    try {
      console.log("Récupération des claims pour l'utilisateur:", user.uid);
      
      // Forcer le rafraîchissement du token pour obtenir les dernières claims
      await user.getIdToken(true);
      
      // Récupérer le token ID qui contient les claims
      const idTokenResult = await user.getIdTokenResult();
      console.log("Token claims:", idTokenResult.claims);
      
      // Récupérer les données utilisateur de Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      console.log("Firestore data:", userDoc.exists() ? userDoc.data() : "Document n'existe pas");
      
      // Vérifier si le rôle est défini dans les custom claims
      const role = idTokenResult.claims.role || 
                  (userDoc.exists() && userDoc.data().role) || 
                  null;
      
      // Combiner les claims du token avec les données Firestore
      const claims = {
        ...idTokenResult.claims,
        ...(userDoc.exists() ? userDoc.data() : {}),
        // S'assurer que le rôle est défini même s'il n'est pas dans les claims
        role: role
      };
      
      console.log("Claims finales:", claims);
      setUserClaims(claims);
    } catch (error) {
      console.error("Erreur lors de la récupération des claims:", error);
      setUserClaims(null);
    }
    */
  }

  // Fonction pour s'inscrire
  async function signup(email: string, password: string) {
    await createUserWithEmailAndPassword(auth, email, password);
  }

  // Fonction pour se connecter
  async function login(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  // Fonction pour se déconnecter
  async function logout() {
    await signOut(auth);
    setUserClaims(null);
  }

  // Fonction pour réinitialiser le mot de passe
  async function resetPassword(email: string) {
    await sendPasswordResetEmail(auth, email);
  }

  // Effet pour surveiller l'état de l'authentification
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        await fetchUserClaims(user);
      } else {
        setUserClaims(null);
      }
      
      setLoading(false);
    });

    // Nettoyer l'abonnement lors du démontage
    return unsubscribe;
  }, []);

  // Valeur du contexte
  const value = {
    currentUser,
    userClaims,
    loading,
    signup,
    login,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
} 