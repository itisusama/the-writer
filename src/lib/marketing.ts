export type Feature = { icon: string; title: string; description: string };
export type FAQ = { q: string; a: string };

export const FEATURES: Feature[] = [
  {
    icon: "BookOpenText",
    title: "Organize Your Stories",
    description: "Create separate projects for each novel, chapter, or short story — all neatly organized in one place.",
  },
  {
    icon: "PencilLine",
    title: "Distraction-Free Writing",
    description: "A clean, minimal editor designed to help you focus on writing without clutter or noise.",
  },
  {
    icon: "ChartBar",
    title: "Track Your Progress",
    description: "Set daily word goals, monitor your writing streaks, and see your growth over time.",
  },
];

export const FAQS: FAQ[] = [
  {
    q: `What is "The Writer"?`,
    a: "Ther Writer is a focused writing platform that helps authors draft, organize, and track their novels from idea to final chapter.",
  },
  {
    q: "Can I share my work with others?",
    a: "Yes! You can generate read-only share links for your stories or specific chapters, perfect for sharing with editors or beta readers.",
  },
  {
    q: "Does Ther Writer support backups or cloud saving?",
    a: "Absolutely. Your writing is automatically saved in the cloud so you never lose progress, even if you switch devices.",
  },
  {
    q: "Is Ther Writer free to use?",
    a: "Ther Writer and it's features are always free.",
  },
];