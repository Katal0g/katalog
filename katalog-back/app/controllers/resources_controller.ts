import type { HttpContext } from '@adonisjs/core/http'
import ElaasticResource from '#models/elaastic_resource'
import ForgeResourcesService from '#services/forge_resources_service'
// TODO : Correct import using common
import { Resource, Source } from '#models/resource'
import { ForgeResource } from '#models/forge_resource'
import { convertToResource } from '../utils/convert.js'

// TODO : Make resources controller gather all types of resources (Forge, Elaastic)

export default class ResourcesController {
  async index({ request, response }: HttpContext) {
    try {
      const page = request.input('page', 1);
      const perPage = request.input('perPage', 30);
      const searchQuery = request.input('query', '');

      const result = await ForgeResourcesService.getProjects(page, perPage, searchQuery);
      const forgeResources: ForgeResource[] = result.data;

      // Convert Forge resources to resources
      const resources: Resource[] = forgeResources.map((project) =>
        convertToResource(project, Source.FORGE)
      );

      // Construct the response
      const paginationInfo = {
        total: result.paginationInfo.total,
      };

      return response.json({ data: resources, paginationInfo });
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  async show({ params, response }: HttpContext) {
    const resource = await ElaasticResource.findOrFail(params.id)
    return response.json(resource)
  }
}
