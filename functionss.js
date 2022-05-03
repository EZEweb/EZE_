console.log(document.getElementById("afiches"));
console.log(document.getElementsByClassName("logo"));

function compra () {
let tarjeta = parseFloat(prompt("Ingrese los 16 números de su tarjeta:"));
let mes = parseInt(prompt("Ingrese el mes de vencimiento de su tarjeta:"));
while(mes !=13  || mes <= 13)  {
    if (mes >= 13) {
        alert(`el mes es erroneo, tipee de nuevo`);
        mes = parseInt(prompt("Ingrese el mes de vencimiento de su tarjeta:"));
    } else {
        break;
    }
}
let anio = parseInt(prompt("Ingrese el año de vencimiento de su tarjeta:"));
while(anio != 21 || anio >=21 )  {
    if (anio <= 21) {
        alert(`el año es erroneo, o su tarjeta está vencida, tipee de nuevo`);
        anio = parseInt(prompt("Ingrese el año de vencimiento de su tarjeta:"));
    } else {
        break;
    }
}
let cod = parseFloat(prompt("Ingrese el código de seguridad de su tarjeta:"));
alert(`¿Están bien los siguientes datos?: ${tarjeta} - ${mes}/${anio} -  ${cod} -
Si está bien, pulse aceptar, de lo contrario, recargue la página.`);

let  datosTarjeta = [tarjeta,mes,anio,cod];
console.log (datosTarjeta);
}

class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

let listaProductos = [
    {id: 0, nombre: "afiche", precio: 800},
    {id: 1, nombre: "sticker", precio: 200},
    {id: 2, nombre: "pines", precio: 100},
];

localStorage.setItem("producto", JSON.stringify(listaProductos));
console.log (listaProductos.producto);

function guardarProducto() {
    let id = document.getElementById("id").value;
    let nombre = document.getElementById("nombre").value;
    let precio = parseInt(document.getElementById("precio").value);

    let nuevoProd = new Producto (id, nombre, precio);
    listaProductos.push(nuevoProd);
}

listaProductos.forEach(opciones => {
    let nodo = document.createElement("grid2");
    nodo.innerHTML = `
        <img src="img/${opciones.nombre}.jpg">
        <h3>${opciones.nombre}</h3>
        <p>Precio $${opciones.precio}</p>
    `
    document.getElementById("grid2").appendChild(nodo);
})


function sumarIva(){
listaProductos.forEach(producto => {
    let precioMasIva = producto.precio * 1.21;
    alert(`el precio de ${producto.nombre} más IVA es $${precioMasIva}`)
})
}

const boton = document.querySelector("#btn");

boton.addEventListener("click", ()=>{
    guardarProducto();
})

const botonIva = document.querySelector("#btnIva");

botonIva.addEventListener("click", ()=>{
    sumarIva();
})