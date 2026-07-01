let nombre = "Juan";
let apellido = "Pérez";
let edad = 30;
let tengoMascotas = true;

let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Edad:", edad);
console.log("Tengo mascotas:", tengoMascotas);
console.log("Días de la semana:", diasSemana);
console.log("hoy es " + diasSemana[0] + " y mañana será " + diasSemana[1]);

// mostrem els valors en una alerta

//window.alert("Hola, " + nombre + " " + apellido + "! Tienes " + edad + " años y es " + tengoMascotas + " que tienes mascotas.");

// mostra el valor de les variables en una pàgina web

document.write("<h1>Información Personal</h1>");
document.write("<p>Nombre: " + nombre + "</p>");
document.write("<p>Apellido: " + apellido + "</p>");
document.write("<p>Edad: " + edad + "</p>");
document.write("<p>Tengo mascotas: " + tengoMascotas + "</p>");
document.write("<p>Días de la semana: " + diasSemana.join(", ") + "</p>");
// mostrar los valores de las variables en la consola del navegador

document.getElementById("contenedor").innerHTML = "<h1>Información Personal</h1>" +
    "<p>Nombre: " + nombre + "</p>" +
    "<p>Apellido: " + apellido + "</p>" +
    "<p>Edad: " + edad + "</p>" +
    "<p>Tengo mascotas: " + tengoMascotas + "</p>" +
    "<p>Días de la semana: " + diasSemana.join(", ") + "</p>";

    // operadores de comparación

    let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020 ,
    color: "Rojo" ,
    numCavallos: 150 ,
    emisionesCO2: 120 ,
    esElectrico: false ,
    numPuertas: 4 ,
    numPlazas: 5 ,
    consumoCombustible: 6.5 ,

    }

    console.log("¿El coche es del año 2020?", coche.año == 2020);
    console.log("¿El coche es exactamente del año 2020?", coche.año === 2020);
    console.log("¿Tiene más de 100 caballos?", coche.numCavallos > 100);
    console.log("¿Emite menos de 100 g/km de CO2?", coche.emisionesCO2 < 100);
    console.log("¿Tiene 4 puertas o más?", coche.numPuertas >= 4);
    console.log("¿No es eléctrico?", coche.esElectrico != true);

    console.log("Marca:", coche.marca);
    console.log("Modelo:", coche.modelo);
    console.log("Año:", coche.año);
    console.log("Color:", coche.color);
    console.log("Número de caballos:", coche.numCavallos);
    console.log("Emisiones de CO2:", coche.emisionesCO2);
    console.log("¿Es eléctrico?", coche.esElectrico);
    console.log("Número de puertas:", coche.numPuertas);
    console.log("Número de plazas:", coche.numPlazas);
    console.log("Consumo de combustible (L/100km):", coche.consumoCombustible);

    console.log("El coche es un " + coche.marca + " " + coche.modelo + " del año " + coche.año + " de color " + coche.color + ". Tiene " + coche.numCavallos + " caballos, emite " + coche.emisionesCO2 + " g/km de CO2, es eléctrico: " + coche.esElectrico + ", tiene " + coche.numPuertas + " puertas, " + coche.numPlazas + " plazas y consume " + coche.consumoCombustible + " litros cada 100 km.");

    // funcion sumar dos números

    function sumar(a, b) {
        return a + b;
    }
    let resultado = sumar(5, 10);
    console.log("El resultado de la suma es:", resultado);

    // alert box

    function alertBox(mensaje) {
        window.alert(mensaje);
    }

    alertBox("¡Hola! Este es un mensaje de alerta.");
