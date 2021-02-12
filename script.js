const container = document.querySelector('.container')
const searchInput = document.querySelector('#searchComponent')

const apiEnd = 'https://api.pokemontcg.io/v1/cards?name=charizard';
var apiEndSearch = 'https://api.pokemontcg.io/v1/cards?name=';

pokedexApi();

async function pokedexApi() {
    var res = await fetch(apiEnd);
    res = await res.json()
    res.cards.forEach(card => {
        let image = document.createElement('img')
        image.src = card.imageUrl;
        image.alt = card.name;
        image.className = 'apiImage'
        container.appendChild(image);
    })
}

function clearScreen() {
    document.querySelectorAll('.apiImage').forEach(e => e.remove());
}

async function searchPokemon() {
    let pokemon = searchInput.value;
    if (pokemon.length > 3) {
        clearScreen();
        var res = await fetch(apiEndSearch + pokemon)
        res = await res.json();
    } else if(pokemon.length == 0) {
        pokedexApi();
    }
}