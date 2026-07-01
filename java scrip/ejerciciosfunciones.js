// Ejercicios de funciones.
// Este archivo esta enlazado desde html/ejerciciosfunciones.html.

function contrasenyaValida(contrasenya) {
    return contrasenya === "2Fj(jjbFsuj" || contrasenya === "eoZiugBf&g9";
}

function calcularImpostos(edat, ingressos) {
    if (edat >= 18 && ingressos >= 1000) {
        return ingressos * 0.4;
    }

    return 0;
}

function bmi(pes, altura) {
    const imc = pes / (altura ** 2);

    if (imc < 18.5) {
        return "Baix de pes";
    }

    if (imc < 25) {
        return "Normal";
    }

    if (imc < 30) {
        return "Sobrepes";
    }

    return "Obes";
}

function imprimirArray(llista) {
    for (const element of llista) {
        console.log(element);
    }
}

function likes(numero) {
    if (numero >= 1000000) {
        return `${Math.floor(numero / 1000000)}M`;
    }

    if (numero >= 1000) {
        return `${Math.floor(numero / 1000)}K`;
    }

    return String(numero);
}

function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "fizzbuzz";
    }

    if (numero % 3 === 0) {
        return "fizz";
    }

    if (numero % 5 === 0) {
        return "buzz";
    }

    return numero;
}

function comptarRang(inici, final) {
    let total = 0;

    for (let numero = inici + 1; numero < final; numero++) {
        total++;
    }

    return total;
}

function sumarRang(inici, final) {
    let total = 0;

    for (let numero = inici; numero <= final; numero++) {
        total += numero;
    }

    return total;
}

function numeroDeAes(text) {
    return numeroDeCaracters(text, "a");
}

function numeroDeCaracters(text, caracter) {
    let total = 0;

    for (const lletra of text) {
        if (lletra === caracter) {
            total++;
        }
    }

    return total;
}

function sumarArray(numeros, inici, final) {
    let total = 0;
    const primeraPosicio = inici ?? 0;
    const ultimaPosicio = final ?? numeros.length - 1;

    for (let posicio = primeraPosicio; posicio <= ultimaPosicio; posicio++) {
        total += numeros[posicio] ?? 0;
    }

    return total;
}

function multiplicarArray(numeros) {
    let total = 1;

    for (const numero of numeros) {
        total *= numero;
    }

    return total;
}

function treureZeros(numeros) {
    const resultat = [];

    for (const numero of numeros) {
        if (numero !== 0) {
            resultat.push(numero);
        }
    }

    return resultat;
}

function transcriure(adn) {
    const complements = {
        G: "C",
        C: "G",
        T: "A",
        A: "U",
    };
    let arn = "";

    for (const lletra of adn) {
        arn += complements[lletra];
    }

    return arn;
}

function capitalitzar(text) {
    return text
        .split(" ")
        .map((paraula) => {
            if (paraula === "") {
                return "";
            }

            return paraula[0].toUpperCase() + paraula.slice(1);
        })
        .join(" ");
}

function max(numeros) {
    let maxim = numeros[0];

    for (const numero of numeros) {
        if (numero > maxim) {
            maxim = numero;
        }
    }

    return maxim;
}

function min(numeros) {
    let minim = numeros[0];

    for (const numero of numeros) {
        if (numero < minim) {
            minim = numero;
        }
    }

    return minim;
}

function password(text) {
    return text
        .toLowerCase()
        .replaceAll(" ", "")
        .replaceAll("a", "4")
        .replaceAll("e", "3")
        .replaceAll("i", "1")
        .replaceAll("o", "0");
}

function parells(numeros) {
    const resultat = [];

    for (const numero of numeros) {
        if (numero % 2 === 0) {
            resultat.push(numero);
        }
    }

    return resultat;
}

function posicions(numeros) {
    const resultat = [];

    for (let posicio = 0; posicio < numeros.length; posicio++) {
        if (numeros[posicio] % 2 === 0) {
            resultat.push(posicio);
        }
    }

    return resultat;
}

function duplicar(numeros) {
    const resultat = [];

    for (const numero of numeros) {
        resultat.push(numero * 2);
    }

    return resultat;
}

function comencenPerA(paraules) {
    const resultat = [];

    for (const paraula of paraules) {
        if (paraula.toLowerCase().startsWith("a")) {
            resultat.push(paraula);
        }
    }

    return resultat;
}

function acabenAmbS(paraules) {
    const resultat = [];

    for (const paraula of paraules) {
        if (paraula.toLowerCase().endsWith("s")) {
            resultat.push(paraula);
        }
    }

    return resultat;
}

function imprimirMatriu(matriu) {
    for (const fila of matriu) {
        for (const element of fila) {
            console.log(element);
        }
    }
}

function numerosAParaules(numeros) {
    const paraules = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const resultat = [];

    for (const numero of numeros) {
        resultat.push(paraules[numero]);
    }

    return resultat;
}

function paraulesANumeros(paraules) {
    const numeros = {
        cero: 0,
        uno: 1,
        dos: 2,
        tres: 3,
        cuatro: 4,
        cinco: 5,
        seis: 6,
        siete: 7,
        ocho: 8,
        nueve: 9,
    };
    const resultat = [];

    for (const paraula of paraules) {
        resultat.push(numeros[paraula] ?? -1);
    }

    return resultat;
}

function numAsteriscs(llista) {
    let total = 0;

    for (const element of llista) {
        if (Array.isArray(element)) {
            total += numAsteriscs(element);
        } else if (element === "*") {
            total++;
        }
    }

    return total;
}

function distancia(text1, text2) {
    let total = Math.abs(text1.length - text2.length);
    const longitud = Math.min(text1.length, text2.length);

    for (let posicio = 0; posicio < longitud; posicio++) {
        if (text1[posicio] !== text2[posicio]) {
            total++;
        }
    }

    return total;
}

Object.assign(window, {
    contrasenyaValida,
    calcularImpostos,
    bmi,
    imprimirArray,
    likes,
    fizzBuzz,
    comptarRang,
    sumarRang,
    numeroDeAes,
    numeroDeCaracters,
    sumarArray,
    multiplicarArray,
    treureZeros,
    transcriure,
    capitalitzar,
    max,
    min,
    password,
    parells,
    posicions,
    duplicar,
    comencenPerA,
    acabenAmbS,
    imprimirMatriu,
    numerosAParaules,
    paraulesANumeros,
    numAsteriscs,
    distancia,
});

const contenedor = document.querySelector("#contenedor");

if (contenedor) {
    contenedor.textContent = "JavaScript cargado. Prueba en consola: bmi(65, 1.8)";
}

console.log("ejerciciosfunciones.js cargado correctamente");
