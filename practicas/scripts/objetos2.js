// let ventana = window

// ventana.addEventListener("resize",function(){
//     console.log(
//         "Dimensiones : ",ventana.innerWidth,ventana.innerHeight)
// })

// ventana.addEventListener("scroll",function(){
//     console.log("La posicion del scroll es: ", ventana.scrollX,ventana.scrollY)
// })


// let nombre = prompt("Como te llamas ?")

// if(nombre){
//     alert(`Hola ${nombre}`)
// }else{
//     alert("Anonimo")
// }



let lista = document.getElementById("lista")

function registro(texto){
    let item = document.createElement("li")
    item.innerText = texto
    return item;
}

lista.appendChild(registro("DOM CARGADO"))


let timer = setTimeout(()=>{
    lista.appendChild(registro("A los 3 segundos ⏰"))
},3000)


// let repetidor = setInterval(() => {
//     lista.appendChild(registro("Cada 1.5 segundos 🕰️"))
// }, 1500);

let pararRepetidor = document.getElementById("pararRepetidor")
let activaTimer = document.getElementById("activaTimer")
activaTimer.addEventListener("click",() =>{
    lista.appendChild(registro("Inicio timer"))
    timer.setTimeout(3000)
})

console.table(location)
let secure = document.getElementById("secure")
if(location.protocol.value == "https"){
    SecurityPolicyViolationEvent.innerText("Seguro")

}else{
    secure.innerText="No seguro"
}



let fecha_actual = new Date()

console.log(fecha_actual.getFullYear())
console.log(fecha_actual.getMonth())
console.log(fecha_actual.getDate())
console.log(fecha_actual.getHours())
console.log(fecha_actual.getMinutes())
console.log(fecha_actual.getSeconds ())


let navidad_2024 = new Date("2024-12-24 12:00:00")
let fin_2024 = new Date(2024,11,31,23,59,59)
console.log(navidad_2024)
console.log(fin_2024)





