export type Resource = {
  id: number
  title: string
  description: string
  lastUpdated: Date
  source: Source
  author: string
  link?: string
  tags?: Tag[]
}

export type Tag = string

export enum Source {
  ELAASTIC = 'elaastic',
  FORGE = 'forge',
}
