// --- BASE DE DATOS DE PAÍSES (CON INFO EXTENDIDA) ---
const datosPaises = [
    {
        nombre: "MÉXICO",
        colorTitulo: "#10be39",
        datosCuriosos: [
            "Es el país que más veces ha sido sede de un Mundial (1970, 1986 y ahora 2026).",
            "Junto con Brasil, es una de las selecciones que nunca ha faltado a un Mundial desde 1994.",
            "Tienen el récord del partido con más asistencia en la historia de los mundiales (Estadio Azteca, 1986)."
        ],
        historia: "La Selección Mexicana, conocida como 'El Tri', es el gigante histórico de la CONCACAF. Sus mejores participaciones mundialistas ocurrieron jugando en casa, alcanzando los cuartos de final en 1970 y 1986. Durante siete mundiales consecutivos (1994-2018), México avanzó a Octavos de Final, creando la famosa 'maldición del quinto partido'.",
        stats: { victorias: "12.5%", empates: "12.5%", derrotas: "12.5%", favor: "25%", contra: "37.5%" },
        coloresLeyenda: { victorias: "#228B22", empates: "#1E7E68", derrotas: "#458B74", favor: "#6CA6CD", contra: "#87CEEB" },
        gradiente: `conic-gradient(#228B22 0% 12.5%, #1E7E68 12.5% 25%, #458B74 25% 37.5%, #6CA6CD 37.5% 62.5%, #87CEEB 62.5% 100%)`,
        videos: [
            { titulo: "MEX VS ALE 2018", poster: "/MULTIMEDIA/MEXVSAL.jpg", src: "/MULTIMEDIA/ALEMANIAVSMEX.mp4" },
            { titulo: "GOLES MÉXICO", poster: "/MULTIMEDIA/GOLESME.jpg", src: "/MULTIMEDIA/GolesMexico.mp4" }
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
        colorTitulo: "#C60B1E",
        datosCuriosos: [
            "Fueron Campeones del Mundo por primera y única vez en Sudáfrica 2010.",
            "Son la única selección en la historia en ganar Eurocopa-Mundial-Eurocopa de forma consecutiva (2008, 2010, 2012).",
            "Popularizaron el estilo de juego conocido como 'Tiki-Taka', basado en pases cortos y posesión absoluta."
        ],
        historia: "Conocida como 'La Furia Roja', España es una de las grandes potencias europeas. Aunque históricamente sufrían en cuartos de final, la generación dorada de Xavi, Iniesta y Casillas cambió la historia en 2010. Hoy, con una mezcla de veteranos y jóvenes prodigios como Lamine Yamal, vuelven a ser candidatos al título.",
        stats: { victorias: "50%", empates: "20%", derrotas: "10%", favor: "10%", contra: "10%" },
        coloresLeyenda: { victorias: "#C60B1E", empates: "#FFC400", derrotas: "#000080", favor: "#FFFFFF", contra: "#A9A9A9" },
        gradiente: `conic-gradient(#C60B1E 0% 50%, #FFC400 50% 70%, #000080 70% 80%, #FFFFFF 80% 90%, #A9A9A9 90% 100%)`,
        videos: [
            { titulo: "ESPAÑA CAMPEÓN 2010", poster: "/MULTIMEDIA/españa.jpg", src: "/MULTIMEDIA/ESPAMA.mp4" },
            { titulo: "GOLES IMPRESIONANTES", poster: "/MULTIMEDIA/iniesta.jpg", src: "/MULTIMEDIA/espania.mp4" }
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
        colorTitulo: "#0038A8",
        datosCuriosos: [
            "Fueron los campeones del primer Mundial de la historia en 1930.",
            "Tienen 4 estrellas en su escudo porque la FIFA reconoce sus Oros Olímpicos de 1924 y 1928 como Campeonatos Mundiales.",
            "Fueron los protagonistas del histórico 'Maracanazo', al vencer a Brasil en la final de 1950 en su propia casa."
        ],
        historia: "La selección 'Celeste' representa a un país pequeño con una historia gigante en el fútbol. Caracterizados por la famosa 'Garra Charrúa' (un estilo de juego de mucha lucha y entrega), Uruguay siempre ha sido un exportador de delanteros de élite mundial como Diego Forlán, Luis Suárez y Edinson Cavani.",
        stats: { victorias: "45%", empates: "25%", derrotas: "10%", favor: "10%", contra: "10%" },
        coloresLeyenda: { victorias: "#5cb8ff", empates: "#000000", derrotas: "#FFFFFF", favor: "#FCD116", contra: "#808080" },
        gradiente: `conic-gradient(#5cb8ff 0% 45%, #000000 45% 70%, #FFFFFF 70% 80%, #FCD116 80% 90%, #808080 90% 100%)`,
        videos: [{ titulo: "GOLES IMPORTANTES", poster: "/MULTIMEDIA/URUGUAY.jpg", src: "/MULTIMEDIA/uruguaygol.mp4" }],
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
        colorTitulo: "#FCD116",
        datosCuriosos: [
            "En Brasil 2014 consiguieron su mejor resultado histórico llegando a Cuartos de Final.",
            "James Rodríguez ganó la Bota de Oro (máximo goleador) en el Mundial de 2014.",
            "El portero René Higuita popularizó la atajada del 'Escorpión' a nivel mundial."
        ],
        historia: "El equipo 'Cafetero' es sinónimo de un fútbol alegre, físico y muy técnico. Tuvieron una época dorada en los años 90 con ídolos como Carlos 'El Pibe' Valderrama y Faustino Asprilla. Hoy en día, han recuperado su prestigio internacional consolidándose como una de las escuadras más peligrosas de Sudamérica.",
        stats: { victorias: "40%", empates: "30%", derrotas: "10%", favor: "15%", contra: "5%" },
        coloresLeyenda: { victorias: "#FCD116", empates: "#003893", derrotas: "#CE1126", favor: "#FFFFFF", contra: "#000000" },
        gradiente: `conic-gradient(#FCD116 0% 40%, #003893 40% 70%, #CE1126 70% 80%, #FFFFFF 80% 95%, #000000 95% 100%)`,
        videos: [{ titulo: "GOLES MUNDIAL 2018", poster: "/MULTIMEDIA/COLOMBIA.jpg", src: "/MULTIMEDIA/colombia goles.mp4" }],
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
        colorTitulo: "#00008b",
        datosCuriosos: [
            "Conocidos mundialmente como los 'Samurai Blue' (Samuráis Azules).",
            "Su afición es famosa por limpiar las gradas del estadio al finalizar cada partido mundialista.",
            "Fueron co-anfitriones del Mundial de 2002 junto con Corea del Sur."
        ],
        historia: "Japón es la potencia futbolística indiscutible de Asia. Aunque debutaron en mundiales apenas en 1998, no han faltado a ninguna cita desde entonces. Su fútbol se caracteriza por una velocidad explosiva, disciplina táctica impecable y la capacidad técnica de sus mediocampistas, logrando avanzar a Octavos de Final en varias ocasiones.",
        stats: { victorias: "50%", empates: "12.5%", derrotas: "12.5%", favor: "15%", contra: "10%" },
        coloresLeyenda: { victorias: "#00008b", empates: "#87CEEB", derrotas: "#FFFFFF", favor: "#1E90FF", contra: "#B0C4DE" },
        gradiente: `conic-gradient(#00008b 0% 50%, #87CEEB 50% 62.5%, #FFFFFF 62.5% 75%, #1E90FF 75% 90%, #B0C4DE 90% 100%)`,
        videos: [{ titulo: "SUS MEJORES GOLES", poster: "/MULTIMEDIA/JAPON.jpg", src: "/MULTIMEDIA/japon goles.mp4" }],
        plantilla: `
            <div class="info-tecnica"><h4>DIRECCIÓN TÉCNICA</h4><p>DT: HAJIME MORIYASU</p></div>
            <h4>PORTEROS</h4><p>ZION SUZUKI</p><p>KEISUKE OSAKO</p>
            <h4>DEFENSAS</h4><p>TAKEHIRO TOMIYASU</p><p>KO ITAKURA</p><p>YUKINARI SUGAWARA</p>
            <h4>MEDIOCAMPISTAS</h4><p>WATARU ENDO</p><p>TAKEFUSA KUBO</p><p>KAORU MITOMA</p><p>TAKUMI MINAMINO</p>
            <h4>DELANTEROS</h4><p>AYASE UEDA</p><p>DAIZEN MAEDA</p>
        `
    },
    {
        nombre: "COREA DEL SUR",
        colorTitulo: "#EC0F31",
        datosCuriosos: [
            "Tienen el récord de más apariciones consecutivas en mundiales para un país asiático.",
            "Lograron un histórico Cuarto Lugar cuando fueron anfitriones en 2002.",
            "Fueron los responsables de eliminar a la entonces campeona Alemania en fase de grupos en 2018."
        ],
        historia: "Los 'Tigres de Asia' son un símbolo de resistencia y resistencia física en el fútbol mundial. Poseen la mejor participación en la historia de los mundiales para una nación de su continente (Semifinales en 2002). Liderados hoy por estrellas de talla mundial en Europa, siempre son un rival temible y altamente competitivo.",
        stats: { victorias: "37.5%", empates: "25%", derrotas: "12.5%", favor: "15%", contra: "10%" },
        coloresLeyenda: { victorias: "#EC0F31", empates: "#000000", derrotas: "#0047A0", favor: "#FFFFFF", contra: "#FFA07A" },
        gradiente: `conic-gradient(#EC0F31 0% 37.5%, #000000 37.5% 62.5%, #0047A0 62.5% 75%, #FFFFFF 75% 90%, #FFA07A 90% 100%)`,
        videos: [{ titulo: "GOL VS ALEMANIA", poster: "/MULTIMEDIA/GOLCOREA.jpg", src: "/MULTIMEDIA/GOLCOREA.mp4" }],
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
        colorTitulo: "#007749",
        datosCuriosos: [
            "Conocidos como los 'Bafana Bafana' (Los Muchachos).",
            "Es la primera y única nación africana en organizar una Copa Mundial de la FIFA (2010).",
            "El primer gol del Mundial 2010, anotado por Tshabalala ante México, es uno de los más icónicos de la historia."
        ],
        historia: "Tras su reincorporación al fútbol internacional tras el fin del Apartheid, Sudáfrica vivió años dorados ganando la Copa Africana de Naciones en 1996. Aunque han enfrentado dificultades para clasificar regularmente a los mundiales, su pasión y su fútbol físico los hacen un equipo emblemático de su continente.",
        stats: { victorias: "35%", empates: "30%", derrotas: "15%", favor: "10%", contra: "10%" },
        coloresLeyenda: { victorias: "#007749", empates: "#FFC425", derrotas: "#000000", favor: "#FFFFFF", contra: "#E03C31" },
        gradiente: `conic-gradient(#007749 0% 35%, #FFC425 35% 65%, #000000 65% 80%, #FFFFFF 80% 90%, #E03C31 90% 100%)`,
        videos: [{ titulo: "Tshabalala 2010", poster: "/MULTIMEDIA/Celebracion.jpg", src: "/MULTIMEDIA/Suadafrica.mp4" }], 
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
        colorTitulo: "#E70013",
        datosCuriosos: [
            "Fueron la primera nación africana en la historia en ganar un partido de Mundial (3-1 ante México en 1978).",
            "Son conocidos como 'Las Águilas de Cartago'.",
            "Han clasificado a 6 Copas del Mundo, siendo uno de los equipos más consistentes de África."
        ],
        historia: "El fútbol en Túnez está marcado por una fuerte influencia táctica y defensiva. Históricamente son uno de los equipos más duros de superar en la zona africana, habiendo coronado su esfuerzo ganando la Copa Africana de Naciones en 2004 como locales. Su reto actual es superar la fase de grupos en un Mundial.",
        stats: { victorias: "30%", empates: "35%", derrotas: "20%", favor: "10%", contra: "5%" },
        coloresLeyenda: { victorias: "#E70013", empates: "#FFFFFF", derrotas: "#000000", favor: "#A52A2A", contra: "#808080" },
        gradiente: `conic-gradient(#E70013 0% 30%, #FFFFFF 30% 65%, #000000 65% 85%, #A52A2A 85% 95%, #808080 95% 100%)`,
        videos: [{ titulo: "SUS MEJORES GOLES", poster: "/MULTIMEDIA/TUNEZ.jpg", src: "/MULTIMEDIA/TUNEZ GOLES.mp4" }],
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

// Leer parámetro pais de la URL (si vienes de la cámara)
const params = new URLSearchParams(window.location.search);
const paisParam = params.get('pais');
if (paisParam !== null && !isNaN(paisParam)) {
    indiceActual = parseInt(paisParam);
}

// Elementos del DOM
const tituloPais = document.getElementById('titulo-pais');
const grafico = document.getElementById('grafico');
const listaJugadores = document.getElementById('lista-jugadores');
const contenedorVideos = document.getElementById('contenedor-videos');
const btnAnt = document.getElementById('btn-ant');
const btnSig = document.getElementById('btn-sig');

// Elementos nuevos
const listaCuriosidades = document.getElementById('lista-curiosidades');
const textoHistoria = document.getElementById('texto-historia');

const lbls = {
    victorias: document.getElementById('lbl-victorias'), empates: document.getElementById('lbl-empates'), derrotas: document.getElementById('lbl-derrotas'),
    favor: document.getElementById('lbl-favor'), contra: document.getElementById('lbl-contra')
};

const colores = {
    victorias: document.getElementById('color-victorias'), empates: document.getElementById('color-empates'), derrotas: document.getElementById('color-derrotas'),
    favor: document.getElementById('color-favor'), contra: document.getElementById('color-contra')
};

function cargarPais(indice) {
    const datos = datosPaises[indice];

    tituloPais.textContent = datos.nombre;
    tituloPais.style.color = datos.colorTitulo;
    grafico.style.background = datos.gradiente;

    // --- NUEVO: CARGAR DATOS CURIOSOS E HISTORIA ---
    listaCuriosidades.innerHTML = '';
    datos.datosCuriosos.forEach(curiosidad => {
        listaCuriosidades.innerHTML += `<li>${curiosidad}</li>`;
    });
    
    // Cambiar color de la viñeta y borde de historia
    const styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = `.lista-curiosidades li::marker { color: ${datos.colorTitulo}; } .texto-historia { border-left-color: ${datos.colorTitulo}; }`;
    
    textoHistoria.textContent = datos.historia;
    // -------------------------------------------------

    lbls.victorias.textContent = `Victorias: ${datos.stats.victorias}`;
    lbls.empates.textContent = `Empates: ${datos.stats.empates}`;
    lbls.derrotas.textContent = `Derrotas: ${datos.stats.derrotas}`;
    lbls.favor.textContent = `Goles Favor: ${datos.stats.favor}`;
    lbls.contra.textContent = `Goles Contra: ${datos.stats.contra}`;

    colores.victorias.style.backgroundColor = datos.coloresLeyenda.victorias;
    colores.empates.style.backgroundColor = datos.coloresLeyenda.empates;
    colores.derrotas.style.backgroundColor = datos.coloresLeyenda.derrotas;
    if(datos.coloresLeyenda.derrotas === "#FFFFFF") colores.derrotas.style.border = "1px solid #ccc"; else colores.derrotas.style.border = "none";
    if(datos.coloresLeyenda.empates === "#FFFFFF") colores.empates.style.border = "1px solid #ccc"; else colores.empates.style.border = "none";
    colores.favor.style.backgroundColor = datos.coloresLeyenda.favor;
    colores.contra.style.backgroundColor = datos.coloresLeyenda.contra;

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
            </div>`;
        });
    } else {
        contenedorVideos.innerHTML = `<p style="grid-column: 1/-1; text-align:center; font-family:'Zen Dots', sans-serif; font-size: 0.8rem; color:#666;">Próximamente más videos...</p>`;
    }
    activarControlesVideo();
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