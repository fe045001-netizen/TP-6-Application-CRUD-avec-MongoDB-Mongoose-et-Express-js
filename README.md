# CRUD Express MongoDB - Gestion de Produits

## Description

Ce projet est une application web complète développée avec **Node.js, Express, MongoDB et EJS**. Il permet de gérer des produits (CRUD : Create, Read, Update, Delete) avec une interface simple et professionnelle.

##  Fonctionnalités

* Ajouter un produit
* Afficher la liste des produits
* Voir les détails d’un produit
* Modifier un produit
* Supprimer un produit
* Recherche et filtres (prix, catégorie, stock)
* Pagination des produits
* Messages flash (succès / erreur)

##  Technologies utilisées

* Node.js
* Express.js
* MongoDB + Mongoose
* EJS (templating)
* Express-session
* Bootstrap (UI)
## Structure du projet

```
crud-express-mongodb/
│
├── controllers/
├── models/
├── routes/
├── services/
├── views/
│   ├── products/
│   ├── partials/
│   └── error.ejs
├── public/
├── db/
├── app.js
└── package.json
```

###  Configurer l’environnement

Créer un fichier `.env` :

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/produits
SESSION_SECRET=secret_key
```
## Demo 

<img width="1366" height="768" alt="Capture d’écran 2026-04-19 134108" src="https://github.com/user-attachments/assets/db9ff527-88da-422b-8222-679616c33392" />


https://github.com/user-attachments/assets/4da766ab-7668-4fe0-b1c6-e17abb3be33e

<img width="1366" height="768" alt="Capture d’écran 2026-04-19 134108" src="https://github.com/user-attachments/assets/db9ff527-88da-422b-8222-679616c33392" />

##  Accès

Application disponible sur :

```
http://localhost:3000
```

##  Routes principales

| Méthode | Route                | Description             |
| ------- | -------------------- | ----------------------- |
| GET     | /products            | Liste des produits      |
| GET     | /products/create     | Formulaire ajout        |
| POST    | /products/create     | Créer produit           |
| GET     | /products/:id        | Détails produit         |
| GET     | /products/edit/:id   | Formulaire modification |
| POST    | /products/:id/update | Modifier produit        |
| POST    | /products/:id/delete | Supprimer produit       |

---

##  Auteur

Projet réalisé dans le cadre d’un TP Node.js / MongoDB pour apprendre le CRUD complet avec Express.

##  Conclusion

Ce projet permet de comprendre la logique complète d’une application backend avec Express et MongoDB (architecture MVC).
