import { type GitLabProject, LEVELS, SUBJECTS, type Tag } from '~/models'
import { Resource, Source } from '#common/resource.js'

export const convertToResource = (project: GitLabProject, source: Source): Resource => {
  const tags: Tag[] = project.tag_list

  return {
    id: project.id,
    title: project.name,
    description: project.description,
    lastUpdated: new Date(project.last_activity_at),
    author: project.namespace.name,
    link: project.web_url,
    tags,
    source: source,
  }
}
