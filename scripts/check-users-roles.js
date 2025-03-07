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

// UIDs des utilisateurs à vérifier
const USER_UIDS = [
  'FkqlPUEqozaSGkisOTiIkWEj81y2', // super-admin
  'ELGMXsZz8ZacyKlQMgzrBlQCx0I2', // admin
  'OryRPVXG8BS0vTw1AehpWrBubH63'  // user
];

async function checkUserRole(uid) {
  try {
    console.log(`Vérification de l'utilisateur ${uid}...`);
    
    // Récupération des informations d'authentification
    const userAuth = await auth.getUser(uid);
    
    // Récupération des informations Firestore
    const userDoc = await db.collection('users').doc(uid).get();
    
    if (!userDoc.exists) {
      console.log(`L'utilisateur ${uid} n'existe pas dans Firestore.`);
      return;
    }

    const userData = userDoc.data();
    
    console.log(`=== Utilisateur: ${uid} ===`);
    console.log(`Email: ${userAuth.email}`);
    console.log(`Rôle dans Auth (custom claims): ${userAuth.customClaims?.role || 'Non défini'}`);
    console.log(`Rôle dans Firestore: ${userData.role || 'Non défini'}`);
    console.log('-----------------------------------');
    
  } catch (error) {
    console.error(`Erreur lors de la vérification de ${uid}:`, error);
  }
}

async function checkAllUsersRoles() {
  console.log('Début de la vérification des rôles utilisateurs...');
  
  for (const uid of USER_UIDS) {
    await checkUserRole(uid);
  }
  
  console.log('Vérification terminée !');
  process.exit(0);
}

checkAllUsersRoles(); 