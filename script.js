const container = document.querySelector('.container')

const apiEnd = 'https://api.pokemontcg.io/v1/cards?name=charizard';

(async function pokedexApi() {
    var res = await fetch(apiEnd);
    res = await res.json()
    // console.log(res);
    res.cards.forEach(card => {
        // code
        let image = document.createElement('img')
        image.src = card.imageUrl;
        image.alt = card.name;
        image.className = 'apiImage'
        container.appendChild(image);
    })
})()