import { Router } from 'express';
import commitController from '../controllers/commit.controller';

const router = Router();

// Ruta para obtener el historial de commits de un repositorio específico en GitHub
router.get('/:owner/:repo', commitController.getCommits);

export default router;
