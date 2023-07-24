window.addEventListener('load', iniciarJuego);

let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;


function iniciarJuego() {
    //codigo para que ocultar los ataques si no se seleccione mascota
    let seccionAtaque = document.getElementById('seleccionar-ataque');
    seccionAtaque.style.display = 'none';

    //codigo para ocultar reiniciar
    let seccionReiniciar = document.getElementById('reiniciar');
    seccionReiniciar.style.display = 'none';

    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener('click', function () { selccionarMascotaJugador() });

    //cuando se seleccione mascota reaparece la seccion de ataques
    botonMascotaJugador.addEventListener('click', function () {
        let seccionAtaque = document.getElementById('seleccionar-ataque');
        seccionAtaque.style.display = 'block';
    });

    //ataques 
    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);

    let botonReniciar = document.getElementById('boton-reiniciar');
    botonReniciar.addEventListener('click', reiniciarJuego);
}

function selccionarMascotaJugador() {
    let mascota1 = document.getElementById('hipodoge');
    let mascota2 = document.getElementById('capipepo');
    let mascota3 = document.getElementById('ratigueya');
    let mascotaJugador = document.getElementById('mascotaJugador');
    let mascotaSeleccionada;

    if (mascota1.checked) {
        mascotaSeleccionada = mascota1.parentNode.childNodes[1].innerText;
        mascotaJugador.innerHTML = mascotaSeleccionada;
    } if (mascota2.checked) {
        mascotaSeleccionada = mascota2.parentNode.childNodes[1].innerText;
        mascotaJugador.innerHTML = mascotaSeleccionada;
    } if (mascota3.checked) {
        mascotaSeleccionada = mascota3.parentNode.childNodes[1].innerText;
        mascotaJugador.innerHTML = mascotaSeleccionada;
    }
    alert('seleccionaste tu mascota ' + mascotaSeleccionada);
    seleccionarMascotaEnemigo();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1, 3);
    let mascotaEnemigo = document.getElementById('mascotaEnemigo');

    if (mascotaAleatoria == 1) {
        mascotaEnemigo.innerHTML = 'Hipodoge';

    } else if (mascotaAleatoria == 2) {
        mascotaEnemigo.innerHTML = 'Capipepo';

    } else {
        mascotaEnemigo.innerHTML = 'Ratigueya';
    }
}

function ataqueAgua() {
    ataqueJugador = 'AGUA';
    alert(ataqueJugador);
    ataqueAleatorioEnemigo();
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO';
    alert(ataqueJugador);
    ataqueAleatorioEnemigo();
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA';
    alert(ataqueJugador);
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO';
    }
    if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA';
    }
    if (ataqueAleatorio == 3) {
        ataqueEnemigo = 'TIERRA';
    }
    combate();
}

function combate() {
    const spanVidasJugador = document.getElementById('spanVidasJugador');
    const spanVidasEnemigo = document.getElementById('spanVidasEnemigo');

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje('EMPATE');
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje('GANASTE');
        vidasEnemigo--;
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje('GANASTE');
        vidasEnemigo--;
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje('GANASTE');
        vidasEnemigo--;
    } else {
        crearMensaje('PERDISTE');
        vidasJugador--;
    }
    spanVidasEnemigo.innerHTML = vidasEnemigo;
    spanVidasJugador.innerHTML = vidasJugador;

    if (vidasEnemigo <= 0 || vidasJugador <= 0) {
        mensaje = '';
        if (vidasEnemigo == 0) {
            mensaje = 'GANASTE :)';
        }
        if (vidasJugador == 0) {
            mensaje = 'PERDISTE :(';
        }
        crearMensajeFinal(mensaje);
    }
}

function crearMensaje(resultado) {
    let parrafo = document.createElement('p');
    const seccionMensajes = document.getElementById('mensajes');

    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado;
    seccionMensajes.appendChild(parrafo);
}

function crearMensajeFinal(resultadoFinal) {
    let parrafo = document.createElement('p');
    const seccionMensajes = document.getElementById('mensajes');

    parrafo.innerHTML = resultadoFinal;
    seccionMensajes.appendChild(parrafo);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.disabled = true;
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.disabled = true;
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.disabled = true;

    //codigo para que ala ganar o perder reaparezca el reiniciar
    let seccionReiniciar = document.getElementById('reiniciar');
    seccionReiniciar.style.display = 'block';
}

function reiniciarJuego() {
    location.reload();
}