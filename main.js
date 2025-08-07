/*
  1) Crea un juego de piedra papel o tijera donde el usuario pueda jugar contra la computadora. Pero,
  debes de tener un contador de partidas ganadas para cada jugar y partidas empatadas. Además de
  tener un historial de las ultimas 5 partidas jugadas.
*/
//variables y constantes
const jugador1 = document.getElementById('jugador1');
const jugador2 = document.getElementById('jugador2');

const btnPiedra = document.getElementById('btnPiedra');
const btnPapel = document.getElementById('btnPapel');
const btnTijera = document.getElementById('btnTijera');

const opcionesImg = ["./img/piedra.png", "./img/papel.png", "./img/tijera.png"];
const opciones = ["Piedra", "Papel", "Tijera"];
let empates = 0;
let ganadasJ1 = 1;
let ganadasJ2 = 1;
let historial = [];
//eventos de las opciones de juego
btnPiedra.addEventListener('click' , () => juego(0, Math.floor(Math.random() * 3)))

btnPapel.addEventListener('click' , () => juego(1, Math.floor(Math.random() * 3)))

btnTijera.addEventListener('click' , () => juego(2, Math.floor(Math.random() * 3)))
// funcion para jugar con jugador 2 random
function juego(jugador_1, jugador_2) {
  jugador1.src = opcionesImg[jugador_1]
  jugador2.src = opcionesImg[jugador_2]
  //validar quien gana
  if (jugador_1 === jugador_2){
    empates++;
    document.getElementById('empateJ1').textContent = empates;
    document.getElementById('empateJ2').textContent = empates;
  } else if((jugador_1 === 0 && jugador_2 === 2) || (jugador_1 === 2 && jugador_2 === 1) || (jugador_1 === 1 && jugador_2 === 0)){
    document.getElementById('ganadasJ1').textContent = ganadasJ1++;
  }else {
    document.getElementById('ganadasJ2').textContent = ganadasJ2++;
  }
  // actualizar el historial de partidas
  historial.push(`${opciones[jugador_1]} vs ${opciones[jugador_2]}`);
  let historial5Ultimas = historial.slice(-5);
  document.querySelectorAll('.historial').forEach(historiales => {
    historiales.textContent = "";
    historial5Ultimas.forEach(partidas => {
      let historialPartidas = document.createElement('p');
      historialPartidas.textContent = partidas;
      historiales.appendChild(historialPartidas)});
    })
}