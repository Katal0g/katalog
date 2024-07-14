// Define FormLevel type
export type FormLevel = {
  value: string;
  label: string;
};

// LEVELS array with correct typing
export const LEVELS: FormLevel[] = [
  { value: "primaire", label: "Primaire" },
  { value: "college", label: "Collège" },
  { value: "lycee", label: "Lycée" },
  { value: "superieur", label: "Supérieur" },
];

// subjects array with constant assertion
export const SUBJECTS = [
  "Maths",
  "Français",
  "Histoire",
  "Géographie",
  "Physique",
  "Chimie",
  "SVT",
  "Technologie",
] as const;

// Define types for Level and Subject
export type Level = (typeof LEVELS)[number]["label"];
export type Subject = (typeof SUBJECTS)[number];

// Tag type as a union of Subject and Level
export type Tag = Subject | Level;

// Mapping Subject to icon classes
export const subjectIcons: Record<Subject, string> = {
  Maths: "i-heroicons-calculator",
  Français: "i-heroicons-book-open",
  Histoire: "i-mdi-crown-outline",
  Géographie: "i-heroicons-globe-europe-africa-20-solid",
  Physique: "i-mdi-magnet-on",
  Chimie: "i-heroicons-beaker",
  SVT: "i-mdi-leaf",
  Technologie: "i-heroicons-cog",
};

// Define Resource type
export type Resource = {
  title: string;
  description: string;
  lastUpdated: Date;
  author: string;
  link?: string;
  tags?: Tag[];
};
