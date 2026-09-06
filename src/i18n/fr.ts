export type Cell = string | boolean;
export type TableRow = { label: string; values: Cell[] };

export const fr = {
  meta: {
    title: "Remakeit — Créez des vidéos virales qui rapportent, automatiquement.",
    description:
      "Collez une URL YouTube ou écrivez un prompt. Remakeit génère une vidéo virale prête à être postée.",
    pricingTitle: "Tarifs — Remakeit",
  },
  nav: {
    howItWorks: "Comment ça marche ?",
    features: "Fonctionnalités",
    results: "Résultats",
    pricing: "Tarifs",
    faq: "FAQ",
    login: "Se connecter",
    signup: "S'inscrire",
  },
  hero: {
    badge: "#1 OUTIL IA",
    users: "+50k utilisateurs actifs",
    titleLine1: "Créez des",
    titleHighlight: "vidéos virales",
    titleLine2: "qui rapportent, automatiquement.",
    subtitle:
      "Collez une URL YouTube ou écrivez un prompt. Remakeit génère une vidéo virale prête à être postée.",
    cta: "Essayer",
    pills: ["100 % automatique", "Optimisé TikTok", "Prêt à poster"],
  },
  socialProof: {
    highlight: "1M+ créateurs",
    title: "génèrent des milliards de vues avec Remakeit",
    subtitle:
      "Chaque jour des milliers de créateurs utilisent Remakeit pour générer des shorts viraux. Rejoignez-les.",
    cards: [
      {
        title: "Vues = Argents",
        text: "+ 1000 Vidéos virales rémunérées chaque jour.",
      },
      {
        title: "Automatisations",
        text: "Programmez, publiez, puis diffusez sur vos réseaux en clic.",
      },
      {
        title: "Tout en un",
        text: "Tous vos outils vidéo, réunis en un seul endroit.",
      },
    ],
  },
  clipping: {
    badge: "Cliping",
    titleLine1: "Transformer n'importe quelle vidéo en plusieurs",
    titleHighlight: "clips viraux en moins de 5min",
    subtitle: "Directement postés sur vos réseaux sociaux",
    tryIt: "Teste par toi même",
    cta: "Essayer",
  },
  aiGeneration: {
    badge: "Génération IA",
    titleLine1: "Ou générer des",
    titleHighlight: "vidéos IA virales",
    titleLine2: "Avec les meilleurs modèles actuels",
    modelName: "Veo 3",
    modelText: "Créez des vidéos IA rapidement avec un simple prompt",
    generate: "Générer",
    footnote: "Essaie gratuitement nos modèles de générations",
  },
  bestSoftware: {
    badge: "Le meilleur logiciel du marché",
    titleLine1: "Le seul outil",
    titleHighlight: "dont vous avez besoin.",
  },
  howItWorks: {
    badge: "Comment ça marche ?",
    titleLine1: "De l'idée à la vidéo virale",
    titleHighlight: "en 3 clics",
    subtitle:
      "Pas de montage. Pas de compétences. Juste de contenu viral prêt à exploser",
    steps: [
      {
        n: "1",
        title: "Collez une URL Youtube",
        text: "Vous voulez créer de zéro ? Écrivez un prompt (ex: \"Top 5 des buts de Messi.\")",
        placeholder: "Entrez une URL / Prompt...",
        action: "générer",
      },
      {
        n: "2",
        title: "L'IA fait le montage",
        text: "Découpage des meilleurs moments, sous-titres dynamiques, recadrage vertical. En 30 secondes.",
        placeholder: "Analyse des moments forts...",
        action: "monter",
      },
      {
        n: "3",
        title: "Publiez partout en un clic",
        text: "TikTok, Reels, Shorts. Programmez vos posts et laissez l'algorithme travailler.",
        placeholder: "Programmer la publication...",
        action: "publier",
      },
    ],
    next: "Prochaine étape",
  },
  features: {
    badge: "Fonctionnalités",
    title: "Tout ce dont vous avez besoin",
    subtitle:
      "Recyclez vos vidéos Youtube, créez du contenu viral de zéro, et publiez partout automatiquement. Sans jamais quitter Remakeit",
    cta: "Essayer",
    tabs: [
      {
        label: "Clipping",
        titleLine1: "Recyclez vos vidéos",
        titleHighlight: "Youtube en shorts viraux",
        text: "Collez une URL Youtube. Remakeit découpe les meilleurs moments, ajoute les sous-titres, optimise pour TikTok/Reels/Shorts. En 30 secondes",
      },
      {
        label: "Génération IA",
        titleLine1: "Créez des vidéos",
        titleHighlight: "entièrement générées par IA",
        text: "Un simple prompt suffit. Remakeit s'appuie sur les meilleurs modèles du marché pour produire des vidéos en 16:9 ou 9:16, prêtes à poster.",
      },
      {
        label: "Auto-publish",
        titleLine1: "Programmez et publiez",
        titleHighlight: "sur tous vos réseaux",
        text: "Connectez vos comptes TikTok, Instagram et YouTube. Remakeit publie au meilleur moment avec hashtags et description optimisés.",
      },
      {
        label: "Outils",
        titleLine1: "Sous-titres, voix off,",
        titleHighlight: "musiques et analytics",
        text: "Voix off réalistes, sous-titres designs, recherche intelligente YouTube et dashboard de performances. Tout au même endroit.",
      },
    ],
  },
  comparison: {
    us: "Remakeit",
    them: "Avec les autres outils",
    rows: [
      { us: "L'IA crée votre vidéo", them: "Découpage manuel" },
      { us: "Programmation & publication directe", them: "Pas de publication multi-réseaux" },
      { us: "Optimisation des formats", them: "Plusieurs outils nécessaires" },
      { us: "Interface simple et rapide", them: "Résultats moins efficaces" },
    ],
  },
  why: {
    titleLine1: "Pourquoi Remakeit est le",
    titleHighlight: "meilleur outil",
    titleLine2: "pour créer des shorts viraux",
    subtitle: "Une dernière question avant de commencer ? Trouvez votre réponse ici.",
    contact: "Nous contacter",
    items: [
      { n: "01", title: "Gain de temps", text: "Création de la vidéo en 30 secondes" },
      { n: "02", title: "Puissance de l'IA", text: "Génération complète vidéo/texte/montage" },
      { n: "03", title: "Performance sur l'algorithme", text: "Génère des vues / de l'argent" },
    ],
  },
  testimonials: {
    badge: "Résultats",
    titleLine1: "Ils génèrent des",
    titleHighlight: "millions de vues",
    subtitle:
      "Des créateurs comme vous ont transformé leur présence sur les réseaux sociaux. À votre tour !",
    items: [
      {
        text: "Magnifique site, ça marche très bien, j'ai réussi à générer beaucoup de vues et de revenus grâce à Remakeit",
        name: "Lucas M.",
        date: "12/01/2026",
      },
      {
        text: "Outil incroyable ! J'ai multiplié mes vues par 10 en une semaine. La conversion YouTube vers TikTok est parfaite.",
        name: "Sarah K.",
        date: "28/01/2026",
      },
      {
        text: "Je recommande à 100%. L'automatisation me fait gagner des heures chaque jour. Mes shorts cartonnent !",
        name: "Antoine D.",
        date: "03/02/2026",
      },
      {
        text: "J'étais sceptique au début, mais les résultats parlent d'eux-mêmes. 50k vues sur mon premier short généré. L'IA choisit vraiment les meilleurs moments.",
        name: "Mehdi B.",
        date: "22/01/2026",
      },
      {
        text: "La publication multi-réseaux me change la vie. Un clic et mes vidéos sont sur TikTok, Reels et Shorts en même temps. Gain de temps énorme !",
        name: "Chloé R.",
        date: "01/02/2026",
      },
      {
        text: "Très bon outil pour repurposer du contenu long. La qualité du découpage est impressionnante et les transitions sont toujours fluides.",
        name: "Thomas G.",
        date: "05/02/2026",
      },
    ],
    stats: [
      { value: "600+", label: "Vidéos /jour" },
      { value: "25B+", label: "Vues générées" },
      { value: "1M+", label: "Utilisateurs" },
    ],
  },
  cta: {
    badge: "Rejoindre +1M de créateurs",
    title: "Prêt à générer vos premiers millions de vues ?",
    button: "Créer ma première vidéo virale (gratuit)",
    trust: ["Aucune carte bancaire requise", "Vidéo générée en 30sec", "Annulez quand vous voulez"],
  },
  faq: {
    badge: "FAQ",
    title: "Vos questions fréquentes",
    subtitle: "Une dernière question avant de commencer ? Trouvez votre réponse ici.",
    contact: "Nous contacter",
    items: [
      {
        q: "Qu'est-ce que Remakeit ?",
        a: "Remakeit est une intelligence artificielle qui permet de transformer rapidement des vidéos YouTube en contenus TikTok viraux et monétisables, sans nécessiter de compétences en montage.",
      },
      {
        q: "Ai-je besoin de compétences en montage vidéo ?",
        a: "Non, aucune compétence en montage n'est requise. Remakeit simplifie le processus en automatisant la conversion des vidéos YouTube en formats adaptés à TikTok, ainsi que d'autres fonctionnalités prêtes à l'emploi.",
      },
      {
        q: "Quels sont les avantages de Remakeit ?",
        a: "Remakeit offre une conversion instantanée des vidéos YouTube vers TikTok, favorise une meilleure monétisation grâce à une visibilité accrue et ne nécessite aucune compétence en montage, rendant le processus accessible à tous.",
      },
      {
        q: "Puis-je monétiser mes vidéos ?",
        a: "Oui, les vidéos générées avec Remakeit sont conçues pour augmenter votre visibilité et vos opportunités de monétisation sur TikTok et d'autres plateformes de contenus courts.",
      },
      {
        q: "Puis-je personnaliser mes vidéos après conversion ?",
        a: "Oui, après la génération automatique, vous pouvez facilement personnaliser vos vidéos en ajoutant du texte, des hashtags ou d'autres éléments pour renforcer leur attractivité sur TikTok.",
      },
    ],
  },
  pricing: {
    badge: "Tarifs",
    titleLine1: "Choisissez votre plan.",
    titleHighlight: "Commencez gratuitement.",
    subtitle: "Aucune carte bancaire requise. Annulez quand vous voulez.",
    monthly: "Mensuel",
    yearly: "Annuel",
    save: "Économisez",
    savePercent: "30%",
    perMonth: "/mois",
    choose: "Choisir le plan",
    popular: "Populaire",
    footnote: "*10 crédits = création d'une vidéo",
    plans: [
      {
        name: "Créateur",
        tagline: "Idéale pour commencer rapidement !",
        price: 22,
        features: [
          "300 crédits Pour Remakeit Shorts*",
          "60 Synthèse vocale",
          "+3 musiques de fond",
          "Prompt vers vidéo virale",
          "Accès au support privé",
          "Automatic publishing ⚡️",
        ],
      },
      {
        name: "Expert",
        tagline: "Découvrez plus fonctionnalités, et optimisez vos process.",
        price: 39,
        features: [
          "600 crédits Pour Remakeit Shorts*",
          "120 Synthèse vocale",
          "Toutes les musiques de fond",
          "Prompt vers vidéo virale",
          "Accès au support privé",
          "Automatic publishing ⚡️",
        ],
      },
      {
        name: "Professionnel",
        tagline: "Pour les professionnels avec plusieurs comptes TikTok",
        price: 89,
        features: [
          "Crédits Remakeit Shorts illimités",
          "Synthèse vocale illimitée",
          "Toutes les musiques de fond",
          "Prompt vers vidéo virale",
          "Accès au support privé",
          "Automatic publishing ⚡️",
        ],
      },
    ],
    tables: [
      {
        title: "Technologie Remakeit",
        header: "Fonctionnalités",
        rows: ([
          { label: "Crédits", values: ["300", "600", "Crédits illimités"] },
          { label: "Analyses vidéos Youtube", values: [true, true, true] },
          { label: "Création de shorts monétisables", values: [true, true, true] },
          { label: "Prompt to Vidéo", values: [true, true, true] },
          { label: "Remakeit x Veo3", values: [false, true, true] },
          { label: "Publication automatique (TikTok-Youtube-Instagram) ⚡", values: [true, true, true] },
          { label: "Hashtag et description optimisés automatiquement ⚡", values: [false, true, true] },
          { label: "Dashboard Analytics Performances ⚡️", values: [false, false, true] },
        ] as TableRow[]),
      },
      {
        title: "Outils Remakeit",
        header: "Fonctionnalités",
        rows: ([
          { label: "Recherche intelligente YouTube", values: [true, true, true] },
          { label: "Sous-titres designs", values: [true, true, true] },
          { label: "Voix off réalistes", values: [true, true, true] },
          { label: "Intonations personnalisées des voix off", values: [false, true, true] },
          { label: "Auto cuts / Frame optimization", values: [true, true, true] },
          { label: "Tutoriels librairie", values: [false, true, true] },
          { label: "Support Privé", values: [true, true, true] },
        ] as TableRow[]),
      },
    ],
  },
  footer: {
    blurb:
      "Voici les réponses aux questions les plus fréquemment posées à propos de Remakeit. Si vous en avez d'autres, notre équipe est disponible pour vous aider.",
    columns: [
      {
        title: "Aide",
        links: [
          { label: "Communauté", href: "#" },
          { label: "Nous contacter", href: "#" },
        ],
      },
      {
        title: "Entreprise",
        links: [
          { label: "Propositions commerciales", href: "#" },
          { label: "Affiliation", href: "#" },
          { label: "À propos", href: "#" },
          { label: "Tarification", href: "/pricing" },
        ],
      },
      {
        title: "Mentions légales",
        links: [
          { label: "Conditions générales", href: "#" },
          { label: "Politique de livraison", href: "#" },
          { label: "Attestation légale", href: "#" },
          { label: "Politique de confidentialité", href: "#" },
          { label: "Politique de remboursement", href: "#" },
          { label: "Politique d'annulation", href: "#" },
        ],
      },
    ],
    copyright: "©2026 Remakeit",
  },
};

export type Dictionary = typeof fr;
