const pokemonImg = document.querySelector('.pokemon_img')
const searchPokemon = document.querySelector('.search_pokemon')


const buscaPokemon = async (pokemon) =>{
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await apiResponse.json();
    return data;
}

searchPokemon.addEventListener('submit', (event)=>{
    event.preventDefault();

})