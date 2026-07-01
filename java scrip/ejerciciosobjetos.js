const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    color: "rojo",
    precio: 20000,
    direccion : "asistida"
};
console.log(coche.marca); // "Toyota"
document.write(coche.modelo); // "Corolla"
document.getElementById("contenedor").innerText = coche.año; // 2020
document.getElementById("contenedor2").innerText = coche.modelo; // "Corolla"
document.getElementById("contenedor3").innerText = coche.año; // 2020
document.getElementById("contenedor4").innerText = coche.color; // "rojo"
document.getElementById("contenedor5").innerText = coche.direccion + (coche.direccion === "asistida" ? " si" : " no"); // "asistida"
document.getElementById("precio").innerHTML="status: " + (coche.precio < 15000 ? "utilitario" : "lujoso"); // 20000€

coche.color = "azul";
document.getElementById("contenedor4").innerText = coche.color; // "azul"

coche.tipoCombustible = "gasolina";
document.getElementById("contenedor6").innerHTML += `<br>${coche.tipoCombustible}`; // "gasolina"

document.getElementById("noucolor").innerHTML += `<br>precio del vehicle: ${coche.precio}`; // 20000

let result = ("color" in coche)
console.log(result); // true

let caracteristicas = Object.keys(coche);
for (let i = 0; i < caracteristicas.length; i++) {
    console.log(caracteristicas[i]); // "marca", "modelo", "año", "color", "precio", "direccion", "tipoCombustible"
}
document.getElementById("contenedor").innerHTML += `<br>caracteristicas: ${caracteristicas}`; // "marca", "modelo", "año", "color", "precio", "direccion", "tipoCombustible"

// metodo stringify 

let texto = JSON.stringify(coche);
console.log(texto); // '{"marca":"Toyota","modelo":"Corolla","año":2020,"color":"azul","precio":20000,"direccion":"asistida","tipoCombustible":"gasolina"}'
document.getElementById("contenedor").innerHTML += `<br>texto: ${texto}`; // '{"marca":"Toyota","modelo":"Corolla","año":2020,"color":"azul","precio":20000,"direccion":"asistida","tipoCombustible":"gasolina"}'

// metodo parse

let objeto = JSON.parse(texto);
console.log(objeto); // {marca: "Toyota", modelo: "Corolla", año: 2020, color: "azul", precio: 20000, direccion: "asistida", tipoCombustible: "gasolina"}
document.getElementById("contenedor").innerHTML += `<br>objeto: ${objeto}`; // {marca: "Toyota", modelo: "Corolla", año: 2020, color: "azul", precio: 20000, direccion: "asistida", tipoCombustible: "gasolina"}

// metodo hasOwnProperty

let tienePropiedad = coche.hasOwnProperty("marca");
console.log(tienePropiedad); // true
document.getElementById("contenedor").innerHTML += `<br>tienePropiedad: ${tienePropiedad}`; // true

        let noTienePropiedad = coche.hasOwnProperty("color");
console.log(noTienePropiedad); // true
document.getElementById("contenedor").innerHTML += `<br>noTienePropiedad: ${noTienePropiedad}`; // true

// objeto type person

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

console.log(person1.name); // "Alice"
console.log(person2.age); // 25
document.getElementById("contenedor").innerHTML += `<br>person1: ${person1.name}, ${person1.age}`; // "Alice", 30
document.getElementById("contenedor").innerHTML += `<br>person2: ${person2.name}, ${person2.age}`; // "Bob", 25 

// objeto async
const coche2 ={marca: "Ford", modelo: "Mustang", }
console.log(coche2.); // "Ford"
object.assign(coche,coche2,)
console.log("coche objetiu") 
console log (coche2)
console log("coche original")
console log(coche)

// objeto entris

let entrada = Object.entries(coche)
