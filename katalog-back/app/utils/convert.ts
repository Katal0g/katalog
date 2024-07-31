import { ForgeResource } from '#models/forge_resource'
import { Resource, Source, Tag } from '#common/resource.js'

export const convertToResource = (forgeResource: ForgeResource, source: Source): Resource => {
  const tags: Tag[] = forgeResource.tag_list

  return {
    id: forgeResource.id,
    title: forgeResource.name,
    description: forgeResource.description,
    lastUpdated: new Date(forgeResource.last_activity_at),
    author: forgeResource.namespace.name,
    link: forgeResource.web_url,
    tags,
    source: source,
  }
}
