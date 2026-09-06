# VYRA — landing page

Landing page et page tarifs de VYRA, en Next.js.

La mise en page a été recréée d'après `remakeit.io/fr` puis re-brandée : nom,
palette et visuels sont ceux de VYRA.

## Stack

- **Next.js 16** (App Router, React Server Components, export statique par route)
- **React 19**
- **TypeScript** en mode strict
- **Tailwind CSS v4** (configuration via `@theme` dans `src/app/globals.css`)
- **Golos Text** via `next/font/google` (police d'origine, auto-hébergée au build)

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000 → redirige vers /fr
npm run build    # build de production
npm start        # sert le build
```

## Routes

| Route          | Contenu                          |
| -------------- | -------------------------------- |
| `/`            | redirection vers la locale par défaut (`fr`) |
| `/fr`          | landing page                     |
| `/fr/pricing`  | page tarifs                      |
| `/en`, `/en/pricing` | version anglaise           |

## Structure

```
src/
  app/
    layout.tsx              # <html>, police, metadata de base
    page.tsx                # redirection vers /fr
    icon.svg                # favicon
    globals.css             # tokens de design + utilitaires (grille, marquee, glow)
    [locale]/
      layout.tsx            # navbar + footer, metadata par locale
      page.tsx              # composition de la landing + JSON-LD FAQPage
      pricing/page.tsx      # page tarifs
  components/               # une section = un composant
    Navbar, Hero, SocialProof, Clipping, AiGeneration, BestSoftware,
    HowItWorks, Features, Comparison, WhyBest, Testimonials, FinalCta,
    Faq, Footer, PricingPlans
    PhoneMockup.tsx         # maquette de téléphone en CSS
    icons.tsx               # jeu d'icônes SVG inline
    ui.tsx                  # Badge, PrimaryButton, GhostButton, SectionHeading
  i18n/
    fr.ts                   # dictionnaire source (définit le type Dictionary)
    en.ts                   # traduction anglaise, typée sur Dictionary
    index.ts                # locales, defaultLocale, getDictionary
```

## Contenu et assets

Tout le texte vit dans `src/i18n/`. Aucune chaîne n'est codée en dur dans les
composants, donc ajouter une locale revient à créer un fichier typé
`Dictionary` et à l'enregistrer dans `src/i18n/index.ts`.

Les visuels (maquettes de téléphone, tableau de bord, cartes, dégradés, grille
de fond, icônes) sont **reconstruits en CSS et en SVG inline** plutôt que repris
du site d'origine : aucun fichier image propriétaire n'est copié dans ce dépôt,
et il n'y a aucune requête vers un CDN externe. Les textes marketing sont en revanche encore ceux du site
source, simplement passés au nom VYRA : chiffres (1M+ créateurs, 25B+ vues),
témoignages et questions de FAQ sont des placeholders **à réécrire avec vos
propres données avant toute mise en ligne** — les publier tels quels
reviendrait à afficher des chiffres et des avis clients qui ne sont pas les
vôtres.

## Design

Palette sunset (rose → orange) sur fond noir, définie dans `globals.css` :

| Token                     | Valeur    | Usage                          |
| ------------------------- | --------- | ------------------------------ |
| `--color-primary`         | `#ff3d81` | rose principal                 |
| `--color-accent`          | `#ff7a2f` | orange accent                  |
| `--color-primary-bright`  | `#ff5c95` | haut des dégradés de bouton    |
| `--color-primary-light`   | `#ffb3cd` | texte en dégradé clair         |
| `--color-primary-deep`    | `#4a1030` | fond sombre teinté rose        |
| `--color-accent-deep`     | `#43200f` | fond sombre teinté orange      |
| `--color-near-black`      | `#0f0f0f` | fond des sections alternées    |
| fond                      | `#000`    | fond principal                 |

Les composants ne contiennent plus aucun hex de marque en dur : ils utilisent
les classes Tailwind générées depuis ces tokens (`from-primary-bright`,
`to-primary-light`, `bg-primary`…). Re-brander = éditer le bloc `@theme` de
`globals.css` et rien d'autre.

Interface sombre uniquement (`color-scheme: dark`), animations désactivées sous
`prefers-reduced-motion`.
