const datosPaises = [
    {
        nombre: "MÉXICO",
        colorTitulo: "#10be39",
        stats: { victorias: "12.5%", empates: "12.5%", derrotas: "12.5%", favor: "25%", contra: "37.5%" },
        
        coloresLeyenda: {
            victorias: "#228B22",
            empates: "#1E7E68",
            derrotas: "#458B74",
            favor: "#6CA6CD",
            contra: "#87CEEB"
        },
        gradiente: `conic-gradient(#228B22 0% 12.5%, #1E7E68 12.5% 25%, #458B74 25% 37.5%, #6CA6CD 37.5% 62.5%, #87CEEB 62.5% 100%)`,
        plantilla: `
            <div class="info-tecnica">
                <h4>DIRECCIÓN TÉCNICA</h4>
                <p>DT: JAVIER "VASCO" AGUIRRE</p>
                <p>AUX: RAFAEL MÁRQUEZ</p>
            </div>
            <h4>PORTEROS</h4>
            <p>LUIS MALAGÓN</p>
            <p>RAÚL "TALA" RANGEL</p>
            <p>CARLOS ACEVEDO</p>
            <h4>DEFENSAS</h4>
            <p>JOHAN VÁSQUEZ</p>
            <p>CÉSAR MONTES</p>
            <p>ISRAEL REYES</p>
            <p>JESÚS OROZCO CHIQUETE</p>
            <p>JORGE SÁNCHEZ</p>
            <p>JESÚS GALLARDO</p>
            <p>GERARDO ARTEAGA</p>
            <p>VÍCTOR GUZMÁN</p>
            <h4>MEDIOCAMPISTAS</h4>
            <p>EDSON ÁLVAREZ</p>
            <p>LUIS ROMO</p>
            <p>ERICK SÁNCHEZ</p>
            <p>ORBELÍN PINEDA</p>
            <p>ROBERTO ALVARADO</p>
            <p>CARLOS RODRÍGUEZ</p>
            <p>SEBASTIÁN CÓRDOVA</p>
            <h4>DELANTEROS</h4>
            <p>SANTIAGO GIMÉNEZ</p>
            <p>HENRY MARTÍN</p>
            <p>JULIÁN QUIÑONES</p>
            <p>CÉSAR HUERTA</p>
            <p>URIEL ANTUNA</p>
            <p>RAÚL JIMÉNEZ</p>
        `
    },
    {
        nombre: "JAPÓN",
        colorTitulo: "#00008b",
        stats: { victorias: "50%", empates: "12.5%", derrotas: "12.5%", favor: "15%", contra: "10%" },
        coloresLeyenda: {
            victorias: "#00008b",
            empates: "#87CEEB",
            derrotas: "#FFFFFF",
            favor: "#1E90FF",
            contra: "#B0C4DE"
        },
        gradiente: `conic-gradient(
            #00008b 0% 50%,    
            #87CEEB 50% 62.5%, 
            #FFFFFF 62.5% 75%, 
            #1E90FF 75% 90%,   
            #B0C4DE 90% 100%   
        )`,
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
            <p>KO ITAKURA</p>
            <p>TAKEHIRO TOMIYASU</p>
            <p>HIROKI ITO</p>
            <p>YUKINARI SUGAWARA</p>
            <p>SHOGO TANIGUCHI</p>
            <p>YUTO NAGATOMO</p>
            <h4>MEDIOCAMPISTAS</h4>
            <p>WATARU ENDO</p>
            <p>HIDEMASA MORITA</p>
            <p>DAICHI KAMADA</p>
            <p>TAKEFUSA KUBO</p>
            <p>KAORU MITOMA</p>
            <p>TAKUMI MINAMINO</p>
            <p>RITSU DOAN</p>
            <p>REO HATATE</p>
            <h4>DELANTEROS</h4>
            <p>AYASE UEDA</p>
            <p>DAIZEN MAEDA</p>
            <p>KOKI OGAWA</p>
            <p>KYOOGO FURUHASHI</p>
        `
    },
    {
        nombre: "COREA DEL SUR",
        colorTitulo: "#EC0F31",
        stats: { victorias: "37.5%", empates: "25%", derrotas: "12.5%", favor: "15%", contra: "10%" },
        coloresLeyenda: {
            victorias: "#EC0F31",
            empates: "#000000",
            derrotas: "#0047A0",
            favor: "#FFFFFF",
            contra: "#FFA07A"
        },
        gradiente: `conic-gradient(
            #EC0F31 0% 37.5%,  
            #000000 37.5% 62.5%, 
            #0047A0 62.5% 75%, 
            #FFFFFF 75% 90%,   
            #FFA07A 90% 100%   
        )`,
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
            <p>KIM JIN-SU</p>
            <p>CHO YU-MIN</p>
            <h4>MEDIOCAMPISTAS</h4>
            <p>LEE KANG-IN</p>
            <p>HWANG IN-BEOM</p>
            <p>LEE JAE-SUNG</p>
            <p>PAIK SEUNG-HO</p>
            <p>PARK YONG-WOO</p>
            <p>HONG HYUN-SEOK</p>
            <p>JEONG WOO-YEONG</p>
            <h4>DELANTEROS</h4>
            <p>SON HEUNG-MIN</p>
            <p>HWANG HEE-CHAN</p>
            <p>CHO GUE-SUNG</p>
            <p>OH HYEON-GYU</p>
            <p>JOO MIN-KYU</p>
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