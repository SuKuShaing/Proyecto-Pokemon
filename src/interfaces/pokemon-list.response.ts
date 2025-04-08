export interface PokemonListResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}

/*
Paso para crear esto

1) hacer un petición con thunder client a la url https://pokeapi.co/api/v2/pokemon/
2) copiar el resultado
3) ejecutar ctrl + shift + p y buscar "Paste JSON as Code"
4) Colocar el nombre de la interfaz, en mi caso PokemonListResponse
5) aparece todo el código de la interfaz que está arriba de este comentario
*/ 
