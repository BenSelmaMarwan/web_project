console.log("heyheyhey")
const express = require('express');
const app = express();
const path = require('path');

// Définissez le chemin vers le dossier public pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','HTML', 'home.html'));
});

// Port sur lequel l'application Express écoutera
const port = process.env.PORT || 3000;

// Démarrer le serveur Express
app.listen(port, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
});
