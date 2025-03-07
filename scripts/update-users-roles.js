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

// UIDs des utilisateurs à mettre à jour
const USERS = [
  { uid: 'FkqlPUEqozaSGkisOTiIkWEj81y2', role: 'super-admin' },
  { uid: 'ELGMXsZz8ZacyKlQMgzrBlQCx0I2', role: 'admin' },
  { uid: 'OryRPVXG8BS0vTw1AehpWrBubH63', role: 'user' }
];

async function updateUserRole(uid, role) {
  try {
    console.log(`Mise à jour de l'utilisateur ${uid} avec le rôle ${role}...`);
    
    // Mise à jour dans Firestore
    await db.collection('users').doc(uid).update({
      role: role,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });

    // Mise à jour des custom claims dans Auth
    await auth.setCustomUserClaims(uid, {
      role: role
    });

    // Récupération et affichage des informations
    const userAuth = await auth.getUser(uid);
    const userDoc = await db.collection('users').doc(uid).get();

    console.log(`=== Auth User Info (${uid}) ===`);
    console.log(userAuth.customClaims);

    console.log(`\n=== Firestore User Info (${uid}) ===`);
    console.log(userDoc.data());

    console.log(`\nMise à jour de ${uid} effectuée avec succès !`);
    return true;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de ${uid}:`, error);
    return false;
  }
}

async function updateAllUsersRoles() {
  console.log('Début de la mise à jour des rôles utilisateurs...');
  
  for (const user of USERS) {
    await updateUserRole(user.uid, user.role);
    console.log('-----------------------------------');
  }
  
  console.log('Toutes les mises à jour sont terminées !');
  process.exit(0);
}

updateAllUsersRoles(); 