const pokemonNAME = document.querySelector('.pokemon_name')
const pokemonTYPE1 = document.querySelector('.pokemon_type_1')
const pokemonTYPE2 = document.querySelector('.pokemon_type_2')
const pokemonID = document.querySelector('.pokemon_id')
const pokemonWEIGHT = document.querySelector('.pokemon_weight')
const pokemonIMG = document.querySelector('.pokemon_img')

const pokemonFORM = document.querySelector('.form')
const pokemonSEARCH = document.querySelector('.search_pokemon')

const startSEARCH = 1

const card = document.querySelector('.card')

const buscaPokemon = async (pokemon) =>{
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await apiResponse.json();
    return data;
}

const renderPokemon = async (pokemon) =>{

    const data = await buscaPokemon(pokemon)

    pokemonNAME.textContent = data.name; // Determina o NAME do pokemon
    pokemonTYPE1.textContent = data.types[0].type.name; // Determina o TYPE do pokemon
    if(data.types.length == 2){
        pokemonTYPE2.style.display = 'block'
        pokemonTYPE2.textContent = data.types[1].type.name;
    }else{
        pokemonTYPE2.style.display = 'none'
    } //Verificação para pokémon que possuem apenas um type 

    const typePokemon = data.types[0].type.name;
    const typesPokemon = ['normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy']
    switch(typePokemon){
        case 'normal':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('normal')
            break
        case 'water':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('water')
            break
        case 'fire':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('fire')
            break
        case 'grass':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('grass')
    }

    
    pokemonIMG.src = data['sprites']['versions']['generation-v']['black-white']['front_default'];
    pokemonID.textContent = data.id; // Determina a ID do pokemon
    pokemonWEIGHT.textContent = data.weight


}

renderPokemon(startSEARCH)

pokemonFORM.addEventListener('submit', (event)=>{
    event.preventDefault()
    renderPokemon(pokemonSEARCH.value)
    pokemonSEARCH.value = ''
})
