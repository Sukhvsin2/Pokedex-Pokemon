const container = document.querySelector('.container')
const searchInput = document.querySelector('#searchComponent')

const apiEnd = 'https://api.pokemontcg.io/v2/cards?page=1&pageSize=25';
var apiEndSearch = 'https://api.pokemontcg.io/v2/cards?q=name:';

pokedexApi();

function setCards(res) {
    console.log(res);
    res.data.forEach(card => {
        let image = document.createElement('img')
        image.src = card.images.large;
        image.alt = card.name;
        image.className = 'apiImage'
        container.appendChild(image);
    })
}

async function pokedexApi() {
    var res = await fetch(apiEnd);
    res = await res.json()
    setCards(res);
}

function clearScreen() {
    document.querySelectorAll('.apiImage').forEach(e => e.remove());
    document.querySelectorAll('.loadingComponent').forEach(e => e.remove());
    document.querySelectorAll('.NoDataComponent').forEach(e => e.remove());
}

function loadingText() {
    clearScreen();
    const loading = document.createElement('div')
    loading.innerHTML = 'Loading Data...'
    loading.className = 'loadingComponent'
    container.appendChild(loading)
}

function noDataFound() {
    clearScreen();
    const loading = document.createElement('div')
    loading.innerHTML = 'No Data Found 💩'
    loading.className = 'NoDataComponent'
    container.appendChild(loading)    
}

async function searchPokemon() {
    let pokemon = searchInput.value;
    if (pokemon.length > 3) {
        loadingText();
        try {
            var res = await fetch(apiEndSearch + pokemon + '*&pageSize=25&page=1')
            res = await res.json();
            if (res.data.length == 0) noDataFound();
            else {
                clearScreen();
                setCards(res);
            }
        } catch (error) {
            console.log(error);
        }
    } else if (pokemon.length == 0) {
        clearScreen();
        pokedexApi();
    }
}