import axios from 'axios';
import { Pokemon, PokemonListResponse } from '@/types/pokemon';
import { logger } from '@/utils/logger';

export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  async getPokemonList(
    limit: number = 20,
    offset: number = 0
  ): Promise<Pokemon[]> {
    try {
      const response = await axios.get<PokemonListResponse>(
        `${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`
      );

      const pokemonList = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const detailResponse = await axios.get(pokemon.url);
          return {
            id: detailResponse.data.id,
            name: detailResponse.data.name,
            imageUrl: detailResponse.data.sprites.front_default,
            types: detailResponse.data.types.map((type: any) => type.type.name)
          };
        })
      );

      return pokemonList;
    } catch (error) {
      logger.error('Error fetching Pokemon list:', error);
      throw error;
    }
  }

  async getPokemonById(id: number): Promise<Pokemon> {
    try {
      const response = await axios.get(`${this.baseUrl}/pokemon/${id}`);
      return {
        id: response.data.id,
        name: response.data.name,
        imageUrl: response.data.sprites.front_default,
        types: response.data.types.map((type: any) => type.type.name)
      };
    } catch (error) {
      logger.error(`Error fetching Pokemon with id ${id}:`, error);
      throw error;
    }
  }
}
