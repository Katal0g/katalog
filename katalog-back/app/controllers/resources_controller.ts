import type { HttpContext } from '@adonisjs/core/http'
import ElaasticResource from '#models/elaastic_resource'
import ForgeResourcesService from '#services/forge_resources_service'

// TODO : Make resources controller gather all types of resources (Forge, Elaastic)

export default class ResourcesController {
  async index({ request, response }: HttpContext) {
    try {
      const page = request.input('page', 1)
      const perPage = request.input('perPage', 30)
      const searchQuery = request.input('query', '')

      const resources = await ForgeResourcesService.getProjects(page, perPage, searchQuery)
      return response.json(resources)
    } catch (error) {
      return response.status(500).json({ message: error.message })
    }
  }

  async show({ params, response }: HttpContext) {
    const resource = await ElaasticResource.findOrFail(params.id)
    return response.json(resource)
  }
}
