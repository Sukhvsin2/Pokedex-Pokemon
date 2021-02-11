const container = document.querySelector('.container')

const apiEnd = 'https://api.pokemontcg.io/v1/cards?name=charizard';

(async function pokedexApi() {
    var res = await fetch(apiEnd);
    res = await res.json()
    res.forEach(card => {
        // code
        
    })
})()