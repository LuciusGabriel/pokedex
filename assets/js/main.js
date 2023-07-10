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
        case 'fire':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('fire')
            break
        case 'water':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('water')
            break
        case 'grass':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('grass')
            break
        case 'flying':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('flying')
            break
        case 'fighting':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('fighting')
            break
        case 'poison':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('poison')
            break
        case 'electric':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('electric')
            break
        case 'ground':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('ground')
            break
        case 'rock':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('rock')
            break
        case 'psychic':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('psychic')
            break
        case 'ice':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('ice')
            break
        case 'bug':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('bug')
            break
        case 'ghost':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('ghost')
            break
        case 'steel':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('steel')
            break
        case 'dragon':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('dragon')
            break
        case 'dark':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('dark')
            break
        case 'fairy':
            card.classList.remove('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy')
            card.classList.add('fairy')
            break
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
