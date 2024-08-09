import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, Show, type Component } from "solid-js";

interface Props {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({pokemon}) => {
  const [isVisible, setIsVisible] = createSignal(true);

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const deleteFavoritePokemon = () => {
    const pokemons = JSON.parse(localStorage.getItem('favoritePokemons') || '[]') as FavoritePokemon[];
    const newPokemons = pokemons.filter((p: FavoritePokemon) => p.id !== pokemon.id);

    localStorage.setItem('favoritePokemons', JSON.stringify(newPokemons));
    setIsVisible(false);
  }

  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center">
        <a href={`/pokemons/${pokemon.name}`}>
          <img
            class="w-32 h-32"
            src={imageSrc}
            alt={pokemon.name}
            width={96}
            height={96}
            style={`view-transition-name: ${pokemon.name}-image`}
          />
          <p class="capitalize">#{pokemon.id} {pokemon.name}</p>
        </a>

      <button class="text-red-400" onClick={deleteFavoritePokemon}>
        Delete
      </button>

      </div>
    </Show>
  );
};