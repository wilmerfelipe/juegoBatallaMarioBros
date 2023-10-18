let ataqueJugador;          // (Aire, Fuego, tierra) -> String
let ataqueEnemigo;          // 
let vidasJugador = 3;       // Vidas jugador Int
let vidasEnemigo = 3;       // Vidas Enemigo Int

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionarAtaque');
    sectionSeleccionarAtaque.style.display = 'none';                                    
    // Ocultar sección ataque
    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'none';                                            // Ocultar sección boton de reinicio
    let botonPersonajeJugador = document.getElementById('botonPersonaje');             // Asigna accion click personaje
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);       // Metodo add llamará función
    let botonFuego = document.getElementById('botonFuego');                            // Se define el ataque 
    botonFuego.addEventListener('click', ataqueFuego);                                  // Asigna accion click y ejecuta función
    let botonAgua = document.getElementById('botonAgua');
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTierra = document.getElementById('botonTierra');
    botonTierra.addEventListener('click', ataqueTierra);
    let botonReiniciar = document.getElementById('botonReiniciar');                    // Reinicio del juego
    botonReiniciar.addEventListener('click', reiniciarJuego);                           // Llama a la función reiniciarJuego
}
function seleccionarPersonajeJugador() {
    let sectionSeleccionarPersonaje = document.getElementById('seleccionarJugador');
    sectionSeleccionarPersonaje.style.display = 'none';                                   // Ocultar sección seleccionar jugador
    let sectionSeleccionarAtaque = document.getElementById('seleccionarAtaque');
    sectionSeleccionarAtaque.style.display = 'block';                                    // Mostrar sección ataque
    let inputMario = document.getElementById('mario');
    let inputLuigi = document.getElementById('luigi');
    let inputToad = document.getElementById('toad');
    let inputPeach = document.getElementById('peach');
    let inputDonkey = document.getElementById('donkey');
    let spanPersonajeJugador = document.getElementById('personajeJugador');
    if (inputMario.checked) {
        spanPersonajeJugador.innerHTML = 'Mario';
        crearImage("Mario");
    } else if (inputLuigi.checked) {
        spanPersonajeJugador.innerHTML = 'Luigi';
        crearImage("Luigi");
    } else if (inputToad.checked) {
        spanPersonajeJugador.innerHTML = 'Toad';
        crearImage("Toad");
    } else if (inputPeach.checked) {
        spanPersonajeJugador.innerHTML = 'Peach';
        crearImage("Peach");
    } else if (inputDonkey.checked) {
        spanPersonajeJugador.innerHTML = 'DonkeyKong';
        crearImage("DK");
    } else {
        alert('Selecciona un personaje');
        location.reload();                                                              // metodo recarga la URL actual
    }
    seleccionarPersonajeEnemigo();
}
function seleccionarPersonajeEnemigo() {
    let personajeAleatoria = aleatorio(1,3);
    let spanPersonajeEnemigo = document.getElementById('personajeEnemigo');
    if (personajeAleatoria === 1) {
        spanPersonajeEnemigo.innerHTML = 'Bowser';
    } else if (personajeAleatoria === 2) {
        spanPersonajeEnemigo.innerHTML = 'Bowser';
    } else {
        spanPersonajeEnemigo.innerHTML = 'Bowser';
    }
}
function ataqueFuego() {
    ataqueJugador = 'FUEGO';
    ataqueAleatorioEnemigo();
}
function ataqueAgua() {
    ataqueJugador = 'AGUA';
    ataqueAleatorioEnemigo();
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA';
    ataqueAleatorioEnemigo();
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3);                                               // Llamado a la función alatorio
    if (ataqueAleatorio === 1) {
        ataqueEnemigo = 'FUEGO';
    } else if (ataqueAleatorio === 2) {
        ataqueEnemigo = 'AGUA';
    } else {
        ataqueEnemigo = 'TIERRA';
    }
    combate();                                                                           // Llamado a la función combate
}
function combate() {
    let spanVidasJugador = document.getElementById('vidasJugador');
    let spanVidasEnemigo = document.getElementById('vidasEnemigo');
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE");
    } else if(ataqueJugador === 'FUEGO' && ataqueEnemigo === 'TIERRA') {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if(ataqueJugador === 'AGUA' && ataqueEnemigo === 'FUEGO') {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if(ataqueJugador === 'TIERRA' && ataqueEnemigo === 'AGUA') {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        crearMensaje("PERDISTE");
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }
    revisarVidas();
}
function revisarVidas() {
    if (vidasEnemigo === 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste 😀😀😀");
    } else if (vidasJugador === 0) {
        crearMensajeFinal('Lo siento, perdiste :( 😔😔😔');
    }
}
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes');
    let parrafo = document.createElement('p');
    parrafo.innerHTML = 'Atacaste con ' + ataqueJugador + ', Bowser atacó con ' + ataqueEnemigo + '- ' + resultado;
    sectionMensajes.appendChild(parrafo);
}
function crearImage(nameImage){
    let sectionMensajes = document.getElementById('imagePersonaje');
    let imagenPersonaje = document.createElement('img');
    imagenPersonaje.src = `./Image${nameImage}.png`;
    sectionMensajes.appendChild(imagenPersonaje);
}
function crearMensajeFinal(resultadoFinal) {                                                    // Crea los mensajes 
    let sectionMensajes = document.getElementById('mensajeFinal');
    let parrafo = document.createElement('h4');
    parrafo.innerHTML = resultadoFinal;
    sectionMensajes.style.color = 'red';
    sectionMensajes.appendChild(parrafo);
    let botonFuego = document.getElementById('botonFuego');
    botonFuego.disabled = true;
    let botonAgua = document.getElementById('botonAgua');
    botonAgua.disabled = true;
    let botonTierra = document.getElementById('botonTierra');
    botonTierra.disabled = true;
    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'block';
}
function reiniciarJuego() {
    location.reload();                                                                          // metodo recarga la URL actual
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);                                   // flor -> redondea random-> aleatorio
}
window.addEventListener('load', iniciarJuego);                                                  //método cuando carga la pagina
