# Remakeit — clone de la landing page

Recréation de la landing page et de la page tarifs de `remakeit.io/fr`, en Next.js.

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
et il n'y a aucune requête vers un CDN externe. Les textes marketing et le nom
« Remakeit » sont repris du site source à des fins de reproduction fidèle —
à remplacer par votre propre marque et vos propres contenus avant toute mise
en ligne.

## Design

Tokens repris du site d'origine, définis dans `globals.css` :

| Token             | Valeur    |
| ----------------- | --------- |
| `--color-primary` | `#6759d7` |
| `--color-accent`  | `#4d00ff` |
| `--color-near-black` | `#0f0f0f` |
| fond              | `#000`    |

Interface sombre uniquement (`color-scheme: dark`), animations désactivées sous
`prefers-reduced-motion`.
