import { doc, setDoc, updateDoc } from 'firebase/firestore';
import {
  signOut as _signOut,
  signInWithPopup as _signInWithPopup,
  GoogleAuthProvider as _GoogleAuthProvider,
  GithubAuthProvider as _GithubAuthProvider,
  TwitterAuthProvider as _TwitterAuthProvider,
  sendEmailVerification as _sendEmailVerification,
  sendPasswordResetEmail as _sendPasswordResetEmail,
  signInWithEmailAndPassword as _signInWithEmailAndPassword,
  createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
} from 'firebase/auth';

import { auth, db } from 'src/firebase/config';

/** **************************************
 * Sign in
 *************************************** */
export const signInWithPassword = async ({ email, password }: { email: string, password: string }) => {
  try {
    await _signInWithEmailAndPassword(auth, email, password);

    const user = auth.currentUser;

    // En mode développement, on ignore la vérification de l'email
    // if (!user?.emailVerified) {
    //   throw new Error('Email not verified!');
    // }

    // Vérifier que user existe avant d'accéder à uid
    if (!user) {
      throw new Error('User not found');
    }

    // Récupérer l'uid de l'utilisateur créé
    const { uid } = user;

    // Créer un document utilisateur
    const userRef = doc(db, 'users', uid);

    // Enregistrer les données utilisateur
    await updateDoc(userRef, {
      email,
      isVerified: true,  // On force isVerified à true pour le développement
      lastConnection: new Date(),
    });

  } catch (error) {
    console.error('Error during sign in with password:', error);
    throw error;
  }
};

export const signInWithGoogle = async () => {
  const provider = new _GoogleAuthProvider();
  await _signInWithPopup(auth, provider);
};

export const signInWithGithub = async () => {
  const provider = new _GithubAuthProvider();
  await _signInWithPopup(auth, provider);
};

export const signInWithTwitter = async () => {
  const provider = new _TwitterAuthProvider();
  await _signInWithPopup(auth, provider);
};

/** **************************************
 * Sign up
 *************************************** */
export const signUp = async ({ email, password, firstName, lastName }: { email: string, password: string, firstName: string, lastName: string }) => {
  try {
    const newUser = await _createUserWithEmailAndPassword(auth, email, password);

    /*
     * (1) Pour le développement, on désactive l'envoi de l'email de vérification
     * Remove : await _sendEmailVerification(newUser.user);
     */
    // await _sendEmailVerification(newUser.user);

    // Récupérer l'uid de l'utilisateur créé
    const {uid} = newUser.user;

    // Créer un document utilisateur
    const userRef = doc(db, 'users', uid);

    // Enregistrer les données utilisateur
    await setDoc(userRef, {
      email,
      displayName: `${firstName} ${lastName}`,
      role: 'user',
      status: 'pending',
      isVerified: true,  // On force isVerified à true pour le développement
      createdAt: new Date(),
    });

  } catch (error) {
    console.error('Error during sign up:', error);
    throw error;
  }
};

/** **************************************
 * Sign out
 *************************************** */
export const signOut = async () => {
  await _signOut(auth);
};

/** **************************************
 * Reset password
 *************************************** */
export const sendPasswordResetEmail = async ({ email }: { email: string }) => {
  await _sendPasswordResetEmail(auth, email);
};

/** **************************************
 * User Claims
 *************************************** */
export const refreshUserClaims = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.log("Aucun utilisateur connecté");
      return null;
    }
    
    // Forcer le rafraîchissement du token pour obtenir les dernières claims
    await user.getIdToken(true);
    
    // Récupérer le token ID qui contient les claims
    const idTokenResult = await user.getIdTokenResult();
    
    // Utiliser uniquement les claims du token Firebase
    console.log("Firebase claims:", idTokenResult.claims);
    return idTokenResult.claims;
  } catch (error) {
    console.error("Erreur lors de la récupération des claims:", error);
    throw error;
  }
};
