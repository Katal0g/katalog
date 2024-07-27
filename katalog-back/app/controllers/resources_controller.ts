import type { HttpContext } from '@adonisjs/core/http'
import ElaasticResource from '#models/elaastic_resource'

// TODO : Make resources controller gather all types of resources (Forge, Elaastic)

export default class ResourcesController {
  async index({ response }: HttpContext) {
    const resources = await ElaasticResource.all()
    return response.json(resources)
  }

  async show({ params, response }: HttpContext) {
    const resource = await ElaasticResource.findOrFail(params.id)
    return response.json(resource)
  }
}
