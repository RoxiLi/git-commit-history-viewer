import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

const githubService = {
  /**
   * Obtiene el historial de commits de un repositorio específico en GitHub.
   * @param owner - Propietario del repositorio.
   * @param repo - Nombre del repositorio.
   * @returns - Lista de commits.
   */
  async getCommits(owner: string, repo: string) {
    try {
      const response = await axios.get(`${GITHUB_API_URL}/repos/${owner}/${repo}/commits`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los commits:', error);
      throw new Error('Error al obtener los commits desde GitHub');
    }
  },

  // Aquí puedes agregar más métodos relacionados con la API de GitHub, como obtener issues, pull requests, etc.
};

export default githubService;
