const API_KEY = "4e352076153b7afbcfdb9893aa69512f"; 

const datosPaises = [
    { nombre: "MÉXICO", idApi: 16, colorTitulo: "#10be39", videos: [{ titulo: "MEX VS ALE 2018", poster: "../MULTIMEDIA/MEXVSAL.jpg", src: "../MULTIMEDIA/ALEMANIAVSMEX.mp4" }, { titulo: "GOLES MÉXICO", poster: "../MULTIMEDIA/GOLESME.jpg", src: "../MULTIMEDIA/GolesMexico.mp4" }] },
    { nombre: "ESPAÑA", idApi: 9, colorTitulo: "#C60B1E", videos: [{ titulo: "ESPAÑA CAMPEÓN 2010", poster: "../MULTIMEDIA/españa.jpg", src: "../MULTIMEDIA/ESPAMA.mp4" }, { titulo: "GOLES IMPRESIONANTES", poster: "../MULTIMEDIA/iniesta.jpg", src: "../MULTIMEDIA/espania.mp4" }] },
    { nombre: "URUGUAY", idApi: 7, colorTitulo: "#0038A8", videos: [{ titulo: "GOLES IMPORTANTES", poster: "../MULTIMEDIA/URUGUAY.jpg", src: "../MULTIMEDIA/uruguaygol.mp4" }] },
    { nombre: "COLOMBIA", idApi: 8, colorTitulo: "#FCD116", videos: [{ titulo: "GOLES MUNDIAL 2018", poster: "../MULTIMEDIA/COLOMBIA.jpg", src: "../MULTIMEDIA/colombia goles.mp4" }] },
    { nombre: "JAPÓN", idApi: 12, colorTitulo: "#00008b", videos: [{ titulo: "SUS MEJORES GOLES", poster: "../MULTIMEDIA/JAPON.jpg", src: "../MULTIMEDIA/japon goles.mp4" }] },
    { nombre: "COREA DEL SUR", idApi: 17, colorTitulo: "#EC0F31", videos: [{ titulo: "GOL VS ALEMANIA", poster: "../MULTIMEDIA/GOLCOREA.jpg", src: "../MULTIMEDIA/GOLCOREA.mp4" }] },
    { nombre: "SUDÁFRICA", idApi: 10, colorTitulo: "#007749", videos: [{ titulo: "Tshabalala 2010", poster: "../MULTIMEDIA/Celebracion.jpg", src: "../MULTIMEDIA/Suadafrica.mp4" }] },
    { nombre: "TÚNEZ", idApi: 28, colorTitulo: "#E70013", videos: [{ titulo: "SUS MEJORES GOLES", poster: "../MULTIMEDIA/TUNEZ.jpg", src: "../MULTIMEDIA/TUNEZ GOLES.mp4" }] }
];

let indiceActual = 0;
const params = new URLSearchParams(window.location.search);
const paisParam = params.get('pais');
if (paisParam !== null && !isNaN(paisParam)) { indiceActual = parseInt(paisParam); }

const tituloPais = document.getElementById('titulo-pais');
const listaJugadores = document.getElementById('lista-jugadores');
const contenedorVideos = document.getElementById('contenedor-videos');
const btnAnt = document.getElementById('btn-ant');
const btnSig = document.getElementById('btn-sig');

const apiVictorias = document.getElementById('api-victorias');
const apiEmpates = document.getElementById('api-empates');
const apiDerrotas = document.getElementById('api-derrotas');
const rachaBolitas = document.getElementById('racha-bolitas');
const apiGf = document.getElementById('api-gf');
const apiGc = document.getElementById('api-gc');
const barraEfectividad = document.getElementById('barra-efectividad');
const textoEfectividad = document.getElementById('texto-efectividad');

const datosSimulados = {
    16: { v: 5, e: 2, d: 3, racha: ['v','v','e','d','v'], gf: 14, gc: 8 }, 
    9:  { v: 8, e: 1, d: 1, racha: ['v','v','v','e','v'], gf: 22, gc: 4 },
    7:  { v: 6, e: 2, d: 2, racha: ['v','d','v','v','e'], gf: 16, gc: 7 },
    8:  { v: 7, e: 2, d: 1, racha: ['v','v','e','v','v'], gf: 18, gc: 5 },
    12: { v: 7, e: 1, d: 2, racha: ['v','v','v','d','v'], gf: 20, gc: 6 },
    17: { v: 5, e: 3, d: 2, racha: ['e','v','e','v','d'], gf: 12, gc: 9 },
    10: { v: 4, e: 4, d: 2, racha: ['e','e','v','d','v'], gf: 10, gc: 8 },
    28: { v: 4, e: 3, d: 3, racha: ['d','v','e','v','d'], gf: 9, gc: 11 }
};

function actualizarUI(v, e, d, gf, gc, racha) {
    apiVictorias.textContent = v;
    apiEmpates.textContent = e;
    apiDerrotas.textContent = d;
    apiGf.textContent = gf;
    apiGc.textContent = gc;
    rachaBolitas.innerHTML = '';
    racha.forEach(res => { rachaBolitas.innerHTML += `<div class="bolita ${res}">${res.toUpperCase()}</div>`; });
    const perc = Math.round((v / (v + e + d)) * 100) || 0;
    barraEfectividad.style.width = perc + "%";
    textoEfectividad.textContent = perc + "%";
}

function activarControlesEstiloGaleria() {
    const containers = document.querySelectorAll('.thumbnail-container');

    containers.forEach(container => {
        const video = container.querySelector('video');
        const playBtn = container.querySelector('.play-btn');
        const fsBtn = container.querySelector('.fullscreen-btn');
        const volumeBtn = container.querySelector('.volume-btn');
        const settingsBtn = container.querySelector('.settings-btn');
        const filtersMenu = container.querySelector('.filters-menu');

        const togglePlay = (e) => {
            e.stopPropagation();
            if (video.paused) {
                video.play();
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                video.pause();
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        };

        playBtn.onclick = togglePlay;
        video.onclick = togglePlay;

        fsBtn.onclick = async (e) => {
            e.stopPropagation();
            if (!document.fullscreenElement) {
                if (container.requestFullscreen) {
                    await container.requestFullscreen();
                }
                // Intentar girar a horizontal
                if (screen.orientation && screen.orientation.lock) {
                    await screen.orientation.lock('landscape').catch(() => {});
                }
                fsBtn.innerHTML = '<i class="fas fa-compress"></i>';
            } else {
                document.exitFullscreen();
                if (screen.orientation && screen.orientation.unlock) {
                    screen.orientation.unlock();
                }
                fsBtn.innerHTML = '<i class="fas fa-expand"></i>';
            }
        };

        if (volumeBtn) {
            volumeBtn.onclick = (e) => {
                e.stopPropagation();
                video.muted = !video.muted;
                volumeBtn.innerHTML = video.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
            };
        }

        if (settingsBtn) {
            settingsBtn.onclick = (e) => {
                e.stopPropagation();
                document.querySelectorAll(".filters-menu").forEach(m => {
                    if (m !== filtersMenu) m.classList.remove("active");
                });
                filtersMenu.classList.toggle('active');
            };
        }

        container.querySelectorAll('.filters-menu button').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                const filter = btn.dataset.filter;
                video.classList.remove("filter-blur", "filter-pixel", "filter-thermal");
                if (filter !== "none") video.classList.add("filter-" + filter);
                filtersMenu.classList.remove("active");
            };
        });
    });
}

async function cargarPlantillaReal(idEquipo) {
    listaJugadores.innerHTML = "<p style='color:gray; font-size:0.8rem;'>Cargando plantilla...</p>";
    try {
        const respuesta = await fetch(`https://v3.football.api-sports.io/players/squads?team=${idEquipo}`, {
            method: "GET",
            headers: { "x-apisports-key": API_KEY }
        });
        const datos = await respuesta.json();
        if (datos.response && datos.response.length > 0) {
            const jugadores = datos.response[0].players;
            listaJugadores.innerHTML = ""; 
            const posiciones = { "Goalkeeper": "PORTEROS", "Defender": "DEFENSAS", "Midfielder": "MEDIOCAMPISTAS", "Forward": "DELANTEROS", "Attacker": "DELANTEROS" };
            const seccionesVistas = new Set();

            Object.keys(posiciones).forEach(posKey => {
                const filtrados = jugadores.filter(j => j.position === posKey);
                if (filtrados.length > 0) {
                    const nombreSeccion = posiciones[posKey];
                    if (!seccionesVistas.has(nombreSeccion)) {
                        listaJugadores.innerHTML += `<h4>${nombreSeccion}</h4>`;
                        seccionesVistas.add(nombreSeccion);
                    }
                    filtrados.forEach(j => {
                        listaJugadores.innerHTML += `
                            <div class="jugador-item">
                                <img src="${j.photo}" class="foto-jugador">
                                <p><strong>#${j.number || '--'}</strong> ${j.name}</p>
                            </div>`;
                    });
                }
            });
        }
    } catch (err) { listaJugadores.innerHTML = "<p style='color:gray;'>Límite de API alcanzado.</p>"; }
}

function cargarPais(indice) {
    const datos = datosPaises[indice];
    tituloPais.textContent = datos.nombre;
    tituloPais.style.color = datos.colorTitulo;
    
    const res = datosSimulados[datos.idApi] || datosSimulados[16];
    actualizarUI(res.v, res.e, res.d, res.gf, res.gc, res.racha);

    contenedorVideos.innerHTML = ''; 
    datos.videos.forEach(vid => {
        contenedorVideos.innerHTML += `
        <div class="video-card">
            <div class="thumbnail-container">
                <video class="video-preview" poster="${vid.poster}" preload="metadata">
                    <source src="${vid.src}" type="video/mp4">
                </video>
                <div class="custom-controls">
                    <button class="play-btn"><i class="fas fa-play"></i></button>
                    <div class="right-controls">
                        <button class="volume-btn"><i class="fas fa-volume-up"></i></button>
                        <button class="fullscreen-btn"><i class="fas fa-expand"></i></button>
                        <div class="video-settings">
                            <button class="settings-btn"><i class="fas fa-cog"></i></button>
                            <div class="filters-menu">
                                <p>FILTROS</p>
                                <button data-filter="none">Normal</button>
                                <button data-filter="blur">Desenfoque</button>
                                <button data-filter="pixel">Pixelado</button>
                                <button data-filter="thermal">Térmica</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="video-info">
                <h3 class="video-titulo">${vid.titulo}</h3>
            </div>
        </div>`;
    });

    activarControlesEstiloGaleria();
    setTimeout(() => { cargarPlantillaReal(datos.idApi); }, 3000);
}

document.addEventListener("click", () => {
    document.querySelectorAll(".filters-menu").forEach(m => m.classList.remove("active"));
});

btnAnt.addEventListener('click', () => { indiceActual = (indiceActual - 1 + datosPaises.length) % datosPaises.length; cargarPais(indiceActual); });
btnSig.addEventListener('click', () => { indiceActual = (indiceActual + 1) % datosPaises.length; cargarPais(indiceActual); });

document.addEventListener('DOMContentLoaded', () => cargarPais(indiceActual));