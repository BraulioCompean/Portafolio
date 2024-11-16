const pokemonName = document.getElementById("pokemon-name");
const pokemonImage = document.getElementById("pokemon-image");
const pokemonWeight = document.getElementById("pokemon-weight");
const pokemonHeight = document.getElementById("pokemon-height");
const containerTypes = document.getElementById("container-types");
const pokemonCard = document.getElementById("card-pokemon");
const audioPokemon = document.getElementById("audio-pokemon")
const pokemonBaseStats = document.querySelectorAll(".h3-base-stat");

function handleInputChange(event) {
    const inputValor = event.target.value;
    buscar(inputValor);
}

function buscar(nombre) {
    const nombreFormateado = nombre.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombreFormateado}`)
        .then((response) => {
            if (response.status == 404) {
                throw new Error("Pokemon no encontrado");
            } else {
                return response.json();
            }
        })
        .then((pokemon) => {
            if (pokemon !== undefined && nombre) {
                console.log(pokemon);
                containerTypes.innerHTML = "";
                pokemonName.innerText =
                    pokemon.name.charAt(0).toUpperCase() +
                    pokemon.name.slice(1);
                pokemonImage.setAttribute(
                    "src",
                    pokemon.sprites.other["official-artwork"].front_default
                );
                pokemonWeight.innerText =
                    Math.round(pokemon.weight * 0.1) + " Kg";
                pokemonHeight.innerText =
                    Math.round(pokemon.height * 0.1) + " M";




                pokemon.types.forEach((element) => {
                    const typeContainer = document.createElement("div");
                    typeContainer.className = "element-types";
                    typeContainer.style.backgroundColor = `var(--${element.type.name})`;
                    const type = document.createElement("h3");
                    type.className = "h3-type-element";
                    type.innerText =
                        element.type.name.charAt(0).toUpperCase() +
                        element.type.name.slice(1);

                    typeContainer.appendChild(type);
                    containerTypes.appendChild(typeContainer);
                    pokemonCard.style.backgroundColor = `var(--${element.type.name})`;
                });

                for (let i = 0; i < pokemonBaseStats.length; i++) {
                    const element = pokemonBaseStats[i];
                    element.innerText = pokemon.stats[i].stat.name.toUpperCase() + " : " + pokemon.stats[i].base_stat
                    
                }
                audioPokemon.setAttribute("src",pokemon.cries.latest)
                audioPokemon.volume = 0.1
            }
        })
        .catch((error) => {
            window.alert(error.message);
        });
}
