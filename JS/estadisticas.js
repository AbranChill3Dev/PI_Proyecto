// --- BASE DE DATOS DE PAÍSES ---
const datosPaises = [
    {
        nombre: "MÉXICO",
        colorTitulo: "#10be39",
        stats: { victorias: "12.5%", empates: "12.5%", derrotas: "12.5%", favor: "25%", contra: "37.5%" },
        coloresLeyenda: { victorias: "#228B22", empates: "#1E7E68", derrotas: "#458B74", favor: "#6CA6CD", contra: "#87CEEB" },
        gradiente: `conic-gradient(#228B22 0% 12.5%, #1E7E68 12.5% 25%, #458B74 25% 37.5%, #6CA6CD 37.5% 62.5%, #87CEEB 62.5% 100%)`,
        plantilla: `
            <div class="info-tecnica">
                <h4>DIRECCIÓN TÉCNICA</h4>
                <p>DT: JAVIER "VASCO" AGUIRRE</p>
                <p>AUX: RAFAEL MÁRQUEZ</p>
            </div>
            <h4>PORTEROS</h4>
            <p>LUIS MALAGÓN</p>
            <p>GUILLERMO OCHOA</p>
            <p>RAÚL RANGEL</p>
            <h4>DEFENSAS</h4>
            <p>JOHAN VÁSQUEZ</p>
            <p>CÉSAR MONTES</p>
            <p>ISRAEL REYES</p>
            <p>JESÚS OROZCO</p>
            <p>JORGE SÁNCHEZ</p>
            <p>JULIÁN ARAUJO</p>
            <p>JESÚS GALLARDO</p>
            <p>GERARDO ARTEAGA</p>
            <h4>MEDIOCAMPISTAS</h4>
            <p>EDSON ÁLVAREZ</p>
            <p>LUIS ROMO</p>
            <p>LUIS CHÁVEZ</p>
            <p>ORBELÍN PINEDA</p>
            <p>ROBERTO ALVARADO</p>
            <p>ERICK SÁNCHEZ</p>
            <p>SEBASTIÁN CÓRDOVA</p>
            <h4>DELANTEROS</h4>
            <p>SANTIAGO GIMÉNEZ</p>
            <p>RAÚL JIMÉNEZ</p>
            <p>HENRY MARTÍN</p>
            <p>JULIÁN QUIÑONES</p>
            <p>CÉSAR HUERTA</p>
            <p>URIEL ANTUNA</p>
        `
    },
    {
        nombre: "ESPAÑA",
        colorTitulo: "#C60B1E",
        stats: { victorias: "50%", empates: "20%", derrotas: "10%", favor: "10%", contra: "10%" },
        coloresLeyenda: { victorias: "#C60B1E", empates: "#FFC400", derrotas: "#000080", favor: "#FFFFFF", contra: "#A9A9A9" },
        gradiente: `conic-gradient(#C60B1E 0% 50%, #FFC400 50% 70%, #000080 70% 80%, #FFFFFF 80% 90%, #A9A9A9 90% 100%)`,
        plantilla: `
             <div class="info-tecnica">
                <h4 style="color: #C60B1E">DIRECCIÓN TÉCNICA</h4>
                <p>DT: LUIS DE LA FUENTE</p>
            </div>
            <h4>PORTEROS</h4>
            <p>UNAI SIMÓN</p>
            <p>DAVID RAYA</p>
            <p>ÁLEX REMIRO</p>
            <h4>DEFENSAS</h4>
            <p>AYMERIC LAPORTE</p>
            <p>ROBIN LE NORMAND</p>
            <p>PAU TORRES</p>
            <p>DANI CARVAJAL</p>
            <p>PEDRO PORRO</p>
            <p>MARC CUCURELLA</p>
            <p>ÁLEX GRIMALDO</p>
            <h4>MEDIOCAMPISTAS</h4>
            <p>RODRI</p>
            <p>MARTÍN ZUBIMENDI</p>
            <p>PEDRI</p>
            <p>GAVI</p>
            <p>FABIÁN RUIZ</p>
            <p>DANI OLMO</p>
            <p>MIKEL MERINO</p>
            <h4>DELANTEROS</h4>
            <p>LAMINE YAMAL</p>
            <p>NICO WILLIAMS</p>
            <p>ÁLVARO MORATA</p>
            <p>MIKEL OYARZABAL</p>
            <p>FERRAN TORRES</p>
            <p>JOSELU</p>
        `
    },
    {
        nombre: "URUGUAY",
        colorTitulo: "#0038A8",
        stats: { victorias: "45%", empates: "25%", derrotas: "10%", favor: "10%", contra: "10%" },
        coloresLeyenda: { victorias: "#5cb8ff", empates: "#000000", derrotas: "#FFFFFF", favor: "#FCD116", contra: "#808080" },
        gradiente: `conic-gradient(#5cb8ff 0% 45%, #000000 45% 70%, #FFFFFF 70% 80%, #FCD116 80% 90%, #808080 90% 100%)`,
        plantilla: `
             <div class="info-tecnica">
                <h4 style="color: #5cb8ff">DIRECCIÓN TÉCNICA</h4>
                <p>DT: MARCELO BIELSA</p>
            </div>
            <h4>PORTEROS</h4>
            <p>SERGIO ROCHET</p>
            <p>SANTIAGO MELE</p>
            <p>FRANCO ISRAEL</p>
            <h4>DEFENSAS</h4>
            <p>RONALD ARAÚJO</p>
            <p>JOSÉ MARÍA GIMÉNEZ</p>
            <p>SEBASTIÁN CÁCERES</p>
            <p>MATHÍAS OLIVERA</p>
            <p>NAHITAN NÁNDEZ</p>
            <p>GUILLERMO VARELA</p>
            <p>MATÍAS VIÑA</p>
            <h4>MEDIOCAMPISTAS</h4>
            <p>FEDERICO VALVERDE</p>
            <p>MANUEL UGARTE</p>
            <p>RODRIGO BENTANCUR</p>
            <p>NICOLÁS DE LA CRUZ</p>
            <p>GIORGIAN DE ARRASCAETA</p>
            <p>EMILIANO MARTÍNEZ</p>
            <h4>DELANTEROS</h4>
            <p>DARWIN NÚÑEZ</p>
            <p>FACUNDO PELLISTRI</p>
            <p>MAXIMILIANO ARAÚJO</p>
            <p>CRISTIAN OLIVERA</p>
        `
    },
    {
        nombre: "COLOMBIA",
        colorTitulo: "#FCD116",
        stats: { victorias: "40%", empates: "30%", derrotas: "10%", favor: "15%", contra: "5%" },
        coloresLeyenda: { victorias: "#FCD116", empates: "#003893", derrotas: "#CE1126", favor: "#FFFFFF", contra: "#000000" },
        gradiente: `conic-gradient(#FCD116 0% 40%, #003893 40% 70%, #CE1126 70% 80%, #FFFFFF 80% 95%, #000000 95% 100%)`,
        plantilla: `
             <div class="info-tecnica">
                <h4 style="color: #CE1126">DIRECCIÓN TÉCNICA</h4>
                <p>DT: NÉSTOR LORENZO</p>
            </div>
            <h4>PORTEROS</h4>
            <p>CAMILO VARGAS</p>
            <p>DAVID OSPINA</p>
            <p>ÁLVARO MONTERO</p>
            <h4>DEFENSAS</h4>
            <p>DAVINSON SÁNCHEZ</p>
            <p>CARLOS CUESTA</p>
            <p>JHON LUCUMÍ</p>
            <p>DANIEL MUÑOZ</p>
            <p>SANTIAGO ARIAS</p>
            <p>JOHAN MOJICA</p>
            <p>DEIVER MACHADO</p>
            <h4>MEDIOCAMPISTAS</h4>
            <p>JAMES RODRÍGUEZ</p>
            <p>JEFFERSON LERMA</p>
            <p>RICHARD RÍOS</p>
            <p>JHON ARIAS</p>
            <p>JORGE CARRASCAL</p>
            <p>KEVIN CASTAÑO</p>
            <p>MATEUS URIBE</p>
            <h4>DELANTEROS</h4>
            <p>LUIS DÍAZ</p>
            <p>JHON CÓRDOBA</p>
            <p>RAFAEL SANTOS BORRÉ</p>
            <p>JHON DURÁN</p>
            <p>LUIS SINISTERRA</p>
        `
    },
    {
        nombre: "JAPÓN",
        colorTitulo: "#00008b",
        stats: { victorias: "50%", empates: "12.5%", derrotas: "12.5%", favor: "15%", contra: "10%" },
        coloresLeyenda: { victorias: "#00008b", empates: "#87CEEB", derrotas: "#FFFFFF", favor: "#1E90FF", contra: "#B0C4DE" },
        gradiente: `conic-gradient(#00008b 0% 50%, #87CEEB 50% 62.5%, #FFFFFF 62.5% 75%, #1E90FF 75% 90%, #B0C4DE 90% 100%)`,
        plantilla: `
            <div class="info-tecnica">
                <h4 style="color: #00008b">DIRECCIÓN TÉCNICA</h4>
                <p>DT: HAJIME MORIYASU</p>
            </div>
            <h4>PORTEROS</h4>
            <p>ZION SUZUKI</p>
            <p>KEISUKE OSAKO</p>
            <p>KOSEI TANI</p>
            <h4>DEFENSAS</h4>
            <p>TAKEHIRO TOMIYASU</p>
            <p>KO ITAKURA</p>
            <p>KOKI MACHIDA</p>
            <p>YUKINARI SUGAWARA</p>
            <p>HIROKI ITO</p>
            <p>SHOGO TANIGUCHI</p>
            <p>DAIKI HASHIOKA</p>
            <h4>MEDIOCAMPISTAS</h4>
            <p>WATARU ENDO</p>
            <p>HIDEMASA MORITA</p>
            <p>DAICHI KAMADA</p>
            <p>TAKEFUSA KUBO</p>
            <p>KAORU MITOMA</p>
            <p>TAKUMI MINAMINO</p>
            <p>RITSU DOAN</p>
            <p>JUNYA ITO</p>
            <h4>DELANTEROS</h4>
            <p>AYASE UEDA</p>
            <p>DAIZEN MAEDA</p>
            <p>KOKI OGAWA</p>
            <p>KYOGO FURUHASHI</p>
        `
    },
    {
        nombre: "COREA DEL SUR",
        colorTitulo: "#EC0F31",
        stats: { victorias: "37.5%", empates: "25%", derrotas: "12.5%", favor: "15%", contra: "10%" },
        coloresLeyenda: { victorias: "#EC0F31", empates: "#000000", derrotas: "#0047A0", favor: "#FFFFFF", contra: "#FFA07A" },
        gradiente: `conic-gradient(#EC0F31 0% 37.5%, #000000 37.5% 62.5%, #0047A0 62.5% 75%, #FFFFFF 75% 90%, #FFA07A 90% 100%)`,
        plantilla: `
             <div class="info-tecnica">
                <h4 style="color: #EC0F31">DIRECCIÓN TÉCNICA</h4>
                <p>DT: HONG MYUNG-BO</p>
            </div>
            <h4>PORTEROS</h4>
            <p>JO HYEON-WOO</p>
            <p>KIM SEUNG-GYU</p>
            <p>SONG BUM-KEUN</p>
            <h4>DEFENSAS</h4>
            <p>KIM MIN-JAE</p>
            <p>KIM YOUNG-GWON</p>
            <p>SEOL YOUNG-WOO</p>
            <p>LEE MYUNG-JAE</p>
            <p>CHO YU-MIN</p>
            <p>JUNG SEUNG-HYUN</p>
            <p>KIM JIN-SU</p>
            <h4>MEDIOCAMPISTAS</h4>
            <p>LEE KANG-IN</p>
            <p>HWANG IN-BEOM</p>
            <p>LEE JAE-SUNG</p>
            <p>HONG HYUN-SEOK</p>
            <p>PARK YONG-WOO</p>
            <p>JEONG WOO-YEONG</p>
            <p>HWANG HEE-CHAN</p>
            <h4>DELANTEROS</h4>
            <p>SON HEUNG-MIN</p>
            <p>CHO GUE-SUNG</p>
            <p>OH HYEON-GYU</p>
            <p>JOO MIN-KYU</p>
        `
    },
    {
        nombre: "SUDÁFRICA",
        colorTitulo: "#007749",
        stats: { victorias: "35%", empates: "30%", derrotas: "15%", favor: "10%", contra: "10%" },
        coloresLeyenda: { victorias: "#007749", empates: "#FFC425", derrotas: "#000000", favor: "#FFFFFF", contra: "#E03C31" },
        gradiente: `conic-gradient(#007749 0% 35%, #FFC425 35% 65%, #000000 65% 80%, #FFFFFF 80% 90%, #E03C31 90% 100%)`,
        plantilla: `
             <div class="info-tecnica">
                <h4 style="color: #007749">DIRECCIÓN TÉCNICA</h4>
                <p>DT: HUGO BROOS</p>
            </div>
            <h4>PORTEROS</h4>
            <p>RONWEN WILLIAMS</p>
            <p>RICARDO GOSS</p>
            <p>VELI MOTHWA</p>
            <h4>DEFENSAS</h4>
            <p>MOTHOBI MVALA</p>
            <p>GRANT KEKANA</p>
            <p>KHULISO MUDAU</p>
            <p>AUBREY MODIBA</p>
            <p>SIYANDA XULU</p>
            <p>SYDNEY MOBBIE</p>
            <h4>MEDIOCAMPISTAS</h4>
            <p>TEBOHO MOKOENA</p>
            <p>SPHEPHELO SITHOLE</p>
            <p>THEMBA ZWANE</p>
            <p>JAYDEN ADAMS</p>
            <p>THAPELO MORENA</p>
            <p>THAPELO MASEKO</p>
            <h4>DELANTEROS</h4>
            <p>PERCY TAU</p>
            <p>EVIDENCE MAKGOPA</p>
            <p>ZAKHELE LEPASA</p>
            <p>MIHLALI MAYAMBELA</p>
            <p>OSWIN APPOLLIS</p>
        `
    },
    {
        nombre: "TÚNEZ",
        colorTitulo: "#E70013",
        stats: { victorias: "30%", empates: "35%", derrotas: "20%", favor: "10%", contra: "5%" },
        coloresLeyenda: { victorias: "#E70013", empates: "#FFFFFF", derrotas: "#000000", favor: "#A52A2A", contra: "#808080" },
        gradiente: `conic-gradient(#E70013 0% 30%, #FFFFFF 30% 65%, #000000 65% 85%, #A52A2A 85% 95%, #808080 95% 100%)`,
        plantilla: `
             <div class="info-tecnica">
                <h4 style="color: #E70013">DIRECCIÓN TÉCNICA</h4>
                <p>DT: KAIS YAÂKOUBI</p>
            </div>
            <h4>PORTEROS</h4>
            <p>AMANALLAH MEMMICHE</p>
            <p>AYMEN DAHMEN</p>
            <p>BECHIR BEN SAID</p>
            <h4>DEFENSAS</h4>
            <p>MONTASSAR TALBI</p>
            <p>YASSINE MERIAH</p>
            <p>ALI ABDI</p>
            <p>WAJDI KECHRIDA</p>
            <p>YAN VALERY</p>
            <p>OUSSAMA HADDADI</p>
            <h4>MEDIOCAMPISTAS</h4>
            <p>ELLYES SKHIRI</p>
            <p>AÏSSA LAÏDOUNI</p>
            <p>MOHAMED ALI BEN ROMDHANE</p>
            <p>HANNIBAL MEJBRI</p>
            <p>HAMZA RAFIA</p>
            <p>HOUSSEM TKA</p>
            <h4>DELANTEROS</h4>
            <p>YOUSSEF MSAKNI</p>
            <p>ELIAS ACHOURI</p>
            <p>SEIFEDDINE JAZIRI</p>
            <p>HAYTHEM JOUNI</p>
            <p>ELIAS SAAD</p>
        `
    }
];

let indiceActual = 0;

const tituloPais = document.getElementById('titulo-pais');
const grafico = document.getElementById('grafico');
const listaJugadores = document.getElementById('lista-jugadores');
const btnAnt = document.getElementById('btn-ant');
const btnSig = document.getElementById('btn-sig');

const lbls = {
    victorias: document.getElementById('lbl-victorias'),
    empates: document.getElementById('lbl-empates'),
    derrotas: document.getElementById('lbl-derrotas'),
    favor: document.getElementById('lbl-favor'),
    contra: document.getElementById('lbl-contra')
};

const colores = {
    victorias: document.getElementById('color-victorias'),
    empates: document.getElementById('color-empates'),
    derrotas: document.getElementById('color-derrotas'),
    favor: document.getElementById('color-favor'),
    contra: document.getElementById('color-contra')
};

function cargarPais(indice) {
    const datos = datosPaises[indice];

    tituloPais.textContent = datos.nombre;
    tituloPais.style.color = datos.colorTitulo;
    grafico.style.background = datos.gradiente;

    lbls.victorias.textContent = `Victorias: ${datos.stats.victorias}`;
    lbls.empates.textContent = `Empates: ${datos.stats.empates}`;
    lbls.derrotas.textContent = `Derrotas: ${datos.stats.derrotas}`;
    lbls.favor.textContent = `Goles Favor: ${datos.stats.favor}`;
    lbls.contra.textContent = `Goles Contra: ${datos.stats.contra}`;

    colores.victorias.style.backgroundColor = datos.coloresLeyenda.victorias;
    colores.empates.style.backgroundColor = datos.coloresLeyenda.empates;
    colores.derrotas.style.backgroundColor = datos.coloresLeyenda.derrotas;

    if(datos.coloresLeyenda.derrotas === "#FFFFFF") {
        colores.derrotas.style.border = "1px solid #ccc";
    } else {
        colores.derrotas.style.border = "none";
    }
    
    if(datos.coloresLeyenda.empates === "#FFFFFF") {
        colores.empates.style.border = "1px solid #ccc";
    } else {
        colores.empates.style.border = "none";
    }

    colores.favor.style.backgroundColor = datos.coloresLeyenda.favor;
    colores.contra.style.backgroundColor = datos.coloresLeyenda.contra;

    listaJugadores.innerHTML = datos.plantilla;
}

btnAnt.addEventListener('click', () => {
    indiceActual--;
    if (indiceActual < 0) indiceActual = datosPaises.length - 1;
    cargarPais(indiceActual);
});

btnSig.addEventListener('click', () => {
    indiceActual++;
    if (indiceActual >= datosPaises.length) indiceActual = 0;
    cargarPais(indiceActual);
});

document.addEventListener('DOMContentLoaded', () => {
    cargarPais(0);
});