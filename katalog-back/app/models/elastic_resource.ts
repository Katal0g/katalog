import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ElasticResource extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column.dateTime()
  declare lastUpdated: DateTime

  @column()
  declare author: string

  @column()
  declare link: string

  // TODO check tags storing format
  @column()
  declare tags: string
}
