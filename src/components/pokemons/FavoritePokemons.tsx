import type { FavoritePokemon } from "@/interfaces/favorite-pokemon.response";
import { For, createSignal } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
	const favoritePokemons = JSON.parse(
		localStorage.getItem("favorites") ?? "[]"
	);

	return favoritePokemons;
};

export const FavoritePokemons = () => {
	const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

	return (
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
			<For each={pokemons()}>
				{(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}
			</For>
		</div>
	);
};
