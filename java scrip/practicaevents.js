const principal = document.getElementById("principal");
const contador = document.getElementById("contador");
const pulsadores = document.querySelectorAll("aside nav a");
const btnRafaga = document.getElementById("btnRafaga");
const btnColor = document.getElementById("btnColor");
const btnModo = document.getElementById("btnModo");
const btnBorrar = document.getElementById("btnBorrar");

const colores = ["#ff6b6b", "#4ecdc4", "#ffe66d", "#1a8fe3", "#c77dff", "#ff9f1c"];
const maxObjetos = 40;

let totalCreados = 0;
let ultimoMovimiento = 0;
let colorFondoActual = "";

const actualizarContador = () => {
    const activos = principal.querySelectorAll(".objeto").length;
    contador.textContent = `Objetos activos: ${activos} | Creados en total: ${totalCreados}`;
};

const borrarTodos = () => {
    principal.querySelectorAll(".objeto").forEach((objeto) => objeto.remove());
    actualizarContador();
};

const crearObjeto = (x, y, tipo) => {
    totalCreados++;

    const objeto = document.createElement("div");
    objeto.classList.add("objeto", `objeto-${tipo}`);
    objeto.style.left = `${x}px`;
    objeto.style.top = `${y}px`;
    objeto.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
    objeto.textContent = `#${totalCreados}`;

    const botonBorrar = document.createElement("button");
    botonBorrar.classList.add("btn-borrar");
    botonBorrar.textContent = "x";
    botonBorrar.setAttribute("aria-label", "Borrar objeto");

    objeto.appendChild(botonBorrar);
    principal.appendChild(objeto);
    actualizarContador();
};

// evento mousemove: crea objetos al pasar el cursor por la zona
principal.addEventListener("mousemove", (evento) => {
    const ahora = Date.now();
    if (ahora - ultimoMovimiento < 350) return;
    if (principal.querySelectorAll(".objeto").length >= maxObjetos) return;
    ultimoMovimiento = ahora;

    const rect = principal.getBoundingClientRect();
    crearObjeto(evento.clientX - rect.left, evento.clientY - rect.top, "hover");
});

// evento click: crea un objeto justo donde se pulsa, o borra uno si se pulsa su boton
principal.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("btn-borrar")) {
        evento.target.closest(".objeto").remove();
        actualizarContador();
        return;
    }

    const rect = principal.getBoundingClientRect();
    crearObjeto(evento.clientX - rect.left, evento.clientY - rect.top, "click");
});

// evento dblclick: borra todos los objetos
principal.addEventListener("dblclick", borrarTodos);

// evento contextmenu: crea un objeto especial con el boton derecho
principal.addEventListener("contextmenu", (evento) => {
    evento.preventDefault();
    const rect = principal.getBoundingClientRect();
    crearObjeto(evento.clientX - rect.left, evento.clientY - rect.top, "especial");
});

// evento keydown: la tecla Escape vacia la zona
document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") borrarTodos();
});

// evento mouseenter/mouseleave: vista previa de color al pasar por cualquier pulsador
pulsadores.forEach((pulsador, indice) => {
    pulsador.addEventListener("mouseenter", () => {
        principal.style.backgroundColor = colores[indice % colores.length];
    });
    pulsador.addEventListener("mouseleave", () => {
        principal.style.backgroundColor = colorFondoActual;
    });
});

// click en "ráfaga de objetos": crea varios objetos en posiciones aleatorias
btnRafaga.addEventListener("click", (evento) => {
    evento.preventDefault();
    const rect = principal.getBoundingClientRect();
    for (let i = 0; i < 6; i++) {
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        crearObjeto(x, y, "click");
    }
});

// click en "cambiar color": fija un color de fondo persistente para la zona
btnColor.addEventListener("click", (evento) => {
    evento.preventDefault();
    colorFondoActual = colores[Math.floor(Math.random() * colores.length)];
    principal.style.backgroundColor = colorFondoActual;
});

// click en "modo oscuro": alterna el tema de la zona de eventos
btnModo.addEventListener("click", (evento) => {
    evento.preventDefault();
    principal.classList.toggle("zona-oscura");
});

// click en "borrar todo": vacia la zona de eventos
btnBorrar.addEventListener("click", (evento) => {
    evento.preventDefault();
    borrarTodos();
});

actualizarContador();
