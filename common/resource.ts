export type Resource = {
    id: number;
    title: string;
    description: string;
    lastUpdated: Date;
    author: string;
    link?: string;
    tags?: Tag[];
    source: Source;
};

export type Tag = string;

export enum Source {
  ELAASTIC = 'elaastic',
  FORGE = 'forge',
}
