import type { FavoritePokemon } from "@/interfaces/favorite-pokemon.response";
import type { JSX } from "solid-js";
import { Show, createSignal, type Component } from "solid-js";

interface Props {
	pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {

    const [ isVisible, setIsVisible ] = createSignal(true);

	const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

    const deleteFavorite = () => {
        const favorites = JSON.parse(
            localStorage.getItem("favorites") ?? "[]"
        ) as FavoritePokemon[];

        const newFavorites = favorites.filter(p => p.id !== pokemon.id);

        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        setIsVisible(false);
    }

	return (
        <Show when={isVisible()} >
            <div class="flex flex-col justify-center items-center">
                <a
                    href={`/pokemons/${pokemon.name}`}
                    class="bg-slate-700 border-2 border-slate-700 rounded-lg shadow-md p-3 group hover:border-slate-100 transition-border duration-400"
                    >
                    <img
                        // transition:name={`${pokemon.name}-image`} -> esto es sugar syntax de astro
                        // las view transitions son del navegador, no de solid, pero podemos colocarlo en el style
                        style={`view-transition-name: ${pokemon.name}-image;`}
                        class="transition-transform duration-400 group-hover:scale-110"
                        src={imageSrc}
                        alt={pokemon.name}
                        />
                    <h2 class="text-center text-2xl font-semibold text-slate-200 capitalize">
                        {pokemon.name}
                    </h2>
                </a>
                <button onClick={deleteFavorite} class="text-red-400 cursor-pointer">Borrar</button>
            </div>
        </Show>
	);
};
