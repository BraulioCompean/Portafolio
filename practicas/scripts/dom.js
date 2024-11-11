let titulo = document.getElementById("titulo")
console.log(titulo.textContent)

let parrafos = document.getElementsByTagName("p")
console.table(parrafos)


let parrafos_arreglo = document.getElementsByClassName("parrafo")
console.log(parrafos_arreglo[1].textContent)

let parrafo = document.querySelector(".parrafo")
console.log(parrafo.textContent)
 

titulo.style.color = "blue"



Array.from(parrafos).forEach((elemento,index) =>{
    elemento.innerText = "Nuevo parrafo " + (index+1)
})


parrafos_arreglo[1].style.backgroundColor = "yellow"
parrafos_arreglo[1].innerHTML = "<strong>Nuevo Parrafo desde JS</strong>"

parrafo.className = "nuevo-parrafo"

let parrafoNuevo = document.createElement("p")
parrafoNuevo.innerText = "Este parrafo tiene un emoji 📚"
document.body.appendChild(parrafoNuevo)
console.log(parrafoNuevo)


let h1 = document.querySelector("h1")
h1.innerText = "titulo dinamico"


let hr = document.createElement("hr")

let nuevoParrafo = document.createElement("p")
nuevoParrafo.innerText = "holaaaa"
document.body.insertBefore(nuevoParrafo,h1)
// document.body.insertAfter(h1,nuevoParrafo)






parrafoNuevo.prepend(h1);
parrafoNuevo.prepend(hr);

// let ultimo = parrafos[3];
// ultimo.remove();

let padre_parrafo = parrafoNuevo.parentElement;
console.log(padre_parrafo);

let lista = document.createElement("ol");
for (let i = 1; i <= 5; i++){
    let item = document.createElement("li");
    item.innerText = `Elemento ${i}`;
    lista.appendChild(item);
}
padre_parrafo.appendChild(lista);

// document.body.innerHTML='';