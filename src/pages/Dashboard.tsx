import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { auth } from 'src/firebase/config';

export default function Dashboard() {
  const { currentUser, refreshUserClaims } = useAuth();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [userClaims, setUserClaims] = useState<any>(null);
  const [displayRole, setDisplayRole] = useState('');

  // Fonction pour récupérer les claims directement depuis Firebase
  const fetchFirebaseClaims = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        // Forcer le rafraîchissement du token pour obtenir les dernières claims
        await user.getIdToken(true);
        
        // Récupérer le token ID qui contient les claims
        const idTokenResult = await user.getIdTokenResult();
        console.log('Claims Firebase:', idTokenResult.claims);
        
        setUserClaims(idTokenResult.claims);
        
        // Définir le rôle à afficher
        const role = idTokenResult.claims.role;
        if (role === 'admin') {
          setDisplayRole('administrateur');
        } else if (role === 'super-admin') {
          setDisplayRole('super administrateur');
        } else {
          setDisplayRole('utilisateur');
        }
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des claims Firebase:', error);
    }
  };

  // Rafraîchir les claims au chargement du composant
  useEffect(() => {
    fetchFirebaseClaims();
    refreshUserClaims();
  }, [refreshUserClaims]);

  // Fonction pour rafraîchir manuellement les claims
  const handleRefreshClaims = async () => {
    setIsRefreshing(true);
    try {
      await fetchFirebaseClaims();
      await refreshUserClaims();
      console.log("Claims rafraîchies avec succès");
    } catch (error) {
      console.error("Erreur lors du rafraîchissement des claims:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Informations de l'utilisateur
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Détails personnels et informations du compte.
          </p>
        </div>
        <button
          onClick={handleRefreshClaims}
          disabled={isRefreshing}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isRefreshing ? 'Rafraîchissement...' : 'Rafraîchir les claims'}
        </button>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Email
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {currentUser?.email}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              ID Utilisateur
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {currentUser?.uid}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Rôle Firebase
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {userClaims?.role || 'Aucun rôle défini'} ({displayRole})
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Email vérifié
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {currentUser?.emailVerified ? 'Oui' : 'Non'}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Dernière connexion
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {currentUser?.metadata.lastSignInTime}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Claims Firebase
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <pre className="whitespace-pre-wrap">
                {JSON.stringify(userClaims, null, 2)}
              </pre>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
} 