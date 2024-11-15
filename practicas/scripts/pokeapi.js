let nombreTxt = document.getElementById("pokemon-name")
let typesList = document.getElementById("pokemon-types")
let image = document.getElementById("pokemon-image")



// for (let i = 1; i < 50; i++) {

//     fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//     .then((response) => response.json())
//     .then((pokemon) => {
//         // console.log(pokemon.name)
//         console.log(pokemon.types[0].type.name)
//         // console.log(pokemon.sprites.front_default)
//         nombreTxt.innerText = pokemon.name
//         let lista = document.createElement("ul")
//         typesList.appendChild(lista)
//         pokemon.types.forEach(element =>{
//             let nombre = element.type.name
//             let li = document.createElement("li")
//             li.innerHTML = nombre
//             lista.appendChild(li)            

//         })
//         image.setAttribute("src",pokemon.sprites.front_default)
      
//     })
//     .catch((error) => console.error(error))
    
// }

// Prueba for


fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then((response) => response.json())
.then((pokemon) => {
    // console.log(pokemon.name)
    console.log(pokemon.types[0].type.name)
    // console.log(pokemon.sprites.front_default)
    nombreTxt.innerText = pokemon.name
    let lista = document.createElement("ul")
    typesList.appendChild(lista)
    pokemon.types.forEach(element =>{
        let nombre = element.type.name
        let li = document.createElement("li")
        li.innerHTML = nombre
        lista.appendChild(li)            

    })
    image.setAttribute("src",pokemon.sprites.front_default)
  
})
.catch((error) => console.error(error))
