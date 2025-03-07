import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { join } from 'path';
import { readdirSync, statSync } from 'fs';

// Fonction pour lister tous les fichiers TypeScript/TSX dans un répertoire de manière récursive
function listTsFiles(dir) {
  let results = [];
  const list = readdirSync(dir);
  
  list.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat && stat.isDirectory() && file !== 'node_modules' && file !== 'dist') {
      // Récursion pour les sous-répertoires
      results = results.concat(listTsFiles(filePath));
    } else if (
      stat && 
      stat.isFile() && 
      (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) &&
      !filePath.endsWith('.d.ts')
    ) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Fonction pour trier les imports par longueur dans un bloc d'imports
function sortImportsByLength(importBlock) {
  // Diviser le bloc en lignes
  const lines = importBlock.split('\n');
  
  // Regrouper les imports par préfixe (import from 'xxx')
  const importGroups = {};
  
  lines.forEach(line => {
    if (line.trim() === '') return;
    
    // Extraire le préfixe de l'import (par exemple, 'react', 'src/components', etc.)
    const match = line.match(/from ['"]([^'"]+)['"]/);
    if (!match) return;
    
    const prefix = match[1];
    const prefixParts = prefix.split('/');
    const mainPrefix = prefixParts.length > 1 ? `${prefixParts[0]}/${prefixParts[1]}` : prefixParts[0];
    
    if (!importGroups[mainPrefix]) {
      importGroups[mainPrefix] = [];
    }
    
    importGroups[mainPrefix].push(line);
  });
  
  // Pour chaque groupe, trier les imports par longueur (du plus court au plus long)
  Object.keys(importGroups).forEach(prefix => {
    importGroups[prefix].sort((a, b) => a.length - b.length);
  });
  
  // Reconstruire le bloc d'imports avec des lignes vides entre les groupes
  let result = '';
  const prefixes = Object.keys(importGroups);
  
  prefixes.forEach((prefix, index) => {
    result += importGroups[prefix].join('\n');
    
    // Ajouter une ligne vide entre les groupes
    if (index < prefixes.length - 1) {
      result += '\n\n';
    }
  });
  
  return result;
}

// Fonction pour traiter un fichier
function processFile(filePath) {
  try {
    console.log(`Processing ${filePath}...`);
    
    // Lire le contenu du fichier
    const content = readFileSync(filePath, 'utf8');
    
    // Trouver les blocs d'imports
    const importBlockRegex = /(import[\s\S]*?from[\s\S]*?['"][^'"]+['"];[\s\S]*?)(?=\n\n|$)/g;
    
    // Remplacer chaque bloc d'imports par sa version triée
    const newContent = content.replace(importBlockRegex, (match) => {
      return sortImportsByLength(match);
    });
    
    // Écrire le contenu modifié dans le fichier
    if (content !== newContent) {
      writeFileSync(filePath, newContent, 'utf8');
      console.log(`  Imports sorted in ${filePath}`);
    } else {
      console.log(`  No changes needed in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Exécuter d'abord ESLint pour organiser les imports par groupe
console.log('Running ESLint to organize imports by group...');
try {
  execSync('npm run lint:fix', { stdio: 'inherit' });
} catch (error) {
  console.error('Error running ESLint:', error.message);
}

// Trouver tous les fichiers TypeScript/TSX dans le répertoire src
console.log('\nSorting imports by length...');
const files = listTsFiles('./src');

// Traiter chaque fichier
files.forEach(processFile);

console.log('\nImport sorting complete!'); 