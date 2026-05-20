// Contenu extrait des 10 flyers fournis par le client
// Toutes les références aux flyers sont centralisées ici

export const FLYERS = {
  packAmeublementSerie: '/flyers/pack-ameublement-serie.jpeg',
  packDecoration: '/flyers/pack-decoration.jpeg',
  packDemenagement: '/flyers/pack-demenagement.jpeg',
  locationMeublesPalette: '/flyers/location-meubles-palette.jpeg',
  presentationEntreprise: '/flyers/presentation-entreprise.jpeg',
  presentationGrandBassam: '/flyers/presentation-grandbassam.jpeg',
  vitrineServices: '/flyers/vitrine-services.jpeg',
  canapePaletteConfort: '/flyers/canape-palette-confort.jpeg',
  canapePalette2Places: '/flyers/canape-palette-2places.jpeg',
  packResidenceCleEnMain: '/flyers/pack-residence-cle-en-main.jpeg'
}

// Pack Résidence Clé en Main — 5 sous-packs (flyer pack-residence-cle-en-main)
export const PACKS_RESIDENCE = [
  {
    num: '01',
    titre: 'Pack Appartement Témoin',
    objectif: 'Proposer des produits et services de qualité',
    points: [
      'Aménagement complet d\'un appartement modèle',
      'Mobilier moderne et attractif',
      'Décoration haut standing',
      'Mise en scène pour visites clients'
    ]
  },
  {
    num: '02',
    titre: 'Pack Ameublement en Série',
    objectif: 'Réduire les coûts et uniformiser la qualité',
    points: [
      'Fourniture de mobilier pour plusieurs appartements',
      'Standardisation des équipements',
      'Tarifs dégressifs selon volume'
    ]
  },
  {
    num: '03',
    titre: 'Pack Décoration & Finitions',
    objectif: 'Valoriser le standing du projet',
    points: [
      'Rideaux, luminaires, accessoires',
      'Peinture et habillage mural',
      'Optimisation esthétique des espaces'
    ]
  },
  {
    num: '04',
    titre: 'Pack Rénovation & Aménagement',
    objectif: 'Livrer un produit irréprochable',
    points: [
      'Réhabilitation avant livraison',
      'Correction des défauts',
      'Modernisation des espaces'
    ]
  },
  {
    num: '05',
    titre: 'Pack Installation & Déménagement',
    objectif: 'Offrir une expérience client premium',
    points: [
      'Livraison et installation complète',
      'Mise en service des équipements',
      'Assistance pour les acquéreurs'
    ]
  }
]

// Pack Ameublement en Série — contenu (flyer pack-ameublement-serie)
export const PACK_SERIE = {
  argumentaires: [
    { titre: 'Tarifs dégressifs', sub: 'Volume important' },
    { titre: 'Gain de temps', sub: 'Installation rapide' },
    { titre: 'Design professionnel', sub: 'Uniforme' },
    { titre: 'Valorisation immédiate', sub: 'Du bien' },
    { titre: 'Service clé en main', sub: 'Livraison + Installation' }
  ],
  contenu: [
    {
      piece: 'Salon',
      items: ['Canapé moderne', 'Table basse', 'Meuble TV', 'Décoration (tableaux, tapis, luminaires)']
    },
    {
      piece: 'Chambre',
      items: ['Lit + matelas', 'Table de chevet', 'Armoire ou dressing', 'Rideaux & décoration']
    },
    {
      piece: 'Cuisine',
      items: ['Équipements de base', 'Rangements optimisés']
    },
    {
      piece: 'Salle à manger',
      items: ['Table', 'Chaises', 'Personnalisation selon standing']
    }
  ],
  optionsPremium: [
    'Électroménager complet',
    'Décoration haut de gamme',
    'Personnalisation selon standing'
  ],
  cibles: [
    'Promoteurs immobiliers',
    'Résidences meublées',
    'Hôtels & Apart\'hôtels',
    'Investisseurs locatifs'
  ]
}

// Pack Décoration — formules (flyer pack-decoration)
export const PACK_DECORATION = {
  slogan: 'Sublimez vos espaces, vivez l\'exception',
  services: [
    'Décoration intérieure',
    'Décoration extérieure',
    'Conception & design',
    'Fourniture & installation'
  ],
  avantages: [
    'Design unique et personnalisé',
    'Valorisation de vos espaces',
    'Artisans locaux qualifiés',
    'Respect des délais et du budget',
    'Accompagnement de A à Z'
  ],
  pourQui: [
    'Particuliers',
    'Entreprises',
    'Hôtels & restaurants',
    'Bureaux & commerces',
    'Événementiel'
  ]
}

// Atelier d'artisans — métiers (flyers presentation-entreprise et presentation-grandbassam)
export const ATELIER_METIERS = [
  'Menuiserie',
  'Ébénisterie',
  'Tapisserie',
  'Ferronnerie',
  'Vernissage',
  'Peinture',
  'Génie Civil'
]

// Zones d'intervention (flyer presentation-grandbassam)
export const ZONES = [
  'Adjamé', 'Plateau', 'Cocody', 'Yopougon',
  'Treichville', 'Marcory', 'Abobo', 'Grand Bassam'
]

// Promesse de la marque (flyer vitrine-services)
export const PROMESSE = [
  'Professionnels qualifiés',
  'Solutions sur mesure',
  'Qualité & fiabilité',
  'Intervention rapide',
  'Accompagnement de A à Z'
]

// Événements (flyer location-meubles-palette)
export const EVENEMENTS = [
  'Mariages',
  'Anniversaires',
  'Événements professionnels',
  'Réceptions privées'
]

// Slogans extraits
export const SLOGANS = {
  principal: 'L\'art de vivre chez soi',
  vitrine: 'La vitrine du génie créatif Africain',
  qualite: 'Qualité · Harmonie · Rentabilité',
  signature: 'Votre satisfaction, notre signature',
  donnezVie: 'Donnez vie à vos projets !',
  experts: 'Transformez vos espaces avec des experts de confiance',
  demenagement: 'On transporte, on installe, vous profitez',
  ameublement: 'Le confort au naturel',
  decoration: 'Sublimez vos espaces, vivez l\'exception'
}

// Partenaire (flyer pack-residence-cle-en-main)
export const PARTENAIRE = {
  nom: 'DAF STAR Global Forwarding',
  services: 'Import · Export · Déménagement'
}
