import type { HttpContext } from '@adonisjs/core/http'
import ElaasticResource from '#models/elaastic_resource'

export default class ElaasticResourcesController {
  // Méthode pour lister toutes les ressources
  public async index({ response }: HttpContext) {
    const resources = await ElaasticResource.all()
    return response.json(resources)
  }

  // Méthode pour créer une nouvelle ressource
  public async store({ request, response }: HttpContext) {
    const data = request.only(['title', 'description', 'lastUpdated', 'author', 'link', 'tags'])
    const resource = await ElaasticResource.create(data)
    return response.status(201).json(resource)
  }

  // Méthode pour afficher une ressource spécifique
  public async show({ params, response }: HttpContext) {
    const resource = await ElaasticResource.findOrFail(params.id)
    return response.json(resource)
  }

  // Méthode pour mettre à jour une ressource spécifique
  public async update({ params, request, response }: HttpContext) {
    const resource = await ElaasticResource.findOrFail(params.id)
    const data = request.only(['title', 'description', 'lastUpdated', 'author', 'link', 'tags'])
    resource.merge(data)
    await resource.save()
    return response.json(resource)
  }

  // Méthode pour supprimer une ressource spécifique
  public async destroy({ params, response }: HttpContext) {
    const resource = await ElaasticResource.findOrFail(params.id)
    await resource.delete()
    return response.status(204).send()
  }
}
