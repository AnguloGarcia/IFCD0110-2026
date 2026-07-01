let pantalla = document.getElementById("pantalla");

function agregar(valor) {
  pantalla.value += valor;
}

function borrar() {
  pantalla.value = "";
}

function calcular() {
  try {
    pantalla.value = eval(pantalla.value);
  } catch {
    pantalla.value = "Error";
  }
}
