import ky from 'ky';

export default class ElaasticResourcesService {
  private kyInstance: typeof ky

  constructor() {
    this.kyInstance = ky.create({
      prefixUrl: 'https://CHANGEIT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  async getAllResources() {
    try {
      return await this.kyInstance.get('/elaasticResources')
    } catch (error) {
      throw new Error(error.response.data.message || 'Failed to fetch resources')
    }
  }
}
