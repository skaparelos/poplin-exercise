import { Pokemon } from '@/types/pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <img
        src={pokemon.imageUrl}
        alt={pokemon.name}
        className="w-32 h-32 mx-auto"
      />
      <h2 className="text-xl font-semibold text-center mt-2 capitalize">
        {pokemon.name}
      </h2>
      <p className="text-center text-gray-600">#{pokemon.id}</p>
    </div>
  );
};

export default PokemonCard; 