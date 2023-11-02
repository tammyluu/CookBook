# CookBook
Project Fullstack ReactJS- NodeJS-Expresss
**Objectif **: 
    Modéliser l'application
    Créer une API REST permettant la gestion des recettes de cuisine avec des opérations CRUD pour les recettes et les ingrédients associés
    Création une application React.js qui permet de consulter, créer et mettre à jour des recettes
**Modélisation**
  Créer un diagramme de classe 
  Créer un diagramme de cas d'utilisations 
  Créer une maquette de l'application
  
**Réalisation de l'API**
  Endpoints pour les Recettes :
    GET /recipes : Récupère la liste de toutes les recettes 
    GET /recipes/:id : Récupère une recette spécifique 
    POST /recipes : Crée une nouvelle recette
    PUT /recipes/:id : Met à jour une recette existante 
    DELETE /recipes/:id : Supprime une recette 

  Endpoints pour les Ingrédients : 
    POST /ingredients : Crée un nouvel ingrédient
    GET /ingredients : Récupère la liste de tous les ingrédients 
    GET /ingredients/:id : Récupère un ingrédient spécifique 
    PUT /ingredients/:id : Met à jour un ingrédient existant
    DELETE /ingredients/:id : Supprime un ingrédient

**Spécificités :**
Créer un middleware d'authentification pour la création/modification des ressources

**Réalisation du front-end** 
  Créer une page qui permet de consulter les différentes recettes 
  Créer une page de détail d'une recette 
  Formulaire de création d'une recette
  Page de gestion des recettes (modification, suppression)
  Page d'authentification.
   link UML :
   class diagram :https://app.diagrams.net/#Htammyluu%2FCookBook%2Fmain%2FUML%2FClass%20Diagram.drawio
