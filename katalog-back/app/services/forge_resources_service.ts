import axios, { AxiosInstance } from 'axios'

class ForgeResourcesService {
  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:3333/api/v1', // Changez l'URL de base si nécessaire
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  async getAllResources() {
    try {
      const response = await this.axiosInstance.get('/elaasticResources')
      return response.data
    } catch (error) {
      throw new Error(error.response.data.message || 'Failed to fetch resources')
    }
  }
}

export default new ForgeResourcesService()
