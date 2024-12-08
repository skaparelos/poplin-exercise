import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pokemonRoutes from '@/routes/pokemonRoutes';
import { errorHandler } from '@/middleware/errorMiddleware';
import { logger } from '@/utils/logger';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// CORS middleware
app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? process.env.FRONTEND_URL
        : ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true
  })
);

app.use(express.json());

// Routes
app.use('/api/pokemon', pokemonRoutes);

// Error handling
app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});

export default app;
