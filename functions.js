// const menux = document.querySelector('#hamburguesa');
// const menu_desplegado = document.querySelector('nav');
// const menu_oculto = document.querySelector('#cerrarmenux');

// menux.addEventListener("click",()=>{
//   menu_desplegado.classList.add("open");
// })

// menuxclose.addEventListener("click",()=>{
//   menu_desplegado.classList.remove("open");
// })

// menu_desplegado.addEventListener("click",(e)=>{
//   e.target.classList.contains("carrito") && carritoAbierto.classList.remove("open")
// })


$( document ).ready(function() {
    $('#menu_on').click(function(){
    	$('body').toggleClass('visible_menu');
    })
    $('#menu_off').click(function(){
      $('body').toggleClass('visible_menu');
    })  
});