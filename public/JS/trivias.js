const baseDeDatos = {
    "2014": [
        {
            pregunta: "¿Quién fue el campeón del Mundial Brasil 2014?",
            respuestas: ["Argentina", "Brasil", "Alemania", "Holanda"],
            correcta: 2 
        },
        {
            pregunta: "¿Qué jugador ganó la Bota de Oro como máximo goleador?",
            respuestas: ["Lionel Messi", "Thomas Müller", "Neymar Jr", "James Rodríguez"],
            correcta: 3 
        },
        {
            pregunta: "¿Cuál fue el marcador de la semifinal entre Brasil y Alemania?",
            respuestas: ["1 - 7", "0 - 3", "2 - 5", "1 - 5"],
            correcta: 0 
        },
        {
            pregunta: "¿Quién eliminó a México en Octavos de Final ('No era penal')?",
            respuestas: ["Holanda", "Argentina", "Brasil", "Chile"],
            correcta: 0 
        }
    ],
    "2018": [
        {
            pregunta: "¿Qué selección levantó la copa en Rusia 2018?",
            respuestas: ["Croacia", "Francia", "Inglaterra", "Bélgica"],
            correcta: 1 
        },
        {
            pregunta: "¿Qué tecnología se utilizó por primera vez en este mundial?",
            respuestas: ["Ojo de Halcón", "Balón Inteligente", "VAR", "Fuera de Lugar Auto."],
            correcta: 2
        },
        {
            pregunta: "¿Quién ganó el Balón de Oro al mejor jugador del torneo?",
            respuestas: ["Kylian Mbappé", "Luka Modrić", "Antoine Griezmann", "Eden Hazard"],
            correcta: 1 
        },
        {
            pregunta: "¿Contra qué equipo logró México una histórica victoria 1-0?",
            respuestas: ["Suecia", "Corea del Sur", "Alemania", "Brasil"],
            correcta: 2
        }
    ],
    "2026": [
        {
            pregunta: "¿Qué estadio será la sede del partido inaugural?",
            respuestas: ["SoFi Stadium", "Estadio Azteca", "MetLife Stadium", "Estadio BBVA"],
            correcta: 1 
        },
        {
            pregunta: "¿Cuántos países organizarán este mundial?",
            respuestas: ["Uno", "Dos", "Tres", "Cuatro"],
            correcta: 2 
        },
        {
            pregunta: "¿Cuántos equipos participarán por primera vez en la historia?",
            respuestas: ["48", "40", "32", "64"],
            correcta: 0 
        },
         {
            pregunta: "¿Qué estados de México NO serán sede en 2026?",
            respuestas: ["Monterrey", "CDMX", "Tlaxcala", "Jalisco"],
            correcta: 2
        }
    ]
};

let preguntasActuales = [];
let indicePregunta = 0;
let puntaje = 0;

const menuCategorias = document.getElementById('menu-categorias');
const pantallaJuego = document.getElementById('pantalla-juego');
const pantallaResultados = document.getElementById('pantalla-resultados');

const tituloHeader = document.getElementById('titulo-header');
const btnVolver = document.getElementById('btn-volver');
const textoPregunta = document.getElementById('texto-pregunta');
const contenedorRespuestas = document.getElementById('contenedor-respuestas');

const txtAciertos = document.getElementById('txt-aciertos');
const txtTotal = document.getElementById('txt-total');
const btnVolverTrivias = document.getElementById('btn-volver-trivias');

document.querySelectorAll('.btn-opcion[data-categoria]').forEach(boton => {
    boton.addEventListener('click', (e) => {
        const categoria = e.target.getAttribute('data-categoria');
        iniciarJuego(categoria);
    });
});

btnVolver.addEventListener('click', (e) => {
    if (!menuCategorias.classList.contains('oculto')) {
        return; 
    }
    e.preventDefault();
    regresarAlMenu();
});

btnVolverTrivias.addEventListener('click', () => {
    regresarAlMenu();
});

function iniciarJuego(categoria) {
    preguntasActuales = baseDeDatos[categoria];
    indicePregunta = 0;
    puntaje = 0;

    menuCategorias.classList.add('oculto');
    pantallaResultados.classList.add('oculto');
    pantallaJuego.classList.remove('oculto');
    
    tituloHeader.textContent = `MUNDIAL ${categoria}`;
    cargarPregunta();
}

function regresarAlMenu() {
    pantallaJuego.classList.add('oculto');
    pantallaResultados.classList.add('oculto');
    menuCategorias.classList.remove('oculto');
    
    tituloHeader.textContent = "TRIVIA";
}

function cargarPregunta() {
    if (indicePregunta >= preguntasActuales.length) {
        mostrarResultados();
        return;
    }

    const datos = preguntasActuales[indicePregunta];
    textoPregunta.textContent = datos.pregunta;
    contenedorRespuestas.innerHTML = '';

    datos.respuestas.forEach((respuesta, index) => {
        const boton = document.createElement('button');
        boton.classList.add('btn-respuesta');
        boton.textContent = respuesta;
        boton.onclick = () => verificarRespuesta(index, datos.correcta, boton);
        contenedorRespuestas.appendChild(boton);
    });
}

function verificarRespuesta(indiceElegido, indiceCorrecto, botonPresionado) {
    const botones = document.querySelectorAll('.btn-respuesta');
    botones.forEach(btn => btn.disabled = true);

    let stats = JSON.parse(localStorage.getItem('fifascan_stats')) || { jugadas: 0, aciertos: 0 };
    stats.jugadas++; 

    if (indiceElegido === indiceCorrecto) {
        botonPresionado.classList.add('correcta');
        puntaje++;
        stats.aciertos++;
    } else {
        botonPresionado.classList.add('incorrecta');
        botones[indiceCorrecto].classList.add('correcta');
    }

    localStorage.setItem('fifascan_stats', JSON.stringify(stats));

    setTimeout(() => {
        indicePregunta++;
        cargarPregunta();
    }, 1500);
}

function mostrarResultados() {
    pantallaJuego.classList.add('oculto');
    pantallaResultados.classList.remove('oculto');
    
    txtAciertos.textContent = puntaje;
    txtTotal.textContent = preguntasActuales.length;
}