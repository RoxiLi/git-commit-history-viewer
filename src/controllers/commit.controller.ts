import githubService from '../services/github.service';
import { Request, Response } from 'express';

const commitController = {
  /**
   * Obtiene el historial de commits de un repositorio específico y envía la respuesta.
   * @param req - Objeto de solicitud Express.
   * @param res - Objeto de respuesta Express.
   */
  async getCommits(req: Request, res: Response) {
    try {
      const { owner, repo } = req.params;

      // Validaciones (si las necesitas)
      if (!owner || !repo) {
        return res.status(400).json({ error: 'Propietario y repositorio son requeridos.' });
      }

      const commits = await githubService.getCommits(owner, repo);
      res.json(commits);
    } catch (error) {
      console.error('Error en el controlador:', error);
      res.status(500).json({ error: 'Error al obtener los commits' });
    }
  },

  // Aquí puedes agregar más métodos relacionados con commits o cualquier otra funcionalidad.
};

export default commitController;
