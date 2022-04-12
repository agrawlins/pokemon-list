// xhr.onreadystatechange
// xhr.readyState
// xhr.status
// xhr.responseText

// xhr.open()
// xhr.send()

// url: https://swapi.co/api/people/1

// const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest()
        // method  // url                     // async?
xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

const populatePokemon = (xhr) => {
    console.log(xhr);
    for (let i = 0; i < xhr.length; i++) {
        const pokemon = xhr[i];
        // const pokemonTranslation = JSON.parse(pokemon);
        let div = document.createElement("div");
        div.setAttribute("id", `${pokemon.name}`);
        let title = document.createElement('h1');
        let image = document.createElement('h1');
        title.textContent = pokemon.name;
        div.append(title);
        document.getElementById("demo").append(div)
        // document.getElementById("pokemonList").innerHTML = `${pokemon.name}`;
    }
}

xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200){
        // console.log(xhr.responseText)
        // console.log(pokemonList.responseText)
        const parse = JSON.parse(xhr.responseText)
        populatePokemon(parse.objects[0].pokemon)
    }
};
