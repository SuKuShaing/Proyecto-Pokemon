import type { FavoritePokemon } from "@/interfaces/favorite-pokemon.response";
import { For, createSignal } from "solid-js";

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
			<For each={pokemons()}>{(pokemon) => <h1>{pokemon.name}</h1>}</For>
		</div>
	);
};
