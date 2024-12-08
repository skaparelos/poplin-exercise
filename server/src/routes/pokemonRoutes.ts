import { Router } from 'express';
import {
  getPokemonList,
  getPokemonById
} from '@/controllers/pokemonController';
import { validatePokemonId } from '@/middleware/validationMiddleware';

const router = Router();

router.get('/', getPokemonList);
router.get('/:id', validatePokemonId, getPokemonById);

export default router;
