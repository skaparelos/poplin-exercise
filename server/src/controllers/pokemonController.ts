import { Request, Response } from 'express';
import { PokemonService } from '@/services/pokemonService';
import { asyncWrapper } from '@/utils/asyncWrapper';

const pokemonService = new PokemonService();

export const getPokemonList = asyncWrapper(
  async (req: Request, res: Response) => {
    const limit = Number(req.query.limit) || 20;
    const offset = Number(req.query.offset) || 0;

    const pokemons = await pokemonService.getPokemonList(limit, offset);
    res.json({
      pokemons,
      total: pokemons.length
    });
  }
);

export const getPokemonById = asyncWrapper(
  async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const pokemon = await pokemonService.getPokemonById(id);
    res.json(pokemon);
  }
);
