//declaro las variables principales
const carro = document.querySelector("#carro");
const carritoAbierto = document.querySelector(".carrito");
const botonCerrar = document.querySelector("#boton-cerrar");
const cantidadDeproductosSeleccionados = document.getElementsByClassName("producto-en-carro"); 

//mostrar productos
const traerProductos = () => {
    fetch("listado.json")
        .then(respuesta => (respuesta.json()))
        .then((listadoJson) => {
            let itemizado = listadoJson;
            itemizado.forEach(item => {
                grid4.innerHTML += `<div id="${item.id}">
                    <img class="imagen-producto" src="img/${item.nombre}.jpg">
                    <h3>${item.nombre}</h3>
                    <span class="precio-producto">$${item.precio}</span>
                    <br>
                    <button class="boton-anadir">Comprar</button>
                    <div>
                `
            })
        botonAnadir = document.getElementsByClassName("boton-anadir");
        for (let i=0; i < botonAnadir.length; i++) {
            let boton = botonAnadir[i];
            boton.addEventListener("click", agregarCarrito)
        }
        })
        .catch(error => console.log (error))
    }
traerProductos();

//abrir carrit0 y cerrar carrit0
carro.addEventListener("click",()=>{
    carritoAbierto.classList.add("open");
})

botonCerrar.addEventListener("click",()=>{
    carritoAbierto.classList.remove("open");
})

carritoAbierto.addEventListener("click",(e)=>{
    e.target.classList.contains("carrito") && carritoAbierto.classList.remove("open")
})

//asignar función a cada botón
function agregarCarrito(e) {
    let boton = e.target;
    let itemEncarro = boton.parentElement;
    let idProducto = itemEncarro.getAttribute("id");
    let nombreProducto = itemEncarro.querySelector("h3").innerText;
    let precio = itemEncarro.querySelector(".precio-producto").innerText;
    let imageSrc = itemEncarro.querySelector(".imagen-producto").src;
    agregarElem(idProducto, nombreProducto, precio, imageSrc);
}

function agregarElem(idProducto, nombreProducto, precio, imageSrc){
    let productoEncarro = document.createElement("div");
    let cantidadDeproductosSeleccionados = document.querySelector(".productos-seleccionados");
    let prodArray = document.getElementsByClassName("producto-en-carro");

    //inyectar el html al carrit0
    let productoEncarroYainyectado = `
        <div class="producto-en-carro" id="${idProducto}">
            <img class="imagen-producto" src="${imageSrc}">
            <span class="nombre-producto">${nombreProducto}</span>
            <span class="precio-producto">${precio}</span>
            <input class="cantidadDeproductos" type="number" value="1">
            <button class="remove-btn">Borrar</button>
        </div>
    `
    productoEncarro.innerHTML = productoEncarroYainyectado;
    cantidadDeproductosSeleccionados.append(productoEncarro);
    productoEncarro.querySelector(".remove-btn").addEventListener("click", removeItem)
    productoEncarro.querySelector(".cantidadDeproductos").addEventListener("change", cambiarCantidad)
    precioActual();
}

//eliminar elementos
function removeItem(e) {
    let btnCliked = e.target;
    btnCliked.parentElement.parentElement.remove();
    precioActual();
    localStorage.setItem ("carritoAhora",JSON.stringify(jsonCarrito()));
}

//cambiemos cantidades
function cambiarCantidad(e){
    let cantidad = e.target.value;
    if(isNaN(cantidad) || cantidad <= 0) {
        cantidad = 1;
    }
    precioActual();
    localStorage.setItem ("carritoAhora",JSON.stringify(jsonCarrito()));
}

//actualizar el total
function precioActual() {
    let total = 0;
    for(const producto of cantidadDeproductosSeleccionados) {
        let precio = parseFloat(producto.querySelector(".precio-producto").innerText.replace("$",""));
        let cantidad = producto.querySelector(".cantidadDeproductos").value;
        total += precio * cantidad;
    }
    document.querySelector(".precio-total").innerText = "$" + total;
    document.querySelector(".cantidad-en-carro").textContent = cantidadDeproductosSeleccionados.length;
    localStorage.setItem ("carritoAhora",JSON.stringify(jsonCarrito()));
}

//generando array de productos en carrit0
function jsonCarrito(){
    const carrito = document.querySelectorAll('.producto-en-carro');
    var json_carrito = [];
    carrito.forEach(function(el,i){
    let prod_temp = {'id':'','precio':'','nombre':''};
    prod_temp.nombre= el.querySelector('.nombre-producto').textContent;
    prod_temp.precio= el.querySelector('.precio-producto').textContent;
    prod_temp.id= el.getAttribute('id');
    json_carrito.push(prod_temp);
    });
    return json_carrito;
}

//cargar carrit0 al local
function cargarCarritoDeLocalStorage () {
    var jsoncarrito = JSON.parse(localStorage.getItem('carritoAhora')) || [];
    jsoncarrito.forEach (function (el){
        agregarElem(el.id, el.nombre, el.precio, `img/${el.nombre}.jpg`)
    })
}
cargarCarritoDeLocalStorage();