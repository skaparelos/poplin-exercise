interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

interface PokemonResponse {
  pokemons: Pokemon[];
  total: number;
}

export type { Pokemon, PokemonResponse }; 