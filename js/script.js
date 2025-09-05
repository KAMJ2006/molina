

//EJERCICIO 1 (positivo, negativo o neutro)
function numeroPositivoNegativo(num) {
    if (num > 0) {
        console.log(`El número ${num} es positivo.`);
    } else if (num < 0) {
        console.log(`El número ${num} es negativo.`);
    } else {
        console.log(`El número ${num} es neutro.`);
    }
}

function numerosPositivosNegativosN(n) {
    let c = 1;
    while (c <= n) {
        let num = parseInt(prompt(`Ingrese el número ${c}: `));
        numeroPositivoNegativo(num);
        c++;
    }
}

function numerosPositivosNegativosArreglo() {
    const numeros = [4, -2, 0, 7, -9]; 
    for (let i = 0; i < numeros.length; i++) {
        numeroPositivoNegativo(numeros[i]);
    }
}

//numeroPositivoNegativo(-5);
//numerosPositivosNegativosN(3);
//numerosPositivosNegativosArreglo();

//EJERCICIO 2 (costo lapicero)
function costoLapices(cantidad) {
    let precio = 0;
    if (cantidad >= 1000) {
        precio = 0.85;
    } else {
        precio = 0.90;
    }
    let total = cantidad * precio;
    console.log(`Total a pagar: $${total.toFixed(2)}`);
}

function costoLapicesN(n) {
    let c = 1;
    while (c <= n) {
        let cantidad = parseInt(prompt(`Ingrese la cantidad de lápices del pedido ${c}: `));
        costoLapices(cantidad);
        c++;
    }
}

function costoLapicesArreglo() {
    const pedidos = [1200, 800]; 
    for (let i = 0; i < pedidos.length; i++) {
        console.log(`Pedido ${i+1}:`);
        costoLapices(pedidos[i]);
    }
}

//costoLapices(1200);
//costoLapicesN(2);
//costoLapicesArreglo();

//EJERCICIO 3 (descuento traje)
function descuentoTraje(precio) {
    let descuento = 0;
    if (precio > 2500) {
        descuento = 0.15;
    } else {
        descuento = 0.08;
    }
    let precioFinal = precio - (precio * descuento);
    console.log(`Precio final: $${precioFinal.toFixed(2)}`);
}

function descuentoTrajesN(n) {
    let c = 1;
    while (c <= n) {
        let precio = parseFloat(prompt(`Ingrese el precio del traje ${c}: `));
        descuentoTraje(precio);
        c++;
    }
}

function descuentoTrajesArreglo() {
    const precios = [3000, 2000];
    for (let i = 0; i < precios.length; i++) {
        console.log(`Traje ${i+1}:`);
        descuentoTraje(precios[i]);
    }
}

//descuentoTraje(3000);
//descuentoTrajesN(2);
//descuentoTrajesArreglo();



//EJERCICIO 4 (tarifa autobús)
function autobusTarifa(tipo,distancia,personas){
    let tarifa=0,personaCalculo=0,ct=0,cp=0;
    switch(tipo){
        case "A":
            tarifa=2;
            break;
        case "B":
            tarifa=2.5;
            break;
        case "C":
            tarifa=3;
            break;
    } 
    if (personas < 20){
        personaCalculo=20;
    }else{
        personaCalculo=personas;
    }
    ct=tarifa*distancia*personaCalculo;
    cp=ct/personas;
    console.log(`La tarifa total es: ${ct}`);
    console.log(`La tarifa por persona es: ${cp}`);  

}
function autobusTarifaViajes(n){
    let c=1
    while (c <= n){
        tip = prompt("Ingrese el tipo de autobús (A, B, C): ");
        dist = parseInt(prompt("Ingrese la distancia a recorrer (en km): "));
        pers = parseInt(prompt("Ingrese el número de personas que viajan: "));
        autobusTarifa(tip,dist,pers);
        c++;
    }
}
function autobusTarifaArreglos(){
    const viajes = [["A",10,15],["B",20,25],["C",30,35]];
    let ele = []
    console.log(ele, ele[0],ele[1],ele[2]);
    for (let c=0;c < viajes.length; c++){
        ele = viajes[c]
        tip = ele[0];
        dist = ele[1];
        pers = ele[2];
        autobusTarifa(tip,dist,pers);
       
    }
}

//autobusTarifa("B",10,18);
//autobusTarifaViajes(2);
//autobusTarifaArreglos()

//EJERCICIO 5 (consultorio medico)
function costoCita(numCita) {
    let costo = 0;

    if (numCita >= 1 && numCita <= 3) {
        costo = 200;
    } else if (numCita >= 4 && numCita <= 5) {
        costo = 150;
    } else if (numCita >= 6 && numCita <= 8) {
        costo = 100;
    } else {
        costo = 50;
    }

    // acumulado hasta esa cita
    let acumulado = 0;
    for (let i = 1; i <= numCita; i++) {
        if (i >= 1 && i <= 3) acumulado += 200;
        else if (i >= 4 && i <= 5) acumulado += 150;
        else if (i >= 6 && i <= 8) acumulado += 100;
        else acumulado += 50;
    }

    console.log(`Costo cita ${numCita}: $${costo} – Acumulado: $${acumulado}`);
}

function costoCitasN(n) {
    let c = 1;
    while (c <= n) {
        let numCita = parseInt(prompt(`Ingrese el número de cita del paciente ${c}: `));
        costoCita(numCita);
        c++;
    }
}

function costoCitasArreglo() {
    const citas = [1, 5, 9];  
    for (let i = 0; i < citas.length; i++) {
        costoCita(citas[i]);
    }
}

//costoCita(5); 
//costoCitasN(2);
//costoCitasArreglo();

//EJERCICIO 6 (fabrica el cometa)
function precioVenta(clave, materiaPrima) {
    let manoObra = 0;
    let gastosFab = 0;

    switch (clave) {
        case 1:
            manoObra = materiaPrima * 0.80;
            gastosFab = materiaPrima * 0.28;
            break;
        case 2:
            manoObra = materiaPrima * 0.85;
            gastosFab = materiaPrima * 0.30;
            break;
        case 3:
            manoObra = materiaPrima * 0.75;
            gastosFab = materiaPrima * 0.35;
            break;
        case 4:
            manoObra = materiaPrima * 0.75;
            gastosFab = materiaPrima * 0.28;
            break;
        case 5:
            manoObra = materiaPrima * 0.80;
            gastosFab = materiaPrima * 0.30;
            break;
        case 6:
            manoObra = materiaPrima * 0.85;
            gastosFab = materiaPrima * 0.35;
            break;
        default:
            console.log("Clave inválida");
            return;
    }

    let costoProduccion = materiaPrima + manoObra + gastosFab;
    let precioVenta = costoProduccion * 1.45; 
    console.log(`Costo producción = $${costoProduccion.toFixed(2)} – Precio de venta = $${precioVenta.toFixed(2)}`);
}

function precioVentaN(n) {
    let c = 1;
    while (c <= n) {
        let clave = parseInt(prompt(`Ingrese la clave (1-6) del artículo ${c}: `));
        let mp = parseFloat(prompt(`Ingrese el costo de materia prima del artículo ${c}: `));
        precioVenta(clave, mp);
        c++;
    }
}

function precioVentaArreglo() {
    const articulos = [[3, 1000], [1, 2000]]; 
    for (let i = 0; i < articulos.length; i++) {
        let clave = articulos[i][0];
        let mp = articulos[i][1];
        console.log(`Artículo ${i+1}:`);
        precioVenta(clave, mp);
    }
}

//precioVenta(3, 1000);
//precioVentaN(2);
//precioVentaArreglo();

//EJERCICIO 7 (banco XYZ)
function aumentoCredito(tipo, credito) {
    let porcentaje = 0;

    switch (tipo) {
        case 1: porcentaje = 0.25; 
        break;
        case 2: porcentaje = 0.35; 
        break;
        case 3: porcentaje = 0.40; 
        break;
        default: porcentaje = 0.50; 
        break;
    }

    let nuevoCredito = credito + (credito * porcentaje);
    console.log(`Nuevo crédito: $${nuevoCredito.toFixed(2)}`);
}

function aumentoCreditoN(n) {
    let c = 1;
    while (c <= n) {
        let tipo = parseInt(prompt(`Ingrese el tipo de tarjeta del cliente ${c} (1,2,3,otro): `));
        let credito = parseFloat(prompt(`Ingrese el crédito actual del cliente ${c}: `));
        aumentoCredito(tipo, credito);
        c++;
    }
}

function aumentoCreditoArreglo() {
    const clientes = [[2, 1000], [3, 1500], [4, 2000]]; 
    for (let i = 0; i < clientes.length; i++) {
        let tipo = clientes[i][0];
        let credito = clientes[i][1];
        console.log(`Cliente ${i+1}:`);
        aumentoCredito(tipo, credito);
    }
}

//aumentoCredito(2, 1000);
//aumentoCreditoN(2);
//aumentoCreditoArreglo();

//EJERCICIO 8 (paqueteria)
function costoEnvio(peso, zona) {
    if (peso > 5) {
        console.log("Error: el paquete excede 5 kg.");
        return;
    }

    let tarifa = 0;
    switch (zona) {
        case "1" : tarifa = 24; 
        break;
        case "2": tarifa = 20; 
        break;
        case "3": tarifa = 21; 
        break;
        case "4": tarifa = 24; 
        break;
        case "5": tarifa = 27; 
        break;
        default:
            console.log("Zona inválida.");
        return;
    }

    let costo = peso * tarifa;
    console.log(`Costo envío: $${costo}`);
}

function costoEnvioN(n) {
    let c = 1;
    while (c <= n) {
        let peso = parseFloat(prompt(`Ingrese el peso del paquete ${c} (kg): `));
        let zona = prompt(`Ingrese la zona del paquete ${c}: \n
            1. América del Norte \n 
            2. América Central \n 
            3. América del Sur \n 
            4. Europa \n 
            5. Asia `);
        costoEnvio(peso, zona);
        c++;
    }
}

function costoEnvioArreglo() {
    const paquetes = [[4, "4"], [6, "5"], [3, "2"]];
    for (let i = 0; i < paquetes.length; i++) {
        let peso = paquetes[i][0];
        let zona = paquetes[i][1];
        console.log(`Paquete ${i+1}:`);
        costoEnvio(peso, zona);
    }
}

//costoEnvio(4, "3");
//costoEnvioN(2);
//costoEnvioArreglo();

//EJERCICIO 9 (clasificacion edad)
function clasificarEdad(edad) {
    if (edad >= 1 && edad <= 3) {
        console.log(`${edad} → Infante`);
    } else if (edad >= 4 && edad <= 13) {
        console.log(`${edad} → Niño`);
    } else if (edad >= 14 && edad <= 17) {
        console.log(`${edad} → Adolescente`);
    } else if (edad >= 18 && edad <= 35) {
        console.log(`${edad} → Joven`);
    } else if (edad >= 36 && edad <= 64) {
        console.log(`${edad} → Adulto`);
    } else if (edad >= 65) {
        console.log(`${edad} → Adulto mayor`);
    } else {
        console.log(`${edad} → Edad inválida`);
    }
}

function clasificarEdadesN(n) {
    let c = 1;
    while (c <= n) {
        let edad = parseInt(prompt(`Ingrese la edad de la persona ${c}: `));
        clasificarEdad(edad);
        c++;
    }
}

function clasificarEdadesArreglo() {
    const edades = [3, 15, 70, 40, 10];
    for (let i = 0; i < edades.length; i++) {
        clasificarEdad(edades[i]);
    }
}

//clasificarEdad(70); 
//clasificarEdadesN(2);
//clasificarEdadesArreglo();

//EJERCICIO 10 (dias de la semana)
function diaSemana(num) {
    let dia = "";
    switch (num) {
        case 1: dia = "Lunes"; 
        break;
        case 2: dia = "Martes"; 
        break;
        case 3: dia = "Miércoles"; 
        break;
        case 4: dia = "Jueves"; 
        break;
        case 5: dia = "Viernes"; 
        break;
        case 6: dia = "Sábado"; 
        break;
        case 7: dia = "Domingo"; 
        break;
        default: 
            console.log(`${num} → Error, número inválido`);
            return;
    }
    console.log(`${num} → ${dia}`);
}

function diasSemanaN(n) {
    let c = 1;
    while (c <= n) {
        let num = parseInt(prompt(`Ingrese el número ${c} (1-7): `));
        diaSemana(num);
        c++;
    }
}

function diasSemanaArreglo() {
    const numeros = [1, 3, 7, 9];
    for (let i = 0; i < numeros.length; i++) {
        diaSemana(numeros[i]);
    }
}

//diaSemana(3);
//diasSemanaN(3);
//diasSemanaArreglo();


