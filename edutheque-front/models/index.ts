export const levels = ["Primaire", "Collège", "Lycée", "Supérieur"];
export const subjects = [
  "Mathématiques",
  "Français",
  "Histoire",
  "Géographie",
  "Physique",
  "Chimie",
  "SVT",
  "Technologie",
];

export type Ressource = {
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags?: string[];
};
