import type { HttpContext } from '@adonisjs/core/http'
import ElaasticResource from '#models/elaastic_resource'

// TODO : Make resources controller gather all types of resources (Forge, Elaastic)

export default class ResourcesController {
  async index({ response }: HttpContext) {
    const resources = await ElaasticResource.all()
    return response.json(resources)
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['title', 'description', 'author', 'link', 'tags'])
    const resource = await ElaasticResource.create(data)
    return response.status(201).json(resource)
  }

  async show({ params, response }: HttpContext) {
    const resource = await ElaasticResource.findOrFail(params.id)
    return response.json(resource)
  }

  async update({ params, request, response }: HttpContext) {
    const resource = await ElaasticResource.findOrFail(params.id)
    const data = request.only(['title', 'description', 'lastUpdated', 'author', 'link', 'tags'])
    resource.merge(data)
    await resource.save()
    return response.json(resource)
  }

  async destroy({ params, response }: HttpContext) {
    const resource = await ElaasticResource.findOrFail(params.id)
    await resource.delete()
    return response.status(204).send(null)
  }
}
