import { PokemonService } from '../../src/services/pokemonService';

describe('PokemonService', () => {
  const pokemonService = new PokemonService();

  it('should fetch pokemon list', async () => {
    const pokemon = await pokemonService.getPokemonList(5, 0);
    expect(pokemon).toHaveLength(5);
    expect(pokemon[0]).toHaveProperty('id');
    expect(pokemon[0]).toHaveProperty('name');
    expect(pokemon[0]).toHaveProperty('imageUrl');
    expect(pokemon[0]).toHaveProperty('types');
  });

  it('should fetch pokemon by id', async () => {
    const pokemon = await pokemonService.getPokemonById(1);
    expect(pokemon).toHaveProperty('id', 1);
    expect(pokemon).toHaveProperty('name');
    expect(pokemon).toHaveProperty('imageUrl');
    expect(pokemon).toHaveProperty('types');
  });
});
