export const levels = ["Primaire", "Collège", "Lycée", "Supérieur"] as const;
export const subjects = [
  "Maths",
  "Français",
  "Histoire",
  "Géographie",
  "Physique",
  "Chimie",
  "SVT",
  "Technologie",
] as const;

export type Level = typeof levels[number];
export type Subject = typeof subjects[number];

export type Tag = Subject | Level;

export const subjectIcons: Record<Subject, string> = {
  "Maths": "i-heroicons-calculator",
  "Français": "i-heroicons-book-open",
  "Histoire": "i-mdi-crown-outline",
  "Géographie": "i-heroicons-globe-europe-africa-20-solid",
  "Physique": "i-mdi-magnet-on",
  "Chimie": "i-heroicons-beaker",
  "SVT": "i-mdi-leaf",
  "Technologie": "i-heroicons-cog",
};

export type Ressource = {
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags?: Tag[];
};