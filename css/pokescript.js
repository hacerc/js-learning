const pokeApi="https://pokeapi.co/api/v2"
const getAllPokemon= async()=>{
    const response= await fetch(pokeApi+"/pokemon/?limit=151")
    const data=await response.json()
    return data.results
}
// getAllPokemon().then(data=> console.log(data))
const getPokemon=async(pokemon)=>{
    try {
        const response=await fetch(pokemon.url)
        const data=await response.json()
        return data;
    } catch (error) {
        console.log(error);
    }
}
getAllPokemon().then((pokemons)=>{
    pokemons.forEach(pokemon => {
        getPokemon(pokemon).then((data)=>{renderPokemonData(data)})
    });
})

const renderPokemonData = (pokemonData) => {
    //main
    const main = document.querySelector("main")
    
    



//     const main = document.querySelector("main")
//     //pokemon card
//     const pokeCard = document.createElement("div");
//     pokeCard.classList.add("card");
//     //img container
//     const imgContainer = document.createElement("div");
//     imgContainer.classList.add("img-container");
//     //img
//     const pokemonImg = document.createElement("img");
//     pokemonImg.setAttribute("src", pokemonData.sprites.other.dream_world.front_default)

//     const pokeContent = document.createElement("div");
//     pokeContent.classList.add("card-content");

//     const pokeName = document.createElement("h3");
//     pokeName.innerText = `${pokemonData.id} - ${pokemonData.name}`

//     const pokeType = document.createElement("h4");
//     pokeType.innerText = "Types:"
//     const typeList =document.createElement("ul");
    let typeListElements = "";

    pokemonData.types.forEach(obj=>{
        typeListElements += `<li>${obj.type.name}</li>`
    })
//     typeList.innerHTML = typeListElements;
    
//     imgContainer.append(pokemonImg);
//     pokeContent.append(pokeName);
//     pokeContent.append(pokeType);
//     pokeContent.append(typeList);
//     pokeCard.append(imgContainer);
//     pokeCard.append(pokeContent);
    // main.append(pokeCard);

    const template= `<div class="card">
    <div class="img-container">
      <img src=${pokemonData.sprites.other.dream_world.front_default} alt="">
    </div>
    <div class="card-content">
      <h3>${pokemonData.id} - ${pokemonData.name}</h3>
      <h4>Types</h4>
      <ul>
        ${typeListElements}
        </ul>
    </div> </div>`
    main.innerHTML+=template;
}



