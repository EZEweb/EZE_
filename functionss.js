const cart = document.querySelector("#cart");
const cartModalOverlay = document.querySelector(".carrito");
const closeBtn = document.querySelector("#close-btn");
const addToCart = document.getElementsByClassName("boton-anadir"); //da un array
const productRows = document.getElementsByClassName("product-row"); // da un array
//abrir el carrito
cart.addEventListener("click",()=>{
    cartModalOverlay.classList.add("open");
})

//cerrar el carrito
closeBtn.addEventListener("click",()=>{
    cartModalOverlay.classList.remove("open");
})
cartModalOverlay.addEventListener("click", (e)=>{
    if(e.target.classList.contains("carrito")){
        cartModalOverlay.classList.remove("open");
    }
})

//asignarle a cada boton, su funcion
for (let i=0; i < addToCart.length; i++) {
    let boton = addToCart[i];
    boton.addEventListener("click", agregarCarrito)
}

function agregarCarrito(e) {
    let boton = e.target;
    let cartItem = boton.parentElement;
    let prodId = cartItem.getAttribute("id");
    let prodName = cartItem.querySelector("h3").innerText;
    let price = cartItem.querySelector(".product-price").innerText;
    let imageSrc = cartItem.querySelector(".imagen-producto").src;

    agregarElem(prodId, prodName, price, imageSrc);
}

function agregarElem(prodId, prodName, price, imageSrc){
    let productRow = document.createElement("div");
    let productRows = document.querySelector(".productos-seleccionados");
    let prodArray = document.getElementsByClassName("product-row");

    //vamos a ver si el producto ya se agrego o no
    for(let i=0; i < prodArray.length; i++) {
        if(prodArray[i].getAttribute("id")== prodId) {
            alert("Este producto ya existe en el carrito");
            return;
        }
    }
    //inyectar el html al carrito
    let cartRowItem = `
        <div class="product-row" id="${prodId}">
            <img class="cart-image" src="${imageSrc}">
            <span>${prodName}</span>
            <span class="cart-price">${price}</span>
            <input class="product-quantity" type="number" value="1">
            <button class="remove-btn">Borrar</button>
        </div>
    `
    productRow.innerHTML = cartRowItem;
    productRows.append(productRow);
    productRow.querySelector(".remove-btn").addEventListener("click", removeItem);
    productRow.querySelector(".product-quantity").addEventListener("change", cambiarCantidad)
    updatePrice();

    localStorage.setItem("carritoActual", JSON.stringify(cartRowItem));
    console.log (cartRowItem.carritoActual);
}

//eliminar elementos
function removeItem(e) {
    let btnCliked = e.target;
    btnCliked.parentElement.parentElement.remove();
    updatePrice();
}

//cambiemos cantidades
function cambiarCantidad(e){
    let cantidad = e.target.value;
    if(isNaN(cantidad) || cantidad <= 0) {
        cantidad = 1;
    }
    updatePrice();
}

//actualizar el total
function updatePrice() {
    let total = 0;
    for(const producto of productRows) {
        let price = parseFloat(producto.querySelector(".cart-price").innerText.replace("$",""));
        let cantidad = producto.querySelector(".product-quantity").value;
        total += price * cantidad;
    }
    document.querySelector(".precio-total").innerText = "$" + total;
    document.querySelector(".cantidad-en-carro").textContent = productRows.length;
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
    // {id: 2, nombre: "pines", precio: 100},
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

listaProductos.forEach(opciones => {
    let nodo = document.createElement("grid2");
    nodo.innerHTML = `
        <img class="imagen-producto" src="img/${opciones.nombre}.jpg">
        <h3>${opciones.nombre}</h3>
        <span class="product-price">$${opciones.precio}</span>
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
