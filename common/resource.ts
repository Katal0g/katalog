export type Resource = {
    id: number;
    title: string;
    description: string;
    lastUpdated: Date;
    author: string;
    link?: string;
    tags?: Tag[];
};

export type Tag = string;