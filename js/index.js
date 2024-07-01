let resultadoElement = document.getElementById('resultado');
let cuotasInput = document.getElementById('cuotas');
let precioInput = document.getElementById('precio');
let interesInput = document.getElementById('interes');
let saldoInput = document.getElementById('saldo');
let cuotas = 1;
let precio = 1;
let interes = 1;
let saldo = 100_000;
cuotasInput.oninput = e => cuotas = parseInt(cuotasInput.value);
precioInput.oninput = e => precio = parseInt(precioInput.value);
interesInput.oninput = e => interes = parseInt(interesInput.value);
saldoInput.oninput = e => saldo = parseInt(saldoInput.value);

//* Preenrega 3
//historial de calculos con json guardado en local storage
historial = localStorage.getItem('historial')
historialAUX = [];

if (historial == null) {
    historial = [];
    console.log('el historial estaba vacio');
} else {
    historial = JSON.parse(historial);
    historialAUX = historial;
    // for (let index = 0; index < historialAUX.length; index++) {
    //     const element = historialAUX[index];
    //     historialAUX[index] = JSON.parse(element);
    // }
}
console.log(historial);
console.log(historialAUX);
if (historialAUX != []) {
    historialHTML = '';
    for (let index = 0; index < historialAUX.length; index++) {
        const calculo = historialAUX[index];
        historialHTML = historialHTML + `<div class='calculo'><div class='calcItem'>Cuotas:${calculo.cuotas}</div><div class='calcItem'>Interes:${calculo.interes}</div><div class='calcItem'>Precio:${calculo.precio}</div><div class='calcItem'>Saldo:${calculo.saldo}</div></div>`

    }
    document.getElementById('historial').innerHTML = historialHTML;
}

//* Preentrega 1&2


function calcularCuotas(cuotasAux, precioAux, interesAux) {
    let preciofinalcuotas = precioAux;
    if (interesAux == 0 && cuotasAux == 1) {
        return preciofinalcuotas;
    } else {
        preciofinalcuotas = (precioAux + (precioAux * (interesAux / 100))) / cuotasAux;
        historial.push({ 'cuotas': cuotas, 'interes': interes, 'precio': precio, 'saldo': saldo })
        localStorage.setItem('historial', JSON.stringify(historial))
        return preciofinalcuotas;
    }
}


function calcularCuotasConInputs() {
    resultadoElement.innerHTML = `el valor de cada cuota es: ${calcularCuotas(cuotas, precio, interes)}`;
}

//algo tenia que hacer con un loop

function calcSaldo(saldo) {
    let aux = 1
    while (aux <= cuotas) {
        saldo = saldo - calcularCuotas(cuotas, precio, interes);
        console.log(`el saldo despues de la cuota ${aux} es: ${saldo}`);
        aux = aux + 1;
    }
    resultadoElement.innerHTML = `el saldo despues de la cuota ${aux} es: ${saldo}`;
}
