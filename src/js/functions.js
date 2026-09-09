const POKE_API = "https://pokeapi.co/api/v2/pokemon/";


function saludoPersona(nombreP) {
    return ('Hola,' + nombreP + '!');
}
const ejecutarSaludo = saludoPersona("Jhoe Doe");
console.log('Saludo ejecutado');

async function obtenerPokemons(cantidad) {
    console.log(`${POKE_API}?limit=${cantidad}`);

    const pokemons_response = [];
    const response = await fetch(`${POKE_API}?limit=${cantidad}`);
    const pokemon = await response.json();
    console.log(pokemon);

    /*Recorre todos los pokemons que nos devuelve la api */
    for (let index = 0; index < cantidad; index++) {
        pokemons_response.push(pokemon.results[index])
    }
    return pokemons_response
}
async function obtenerPokemon(id) {
    /* */

    const response = await fetch(`${POKE_API}/${id}`);
    const pokemon = await response.json();
    console.log(pokemon);
    return pokemon.name;

    //console.log(pokemon.abilities[0].ability.name);
    // return pokemon;

}


