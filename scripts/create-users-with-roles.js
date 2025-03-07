import admin from 'firebase-admin';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Chargement du fichier de configuration
const serviceAccountPath = join(__dirname, '..', 'madinia-dashboard-firebase-adminsdk-fbsvc-0bbf6e78a4.json');
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

// Initialisation de Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const auth = admin.auth();

// Utilisateurs à créer avec leurs rôles
const USERS_TO_CREATE = [
  { email: 'super-admin@example.com', password: 'Password123!', role: 'super-admin', displayName: 'Super Admin' },
  { email: 'admin@example.com', password: 'Password123!', role: 'admin', displayName: 'Admin' },
  { email: 'user@example.com', password: 'Password123!', role: 'user', displayName: 'User' }
];

async function createUserWithRole(userData) {
  try {
    console.log(`Création/mise à jour de l'utilisateur ${userData.email} avec le rôle ${userData.role}...`);
    
    // Vérifier si l'utilisateur existe déjà
    let userRecord;
    try {
      userRecord = await auth.getUserByEmail(userData.email);
      console.log(`L'utilisateur ${userData.email} existe déjà avec l'UID: ${userRecord.uid}`);
    } catch (error) {
      // Créer l'utilisateur s'il n'existe pas
      userRecord = await auth.createUser({
        email: userData.email,
        password: userData.password,
        displayName: userData.displayName,
        emailVerified: true
      });
      console.log(`Nouvel utilisateur créé: ${userData.email} avec l'UID: ${userRecord.uid}`);
    }
    
    // Mettre à jour les custom claims
    await auth.setCustomUserClaims(userRecord.uid, {
      role: userData.role
    });
    
    // Créer ou mettre à jour le document dans Firestore
    await db.collection('users').doc(userRecord.uid).set({
      email: userData.email,
      displayName: userData.displayName,
      role: userData.role,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    
    console.log(`Utilisateur ${userData.email} (${userRecord.uid}) mis à jour avec le rôle ${userData.role}`);
    return userRecord.uid;
  } catch (error) {
    console.error(`Erreur lors de la création/mise à jour de ${userData.email}:`, error);
    return null;
  }
}

async function createAllUsers() {
  console.log('Début de la création/mise à jour des utilisateurs...');
  
  const createdUIDs = [];
  
  for (const userData of USERS_TO_CREATE) {
    const uid = await createUserWithRole(userData);
    if (uid) createdUIDs.push({ email: userData.email, uid, role: userData.role });
    console.log('-----------------------------------');
  }
  
  console.log('\nRécapitulatif des utilisateurs:');
  createdUIDs.forEach(user => {
    console.log(`${user.email} (${user.uid}) - Rôle: ${user.role}`);
  });
  
  console.log('\nToutes les opérations sont terminées !');
  process.exit(0);
}

createAllUsers(); 