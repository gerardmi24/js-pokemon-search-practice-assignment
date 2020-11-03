document.addEventListener('DOMContentLoaded', () => {
  //YOUR CODE HERE
  const containerId = document.getElementById("pokemon-container")


const fetchPoke = () => {
fetch("http://localhost:3000/pokemon/")
.then(resp => resp.json())
.then(pokemonObj => renderPokemon(pokemonObj))
}

const renderPokemon = (pokemonObj) => {
pokemonObj.forEach(pokemon => {
  addPokeToDom(pokemon)
});
}

const addPokeToDom = (pokemon) => {
const pokeDiv = document.createElement('div')
pokeDiv.dataset.id = pokemon.id
pokeDiv.innerHTML = `
  <div class="pokemon-card">
    <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
        <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
      </div>
    </div>
  </div>
  `
containerId.append(pokeDiv);
}

containerId.addEventListener('click', (e) => {
  if (e.target.dataset.action === 'flip') {
    const flipPoke = POKEMON.find(pokemonObj => pokemonObj.id == e.target.dataset.id)
    if (e.target.src === flipPoke.sprites.front) {
      e.target.src = flipPoke.sprites.back
    }
    else {
      e.target.src = flipPoke.sprites.front
    }
  }
})



fetchPoke();

})

// 1.  Implement a filter functionality for your Pokemon list.
// 2.  Implement a flip functionality on each Pokemon.
// 3.  Your search should include pokemon whose names are **not** exact matches
// 4.  AS A BONUS, add a way to show users details for a particular pokemon: moves, abilities, etc.

// Each Pokemon card might look something like this in HTML:
// <div class="pokemon-card">
//   <div class="pokemon-frame">
//     <h1 class="center-text">charizard</h1>
//     <div class="pokemon-image">
//       <img data-id="7" data-action="flip" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png">
//     </div>
//   </div>
// </div>