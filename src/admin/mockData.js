// Données mockées pour le back-office. Servent de démo le temps de brancher l'API.

export const STATS = {
  ventesTotal: 245600000,
  ventesEvolution: 12.4,
  commandesNouvelles: 38,
  commandesEvolution: 8.1,
  biensActifs: 47,
  biensEvolution: -2.3,
  clientsTotal: 1284,
  clientsEvolution: 24.7
}

export const CHART_VENTES = [
  { mois: 'Jan', value: 18 },
  { mois: 'Fév', value: 22 },
  { mois: 'Mar', value: 28 },
  { mois: 'Avr', value: 31 },
  { mois: 'Mai', value: 35 },
  { mois: 'Juin', value: 30 },
  { mois: 'Juil', value: 38 },
  { mois: 'Août', value: 42 },
  { mois: 'Sep', value: 48 },
  { mois: 'Oct', value: 52 },
  { mois: 'Nov', value: 55 },
  { mois: 'Déc', value: 62 }
]

export const REPARTITION_SERVICES = [
  { service: 'Immobilier', value: 35 },
  { service: 'Ameublement', value: 28 },
  { service: 'Rénovation', value: 18 },
  { service: 'Déménagement', value: 12 },
  { service: 'Garde-Meuble', value: 7 }
]

export const ACTIVITES = [
  { id: 1, type: 'commande', label: 'Nouvelle commande #4218', user: 'Aïcha K.', time: 'il y a 12 min', amount: 285000 },
  { id: 2, type: 'devis', label: 'Demande de devis Rénovation', user: 'Mr Konan', time: 'il y a 28 min' },
  { id: 3, type: 'visite', label: 'Demande de visite — Villa Cocody', user: 'Mme Bamba', time: 'il y a 1h' },
  { id: 4, type: 'client', label: 'Nouveau client inscrit', user: 'Soro Yacouba', time: 'il y a 2h' },
  { id: 5, type: 'reservation', label: 'Réservation déménagement', user: 'Société SCI Plus', time: 'il y a 3h', amount: 450000 },
  { id: 6, type: 'commande', label: 'Commande #4217 livrée', user: 'Famille Diomandé', time: 'il y a 4h' },
  { id: 7, type: 'devis', label: 'Devis Garde-Meuble accepté', user: 'Mr N\'Guessan', time: 'il y a 5h' }
]

export const BIENS = [
  { id: 1, titre: 'Villa moderne 5 pièces', type: 'Vente', categorie: 'Maison', prix: 85000000, ville: 'Abidjan', quartier: 'Cocody', surface: 280, statut: 'Disponible', chambres: 4, vues: 234, demandes: 12 },
  { id: 2, titre: 'Appartement haut standing', type: 'Location', categorie: 'Appartement', prix: 450000, ville: 'Abidjan', quartier: 'Plateau', surface: 110, statut: 'Disponible', chambres: 3, vues: 189, demandes: 8 },
  { id: 3, titre: 'Terrain résidentiel 600 m²', type: 'Vente', categorie: 'Terrain', prix: 18000000, ville: 'Bingerville', quartier: 'Cité ADO', surface: 600, statut: 'Disponible', chambres: 0, vues: 412, demandes: 25 },
  { id: 4, titre: 'Duplex avec piscine', type: 'Vente', categorie: 'Maison', prix: 145000000, ville: 'Abidjan', quartier: 'Riviera', surface: 350, statut: 'Réservé', chambres: 5, vues: 567, demandes: 31 },
  { id: 5, titre: 'Studio meublé', type: 'Location', categorie: 'Appartement', prix: 180000, ville: 'Abidjan', quartier: 'Marcory', surface: 38, statut: 'Disponible', chambres: 1, vues: 145, demandes: 6 },
  { id: 6, titre: 'Maison familiale rénovée', type: 'Vente', categorie: 'Maison', prix: 62000000, ville: 'Grand Bassam', quartier: 'Modeste', surface: 220, statut: 'Disponible', chambres: 4, vues: 298, demandes: 14 },
  { id: 7, titre: 'Terrain commercial 1000 m²', type: 'Vente', categorie: 'Terrain', prix: 45000000, ville: 'Abidjan', quartier: 'Yopougon', surface: 1000, statut: 'Disponible', chambres: 0, vues: 320, demandes: 18 },
  { id: 8, titre: 'Appartement 3 pièces neuf', type: 'Location', categorie: 'Appartement', prix: 350000, ville: 'Abidjan', quartier: 'Cocody', surface: 90, statut: 'Vendu', chambres: 2, vues: 256, demandes: 22 }
]

export const PRODUITS = [
  { id: 1, nom: 'Canapé palette 2 places', cat: 'Salon', prix: 185000, stock: 12, type: 'Vente', ventes: 24 },
  { id: 2, nom: 'Table basse design', cat: 'Salon', prix: 95000, stock: 8, type: 'Vente', ventes: 18 },
  { id: 3, nom: 'Lit double avec rangement', cat: 'Chambre', prix: 320000, stock: 5, type: 'Vente', ventes: 11 },
  { id: 4, nom: 'Armoire dressing 3 portes', cat: 'Chambre', prix: 280000, stock: 0, type: 'Sur mesure', ventes: 7 },
  { id: 5, nom: 'Bureau exécutif', cat: 'Bureau', prix: 245000, stock: 4, type: 'Vente', ventes: 9 },
  { id: 6, nom: 'Chaise ergonomique', cat: 'Bureau', prix: 89000, stock: 20, type: 'Vente', ventes: 42 },
  { id: 7, nom: 'Îlot de cuisine', cat: 'Cuisine', prix: 450000, stock: 0, type: 'Sur mesure', ventes: 3 },
  { id: 8, nom: 'Tabourets de bar (x2)', cat: 'Cuisine', prix: 75000, stock: 15, type: 'Vente', ventes: 28 },
  { id: 9, nom: 'Salon de jardin palette', cat: 'Extérieur', prix: 380000, stock: 6, type: 'Location/Vente', ventes: 14 },
  { id: 10, nom: 'Table extérieure 6 places', cat: 'Extérieur', prix: 220000, stock: 7, type: 'Vente', ventes: 11 }
]

export const COMMANDES = [
  { id: '4218', client: 'Aïcha K.', email: 'aicha.k@email.com', tel: '0707070707', date: '2026-05-18', montant: 285000, statut: 'En cours', paiement: 'Orange Money', articles: 2 },
  { id: '4217', client: 'Famille Diomandé', email: 'diomande@email.com', tel: '0505050505', date: '2026-05-17', montant: 540000, statut: 'Livrée', paiement: 'Wave', articles: 4 },
  { id: '4216', client: 'Soro Yacouba', email: 'sy@email.com', tel: '0101010101', date: '2026-05-17', montant: 95000, statut: 'Livrée', paiement: 'À la livraison', articles: 1 },
  { id: '4215', client: 'Mme Bamba', email: 'bamba@email.com', tel: '0606060606', date: '2026-05-16', montant: 720000, statut: 'En préparation', paiement: 'MTN Money', articles: 5 },
  { id: '4214', client: 'Mr N\'Guessan', email: 'nguessan@email.com', tel: '0808080808', date: '2026-05-16', montant: 185000, statut: 'Livrée', paiement: 'Orange Money', articles: 1 },
  { id: '4213', client: 'Société SCI Plus', email: 'contact@sciplus.ci', tel: '2722222222', date: '2026-05-15', montant: 1850000, statut: 'En cours', paiement: 'Virement', articles: 8 },
  { id: '4212', client: 'Konan Junior', email: 'konan.j@email.com', tel: '0909090909', date: '2026-05-14', montant: 245000, statut: 'Annulée', paiement: 'Wave', articles: 1 },
  { id: '4211', client: 'Mme Touré', email: 'toure@email.com', tel: '0202020202', date: '2026-05-14', montant: 380000, statut: 'Livrée', paiement: 'Orange Money', articles: 3 }
]

export const DEVIS = [
  { id: 'D-128', client: 'Mr Konan', service: 'Rénovation complète', date: '2026-05-18', montant: 4500000, statut: 'En attente', priority: 'Haute' },
  { id: 'D-127', client: 'Mme Diallo', service: 'Construction maison', date: '2026-05-17', montant: 28000000, statut: 'Envoyé', priority: 'Haute' },
  { id: 'D-126', client: 'Restaurant L\'Atlantique', service: 'Aménagement & décoration', date: '2026-05-16', montant: 1850000, statut: 'Accepté', priority: 'Moyenne' },
  { id: 'D-125', client: 'Famille Soro', service: 'Déménagement Pack Premium', date: '2026-05-15', montant: 685000, statut: 'Envoyé', priority: 'Basse' },
  { id: 'D-124', client: 'Mr N\'Guessan', service: 'Garde-meuble 20m³ - 12 mois', date: '2026-05-14', montant: 4320000, statut: 'Accepté', priority: 'Moyenne' },
  { id: 'D-123', client: 'Société DAFSTAR', service: 'Pack Ameublement série (3 logements)', date: '2026-05-13', montant: 12500000, statut: 'En attente', priority: 'Haute' },
  { id: 'D-122', client: 'Mme Yao', service: 'Peinture intérieure', date: '2026-05-12', montant: 350000, statut: 'Refusé', priority: 'Basse' }
]

export const RESERVATIONS = [
  { id: 'R-89', type: 'Visite immobilier', client: 'Mme Bamba', bien: 'Villa Cocody', date: '2026-05-22', statut: 'Confirmée' },
  { id: 'R-88', type: 'Déménagement', client: 'Famille Soro', bien: 'Pack Premium', date: '2026-05-25', statut: 'Confirmée' },
  { id: 'R-87', type: 'Garde-meuble', client: 'Mr N\'Guessan', bien: 'Box 20m³', date: '2026-05-20', statut: 'En attente' },
  { id: 'R-86', type: 'Visite immobilier', client: 'Mr Kouadio', bien: 'Terrain Yopougon', date: '2026-05-19', statut: 'Confirmée' },
  { id: 'R-85', type: 'Location événementiel', client: 'Mariage Aka-Bamba', bien: 'Salon palette x4', date: '2026-06-01', statut: 'Confirmée' },
  { id: 'R-84', type: 'Visite immobilier', client: 'Mme Coulibaly', bien: 'Appartement Plateau', date: '2026-05-18', statut: 'Terminée' },
  { id: 'R-83', type: 'Déménagement', client: 'Société Imex CI', bien: 'Pack Économique', date: '2026-05-17', statut: 'Terminée' }
]

export const CLIENTS = [
  { id: 1, nom: 'Aïcha Koné', email: 'aicha.k@email.com', tel: '0707070707', ville: 'Abidjan', commandes: 4, total: 985000, dateInscription: '2024-08-12', statut: 'Actif' },
  { id: 2, nom: 'Famille Diomandé', email: 'diomande@email.com', tel: '0505050505', ville: 'Cocody', commandes: 7, total: 2450000, dateInscription: '2024-03-22', statut: 'VIP' },
  { id: 3, nom: 'Soro Yacouba', email: 'sy@email.com', tel: '0101010101', ville: 'Abidjan', commandes: 2, total: 185000, dateInscription: '2025-01-15', statut: 'Actif' },
  { id: 4, nom: 'Marie Bamba', email: 'bamba@email.com', tel: '0606060606', ville: 'Grand Bassam', commandes: 5, total: 1820000, dateInscription: '2024-11-08', statut: 'Actif' },
  { id: 5, nom: 'Joël N\'Guessan', email: 'nguessan@email.com', tel: '0808080808', ville: 'Yopougon', commandes: 3, total: 745000, dateInscription: '2025-02-28', statut: 'Actif' },
  { id: 6, nom: 'Société SCI Plus', email: 'contact@sciplus.ci', tel: '2722222222', ville: 'Plateau', commandes: 12, total: 8540000, dateInscription: '2023-06-10', statut: 'VIP' },
  { id: 7, nom: 'Konan Junior', email: 'konan.j@email.com', tel: '0909090909', ville: 'Marcory', commandes: 1, total: 245000, dateInscription: '2025-04-02', statut: 'Inactif' },
  { id: 8, nom: 'Fatou Touré', email: 'toure@email.com', tel: '0202020202', ville: 'Abidjan', commandes: 6, total: 1380000, dateInscription: '2024-09-19', statut: 'Actif' }
]

export const ADMINS = [
  { id: 1, nom: 'Mathieu Adou', email: 'admin@galerie-artisan.ci', role: 'Super Admin', statut: 'Actif', dernierAcces: '2026-05-19 09:42' },
  { id: 2, nom: 'Édouard Koffi', email: 'editor@galerie-artisan.ci', role: 'Éditeur', statut: 'Actif', dernierAcces: '2026-05-18 17:12' },
  { id: 3, nom: 'Aïcha Tagro', email: 'aicha.t@galerie-artisan.ci', role: 'Commercial', statut: 'Actif', dernierAcces: '2026-05-19 08:31' },
  { id: 4, nom: 'Yves Sangaré', email: 'yves.s@galerie-artisan.ci', role: 'Logistique', statut: 'Inactif', dernierAcces: '2026-04-22 11:08' }
]

export const formatFcfa = n => new Intl.NumberFormat('fr-FR').format(n) + ' FCFA'
export const formatDate = d => new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })
