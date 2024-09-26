import { ApplicationService } from '@adonisjs/core/types'
import { AMQPClient } from '@cloudamqp/amqp-client'

export default class AppProvider {
  constructor(protected app: ApplicationService) {}

  register() {}

  async boot() {}

  async start() {
    try {
      const amqp = new AMQPClient('amqp://localhost')
      const conn = await amqp.connect()
      const ch = await conn.channel()
      const q = await ch.queue('elaastic')
      const consumer = await q.subscribe({ noAck: true }, async (msg) => {
        console.log(msg.bodyToString())
        await consumer.cancel()
      })
    } catch (e) {
      console.error('ERROR', e)
      e.connection.close()
    }
  }

  async ready() {
    const amqp = new AMQPClient('amqp://localhost')
    const conn = await amqp.connect()
    const ch = await conn.channel()
    const q = await ch.queue('elaastic')
    await q.publish('Hello World', { deliveryMode: 2 })
  }

  async shutdown() {}
}
