import axios, { AxiosInstance } from 'axios'

class ForgeResourcesService {
  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://forge.apps.education.fr/',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  async getProjects(page = 1, perPage = 30, searchQuery = '') {
    try {
      const response = await this.axiosInstance.get('/api/v4/projects', {
        params: {
          page,
          per_page: perPage,
          search: searchQuery,
          simple: true,
        },
      })

      return {
        data: response.data,
        paginationInfo: {
          total: response.headers['x-total'],
          totalPages: response.headers['x-total-pages'],
          nextPage: response.headers['x-next-page'],
          prevPage: response.headers['x-prev-page'],
          perPage: response.headers['x-per-page'],
          currentPage: response.headers['x-page'],
        },
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch projects')
    }
  }
}

export default new ForgeResourcesService()
