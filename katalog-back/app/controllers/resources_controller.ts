import type { HttpContext } from '@adonisjs/core/http'
import ElaasticResource from '#models/elaastic_resource'
import ForgeResourcesService from '#services/forge_resources_service'
import { Resource } from '#common/resource.js'
import { GitLabProject } from '#models/forge_resource'

// TODO : Make resources controller gather all types of resources (Forge, Elaastic)

export default class ResourcesController {
  async index({ request, response }: HttpContext) {
    // Request Forge resources
    try {
      // TODO Add management of pagination
      const page = request.input('page', 1)
      const perPage = request.input('perPage', 30)
      const searchQuery = request.input('query', '')

      const result = await ForgeResourcesService.getProjects(page, perPage, searchQuery)
      const gitlabProjects: GitLabProject[] = result.data

      const resources = gitlabProjects
      return response.json(result)
    } catch (error) {
      return response.status(500).json({ message: error.message })
    }
  }

  async show({ params, response }: HttpContext) {
    const resource = await ElaasticResource.findOrFail(params.id)
    return response.json(resource)
  }
}
