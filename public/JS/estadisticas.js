const API_KEY = "4e352076153b7afbcfdb9893aa69512f"; 

// --- BASE DE DATOS DE PAÍSES ---
const datosPaises = [
    {
        nombre: "MÉXICO",
        idApi: 16, 
        colorTitulo: "#10be39",
        videos: [
            { titulo: "MEX VS ALE 2018", poster: "../MULTIMEDIA/MEXVSAL.jpg", src: "../MULTIMEDIA/ALEMANIAVSMEX.mp4" },
            { titulo: "GOLES MÉXICO", poster: "../MULTIMEDIA/GOLESME.jpg", src: "../MULTIMEDIA/GolesMexico.mp4" }
        ],
        plantilla: `
            <div class="info-tecnica"><h4>DIRECCIÓN TÉCNICA</h4><p>DT: JAVIER "VASCO" AGUIRRE</p></div>
            <h4>PORTEROS</h4><p>LUIS MALAGÓN</p><p>GUILLERMO OCHOA</p><p>RAÚL RANGEL</p>
            <h4>DEFENSAS</h4><p>JOHAN VÁSQUEZ</p><p>CÉSAR MONTES</p><p>ISRAEL REYES</p><p>JORGE SÁNCHEZ</p>
            <h4>MEDIOCAMPISTAS</h4><p>EDSON ÁLVAREZ</p><p>LUIS ROMO</p><p>LUIS CHÁVEZ</p><p>ORBELÍN PINEDA</p>
            <h4>DELANTEROS</h4><p>SANTIAGO GIMÉNEZ</p><p>RAÚL JIMÉNEZ</p><p>JULIÁN QUIÑONES</p>
        `
    },
    {
        nombre: "ESPAÑA",
        idApi: 9,
        colorTitulo: "#C60B1E",
        videos: [
            { titulo: "ESPAÑA CAMPEÓN 2010", poster: "../MULTIMEDIA/españa.jpg", src: "../MULTIMEDIA/ESPAMA.mp4" },
            { titulo: "GOLES IMPRESIONANTES", poster: "../MULTIMEDIA/iniesta.jpg", src: "../MULTIMEDIA/espania.mp4" }
        ],
        plantilla: `
             <div class="info-tecnica"><h4>DIRECCIÓN TÉCNICA</h4><p>DT: LUIS DE LA FUENTE</p></div>
            <h4>PORTEROS</h4><p>UNAI SIMÓN</p><p>DAVID RAYA</p>
            <h4>DEFENSAS</h4><p>AYMERIC LAPORTE</p><p>ROBIN LE NORMAND</p><p>DANI CARVAJAL</p><p>MARC CUCURELLA</p>
            <h4>MEDIOCAMPISTAS</h4><p>RODRI</p><p>PEDRI</p><p>FABIÁN RUIZ</p><p>DANI OLMO</p>
            <h4>DELANTEROS</h4><p>LAMINE YAMAL</p><p>NICO WILLIAMS</p><p>ÁLVARO MORATA</p>
        `
    },
    {
        nombre: "URUGUAY",
        idApi: 7,
        colorTitulo: "#0038A8",
        videos: [{ titulo: "GOLES IMPORTANTES", poster: "../MULTIMEDIA/URUGUAY.jpg", src: "../MULTIMEDIA/uruguaygol.mp4" }],
        plantilla: `
             <div class="info-tecnica"><h4>DIRECCIÓN TÉCNICA</h4><p>DT: MARCELO BIELSA</p></div>
            <h4>PORTEROS</h4><p>SERGIO ROCHET</p><p>SANTIAGO MELE</p>
            <h4>DEFENSAS</h4><p>RONALD ARAÚJO</p><p>JOSÉ MARÍA GIMÉNEZ</p><p>MATHÍAS OLIVERA</p>
            <h4>MEDIOCAMPISTAS</h4><p>FEDERICO VALVERDE</p><p>MANUEL UGARTE</p><p>NICOLÁS DE LA CRUZ</p>
            <h4>DELANTEROS</h4><p>DARWIN NÚÑEZ</p><p>FACUNDO PELLISTRI</p><p>MAXIMILIANO ARAÚJO</p>
        `
    },
    {
        nombre: "COLOMBIA",
        idApi: 8,
        colorTitulo: "#FCD116",
        videos: [{ titulo: "GOLES MUNDIAL 2018", poster: "../MULTIMEDIA/COLOMBIA.jpg", src: "../MULTIMEDIA/colombia goles.mp4" }],
        plantilla: `
             <div class="info-tecnica"><h4>DIRECCIÓN TÉCNICA</h4><p>DT: NÉSTOR LORENZO</p></div>
            <h4>PORTEROS</h4><p>CAMILO VARGAS</p><p>DAVID OSPINA</p>
            <h4>DEFENSAS</h4><p>DAVINSON SÁNCHEZ</p><p>CARLOS CUESTA</p><p>DANIEL MUÑOZ</p>
            <h4>MEDIOCAMPISTAS</h4><p>JAMES RODRÍGUEZ</p><p>JEFFERSON LERMA</p><p>RICHARD RÍOS</p><p>JHON ARIAS</p>
            <h4>DELANTEROS</h4><p>LUIS DÍAZ</p><p>JHON CÓRDOBA</p><p>RAFAEL SANTOS BORRÉ</p>
        `
    },
    {
        nombre: "JAPÓN",
        idApi: 12,
        colorTitulo: "#00008b",
        videos: [{ titulo: "SUS MEJORES GOLES", poster: "../MULTIMEDIA/JAPON.jpg", src: "../MULTIMEDIA/japon goles.mp4" }],
        plantilla: `
            <div class="info-tecnica"><h4>DIRECCIÓN TÉCNICA</h4><p>DT: HAJIME MORIYASU</p></div>
            <h4>PORTEROS</h4><p>ZION SUZUKI</p><p>KEISUKE OSAKO</p>
            <h4>DEFENSAS</h4><p>TAKEHIRO TOMIYASU</p><p>KO ITAKURA</p><p>YUKINARI SUGAWARA</p>
            <h4>MEDIOCAMPISTAS</h4><p>WATARU ENDO</p><p>TAKEFUSA KUBO</p><p>KAORU MITOMA</p>
            <h4>DELANTEROS</h4><p>AYASE UEDA</p><p>DAIZEN MAEDA</p>
        `
    },
    {
        nombre: "COREA DEL SUR",
        idApi: 17,
        colorTitulo: "#EC0F31",
        videos: [{ titulo: "GOL VS ALEMANIA", poster: "../MULTIMEDIA/GOLCOREA.jpg", src: "../MULTIMEDIA/GOLCOREA.mp4" }],
        plantilla: `
             <div class="info-tecnica"><h4>DIRECCIÓN TÉCNICA</h4><p>DT: HONG MYUNG-BO</p></div>
            <h4>PORTEROS</h4><p>JO HYEON-WOO</p><p>KIM SEUNG-GYU</p>
            <h4>DEFENSAS</h4><p>KIM MIN-JAE</p><p>KIM YOUNG-GWON</p><p>SEOL YOUNG-WOO</p>
            <h4>MEDIOCAMPISTAS</h4><p>LEE KANG-IN</p><p>HWANG IN-BEOM</p><p>LEE JAE-SUNG</p>
            <h4>DELANTEROS</h4><p>SON HEUNG-MIN</p><p>CHO GUE-SUNG</p>
        `
    },
    {
        nombre: "SUDÁFRICA",
        idApi: 10,
        colorTitulo: "#007749",
        videos: [{ titulo: "Tshabalala 2010", poster: "../MULTIMEDIA/Celebracion.jpg", src: "../MULTIMEDIA/Suadafrica.mp4" }], 
        plantilla: `
             <div class="info-tecnica"><h4>DIRECCIÓN TÉCNICA</h4><p>DT: HUGO BROOS</p></div>
            <h4>PORTEROS</h4><p>RONWEN WILLIAMS</p><p>RICARDO GOSS</p>
            <h4>DEFENSAS</h4><p>MOTHOBI MVALA</p><p>GRANT KEKANA</p><p>KHULISO MUDAU</p>
            <h4>MEDIOCAMPISTAS</h4><p>TEBOHO MOKOENA</p><p>THEMBA ZWANE</p><p>SPHEPHELO SITHOLE</p>
            <h4>DELANTEROS</h4><p>PERCY TAU</p><p>EVIDENCE MAKGOPA</p>
        `
    },
    {
        nombre: "TÚNEZ",
        idApi: 28,
        colorTitulo: "#E70013",
        videos: [{ titulo: "SUS MEJORES GOLES", poster: "../MULTIMEDIA/TUNEZ.jpg", src: "../MULTIMEDIA/TUNEZ GOLES.mp4" }],
        plantilla: `
             <div class="info-tecnica"><h4>DIRECCIÓN TÉCNICA</h4><p>DT: KAIS YAÂKOUBI</p></div>
            <h4>PORTEROS</h4><p>AYMEN DAHMEN</p><p>BECHIR BEN SAID</p>
            <h4>DEFENSAS</h4><p>MONTASSAR TALBI</p><p>YASSINE MERIAH</p><p>ALI ABDI</p>
            <h4>MEDIOCAMPISTAS</h4><p>ELLYES SKHIRI</p><p>AÏSSA LAÏDOUNI</p><p>HANNIBAL MEJBRI</p>
            <h4>DELANTEROS</h4><p>YOUSSEF MSAKNI</p><p>ELIAS ACHOURI</p>
        `
    }
];

let indiceActual = 0;

const params = new URLSearchParams(window.location.search);
const paisParam = params.get('pais');
if (paisParam !== null && !isNaN(paisParam)) {
    indiceActual = parseInt(paisParam);
}

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
async function obtenerEstadisticasReales(idEquipo) {
    if(!apiVictorias) return; 

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

    try {
        apiVictorias.textContent = "...";
        apiEmpates.textContent = "...";
        apiDerrotas.textContent = "...";
        if(apiGf) { apiGf.textContent = "-"; apiGc.textContent = "-"; rachaBolitas.innerHTML = ''; }

        // CAMBIO AQUÍ: Enlace y host corregidos para RapidAPI
        const respuesta = await fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?team=${idEquipo}&last=10`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": API_KEY
            }
        });

        const datos = await respuesta.json();
        
        // Un mensajito en la consola para ayudarte a detectar si falta algo en tu cuenta
        console.log("Respuesta de la API:", datos);

        // Verificamos si RapidAPI nos mandó un mensaje de error (ej. falta suscribirse al plan gratis)
        if (datos.message) {
            throw new Error("Aviso de RapidAPI: " + datos.message);
        }

        if (!datos.response || datos.response.length === 0) {
            throw new Error("La API no devolvió datos. (Revisa tu límite diario)");
        }

        const partidos = datos.response;
        let victorias = 0, empates = 0, derrotas = 0;
        let golesFavor = 0, golesContra = 0;
        let racha = [];

        partidos.forEach(partido => {
            const homeId = partido.teams.home.id;
            const ganador = partido.teams.home.winner === true ? homeId : 
                            partido.teams.away.winner === true ? partido.teams.away.id : null;
            
            let resultadoActual = 'e';
            if (ganador === idEquipo) { victorias++; resultadoActual = 'v'; } 
            else if (ganador === null) { empates++; } 
            else { derrotas++; resultadoActual = 'd'; }

            // Guardamos el resultado para la Racha (solo los 5 más recientes)
            if(racha.length < 5) racha.push(resultadoActual);

            // Sumamos los goles exactos
            if (homeId === idEquipo) {
                golesFavor += partido.goals.home || 0;
                golesContra += partido.goals.away || 0;
            } else {
                golesFavor += partido.goals.away || 0;
                golesContra += partido.goals.home || 0;
            }
        });

        // Imprimir Cajas Superiores
        apiVictorias.textContent = victorias;
        apiEmpates.textContent = empates;
        apiDerrotas.textContent = derrotas;

        // Imprimir Métricas Avanzadas
        if(apiGf) {
            apiGf.textContent = golesFavor;
            apiGc.textContent = golesContra;

            rachaBolitas.innerHTML = '';
            racha.forEach(res => {
                rachaBolitas.innerHTML += `<div class="bolita ${res}">${res.toUpperCase()}</div>`;
            });

            // Animar el termómetro
            let porcentaje = Math.round((victorias / partidos.length) * 100);
            setTimeout(() => {
                barraEfectividad.style.width = `${porcentaje}%`;
                textoEfectividad.textContent = `${porcentaje}%`;
            }, 300);
        }

    } catch (error) {
        console.warn("Usando datos de respaldo. Motivo:", error.message);
        const respaldo = datosSimulados[idEquipo] || datosSimulados[16];
        
        apiVictorias.textContent = respaldo.v;
        apiEmpates.textContent = respaldo.e;
        apiDerrotas.textContent = respaldo.d;

        if(apiGf) {
            apiGf.textContent = respaldo.gf;
            apiGc.textContent = respaldo.gc;

            rachaBolitas.innerHTML = '';
            respaldo.racha.forEach(res => {
                rachaBolitas.innerHTML += `<div class="bolita ${res}">${res.toUpperCase()}</div>`;
            });

            let porcentaje = Math.round((respaldo.v / 10) * 100);
            setTimeout(() => {
                barraEfectividad.style.width = `${porcentaje}%`;
                textoEfectividad.textContent = `${porcentaje}%`;
            }, 300);
        }
    }
}

async function obtenerEstadisticasReales(idEquipo) {
    if(!apiVictorias) return; 

    try {
        apiVictorias.textContent = "...";
        apiEmpates.textContent = "...";
        apiDerrotas.textContent = "...";
        if(apiGf) { apiGf.textContent = "-"; apiGc.textContent = "-"; rachaBolitas.innerHTML = ''; }


        const respuesta = await fetch(`https://v3.football.api-sports.io/fixtures?team=${idEquipo}&season=2022`, {
            method: "GET",
            headers: {
                "x-apisports-key": API_KEY
            }
        });

        const datos = await respuesta.json();

        if (datos.errors && Object.keys(datos.errors).length > 0) {
            alert("Error de la API: " + JSON.stringify(datos.errors));
            return;
        }

        if (!datos.response || datos.response.length === 0) {
            alert("Sin datos para este equipo en la temporada seleccionada.");
            return;
        }

        const partidosTerminados = datos.response.filter(p => 
            p.fixture.status.short === 'FT' || 
            p.fixture.status.short === 'PEN' || 
            p.fixture.status.short === 'AET'
        );

        const partidos = partidosTerminados.slice(-10);

        // --- CALCULAR RESULTADOS ---
        let victorias = 0, empates = 0, derrotas = 0;
        let golesFavor = 0, golesContra = 0;
        let racha = [];


        partidos.forEach(partido => {
            const homeId = partido.teams.home.id;
            const ganador = partido.teams.home.winner === true ? homeId : 
                            partido.teams.away.winner === true ? partido.teams.away.id : null;
            
            let resultadoActual = 'e';
            if (ganador === idEquipo) { victorias++; resultadoActual = 'v'; } 
            else if (ganador === null) { empates++; } 
            else { derrotas++; resultadoActual = 'd'; }

            if(racha.length < 5) racha.push(resultadoActual);

            if (homeId === idEquipo) {
                golesFavor += partido.goals.home || 0;
                golesContra += partido.goals.away || 0;
            } else {
                golesFavor += partido.goals.away || 0;
                golesContra += partido.goals.home || 0;
            }
        });

        apiVictorias.textContent = victorias;
        apiEmpates.textContent = empates;
        apiDerrotas.textContent = derrotas;

        if(apiGf) {
            apiGf.textContent = golesFavor;
            apiGc.textContent = golesContra;

            rachaBolitas.innerHTML = '';
            racha.forEach(res => { rachaBolitas.innerHTML += `<div class="bolita ${res}">${res.toUpperCase()}</div>`; });

            let porcentaje = Math.round((victorias / partidos.length) * 100);
            setTimeout(() => {
                barraEfectividad.style.width = `${porcentaje}%`;
                textoEfectividad.textContent = `${porcentaje}%`;
            }, 300);
        }

    } catch (error) {
        console.error("Error grave en la conexión:", error);
    }
}
function cargarPais(indice) {
    const datos = datosPaises[indice];

    tituloPais.textContent = datos.nombre;
    tituloPais.style.color = datos.colorTitulo;

    listaJugadores.innerHTML = datos.plantilla;

    contenedorVideos.innerHTML = ''; 
    if (datos.videos.length > 0) {
        datos.videos.forEach(vid => {
            contenedorVideos.innerHTML += `
            <div class="mini-card">
                <div class="thumbnail-container">
                    <video class="video-preview" poster="${vid.poster}">
                        <source src="${vid.src}" type="video/mp4">
                    </video>
                    <div class="custom-controls">
                        <button class="play-btn"><i class="fas fa-play"></i></button>
                        <div class="right-controls">
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
                <p>${vid.titulo}</p>
            </div>
            `;
        });
    } else {
        contenedorVideos.innerHTML = `<p style="grid-column: 1/-1; text-align:center; font-family:'Zen Dots', sans-serif; font-size: 0.8rem; color:#666;">Próximamente más videos...</p>`;
    }

    activarControlesVideo();

 
    obtenerEstadisticasReales(datos.idApi);
}

function activarControlesVideo() {
    document.querySelectorAll('.thumbnail-container').forEach(container => {
        const video = container.querySelector('video');
        const playBtn = container.querySelector('.play-btn');
        const fsBtn = container.querySelector('.fullscreen-btn');
        const settingsBtn = container.querySelector('.settings-btn');
        const filtersMenu = container.querySelector('.filters-menu');

        const togglePlay = (e) => {
            e.stopPropagation();
            if (video.paused) { video.play(); playBtn.innerHTML = '<i class="fas fa-pause"></i>'; } 
            else { video.pause(); playBtn.innerHTML = '<i class="fas fa-play"></i>'; }
        };
        playBtn.addEventListener('click', togglePlay);
        video.addEventListener('click', togglePlay);

        fsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!document.fullscreenElement) { container.requestFullscreen(); fsBtn.innerHTML = '<i class="fas fa-compress"></i>'; } 
            else { document.exitFullscreen(); fsBtn.innerHTML = '<i class="fas fa-expand"></i>'; }
        });

        settingsBtn.addEventListener('click', (e) => { e.stopPropagation(); filtersMenu.classList.toggle('active'); });

        container.querySelectorAll('.filters-menu button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const filter = btn.dataset.filter;
                video.classList.remove("filter-blur", "filter-pixel", "filter-thermal");
                if (filter !== "none") video.classList.add("filter-" + filter);
                filtersMenu.classList.remove("active");
            });
        });
    });
}

document.addEventListener("click", () => { document.querySelectorAll(".filters-menu").forEach(m => m.classList.remove("active")); });

btnAnt.addEventListener('click', () => { indiceActual--; if (indiceActual < 0) indiceActual = datosPaises.length - 1; cargarPais(indiceActual); });
btnSig.addEventListener('click', () => { indiceActual++; if (indiceActual >= datosPaises.length) indiceActual = 0; cargarPais(indiceActual); });

document.addEventListener('DOMContentLoaded', () => { cargarPais(indiceActual); });