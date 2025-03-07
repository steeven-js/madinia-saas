import { execSync } from 'child_process';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

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

// Fonction pour formater un fichier
function formatFile(filePath) {
  try {
    console.log(`Formatting imports in ${filePath}...`);
    execSync(`npx eslint "${filePath}" --fix`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error formatting ${filePath}:`, error.message);
  }
}

// Fonction pour grouper les fichiers par dossier
function groupFilesByDirectory(files) {
  const groups = {};
  
  files.forEach(file => {
    // Extraire le chemin du dossier (par exemple, src/routes)
    const dirPath = file.split('/').slice(0, -1).join('/');
    
    if (!groups[dirPath]) {
      groups[dirPath] = [];
    }
    
    groups[dirPath].push(file);
  });
  
  return groups;
}

// Trouver tous les fichiers TypeScript/TSX dans le répertoire src
const files = listTsFiles('./src');

// Grouper les fichiers par dossier
const fileGroups = groupFilesByDirectory(files);

// Formater les fichiers par groupe de dossier
Object.entries(fileGroups).forEach(([dirPath, dirFiles]) => {
  console.log(`\nFormatting files in ${dirPath}:`);
  dirFiles.forEach(formatFile);
});

console.log('\nImport formatting complete!'); 