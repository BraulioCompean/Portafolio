const pokemonName = document.getElementById("pokemon-name"); //OBTENEMOS EL ELEMENTO h1 QUE MOSTRARA EL NOMBRE DEL POKEMON
const pokemonImage = document.getElementById("pokemon-image"); // OBTENEMOS EL ELEMENTO img QUE MOSTRARA AL POKEMON
const pokemonWeight = document.getElementById("pokemon-weight"); // OBTENEMOS EL ELEMENTO dd QUE MOSTRARA EL PESO DEL POKEMON
const pokemonHeight = document.getElementById("pokemon-height"); // OBTENEMOS EL ELEMENTO dd QUE MOSTRARA LA ALTURA DEL POKEMON
const containerTypes = document.getElementById("container-types"); //OBTENEMOS EL CONTENEDOR DIV DE LOS TIPOS QUE TIENE EL POKEMON PARA ASI PODER AÑADIRSELOS DESPUES
const pokemonCard = document.getElementById("card-pokemon"); // OBTENEMOS EL CONTENEDOR PRINCIPAL DE LA CARTA DEL POKEMON PARA PODER DARLE ESTILOS MAS TARDE
const audioPokemon = document.getElementById("audio-pokemon"); // OBTENEMOS EL ELEMENTO audio PARA INSERTAR EL AUDIO DEL POKEMON
const pokemonBaseStats = document.querySelectorAll(".h3-base-stat"); //POKEMON OBTENEMOS TODOS LOS ELEMENTOS h3 QUE TENGAN LA CLASE ".h3-base-start" Y LOS GUARDAREMOS COMO UN ARRAY

function handleInputChange(event) {
    //FUNCION PARA OBTENER EL ID O NOMBRE DEL POKEMON QUE SE HA INTRODUCIDO EN EL INPUT
    const inputValor = event.target.value;
    buscarPokemon(inputValor);
}

function buscarPokemon(nombre) {
    //FUNCION QUE SE EJECUTARA CADA VEZ QUE HAYA UN CAMBIO EN EL INPUT
    const nombreFormateado = nombre.toLowerCase(); // FORMATEAMOS EL NOMBRE QUE RECIBE LA FUNCION PARA QUE PUEDA ACEPTAR TANTO MAYUSCULAS COMO MINUSCULAS
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombreFormateado}`) //HACEMOS EL LLAMADO A LA API
        .then((response) => {
            if (response.status == 404) {
                //EN CASO DE QUE EL ESTADO DE LA RESPUESTA SEA 404, LO CUAL SIGNIFICA QUE EL ID O NOMBRE DEL POKEMON NO ES VALIDO, ARROJAREMOS UN ERROR
                throw new Error("Pokemon no encontrado");
            } else {
                return response.json(); //DE LO CONTRARIO, REGRESAREMOS LA RESPUESTA EN FORMATO JSON
            }
        })
        .then((pokemon) => {
            if (pokemon !== undefined && nombre) {
                //VERIFICAMOS QUE LA RESPUESTA NO SEA UNDEFINED Y QUE EXISTE UN NOMBRE
                console.clear();
                console.log(pokemon);
                containerTypes.innerHTML = ""; //RESETEAMOS EL CONTENEDOR DE TIPOS DEL POKEMON
                pokemonName.innerText = //AGREGAREMOS EL NOMBRE DEL POKEMON AL ELEMENTO h1 = (pokemonName)
                    pokemon.name.charAt(0).toUpperCase() + //CONVERTIMOS EL PRIMER CARACTER A MAYUSCULAS Y CONCATENAMOS CON EL RESTO DE LA CADENA
                    pokemon.name.slice(1);
                pokemonImage.setAttribute(
                    // ACTUALIZAMOS LA FUENTE DE LA IMAGEN QUE USAREMOS (SRC) CON EL NUEVO LINK
                    "src",
                    pokemon.sprites.other["official-artwork"].front_default
                );
                
                pokemonWeight.innerText = //FORMATEAMOS LOS DATOS QUE NOS DA LA API
                    Math.round(pokemon.weight * 0.1) + " Kg";
                pokemonHeight.innerText =
                    Math.round(pokemon.height * 0.1) + " M";

                pokemon.types.forEach((element) => {
                    //RECORREMOS EL ARRAY QUE NOS DA LA API, POR CADA TIPO CREAREMOS SU RESPECTIVA TARJETA
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
                    pokemonCard.style.backgroundColor = `var(--${element.type.name})`; //UTILIZAREMOS LAS VARIABLES DEFINIDAS QUE TENEMOS EN NUESTRO ARCHIVO CSS, SI EL TIPO DE POKEMON Y EL NOMBRE DE LA VARAIBLE COINCIDEN EL FONDO SE CAMBIARA
                });

                for (let i = 0; i < pokemonBaseStats.length; i++) {
                    const element = pokemonBaseStats[i];
                    element.innerText =
                        pokemon.stats[i].stat.name.toUpperCase() +
                        " : " +
                        pokemon.stats[i].base_stat;
                }
                audioPokemon.setAttribute("src", pokemon.cries.latest); //AGREMAMOS LA FUENTE DEL SONIDO AL ELEMENTO audio = audioPokemon
                audioPokemon.volume = 0.1; //SETEAMOS EL VOLUMEN A 0.1 PARA QUE NO ESTE AL MAXIMO
            }
        })
        .catch((error) => {
            window.alert(error.message); //EN CASO DE QUE EL POKEMON NO EXISTA, SE LANZARA UNA VENTANA QUE NOS DIRA EL ERROR
        });
}


