import { Request, Response } from 'express';
import { ApiError } from '@/types/pokemon';
import { logger } from '@/utils/logger';

export const errorHandler = (err: ApiError, req: Request, res: Response) => {
  logger.error(err.message);

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};
