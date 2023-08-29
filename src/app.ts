import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import appRouter from './routes/app.router';

const app: Application = express();

app.use(cors()); // Enables CORS for all routes
app.use(express.json());
// Error handling (basic error middleware)
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('¡Something went wrong!')
  next();
});
// Routes
app.use(appRouter)

// Exports the app for use in other files, such as server
export default app;
