import ElaasticResource from '#models/elaastic_resource'
import { DateTime } from 'luxon'

export interface PublicizeResourceInput {
  title: string
  owner: string
  lastUpdated: string // Format: 'YYYY-MM-DD HH:mm:ss'
  uuid: string
  link: string
}

export default class ElaasticResourcesService {
  async handleRabbitMessage(message: string) {
    try {
      const parsedMessage = JSON.parse(message)
      const { uuid, title, owner, last_updated, private: isPrivate, link } = parsedMessage
      console.log('Parsed message:', parsedMessage)

      if (isPrivate !== undefined) {
        // If private field is present, it's a privatization message
        await this.privatizeResource(uuid)
      } else {
        // Else, it's a publicization message
        await this.publicizeResource({ title, owner, lastUpdated: last_updated, uuid, link })
      }
    } catch (error) {
      console.error('Failed to handle RabbitMQ message:', error)
    }
  }

  async publicizeResource(resourceData: PublicizeResourceInput) {
    const { title, owner, lastUpdated, uuid, link } = resourceData

    try {
      const resource = await ElaasticResource.query().where('elaastic_uuid', uuid).first()

      const elaasticUpdatedAt = parseLastUpdated(lastUpdated)
      console.log('Parsed date:', elaasticUpdatedAt)

      if (resource) {
        resource.title = title
        resource.author = owner
        resource.elaasticUpdatedAt = elaasticUpdatedAt // Set the parsed date
        resource.public = true

        await resource.save()
      } else {
        await ElaasticResource.create({
          title,
          link,
          elaasticUpdatedAt,
          elaasticUUID: uuid,
          author: owner,
          public: true,
        })
      }
    } catch (error) {
      console.error('Failed to publicize resource:', error)
    }
  }

  async privatizeResource(uuid: string) {
    try {
      const resource = await ElaasticResource.query().where('elaastic_uuid', uuid).first()

      if (resource) {
        resource.public = false
        await resource.save()
      } else {
        console.error(`Resource with globalId ${uuid} not found.`)
      }
    } catch (error) {
      console.error('Failed to privatize resource:', error)
    }
  }
}

const parseLastUpdated = (lastUpdated: string) => {
  // Essayer de parser le format de date
  let updatedAt = DateTime.fromFormat(lastUpdated, 'EEE MMM dd HH:mm:ss ZZZ Z', { locale: 'en' })

  // Si invalide, essayer de parser en ISO format
  if (!updatedAt.isValid) {
    updatedAt = DateTime.fromSQL(lastUpdated)
  }

  // Vérification de la validité
  if (!updatedAt.isValid) {
    throw new Error(`Invalid date format: ${lastUpdated}`)
  }

  return updatedAt
}
