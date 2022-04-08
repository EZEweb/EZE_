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
alert(`¿Están bien los siguientes datos?: ${tarjeta}
${vencimiento}
${cod}
Si está bien, pulse aceptar, de lo contrario, recargue la página.`);
