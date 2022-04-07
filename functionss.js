let tarjeta = parseFloat(prompt("Ingrese los 16 números de su tarjeta:"));
let vencimiento = parseFloat(prompt("Ingrese mes y año del vencimiento de su tarjeta: MM/AA"));
let cod = parseFloat(prompt("Ingrese el código de seguridad de su tarjeta:"));
alert(`¿Están bien los siguientes datos?: ${tarjeta}
${vencimiento}
${cod}
Si está bien, pulse aceptar, de lo contrario, recargue la página.`);
