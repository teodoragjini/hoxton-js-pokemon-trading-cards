// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

let ul = document.getElementsByClassName('cards')[0]

function createPokemon(pokemon){
    let li = document.createElement('li')
    li.setAttribute('class', 'card')

    let h2 = document.createElement('h2')
    h2.setAttribute('class', 'card--title')
    h2.append(document.createTextNode(pokemon.name))
    li.append(h2)

    let img = document.createElement('img')
    img.setAttribute('width', '256')
    img.setAttribute('class', 'card--img')
    img.setAttribute('src', pokemon.sprites.other["official-artwork"].front_default)
    li.append(img)

    let ul2 = document.createElement('ul')
    ul2.setAttribute('class','card--text')

    for( let stat of pokemon.stats) {
        let liStat = document.createElement('li')
        liStat.append(
            document.createTextNode(
            `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
            )
        )
        ul2.append(liStat)
    }

    li.append(ul2)


    ul.append(li)
}

for(let pokemon of data) {
    createPokemon(pokemon)
}