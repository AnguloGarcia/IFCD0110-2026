class coche {
    constructor(nom, any) {
        this.nom = nom;
        this.any = any;
    }

    edad() {
        const anyActual = new Date().getFullYear();
        return anyActual - this.any;
    }

}


const cochePersonal = new coche("seat", 2024);
const cocheOscar = new coche("AUDI", 2026);

// console.log(coche);
// console.log(cochePersonal);
// console.log(cocheOscar);

document.getElementById("edad").innerHTML = "la edad de mi coche marca " + cocheOscar.nom + " es de " + cocheOscar.edad() + " anys";
// class method

class animales{
    
    construcor(){
        nom;
        peso;
        velocitat;
        Color;
        edad;

    }
       descripcion() {
        return this.nom + " pesa " + this.peso + " kg, corre a " + this.velocitat + " km/h, es de color " + this.color + " y tiene " + this.edad + " anys"; 
}
}