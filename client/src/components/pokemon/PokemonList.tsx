import { useEffect, useState } from 'react';
import { Pokemon } from '@/types/pokemon';
import { pokemonService } from '@/services/pokemonService';
import PokemonCard from '@/components/pokemon/PokemonCard';
import Loading from '@/components/common/Loading';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [limit] = useState(20);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const offset = (page - 1) * limit;
        const response = await pokemonService.getPokemons(limit, offset);
        setPokemons(response.pokemons || []);
      } catch {
        setError('Failed to fetch Pokemon');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [page, limit]);

  if (loading) return <Loading />;
  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (!pokemons.length) return <div className="text-center">No Pokemon found</div>;

  return (
    <div>
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(p => p + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList; 