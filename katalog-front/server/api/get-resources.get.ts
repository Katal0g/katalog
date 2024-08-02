import { Gitlab } from "@gitbeaker/rest";

class ForgeResourcesService {
  private gitlabApi: any;

  constructor() {
    this.gitlabApi = new Gitlab({
      host: "https://forge.apps.education.fr/",
      // Si nécessaire, ajoutez un jeton d'accès privé ici
      // token: 'votre_token_d_acces_prive',
    });
  }

  async getProjects(page = 1, perPage = 30, searchQuery = "") {
    try {
      const response = await this.gitlabApi.Projects.all({
        pagination: "offset",
        page,
        perPage,
        showExpanded: true,
        search: searchQuery,
        searchNamespaces: true,
      });

      return {
        data: response,
        // Ajout de paginationInfo uniquement si nécessaire
        // Notez que Gitbeaker peut ne pas retourner les headers comme axios
        paginationInfo: {
          total: response.headers?.["x-total"],
          totalPages: response.headers?.["x-total-pages"],
          nextPage: response.headers?.["x-next-page"],
          prevPage: response.headers?.["x-prev-page"],
          perPage: response.headers?.["x-per-page"],
          currentPage: response.headers?.["x-page"],
        },
      };
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch projects",
      );
    }
  }
}

export default new ForgeResourcesService();
