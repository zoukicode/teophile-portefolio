# Portfolio — Théophile, Designer graphique

Portfolio one-page construit avec **React 19 + TypeScript + Vite**, icônes **iconsax-react**.

## Démarrer

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production (dossier dist/)
npm run preview  # prévisualiser le build
```

## Structure

```
src/
├── data/portfolio.ts          # Contenu centralisé (bio, services, projets…)
├── components/
│   ├── Navbar.tsx / .css       # En-tête + menu responsive
│   ├── Hero.tsx / .css         # Accueil + photo de profil
│   ├── About.tsx / .css        # Biographie
│   ├── Services.tsx / .css     # Services proposés
│   ├── Projects.tsx / .css     # Galerie filtrable + lightbox
│   ├── Contact.tsx / .css      # Coordonnées & réseaux
│   ├── Footer.tsx / .css
│   └── iconRegistry.ts         # Mapping nom → icône iconsax (tree-shaking)
├── assets/portfolio/           # Photo de profil + réalisations
└── App.tsx                     # Assemble les sections
```

## Personnaliser

Tout le contenu (nom, bio, services, projets, email, téléphone, réseaux sociaux)
se modifie dans **`src/data/portfolio.ts`** — aucun composant à toucher.

Les icônes des services/réseaux sont référencées par leur nom iconsax dans ce même
fichier ; pensez à ajouter l'icône correspondante dans `src/components/iconRegistry.ts`.
