import { ForgeResource } from '#models/forge_resource'
// TODO : Correct import using common
import { Resource, Source, Tag } from '#models/resource'

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
