const baseDeDatos = {
    "futbol": {
        nombre: "FÚTBOL",
        niveles: [
            {
                titulo: "MUNDIAL BRASIL 2014",
                preguntas: [
                    { pregunta: "¿Quién fue el campeón del Mundial Brasil 2014?", respuestas: ["Argentina", "Brasil", "Alemania", "Holanda"], correcta: 2 },
                    { pregunta: "¿Qué jugador ganó la Bota de Oro como máximo goleador?", respuestas: ["Lionel Messi", "Thomas Müller", "Neymar Jr", "James Rodríguez"], correcta: 3 },
                    { pregunta: "¿Cuál fue el marcador de la semifinal entre Brasil y Alemania?", respuestas: ["1 - 7", "0 - 3", "2 - 5", "1 - 5"], correcta: 0 },
                    { pregunta: "¿Quién eliminó a México en Octavos de Final ('No era penal')?", respuestas: ["Holanda", "Argentina", "Brasil", "Chile"], correcta: 0 },
                    { pregunta: "¿Qué canción fue el éxito principal de Shakira en este Mundial?", respuestas: ["Waka Waka", "La La La (Brazil 2014)", "Hips Don't Lie", "Loca"], correcta: 1 }
                ]
            },
            {
                titulo: "MUNDIAL RUSIA 2018",
                preguntas: [
                    { pregunta: "¿Qué selección levantó la copa en Rusia 2018?", respuestas: ["Croacia", "Francia", "Inglaterra", "Bélgica"], correcta: 1 },
                    { pregunta: "¿Qué tecnología se utilizó por primera vez en este mundial?", respuestas: ["Ojo de Halcón", "Balón Inteligente", "VAR", "Fuera de Lugar Auto."], correcta: 2 },
                    { pregunta: "¿Quién ganó el Balón de Oro al mejor jugador del torneo?", respuestas: ["Kylian Mbappé", "Luka Modrić", "Antoine Griezmann", "Eden Hazard"], correcta: 1 },
                    { pregunta: "¿Contra qué equipo logró México una histórica victoria 1-0?", respuestas: ["Suecia", "Corea del Sur", "Alemania", "Brasil"], correcta: 2 },
                    { pregunta: "¿Qué artista cantó 'Live It Up', la canción oficial de Rusia 2018?", respuestas: ["Nicky Jam y Will Smith", "Ricky Martin", "Maluma", "J Balvin"], correcta: 0 }
                ]
            },
            {
                titulo: "MUNDIAL MÉXICO 2026",
                preguntas: [
                    { pregunta: "¿Qué estadio será la sede del partido inaugural?", respuestas: ["SoFi Stadium", "Estadio Azteca", "MetLife Stadium", "Estadio BBVA"], correcta: 1 },
                    { pregunta: "¿Cuántos países organizarán este mundial?", respuestas: ["Uno", "Dos", "Tres", "Cuatro"], correcta: 2 },
                    { pregunta: "¿Cuántos equipos participarán por primera vez en la historia?", respuestas: ["32", "40", "48", "64"], correcta: 2 },
                    { pregunta: "¿Qué estados de México NO serán sede en 2026?", respuestas: ["Monterrey", "CDMX", "Tlaxcala", "Jalisco"], correcta: 2 },
                    { pregunta: "¿Qué famosa canción se hizo tradición cantar en el Estadio Azteca desde el mundial de 1986?", respuestas: ["El Rey", "La Bamba", "Cielito Lindo", "La Ola Verde"], correcta: 3 }
                ]
            }
        ]
    },
    "canciones": {
        nombre: "CANCIONES",
        niveles: [
            {
                titulo: "ÉXITOS CLÁSICOS",
                preguntas: [
                    { pregunta: "¿Quién interpretó 'La Copa de la Vida' en Francia 1998?", respuestas: ["Chayanne", "Enrique Iglesias", "Ricky Martin", "Luis Fonsi"], correcta: 2 },
                    { pregunta: "¿Qué canción de Anastacia fue el tema oficial de Corea-Japón 2002?", respuestas: ["Boom", "Waka Waka", "Celebrate", "Ole Ola"], correcta: 0 },
                    { pregunta: "¿Qué grupo cantó 'The Time of Our Lives' en Alemania 2006?", respuestas: ["Coldplay", "Il Divo", "U2", "Queen"], correcta: 1 },
                    { pregunta: "¿Cuál fue la primera canción de rock hecha para un Mundial (Chile 1962)?", respuestas: ["El Rock del Mundial", "La Copa", "Gol", "Campeones"], correcta: 0 },
                    { pregunta: "¿Qué famoso himno se popularizó en el mundial de Italia 90?", respuestas: ["Un'estate italiana", "Bella Ciao", "Gloria", "Volare"], correcta: 0 }
                ]
            },
            {
                titulo: "ÉXITOS MODERNOS",
                preguntas: [
                    { pregunta: "¿Cómo se llama la famosa canción de Shakira para Sudáfrica 2010?", respuestas: ["La La La", "Waka Waka", "Hips Don't Lie", "Loca"], correcta: 1 },
                    { pregunta: "¿Qué artista cantó 'We Are One' en Brasil 2014?", respuestas: ["Pitbull", "Daddy Yankee", "J Balvin", "Maluma"], correcta: 0 },
                    { pregunta: "¿Qué canción del rapero K'naan se hizo himno no oficial en 2010?", respuestas: ["Waka Waka", "Wavin' Flag", "Danza Kuduro", "Limbo"], correcta: 1 },
                    { pregunta: "¿Quién cantó 'Tukoh Taka' en Qatar 2022?", respuestas: ["Maluma y Nicki Minaj", "Shakira", "Ozuna", "J Balvin"], correcta: 0 },
                    { pregunta: "¿Qué canción de la banda BTS sonó en la inauguración de Qatar 2022?", respuestas: ["Dynamite", "Butter", "Dreamers", "Fake Love"], correcta: 2 }
                ]
            }
        ]
    },
    "cultura": {
        nombre: "CULTURA GENERAL",
        niveles: [
            {
                titulo: "MÉXICO EN MUNDIALES",
                preguntas: [
                    { pregunta: "¿En qué años México ha sido sede de un Mundial?", respuestas: ["1970 y 1986", "1966 y 1994", "1978 y 1986", "1970 y 1990"], correcta: 0 },
                    { pregunta: "¿Contra qué selección logró México su primera victoria en un Mundial (1962)?", respuestas: ["Brasil", "Checoslovaquia", "Bulgaria", "El Salvador"], correcta: 1 },
                    { pregunta: "¿Quién es el máximo goleador mexicano en Mundiales junto con 'Chicharito'?", respuestas: ["Hugo Sánchez", "Luis Hernández", "Cuauhtémoc Blanco", "Jared Borgetti"], correcta: 1 },
                    { pregunta: "¿Qué portero mexicano paró un penal a Lewandowski en 2022?", respuestas: ["Jorge Campos", "Oswaldo Sánchez", "Guillermo Ochoa", "Talavera"], correcta: 2 },
                    { pregunta: "¿Qué canción de The White Stripes usan los mexicanos para corear a 'Chucky' Lozano?", respuestas: ["Seven Nation Army", "Fell In Love With a Girl", "Icky Thump", "Blue Orchid"], correcta: 0 }
                ]
            }
        ]
    },
    "mascotas": {
        nombre: "MASCOTAS",
        niveles: [
            {
                titulo: "MASCOTAS HISTÓRICAS",
                preguntas: [
                    { pregunta: "¿Cuál fue el nombre de la mascota de México 1986?", respuestas: ["Juanito", "Pique", "Striker", "Gauchito"], correcta: 1 },
                    { pregunta: "¿Qué animal era 'Fuleco', la mascota de Brasil 2014?", respuestas: ["Un perro", "Un armadillo", "Un jaguar", "Un loro"], correcta: 1 },
                    { pregunta: "¿Cuál fue la primera mascota oficial en Inglaterra 1966?", respuestas: ["Un león (Willie)", "Un perro (Striker)", "Un gallo (Footix)", "Un águila"], correcta: 0 },
                    { pregunta: "¿Cómo se llamaba la mascota de Qatar 2022?", respuestas: ["Zabivaka", "La'eeb", "Zakumi", "Ciao"], correcta: 1 },
                    { pregunta: "¿Qué mascota estaba formada por bloques y tuvo su propia música de 8-bits en Italia 90?", respuestas: ["Ciao", "Pique", "Naranjito", "Gauchito"], correcta: 0 }
                ]
            }
        ]
    }
};

let categoriaActiva = null; 
let preguntasActuales = [];
let indicePregunta = 0;
let puntaje = 0;

const menuPrincipal = document.getElementById('menu-principal');
const menuSubcategorias = document.getElementById('menu-subcategorias');
const pantallaJuego = document.getElementById('pantalla-juego');
const pantallaResultados = document.getElementById('pantalla-resultados');

const tituloHeader = document.getElementById('titulo-header');
const btnVolver = document.getElementById('btn-volver');
const textoPregunta = document.getElementById('texto-pregunta');
const contenedorRespuestas = document.getElementById('contenedor-respuestas');

const txtAciertos = document.getElementById('txt-aciertos');
const txtTotal = document.getElementById('txt-total');
const btnVolverTrivias = document.getElementById('btn-volver-trivias');

// Algoritmo para mezclar arreglos (Fisher-Yates)
function mezclarArreglo(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.querySelectorAll('#menu-principal .btn-opcion').forEach(boton => {
    boton.addEventListener('click', (e) => {
        const catKey = e.target.getAttribute('data-categoria');
        abrirSubcategorias(catKey);
    });
});

btnVolver.addEventListener('click', (e) => {
    if (!menuPrincipal.classList.contains('oculto')) return; 
    e.preventDefault(); 
    if (!pantallaJuego.classList.contains('oculto') || !pantallaResultados.classList.contains('oculto')) {
        pantallaJuego.classList.add('oculto');
        pantallaResultados.classList.add('oculto');
        menuSubcategorias.classList.remove('oculto');
        tituloHeader.textContent = categoriaActiva.nombre;
    } 
    else if (!menuSubcategorias.classList.contains('oculto')) {
        menuSubcategorias.classList.add('oculto');
        menuPrincipal.classList.remove('oculto');
        tituloHeader.textContent = "TRIVIA";
        categoriaActiva = null;
    }
});

btnVolverTrivias.addEventListener('click', () => {
    pantallaResultados.classList.add('oculto');
    menuSubcategorias.classList.add('oculto');  
    menuPrincipal.classList.remove('oculto'); 
    tituloHeader.textContent = "TRIVIA";        
    categoriaActiva = null;                    
});

function abrirSubcategorias(catKey) {
    categoriaActiva = baseDeDatos[catKey];
    menuPrincipal.classList.add('oculto');
    menuSubcategorias.classList.remove('oculto');
    tituloHeader.textContent = categoriaActiva.nombre;
    
    menuSubcategorias.innerHTML = ''; 
    categoriaActiva.niveles.forEach((nivel, index) => {
        const btn = document.createElement('button');
        btn.classList.add('btn-opcion');
        btn.textContent = nivel.titulo;
        btn.onclick = () => iniciarJuego(index);
        menuSubcategorias.appendChild(btn);
    });
}

function iniciarJuego(indiceNivel) {
    // Creamos una copia de las preguntas y las mezclamos para no alterar la base de datos original
    preguntasActuales = mezclarArreglo([...categoriaActiva.niveles[indiceNivel].preguntas]);
    indicePregunta = 0;
    puntaje = 0;

    menuSubcategorias.classList.add('oculto');
    pantallaJuego.classList.remove('oculto');
    
    tituloHeader.textContent = categoriaActiva.niveles[indiceNivel].titulo; 
    cargarPregunta();
}

function cargarPregunta() {
    if (indicePregunta >= preguntasActuales.length) {
        mostrarResultados();
        return;
    }

    const datos = preguntasActuales[indicePregunta];
    textoPregunta.textContent = datos.pregunta;
    contenedorRespuestas.innerHTML = '';

    // Opcional: También mezclar las respuestas dentro de cada pregunta
    const respuestasConIndice = datos.respuestas.map((res, i) => ({ texto: res, original: i }));
    mezclarArreglo(respuestasConIndice).forEach((respuesta) => {
        const boton = document.createElement('button');
        boton.classList.add('btn-respuesta');
        boton.textContent = respuesta.texto;
        boton.onclick = () => verificarRespuesta(respuesta.original, datos.correcta, boton);
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
        // Buscar el botón que tiene la respuesta correcta para iluminarlo
        // Nota: Como mezclamos respuestas, necesitamos identificarlo por texto
        botones.forEach(btn => {
            if (preguntasActuales[indicePregunta].respuestas[indiceCorrecto] === btn.textContent) {
                btn.classList.add('correcta');
            }
        });
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