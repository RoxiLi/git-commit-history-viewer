import { Router } from 'express';
import commitRouter from './commit.router';

const router = Router();

// Usamos el router de commits para todas las rutas que comiencen con '/commits'
router.use('/commits', commitRouter);

// Aquí puedes agregar más rutas o routers según lo necesites

export default router;
