import { Request, Response, NextFunction } from 'express';
import { param, validationResult } from 'express-validator';

export const validatePokemonId = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('Pokemon ID must be a positive integer'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    next();
  }
];
