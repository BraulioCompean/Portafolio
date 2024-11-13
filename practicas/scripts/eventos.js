function saludar() {
    let salida = document.getElementById("salida-boton");
    salida.innerText = "Hola desde la funcion saludar";
}

let otro_boton = document.getElementById("otro-boton");
otro_boton.addEventListener("click", () => {
    let salida = document.getElementById("salida-otro");
    salida.innerText = "Otro saludo";
});

otro_boton.addEventListener("mouseenter", function () {
    this.innerText = "Entra el mouse";
});

otro_boton.addEventListener("mouseleave", function () {
    this.innerText = "Sale el mouse";
});

let nombreTxt = document.getElementById("nombre");
let salida_input = document.getElementById("salida_teclado");

nombreTxt.addEventListener("keydown", function (event) {
    salida_input.innerHTML = `Se presiono <kbd>${event.key}</kbd>`;
});

let formulario = document.getElementById("miForm");


formulario.addEventListener("submit",function(event){
    event.preventDefault()
    // alert("Se intento procesar el formulario")

    let aTxt = document.getElementById('a')
    let bTxt = document.getElementById('b')
    // console.log(aTxt,bTxt)
    
    let a = parseInt(aTxt.value)
    let b = parseInt(bTxt.value)

    let salida = document.getElementById("salida")
    let resultado =  a + b
    salida.innerHTML = resultado
})
