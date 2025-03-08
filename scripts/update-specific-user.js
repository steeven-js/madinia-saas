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

// UID de l'utilisateur à mettre à jour
const USER_UID = '8wgcrRB2XPOz37Ej57oRQSTVMMG2';
const ROLE = 'user';

async function updateUserRole() {
  try {
    console.log(`Mise à jour de l'utilisateur ${USER_UID} avec le rôle ${ROLE}...`);
    
    // Récupérer les informations de l'utilisateur
    const userAuth = await auth.getUser(USER_UID);
    console.log(`Utilisateur trouvé: ${userAuth.email}`);
    
    // Mise à jour dans Firestore
    await db.collection('users').doc(USER_UID).set({
      email: userAuth.email,
      displayName: userAuth.displayName || 'User Test',
      role: ROLE,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    console.log('Document Firestore mis à jour');

    // Mise à jour des custom claims dans Auth
    await auth.setCustomUserClaims(USER_UID, {
      role: ROLE
    });
    console.log('Custom claims mises à jour');

    // Récupération et affichage des informations mises à jour
    const updatedUserAuth = await auth.getUser(USER_UID);
    const userDoc = await db.collection('users').doc(USER_UID).get();

    console.log('\n=== Auth User Info ===');
    console.log('UID:', updatedUserAuth.uid);
    console.log('Email:', updatedUserAuth.email);
    console.log('Custom Claims:', updatedUserAuth.customClaims);

    console.log('\n=== Firestore User Info ===');
    console.log(userDoc.data());

    console.log('\nMise à jour effectuée avec succès !');
    process.exit(0);
  } catch (error) {
    console.error('Erreur lors de la mise à jour:', error);
    process.exit(1);
  }
}

updateUserRole(); 