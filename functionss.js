//declarar elementos carrito
const carro = document.querySelector("#carro");
const carritoAbierto = document.querySelector(".carrito");
const botonCerrar = document.querySelector("#boton-cerrar");
const botonAnadir = document.getElementsByClassName("boton-anadir");
const productoSeleccionado = document.getElementsByClassName("product-row"); 

//abrir carrito
carro.addEventListener("click",()=>{
    carritoAbierto.classList.add("open");
})

//cerrar carrito
botonCerrar.addEventListener("click",()=>{
    carritoAbierto.classList.remove("open");
})

carritoAbierto.addEventListener("click",(e)=>{
    if(e.target.classList.contains("carrito")){
        carritoAbierto.classList.remove("open");
    }
})

//asignarle a cada boton, su funcion
for (let i=0; i < botonAnadir.length; i++) {
    let boton = botonAnadir[i];
    boton.addEventListener("click", agregarCarrito)
}

function agregarCarrito(e) {
    let boton = e.target;
    let cartItem = boton.parentElement;
    let idProducto = cartItem.getAttribute("id");
    let nombreProducto = cartItem.querySelector("h3").innerText;
    let precio = cartItem.querySelector(".product-price").innerText;
    let imageSrc = cartItem.querySelector(".imagen-producto").src;
    agregarElem(idProducto, nombreProducto, precio, imageSrc);
}

function agregarElem(idProducto, nombreProducto, precio, imageSrc){
    let productRow = document.createElement("div");
    let productoSeleccionado = document.querySelector(".productos-seleccionados");
    let prodArray = document.getElementsByClassName("product-row");

    //vamos a ver si el producto ya se agrego o no
    for(let i=0; i < prodArray.length; i++) {
        if(prodArray[i].getAttribute("id")== idProducto) {
            alert("Este producto ya existe en el carrito");
            return;
        }
    }

    //inyectar el html al carrito
    let productoOfrecido = `
        <div class="product-row" id="${idProducto}">
            <img class="cart-image" src="${imageSrc}">
            <span>${nombreProducto}</span>
            <span class="cart-price">${precio}</span>
            <input class="product-quantity" type="number" value="1">
            <button class="remove-btn">Borrar</button>
        </div>
    `
    productRow.innerHTML = productoOfrecido;
    productoSeleccionado.append(productRow);
    productRow.querySelector(".remove-btn").addEventListener("click", removeItem);
    productRow.querySelector(".product-quantity").addEventListener("change", cambiarCantidad)
    precioActual();

//esto no funciona :(
    localStorage.setItem("carritoActual", JSON.stringify(productoOfrecido));
    console.log (productoOfrecido.carritoActual);

    // let estadoCarrito = JSON.stringify(productoOfrecido);

    // localStorage.setItem("carritoActual", JSON.stringify(estadoCarrito));
    // console.log (estadoCarrito.carritoActual);
}

//eliminar elementos
function removeItem(e) {
    let btnCliked = e.target;
    btnCliked.parentElement.parentElement.remove();
    precioActual();
}

//cambiemos cantidades
function cambiarCantidad(e){
    let cantidad = e.target.value;
    if(isNaN(cantidad) || cantidad <= 0) {
        cantidad = 1;
    }
    precioActual();
}

//actualizar el total
function precioActual() {
    let total = 0;
    for(const producto of productoSeleccionado) {
        let precio = parseFloat(producto.querySelector(".cart-price").innerText.replace("$",""));
        let cantidad = producto.querySelector(".product-quantity").value;
        total += precio * cantidad;
    }
    document.querySelector(".precio-total").innerText = "$" + total;
    document.querySelector(".cantidad-en-carro").textContent = productoSeleccionado.length;
}

///hasta acá carrito nuevo

console.log(document.getElementById("afiches"));
console.log(document.getElementsByClassName("logo"));

class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

let listaProductos = [
    {id: 0, nombre: "afiche", precio: 800},
    //{id: 1, nombre: "sticker", precio: 200},
    //{id: 2, nombre: "pines", precio: 100},
];

// localStorage.setItem("producto", JSON.stringify(listaProductos));
// console.log (listaProductos.producto);

function guardarProducto() {
    let id = document.getElementById("id").value;
    let nombre = document.getElementById("nombre").value;
    let precio = parseInt(document.getElementById("precio").value);

    let nuevoProd = new Producto (id, nombre, precio);
    listaProductos.push(nuevoProd);
}

// esto lo saco porque lo hice manualmente en el html

// listaProductos.forEach(opciones => {
//     let nodo = document.createElement("grid2");
//     nodo.innerHTML = `
//         <img class="imagen-producto" src="img/${opciones.nombre}.jpg">
//         <h3>${opciones.nombre}</h3>
//         <span class="product-price">$${opciones.precio}</span>
//     `
//     document.getElementById("grid2").appendChild(nodo);
// })


function sumarIva(){
listaProductos.forEach(producto => {
    let precioMasIva = producto.precio * 1.21;
    alert(`el precio de ${producto.nombre} más IVA es $${precioMasIva}`)
})
}

const boton = document.querySelector("#btn");

//esto activa el boton para añadir un producto nuevo (no necesario) en compra.html
// boton.addEventListener("click", ()=>{
//     guardarProducto();
// })

const botonIva = document.querySelector("#btnIva");

//esto activa el boton del iva en compra.html
// botonIva.addEventListener("click", ()=>{
//     sumarIva();
// })

//Con respecto al proyecto:
//Como producto final: resta solucionar API y local/sesionStorage
//Como entrega coder: solucionar localStorage, cambiar algunas funciones con operadores avanzados y hacer API, limpiar el js no vendría mal
//html y css: ordenar y actualizar