const casillas = document.querySelectorAll(".casilla");
const mensaje = document.querySelector("#mensaje");
const botonReiniciar = document.querySelector("#reiniciar");

let tablero = ["", "", "", "", "", "", "", "", ""];
let jugadorActual = "X";
let partidaTerminada = false;

const combinacionesGanadoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const cambiarJugador = () => {
  jugadorActual = jugadorActual === "X" ? "O" : "X";
  mensaje.textContent = `Turno del jugador ${jugadorActual}`;
};

const buscarGanador = () => {
  return combinacionesGanadoras.find((combinacion) => {
    const [a, b, c] = combinacion;
    return tablero[a] !== "" && tablero[a] === tablero[b] && tablero[a] === tablero[c];
  });
};

const pintarGanador = (combinacionGanadora) => {
  combinacionGanadora.forEach((posicion) => {
    casillas[posicion].classList.add("ganadora");
  });
};

const bloquearTablero = () => {
  casillas.forEach((casilla) => {
    casilla.disabled = true;
  });
};

const comprobarPartida = () => {
  const combinacionGanadora = buscarGanador();

  if (combinacionGanadora) {
    partidaTerminada = true;
    mensaje.textContent = `Ha ganado el jugador ${jugadorActual}`;
    pintarGanador(combinacionGanadora);
    bloquearTablero();
    return;
  }

  if (tablero.every((casilla) => casilla !== "")) {
    partidaTerminada = true;
    mensaje.textContent = "Empate";
    return;
  }

  cambiarJugador();
};

const jugarTurno = (evento) => {
  const casilla = evento.target;
  const posicion = Number(casilla.dataset.posicion);

  if (partidaTerminada || tablero[posicion] !== "") {
    return;
  }

  tablero[posicion] = jugadorActual;
  casilla.textContent = jugadorActual;
  casilla.disabled = true;
  comprobarPartida();
};

const reiniciarPartida = () => {
  tablero = ["", "", "", "", "", "", "", "", ""];
  jugadorActual = "X";
  partidaTerminada = false;
  mensaje.textContent = "Turno del jugador X";

  casillas.forEach((casilla) => {
    casilla.textContent = "";
    casilla.disabled = false;
    casilla.classList.remove("ganadora");
  });
};

casillas.forEach((casilla) => {
  casilla.addEventListener("click", jugarTurno);
});

botonReiniciar.addEventListener("click", reiniciarPartida);
