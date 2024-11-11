//LUNES SINTAXIS
console.log("Hola, mundo desde un archivo externo!");

//TIPOS DE DATOS
let nombre = "Braulio";
let edad = 20;
let objeto = { nombre: "Braulio", edad: 20 };
let numeros = [1, 2, 3, 4, 5];

function suma(a, b) {
    return a + b;
}
let fecha = new Date();

console.table(objeto);
console.table(numeros);
console.log(suma(30, 7));
console.log(fecha);

// hoisting OPERADORES
let a = 5;
let b = 3;

let resultado = ((a + b - 2) * 3) / 2;
console.log(resultado);
resultado += 1;

console.log(a > b);
console.log(a === b);

console.log(resultado % 3 == 0 ? "👍" : "👎");

let cadena = "Hola," + "mundo!";
console.log(cadena); //Hola,mundo!

//CONDICIONALES
let yedad = 20;

if (yedad >= 18) {
    console.info("Eres mayor de edad");
} else {
    console.warn("Eres menor de edad");
}

let anio = parseInt(prompt("En que año naciste?"));
let anio_actual = new Date().getFullYear();
yyedad = anio_actual - anio;

if (yyedad >= 18) {
    console.log("Eres un adulto");
} else if (edad >= 12 && edad < 18) {
    if (yyedad == 12) {
        console.log("Eres un preadolescente");
    } else {
        console.log("Eres un adolescente");
    }
} else {
    console.warn("Eres un niño");
}

//foto 2:40 arriba
let dia = parseInt(prompt("Ingresa un número del 1 al 7"));
// dia += 0;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.error("Día no válido");
}

// FUNCIONES miercoles 06 11 2024
let resta = function (a, b) {
    return a - b;
};
console.log(resta(5, 3)); //2

//FUNCIONES
let multiplicacion = (a, b) => a * b;
console.log(multiplicacion(5, 3)); //15

objeto = {
    nombre: "Braulio",
    saludar: function () {
        setTimeout(() => {
            console.log(`Hola, soy ${this.nombre}`);
        }, 1000);
    },
};
objeto.saludar();
// ARREGLOS

let arreglo = new Array(1, 2, 3, 4, 5);
let colores = ["rojo", "verde", "azul"];

console.log(colores[1]);

let frutas = ["🍎", "🍐", "🍇", "🍓"];
frutas.push("🥭");
frutas.unshift("🍌");
frutas.pop();
console.log(frutas);

let frutas2 = frutas.slice(1, 3);
console.log(frutas2.join(" - "));
console.log(frutas.length);
console.log(frutas.indexOf("🍇"));

let frutas3 = frutas.map((fruta) => fruta + "🍉");
console.table(frutas3);
