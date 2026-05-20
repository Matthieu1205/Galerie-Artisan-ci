# GALERIE-ARTISAN.CI — Site web officiel + Back-office

Site web React complet de **GALERIE-ARTISAN.CI** : plateforme multiservices basée à Grand Bassam (Côte d'Ivoire) couvrant l'immobilier, la rénovation, le déménagement, le garde-meuble et l'ameublement.

Le projet contient **deux applications dans un seul projet** : le site public destiné aux visiteurs et un back-office complet pour l'administration.

> *L'art de vivre chez soi. La vitrine du génie créatif Africain.*

---

## Stack technique

- **React 18** + **React Router 6**
- **Vite 5** (bundler ultra rapide)
- **CSS pur** avec variables (pas de framework) pour respecter strictement la charte graphique
- **Police unique** : Inter (Google Fonts)
- **Auth simulée** avec sessionStorage pour la démo du back-office

## Charte graphique respectée

| Couleur | Hex | Usage |
|---|---|---|
| Noir | `#0a0a0a` | Texte principal, contrastes, sidebar admin |
| Orange | `#ff6a00` | Accent, CTA, marque, KPIs |
| Blanc | `#ffffff` | Arrière-plans, cartes |
| Gris | `#525252 → #f5f5f5` | Texte secondaire, séparations |

Aucun autre coloris. Aucun emoji. Une seule famille typographique.

## Installation

```bash
cd galerie-artisan-site
npm install
npm run dev
```

Le site s'ouvre sur `http://localhost:5173`.

## Build de production

```bash
npm run build
npm run preview
```

---

## Site public

| Route | Page | Description |
|---|---|---|
| `/` | Accueil | Hero, services, stats, processus, réalisations, témoignages |
| `/immobilier` | Immobilier | Catalogue avec filtres, demande de visite |
| `/renovation` | Rénovation | Services, galerie avant/après, formules, devis |
| `/demenagement` | Déménagement | Services, calculateur de coût, packs, réservation |
| `/garde-meuble` | Garde-Meuble | Types, estimateur volume, sécurité, entrepôts |
| `/ameublement` | Ameublement | Boutique avec panier, canapé palette, location événementielle, Pack Ameublement en série |
| `/packs-promoteurs` | Packs Promoteurs | Pack Résidence Clé en Main (5 sous-packs), argumentaires, partenaire DAF STAR |
| `/contact` | Contact | Formulaire, carte, horaires, zones d'intervention |

## Contenu intégré depuis les flyers

Les 10 flyers fournis sont stockés dans `public/flyers/` et leur contenu est centralisé dans `src/data/flyers.js`. Voici la répartition :

| Flyer | Utilisé sur | Contenu extrait |
|---|---|---|
| `vitrine-services.jpeg` | Hero Accueil | Visuel principal de la marque |
| `presentation-grandbassam.jpeg` | Accueil — section Atelier | Localisation, métiers artisans, zones |
| `pack-residence-cle-en-main.jpeg` | Accueil + Packs Promoteurs | 5 sous-packs détaillés |
| `pack-ameublement-serie.jpeg` | Ameublement + Accueil | Contenu pack par pièce, options premium, cibles |
| `pack-decoration.jpeg` | Rénovation + Accueil | Services déco, avantages, slogan |
| `pack-demenagement.jpeg` | Déménagement + Accueil | Bannière offre signature |
| `location-meubles-palette.jpeg` | Ameublement + Accueil | Section location événementielle |
| `canape-palette-2places.jpeg` | Ameublement + Accueil | Produit phare canapé palette |
| `canape-palette-confort.jpeg` | Ameublement | Galerie canapé "Le confort au naturel" |
| `presentation-entreprise.jpeg` | Accueil (variante) | Présentation alternative |

## Back-office Administration

Accès via `/admin/login` — authentification simulée pour la démo.

### Comptes de démonstration

| Email | Mot de passe | Rôle |
|---|---|---|
| `admin@galerie-artisan.ci` | `admin123` | Super Admin |
| `editor@galerie-artisan.ci` | `editor123` | Éditeur |

### Modules du back-office

| Route | Module | Fonctionnalités |
|---|---|---|
| `/admin` | Tableau de bord | KPIs, graphiques, activité récente, devis à traiter |
| `/admin/biens` | Biens immobiliers | CRUD complet, statuts, statistiques vues/demandes |
| `/admin/produits` | Produits | Catalogue ameublement, stocks, ventes |
| `/admin/commandes` | Commandes | Suivi, filtres par statut, détails complet |
| `/admin/devis` | Devis | Gestion des demandes, priorités, statuts |
| `/admin/reservations` | Réservations | Visites, déménagements, garde-meuble, événementiel |
| `/admin/clients` | Clients | Base clients, profils, segments VIP |
| `/admin/utilisateurs` | Admins | Gestion des comptes back-office et rôles |
| `/admin/parametres` | Paramètres | Identité, paiements, réseaux sociaux, SEO, notifications |

### Fonctionnalités du back-office

- **Tableau de bord** avec KPIs en temps réel, graphique en barres des ventes 12 mois, répartition par service
- **DataTable** réutilisable avec tri, recherche, pagination
- **Modals** pour création / édition / suppression
- **Filtres tabulaires** par statut sur chaque module
- **Badges colorés** pour statuts (charte respectée)
- **Sidebar** rétractable sur mobile
- **Topbar** avec recherche globale, notifications, menu utilisateur
- **Auth simulée** : session sessionStorage, déconnexion, redirection
- **Protected routes** : accès admin uniquement après connexion

---

## Structure du projet

```
src/
├── components/              # Composants publics partagés
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Logo.jsx
│   ├── Icon.jsx             # 24 icônes SVG inline
│   ├── PageHero.jsx
│   ├── ScrollToTop.jsx
│   └── WhatsAppFloat.jsx
├── pages/                   # Pages publiques
│   ├── Accueil.jsx
│   ├── Immobilier.jsx
│   ├── Renovation.jsx
│   ├── Demenagement.jsx
│   ├── GardeMeuble.jsx
│   ├── Ameublement.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── admin/                   # Back-office
│   ├── AuthContext.jsx      # Provider d'auth
│   ├── ProtectedRoute.jsx   # Garde de route
│   ├── AdminLayout.jsx      # Sidebar + topbar
│   ├── mockData.js          # Données de démo
│   ├── components/
│   │   ├── DataTable.jsx    # Tableau générique
│   │   ├── Badge.jsx        # Badges de statut
│   │   └── Modal.jsx        # Modal réutilisable
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── AdminBiens.jsx
│   │   ├── AdminProduits.jsx
│   │   ├── AdminCommandes.jsx
│   │   ├── AdminDevis.jsx
│   │   ├── AdminReservations.jsx
│   │   ├── AdminClients.jsx
│   │   ├── AdminUtilisateurs.jsx
│   │   └── AdminParametres.jsx
│   └── styles/admin.css
├── styles/global.css        # Variables, classes utilitaires
├── App.jsx                  # Routeur (public + admin)
└── main.jsx                 # Point d'entrée
```

## Contact

- Adresse : Modeste, Nouveau goudron, cité 3CB — Grand Bassam, Côte d'Ivoire
- Tél : (+225) 0758 98 60 69 / (+225) 0544 05 07 07
- Web : www.galerie-artisan.ci

---

© GALERIE-ARTISAN.CI — Qualité · Harmonie · Rentabilité
