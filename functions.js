// const menux = document.querySelector('#menu_on');
// const menu_desplegado = document.querySelector('nav');
// const menu_oculto = document.querySelector('.cerrarmenux');

// menux.addEventListener("click",()=>{
//   menu_desplegado.classList.add("open");
// })

// menu_oculto.addEventListener("click",()=>{
//   menu_desplegado.classList.remove("open");
// })

// menu_desplegado.addEventListener("click",(e)=>{
//   e.target.classList.contains("carrito") && carritoAbierto.classList.remove("open")
// })


$( document ).ready(function() {
    $('#menu_on').click(function(){
    	$('body').toggleClass('visible_menu');
    })
    $('#cerrarmenux').click(function(){
      $('body').toggleClass('visible_menu');
    })  
});