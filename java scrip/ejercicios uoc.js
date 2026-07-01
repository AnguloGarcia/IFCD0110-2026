let ejercicios = [
    {
        titulo: "1. Escriviu un programa d'una sola línia que faci que aparegui a la pantalla un alerta que digui “Hello World”.",
        codigo: "alert('Hello World');"
    },
    {
        titulo: "2. Escriviu un programa d'una sola línia que escrigui a la pantalla un text que digui “Hello World” (document.write).",
        codigo: "document.write('Hello World');"
    },
    {
        titulo: "3. Escriviu un programa d'una sola línia que escrigui a la pantalla el resultat de sumar 3 + 5.",
        codigo: "document.write(3 + 5);"
    },
    {
        titulo: "4. Escriviu un programa de dues línies que demani el nom de l'usuari amb un prompt i escrigui un text que digui “Hola nomUsuari”.",
        codigo: "let nomUsuari = prompt('Introdueix el teu nom:');\ndocument.write('Hola ' + nomUsuari);"
    },
    {
        titulo: "5. Escriviu un programa de tres línies que demani un número, demani un altre número i escrigui el resultat de resum aquests dos números.",
        codigo: "let numero1 = Number(prompt('Introduce el primer número:'));\nlet numero2 = Number(prompt('Introduce el segundo número:'));\ndocument.write(numero1 + numero2);"
    },
    {
        titulo: "6. Escriviu un programa que demani dos números i escrigui a la pantalla quin és el major.",
        codigo: "let numero1 = Number(prompt('Introduce el primer número:'));\nlet numero2 = Number(prompt('Introduce el segundo número:'));\ndocument.write(Math.max(numero1, numero2));"
    },
    {
        titulo: "7. Escriviu un programa que demani 3 números i escrigui a la pantalla el major dels tres.",
        codigo: "let numero1 = Number(prompt('Introduce el primer número:'));\nlet numero2 = Number(prompt('Introduce el segundo número:'));\nlet numero3 = Number(prompt('Introduce el tercer número:'));\ndocument.write(Math.max(numero1, numero2, numero3));"
    },
    {
        titulo: "8. Escriviu un programa que demani un número i digui si és divisible per 2.",
        codigo: "let numero = Number(prompt('Introduce un número:'));\ndocument.write(numero % 2 === 0);"
    },
    {
        titulo: "9. Escriviu un programa que demani una frase i escrigui quantes vegades apareix la lletra a.",
        codigo: "let frase = prompt('Introduce una frase:');\nlet contador = 0;\nfor (let letra of frase) {\n    if (letra.toLowerCase() === 'a') contador++;\n}\ndocument.write(contador);"
    },
    {
        titulo: "10. Escriviu un programa que demani una frase i escrigui les vocals que apareixen.",
        codigo: "let frase = prompt('Introduce una frase:');\nlet vocales = '';\nfor (let letra of frase) {\n    if ('aeiou'.includes(letra.toLowerCase())) vocales += letra + ' ';\n}\ndocument.write(vocales);"
    },
    {
        titulo: "11. Escriviu un programa que demani una frase i escrigui quantes lletres són vocals.",
        codigo: "let frase = prompt('Introduce una frase:');\nlet contador = 0;\nfor (let letra of frase) {\n    if ('aeiou'.includes(letra.toLowerCase())) contador++;\n}\ndocument.write(contador);"
    },
    {
        titulo: "12. Escriviu un programa que demani una frase i escrigui quantes vegades apareixen cada una de les vocals.",
        codigo: "let frase = prompt('Introduce una frase:');\nlet a = 0, e = 0, i = 0, o = 0, u = 0;\nfor (let letra of frase.toLowerCase()) {\n    if (letra === 'a') a++;\n    if (letra === 'e') e++;\n    if (letra === 'i') i++;\n    if (letra === 'o') o++;\n    if (letra === 'u') u++;\n}\ndocument.write('a: ' + a + ', e: ' + e + ', i: ' + i + ', o: ' + o + ', u: ' + u);"
    },
    {
        titulo: "13. Escriviu un programa que demani un número i ens digui si és divisible per 2, 3, 5 o 7 (sólo cal comprobar si ho és per un dels quatre).",
        codigo: "let numero = Number(prompt('Introduce un número:'));\nif (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {\n    document.write('Es divisible');\n} else {\n    document.write('No es divisible');\n}"
    },
    {
        titulo: "14. Afegir a l'exercici anterior que ens digui quin dels quatre és divisible (s'han de dir tots pels que és divisible).",
        codigo: "let numero = Number(prompt('Introduce un número:'));\nif (numero % 2 === 0) document.write('Es divisible por 2<br>');\nif (numero % 3 === 0) document.write('Es divisible por 3<br>');\nif (numero % 5 === 0) document.write('Es divisible por 5<br>');\nif (numero % 7 === 0) document.write('Es divisible por 7<br>');"
    },
    {
        titulo: "15. Escriviu un programa que mostri per pantalla els divisors d'un número donat.",
        codigo: "let numero = Number(prompt('Introduce un número:'));\nfor (let i = 1; i <= numero; i++) {\n    if (numero % i === 0) document.write(i + '<br>');\n}"
    },
    {
        titulo: "16. 16 Escriviu un programa que mostri per pantalla els divisors comuns de dos números donats.",
        codigo: "let numero1 = Number(prompt('Introduce el primer número:'));\nlet numero2 = Number(prompt('Introduce el segundo número:'));\nlet menor = Math.min(numero1, numero2);\nfor (let i = 1; i <= menor; i++) {\n    if (numero1 % i === 0 && numero2 % i === 0) document.write(i + '<br>');\n}"
    },
    {
        titulo: "17. Escriure un programa que ens digui si un número donat és primer (no és divisible per ningun altre número que no sigui ell mateix o la unitat).",
        codigo: "let numero = Number(prompt('Introduce un número:'));\nlet esPrimer = true;\nfor (let i = 2; i < numero; i++) {\n    if (numero % i === 0) esPrimer = false;\n}\ndocument.write(esPrimer ? 'Es primo' : 'No es primo');"
    }
];

let contenedor = document.getElementById("contenedor");

contenedor.innerHTML = "<h1>Exercicis UOC bàsics</h1>";

for (let ejercicio of ejercicios) {
    contenedor.innerHTML += `
        <section class="fitxa">
            <h2>${ejercicio.titulo}</h2>
            <pre><code>${ejercicio.codigo}</code></pre>
        </section>
    `;
}

function contarLetraA(frase) {
    let contador = 0;

    for (let letra of frase) {
        if (letra.toLowerCase() === "a") {
            contador++;
        }
    }

    return contador;
}

function obtenerVocales(frase) {
    let vocales = "";

    for (let letra of frase) {
        if ("aeiou".includes(letra.toLowerCase())) {
            vocales += letra + " ";
        }
    }

    return vocales;
}

function contarVocales(frase) {
    let contador = 0;

    for (let letra of frase) {
        if ("aeiou".includes(letra.toLowerCase())) {
            contador++;
        }
    }

    return contador;
}

function contarCadaVocal(frase) {
    let vocales = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };

    for (let letra of frase.toLowerCase()) {
        if (letra === "a") vocales.a++;
        if (letra === "e") vocales.e++;
        if (letra === "i") vocales.i++;
        if (letra === "o") vocales.o++;
        if (letra === "u") vocales.u++;
    }

    return vocales;
}

function esDivisiblePorUno(numero) {
    return numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0;
}

function divisiblesPor(numero) {
    let divisibles = [];

    if (numero % 2 === 0) divisibles.push(2);
    if (numero % 3 === 0) divisibles.push(3);
    if (numero % 5 === 0) divisibles.push(5);
    if (numero % 7 === 0) divisibles.push(7);

    return divisibles;
}

function divisores(numero) {
    let listaDivisores = [];

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            listaDivisores.push(i);
        }
    }

    return listaDivisores;
}

function divisoresComunes(numero1, numero2) {
    let listaDivisores = [];
    let menor = Math.min(numero1, numero2);

    for (let i = 1; i <= menor; i++) {
        if (numero1 % i === 0 && numero2 % i === 0) {
            listaDivisores.push(i);
        }
    }

    return listaDivisores;
}

function esPrimo(numero) {
    if (numero < 2) {
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function ejecutarEjerciciosEnConsola() {
    let pruebas = [
        "Resultado: se mostraría una alerta con Hello World",
        "Resultado: Hello World",
        "Resultado: " + (3 + 5),
        "Resultado con nomUsuari = Jose: Hola Jose",
        "Resultado con 4 y 8: " + (4 + 8),
        "Resultado con 12 y 9: " + Math.max(12, 9),
        "Resultado con 12, 9 y 20: " + Math.max(12, 9, 20),
        "Resultado con 10: " + (10 % 2 === 0),
        "Resultado con 'casa amarilla': " + contarLetraA("casa amarilla"),
        "Resultado con 'casa amarilla': " + obtenerVocales("casa amarilla"),
        "Resultado con 'casa amarilla': " + contarVocales("casa amarilla"),
        contarCadaVocal("casa amarilla"),
        "Resultado con 14: " + esDivisiblePorUno(14),
        "Resultado con 210: " + divisiblesPor(210).join(", "),
        "Resultado con 12: " + divisores(12).join(", "),
        "Resultado con 12 y 18: " + divisoresComunes(12, 18).join(", "),
        "Resultado con 13: " + (esPrimo(13) ? "Es primo" : "No es primo")
    ];

    console.log("Exercicis UOC bàsics");

    for (let i = 0; i < ejercicios.length; i++) {
        console.group("Ejercicio " + (i + 1));
        console.log(ejercicios[i].titulo);
        console.log(ejercicios[i].codigo);
        console.log(pruebas[i]);
        console.groupEnd();
    }
}

ejecutarEjerciciosEnConsola();
