// Données centralisées du portfolio de Théophile — Infographiste.
// Modifier ce fichier suffit à mettre à jour tout le site.

import carteRoyal from '../assets/portfolio/carte-royal-service.jpeg'
import logoRoyal from '../assets/portfolio/logo-royal-service.jpeg'
import flyerRoyal from '../assets/portfolio/flyer-royal-service.jpeg'
import prestationFroid from '../assets/portfolio/prestation-froid.jpeg'
import memorialFleurs from '../assets/portfolio/memorial-fleurs.jpeg'
import fairePartAnnonces from '../assets/portfolio/faire-part-annonces.jpeg'
import fairePartProgramme from '../assets/portfolio/faire-part-programme.jpeg'
import memorialPortrait from '../assets/portfolio/memorial-portrait.jpeg'
import tablierChef from '../assets/portfolio/tablier-chef.jpeg'
import tablierFastfood from '../assets/portfolio/tablier-fastfood.jpeg'
import tablierFoodtray from '../assets/portfolio/tablier-foodtray.jpeg'

export type Category =
  | 'Logo & Identité'
  | 'Carte de visite'
  | 'Flyer & Affiche'
  | 'Faire-part & Mémorial'
  | 'Personnalisation'

export interface Project {
  id: string
  title: string
  client: string
  category: Category
  image: string
}

export interface Service {
  id: string
  /** Nom d'un icône iconsax-react (ex: "Brush2"). */
  icon: string
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export const profile = {
  name: 'Théophile',
  role: 'Infographiste',
  tagline: 'Je donne vie à vos idées par la conception graphique.',
  location: 'Lomé, Togo',
  email: 'zibotheophile350@gmail.com',
  phone: '+228 00 00 00 00',
  bio: [
    "Né à Lomé, j'ai obtenu mon Bac II au terme de mon parcours scolaire. Passionné par le graphisme, j'ai suivi une formation de deux ans dans une entreprise spécialisée dans la conception de maquettes et les travaux d'impression — une base solide qui guide aujourd'hui chacune de mes créations.",
    "Avec cinq bonnes années d'expérience dans le domaine, j'accompagne entreprises et particuliers : logos, affiches publicitaires, cartes de visite, faire-part et personnalisation textile.",
    "Mon ambition : développer le design au Togo, créer des clubs de design et organiser des conférences et compétitions pour faire grandir toute une communauté de créatifs.",
  ],
  socials: [
    { icon: 'Whatsapp', label: 'WhatsApp', href: 'https://wa.me/228' },
    { icon: 'Instagram', label: 'Instagram', href: '#' },
    { icon: 'Facebook', label: 'Facebook', href: '#' },
    { icon: 'Sms', label: 'Email', href: 'mailto:zibotheophile350@gmail.com' },
  ],
}

export const stats: Stat[] = [
  { value: '5+', label: "Années d'expérience" },
  { value: '50+', label: 'Projets livrés' },
  { value: '100%', label: 'Clients satisfaits' },
]

export const services: Service[] = [
  {
    id: 'logo',
    icon: 'Designtools',
    title: 'Logo & Identité visuelle',
    description:
      "Des logos et chartes graphiques qui donnent à votre marque une identité forte et mémorable.",
  },
  {
    id: 'print',
    icon: 'Printer',
    title: 'Flyers & Affiches',
    description:
      "Affiches publicitaires, flyers et brochures pensés pour capter l'attention et faire passer le message.",
  },
  {
    id: 'card',
    icon: 'Card',
    title: 'Cartes de visite',
    description:
      'Des cartes de visite élégantes qui laissent une impression professionnelle durable.',
  },
  {
    id: 'memorial',
    icon: 'Heart',
    title: 'Faire-part & Mémorial',
    description:
      'Faire-part, programmes et cartes mémorial réalisés avec soin, respect et sensibilité.',
  },
  {
    id: 'textile',
    icon: 'Brush2',
    title: 'Personnalisation textile',
    description:
      'Tabliers, t-shirts et supports textiles personnalisés avec vos visuels et votre marque.',
  },
  {
    id: 'web',
    icon: 'Monitor',
    title: 'Web & Réseaux sociaux',
    description:
      'Visuels pour sites web et réseaux sociaux, cohérents avec votre univers de marque.',
  },
]

// Catalogue complet des supports réalisables (affiché en étiquettes).
export const capabilities: string[] = [
  'Logos',
  'Affiches',
  'Flyers',
  'Dépliants',
  'Brochures',
  'Catalogues',
  'Cartes de visite',
  'Faire-part',
  'Invitations',
  'Menus de restaurant',
  'Calendriers',
  'Agendas',
  'Carnets',
  'Livres',
  'Magazines',
  'Journaux',
  'Couvertures de livres',
  'Étiquettes',
  'Emballages produits',
  'Autocollants (stickers)',
  'Badges',
  'Roll-up',
  'Kakemonos',
  'Banderoles',
  'Bâches publicitaires',
  'Panneaux publicitaires',
  'Enseignes',
  'Plaques professionnelles',
  'Signalétiques',
  'Habillage de vitrines',
  'Habillage de véhicules',
  'T-shirts personnalisés',
  'Polos personnalisés',
  'Casquettes personnalisées',
  'Tabliers personnalisés',
  'Gilets personnalisés',
  'Mugs personnalisés',
  'Stylos personnalisés',
  'Porte-clés personnalisés',
  'Sacs personnalisés',
  'Trophées',
  'Certificats',
  'Diplômes',
  'Cartes de fidélité',
  'Cartes de membre',
  'Cartes de vœux',
  'Tickets',
  "Billets d'événements",
  'Chemises à rabats',
  "Pochettes d'entreprise",
  'Tampons',
  'Cachets',
  'Bannières web',
  'Publications réseaux sociaux',
  'Visuels publicitaires numériques',
  'Maquettes publicitaires',
  'Présentations professionnelles',
  'Interfaces de sites web',
  "Interfaces d'applications mobiles",
  'CV professionnels',
  'Portfolios professionnels',
  'Menus digitaux',
  'QR codes personnalisés',
  'Fonds de scène (backdrops)',
  'Photocalls événementiels',
  'Totems publicitaires',
  'Oriflammes',
  'Packaging cosmétique',
  'Packaging alimentaire',
  'Packaging pharmaceutique',
  'Packaging textile',
  'Boîtes cadeaux',
  'Papiers à en-tête',
  'Enveloppes personnalisées',
  'Blocs-notes personnalisés',
  'Ordonnanciers',
  'Bracelets événementiels',
  'Tickets de tombola',
  'Coupons promotionnels',
  'Cartes postales',
  'Marques-pages',
  'CD/DVD et pochettes',
  "Habillage de stands d'exposition",
  'Décoration murale imprimée',
  'Stickers muraux',
  'Fresques imprimées',
  'Bâches de chantier',
  'Numéros de portes & plaques directionnelles',
]

export const categories: ('Tous' | Category)[] = [
  'Tous',
  'Logo & Identité',
  'Carte de visite',
  'Flyer & Affiche',
  'Faire-part & Mémorial',
  'Personnalisation',
]

export const projects: Project[] = [
  {
    id: 'logo-royal',
    title: 'Logo Royal Service',
    client: 'Royal Service',
    category: 'Logo & Identité',
    image: logoRoyal,
  },
  {
    id: 'carte-royal',
    title: 'Carte de visite',
    client: 'Royal Service',
    category: 'Carte de visite',
    image: carteRoyal,
  },
  {
    id: 'flyer-royal',
    title: 'Flyer publicitaire',
    client: 'Royal Service',
    category: 'Flyer & Affiche',
    image: flyerRoyal,
  },
  {
    id: 'prestation-froid',
    title: 'Affiche prestations',
    client: 'Royal Service',
    category: 'Flyer & Affiche',
    image: prestationFroid,
  },
  {
    id: 'memorial-portrait',
    title: 'Carte mémorial',
    client: 'In memoriam',
    category: 'Faire-part & Mémorial',
    image: memorialPortrait,
  },
  {
    id: 'memorial-fleurs',
    title: 'Mémorial floral',
    client: 'In memoriam',
    category: 'Faire-part & Mémorial',
    image: memorialFleurs,
  },
  {
    id: 'faire-part-annonces',
    title: 'Annonces & remerciements',
    client: 'Faire-part',
    category: 'Faire-part & Mémorial',
    image: fairePartAnnonces,
  },
  {
    id: 'faire-part-programme',
    title: 'Programme des obsèques',
    client: 'Faire-part',
    category: 'Faire-part & Mémorial',
    image: fairePartProgramme,
  },
  {
    id: 'tablier-chef',
    title: 'Tablier « Chef »',
    client: 'Personnalisation',
    category: 'Personnalisation',
    image: tablierChef,
  },
  {
    id: 'tablier-fastfood',
    title: 'Tablier « Fast Food »',
    client: 'Personnalisation',
    category: 'Personnalisation',
    image: tablierFastfood,
  },
  {
    id: 'tablier-foodtray',
    title: 'Tablier « Food »',
    client: 'Personnalisation',
    category: 'Personnalisation',
    image: tablierFoodtray,
  },
]
