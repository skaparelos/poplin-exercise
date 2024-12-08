import axios from 'axios';
import { PokemonResponse } from '@/types/pokemon';

const API_URL = 'http://localhost:3000/api';

export const pokemonService = {
  async getPokemons(limit: number = 20, offset: number = 0): Promise<PokemonResponse> {
    const response = await axios.get(`${API_URL}/pokemon`, {
      params: {
        limit,
        offset
      }
    });
    return response.data;
  }
}; 