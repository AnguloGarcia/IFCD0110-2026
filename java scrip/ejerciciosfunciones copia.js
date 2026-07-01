Exercicis de JavaScript

// 1. Contrasenya vàlida

// Escriure una funció anomenada contrasenyaValida que rebi un string i retorni true si el string és igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". En cas contrari ha de retornar false).

function contrasenyaValida(contrasenya) {
    return contrasenya === "2Fj(jjbFsuj" || contrasenya === "eoZiugBf&g9";
}

// codi de prova
console.log(contrasenyaValida("2Fj(jjbFsuj")) // true
console.log(contrasenyaValida("eoZiugBf&g9")) // true
console.log(contrasenyaValida("hola")) // false
console.log(contrasenyaValida("")) // false


// 2. Calcular impostos

// Escriure una funció anomenada calcularImpostos que rebi dos arguments numèrics: edat i ingressos. Si edat és igual o major a 18 i els ingressos són iguals o majors a 1000 ha de retornar ingressos * 40%. En cas contrari retornar 0.

function calcularImpostos(edat, ingressos) {
    if (edat >= 18 && ingressos >= 1000) {
        return ingressos * 0.4;
    } else {
        return 0;
    }
}

// codi de prova
console.log(calcularImpostos(18, 1000)) // 400
console.log(calcularImpostos(40, 10000)) // 4000
console.log(calcularImpostos(17, 5000)) // 0
console.log(calcularImpostos(30, 500)) // 0


// 3. IMC (índex de massa corporal)

// L'índex de massa corporal (IMC), o BMI per les sigles en anglès, és un valor que determina la quantitat de greix d'una persona.

// El BMI es calcula amb la fórmula següent: pes / altura^2

// Escriure una funció anomenada bmi que rebi dos arguments: pes i altura, i retorni un string amb les possibilitats següents:

* "Baix de pes" si el BMI < 18.5
* "Normal" si està entre 18.5 i 24.9
* "Sobrepès" si està entre 25 i 29.9
* "Obès" si és igual o major a 30

function bmi(pes, altura) {
    const imc = pes / (altura ** 2);
    if (imc < 18.5) {
        return "Baix de pes";
    } else if (imc < 25) {
        return "Normal";
    } else if (imc < 30) {
        return "Sobrepès";
    } else {
        return "Obès";
    }
}

// codi de prova
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepes"
console.log(bmi(52, 1.75)) //  "Baix de pes"
console.log(bmi(135, 1.7)) // "Obès"


        // 4. Imprimir un array

        // Escriure una funció anomenada imprimirArray que rebi un array i imprimeixi cada element en una línia a part:

function imprimirArray(llista) {
    for (const element of llista) {
        console.log(elementDellista);
    }
}

// codi de prova
console.log(imprimirArray([1, "Hola", 2, "Món"] ))
// 1
// Hola
// 2
// Món


        // 5. Número de Likes

        // Escriu una funció anomenada likes que rebi un número i retorni un string utilitzant el format de K per a milers i M per a milions.

        // Per exemple:

    // * 1400 es converteix en 1K
// * 34,567 es converteix en 34K
// * 7,456,345 es converteix en 7M.

// Si el nombre és menor a 1000, s'ha de tornar el mateix nombre com un string.

// escriu la teva resposta aquí
function likes(num) {
    if (num < 1000) {
        return num.toString();
    } else if (num < 1000000) {
        return Math.floor(num / 1000) + "K";
    } else {
        return Math.floor(num / 1000000) + "M";
    }
}

// codi de prova
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"


// 6. FizzBuzz

// Escriure una funció anomenada fizzBuzz que rebi un número i retorni un string d'acord amb el següent:

// * "fizz" si el nombre és múltiple de 3.
// * "buzz" si el nombre és múltiple de 5.
// * "fizzbuzz" si el nombre és múltiple tant de 3 com de 5.
// * Si no compleix cap de les condicions anteriors ha de retornar el mateix número.

// escriu la teva resposta aquí
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    } else {
        return num;
    }}

// codi de prova
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8


// 7. Comptar rang de números

// Escriure una funció anomenada comptarRang que rebi dos números i retorni quants n'hi ha entre ells (excloent-los):

// Nota: Utilitza un cicle a la teva solució. Pots assumir que el primer número serà menor que el segon.

// escriu la teva resposta aquí
function comptarRang(inicial, final) {
    let count = 0;
    for (let i = inicial + 1; i < final; i++) {
        count++;
    }
    return count;
}
// codi de prova
console.log(comptarRang(1, 9)) // 7
console.log(comptarRang(1332, 8743)) // 7410
console.log(comptarRang(5, 6)) // 0


                // 8. Sumar rang de números

                // Escriure una funció anomenada sumarRang que rebi dos arguments: nombre inicial i nombre final. La funció ha de retornar la suma dels nombres en aquest rang (incloent-los).

                // Nota: pots assumir que el nombre inicial serà menor o igual que el nombre final.

// escriu la teva resposta aquí
function sumarRang(inicial, final) {
    let sum = 0;
    for (let i = inicial; i <= final; i++) {
        sum += i;
    }
    return sum;
}
// codi de prova
console.log(sumarRang(0, 10)) // 55
console.log(sumarRang(12, 14)) // 39
console.log(sumarRang(5, 5)) // 5


                // 9. Número de as (lletra "a")

        // Escriure una funció anomenada numeroDeAes que rebi un string i retorni el nombre de vegades que apareix la lletra "a":

// escriu la teva resposta aquí
function numeroDeAes(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a") {
            count++;
        }
    }
    return count;
}
// codi de prova
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("hola que tal falta 3 dias para acabar la semana")) // 0


// 10. Nombre de caràcters

// Escriure una funció anomenada numeroDeCaracters que rebi un string i un caràcter (un string d'un caràcter). La funció ha de retornar el nombre de vegades que apareix el caràcter a l'string.

// escriu la teva resposta aquí
function numeroDeCaracters(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
// codi de prova
console.log(numeroDeCaracters("Hola Món", "o")) // 2
console.log(numeroDeCaracters("MMMMM", "m")) // 0
console.log(numeroDeCaracters("eeee", "e")) // 4


// 11. Sumar array

// Escriure una funció anomenada sumarArray que rebi un array de números i retorni la suma de tots els elements.

// escriu la teva resposta aquí
function sumarArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
// codi de prova
console.log(sumarArray([3, 1, 2])) // 6
console.log(sumarArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArray([])) // 0


// 12. Multiplicar array

// Escriure una funció anomenada multiplicarArray que rebi un arranjament de números i retorni la multiplicació de tots els elements.

// escriu la teva resposta aquí
function multiplicarArray(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}
// codi de prova
console.log(multiplicarArray([4, 1, 2, 3])) // 24
console.log(multiplicarArray([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArray([])) // 1


// 13. Treure zeros

// Escriure una funció anomenada treureZeros que rebi un arrany de números i retorni un nou array excloent els zeros (0).

// escriu la teva resposta aquí
// function treureZeros(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }  
function treureZeros(arr) {
    const result = [];
    for (element of arr) {
        if (element !== 0) {
            result.push(element);
        }    
    }
    return result;
}

// codi de prova
console.log(treureZeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(treureZeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(treureZeros([0, 0, 0])) // []


// 14. Sumar array entre el rang

// Escriure una funció anomenada sumarArray que rebi tres arguments: un array de números, la posició inicial i la posició final. La funció ha de retornar la suma de tots els números dins del rang (la posició inicial i la posició final, incloent-les).

// Nota: pots assumir que la posició inicial serà menor o igual a la posició final, i que estan dins dels límits de l'array.

// escriu la teva resposta aquí
function sumarArray(arr, start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += arr[i];
    }
    return sum;
}
// codi de prova
console.log(sumarArray([1, 2, 3], 1, 2)) // 5
console.log(sumarArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArray([7, 8, 9], 0, 0)) // 0


// 15. Transcriure ADN a ARN

// Escriure una funció anomenada transcriure que rebi un string (una cadena d'ADN) i retorni un altre string (el vostre complement ARN).

// Els complements són els següents:

// * G -> C
// * C -> G
// * T -> A
// * A -> U

// escriu la teva funció aquí
function transcriure(adn) {
    let arn = "";
    for (let i = 0; i < adn.length; i++) {
        if (adn[i] === "G") {
            arn += "C";
        } else if (adn[i] === "C") {
            arn += "G";
        } else if (adn[i] === "T") {
            arn += "A";
        } else if (adn[i] === "A") {
            arn += "U";
        }
    }
    return arn;
}
// codi de prova
console.log(transcriure("ACGT")) // "UGCA"
console.log(transcriure("ACGTGGTCTTAA")) // "UGCACCAGAAUU"


// 16. Capitalitzar paraula

// Escriure una funció anomenada capitalitzar que rebi un string i capitalitzi la primera lletra:

// escriu la teva funció aquí
function capitalitzar(str) {
    if (str.length === 0) {
        return "";
    }
    return str[0].toUpperCase() + str.slice(1);
}
// codi de prova
console.log(capitalitzar("pedro")) // "Pedro"
console.log(capitalitzar("hola món")) // "Hola món"
console.log(capitalitzar("")) // ""


// 17. Capitalitzar cada paraula

// Escriure una funció anomenada capitalitzar que rebi un string i capitalitzi la primera lletra de cada paraula:

// escriu la teva funció aquí
function capitalitzarCadaParaula(str) {
    if (str.length === 0) {
        return "";
    }
    let paraules = str.split(" ");
    for (let i = 0; i < paraules.length; i++) {
        paraules[i] = paraules[i][0].toUpperCase() + paraules[i].slice(1);
    }
    return paraules.join(" ");
}
// codi de prova
console.log(capitalitzar("hola món")) // "Hola Món"
console.log(capitalitzar("make it real")) // "Make It Real"
console.log(capitalitzarC("")) // ""


// 18. Trobar el número màxim

// Escriure una funció anomenada max que rebi un array de números i retorni el nombre màxim:

// Nota: Intentar-ho fer sense el mètode Math.max de JavaScript.

// escriu la teva funció aquí
function max(arr) {
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
// codi de prova
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9


// 19. Trobar el número mínim

// Escriure una funció anomenada min que rebi un array de números i retorni el nombre mínim:

// Nota: Intentar-ho fer sense el mètode Math.min de JavaScript.

// escriu la teva funció aquí
function min(arr) {
    let minNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i];
        }
    }
    return minNum;
}
// codi de prova
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2


//  20. Generar contrasenya

// Escriure una funció anomenada password que rebi un string i retorni un nou string realitzant els canvis següents:

// * Les majúscules es reemplacen per minúscules.
// * S'eliminen els espais en blanc.
// * Reemplaça el caràcter “a” per “4”.
// * Reemplaça el caràcter “e” per “3”.
// * Reemplaça el caràcter “i” per “1”.
// * Reemplaça el carater “o” per “0”.

//  escriu la teva funció aquí
function password(str) {
 let newStr = str.toLowerCase().replace(/\s/g, "");
    newStr = newStr.replace(/a/g, "4");
   newStr = newStr.replace(/e/g, "3");
    newStr = newStr.replace(/i/g, "1");
    newStr = newStr.replace(/o/g, "0");
  return newStr;
 
// codi de prova
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""


// 21. Trobar números parells en un array

// Escriure una funció anomenada parells que rebi un array de números i retorni un nou array amb els números parells únicament.

// escriu la teva funció aquí
function parells(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
// codi de prova
console.log(parells([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(parells([])) // []


// 22. Trobeu posicions de números parells

// Escriviu una funció anomenada posicions que rebi un array de números i retorneu un nou array a les posicions on es troben números parells.

// escriu la teva funció aquí
function posicions(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(i);
        }
    }
    return result;
}
// codi de prova
console.log(posicions([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posicions([])) // []


// 23. Duplicar elements d'un array

// Escriu una funció anomenada duplicar que rep un array de números i retorna un nou array on cada número estigui multiplicat per dos (2).

// escriu la teva funció aquí
function duplicar(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;
}   
// codi de prova
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []


// // 24. Trobeu paraules que comencin per "a"
// Escriu una funció llamada comencenPerA que rebi un array d'strings i retorna un nou array amb totes les paraules que comencin per "a" (majúscula o minúscula).

// escriu la teva funció aquí
function comencenPerA(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0].toLowerCase() === "a") {
            result.push(arr[i]);
        }
    }
    return result;
}
// codi de prova
console.log(comencenPerA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(comencenPerA(["beta", "delta", "gama"])) // []
console.log(comencenPerA([])) // []


// 25. Trobeu paraules que acabin en "s"

// Escriu una funció anomenada acabenAmbS que rep un array d'strings i retorna un nou array amb totes les paraules que acaben amb "s" (majúscula o minúscula).

// escriu la teva funció aquí
function acabenAmbS(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][arr[i].length - 1].toLowerCase() === "s") {
            result.push(arr[i]);
        }
    }
    return result;
}
// codi de prova
console.log(acabenAmbS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(acabenAmbS(["beta", "delta", "gama"])) // []
console.log(acabenAmbS([])) // []


// 26. Imprimir una matriu

// Escriu una funció anomenada imprimirMatriu que rep una matriu (un array d'arrays) i imprimeixi tots els elements de l'array.

// escriu la teva funció aquí
function imprimirMatriu(matriu) {
    for (let i = 0; i < matriu.length; i++) {
        for (let j = 0; j < matriu[i].length; j++) {
            console.log(matriu[i][j]);
        }
    }
}
// codi de prova
console.log(imprimirMatriu([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9


// 27. Traduir números a paraules

// Escriu una funció llamada numerosAParaules que rep un array de números (cada número en el rang de 0 a 9) i retorna un nou array convertint cada número a la seva versió en paraules.

// escriu la teva funció aquí
function numerosAParaules(arr) {
    const paraules = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0 && arr[i] <= 9) {
            result.push(paraules[arr[i]]);
        } else {
            result.push("Número fora de rang");
        }
    }
    return result;
}
// codi de prova
console.log(numerosAParaules([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAParaules([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]


// 28. Traduir paraules a números

// Escriu una funció llamada paraulesANumeros que rep un array de strings i retorna un nou array traduïnt cada paraula a la seva versió numèrica (del 0 al 9). Si la paraula no és un nombre traduir a -1.

// escriu la teva funció aquí
function paraulesANumeros(llista) {
    const numeros = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };
    let result = [];
    for (let i = 0; i < llista.length; i++) {
        if (numeros.hasOwnProperty(llista[i])) {
            result.push(numeros[llista[i]]);
        } else {
            result.push(-1);
        }
    }
    return result;
}
// codi de prova
console.log(paraulesANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])) // [0, 1, 2, 3, -1, 4]
console.log(paraulesANumeros(["cinco", "seis", "siete", "ocho", "nueve"])) // [5, 6, 7, 8, 9]


// 29. Número d'asteriscs en un array

// Escriviu una funció de anomenada numAsteriscs que rep un array i retorneu el nombre d'asteriscs:

// escriu la teva funció aquí
function numAsteriscs(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "*") {
            count++;
        }
    }
    return count;
}
// codi de prova
console.log(numAsteriscs(['', '*', '', '*'])) // 2
console.log(numAsteriscs(['*', '*', '*'])) // 3
console.log(numAsteriscs([])) // 0


// 30. Número d'asteriscs en una matriu

// Escriviu una funció anomenada numAsteriscs que rep una matriz (un array de arrays) i retorneu el nombre d'asteriscs:

// escriu la teva funció aquí
function numAsteriscs(matriu) {
    let count = 0;
    for (let i = 0; i < matriu.length; i++) {
        for (let j = 0; j < matriu[i].length; j++) {
            if (matriu[i][j] === "*") {
                count++;
            }
        }
    }
    return count;
}
// codi de prova
console.log(numAsteriscs([
  ['*', '', '*'],
  ['', '*', ''],
  ['*', '', '*']
]))
// 5


// 31. Distància entre dos strings

// Escriviu una funció de anomenada distància que rebi dos strings i retorni el nombre de caràcters diferents (comparant la posició per posició).

// Nota: Podeu assumir que els strings sempre tenen la mateixa longitud. En canvi, si voleu afegir més dificultat podeu pensar cómo solucionar-ho si una cadena és més llarga que l'atra (la diferència entre les longituds s'afegiria al resultat).

// escriu la teva funció aquí
function distancia(str1, str2) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            count++;
        }
    }
    return count;
}   
// codi de prova
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3
