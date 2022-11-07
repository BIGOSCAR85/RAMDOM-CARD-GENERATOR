/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generacionCarta();
  document.querySelector("#btn").addEventListener("click", generacionCarta);
};

const symbol = ["corazon", "diamante", "pica", "trebol"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let pintaArriba = document.querySelector("#simboloArriba");
let numero = document.querySelector("#numero");
let pintaAbajo = document.querySelector("#simboloAbajo");

function eleccionCarta(array1, array2) {
  let carta = [];
  carta.push(array1[Math.floor(Math.random() * array1.length)]);
  carta.push(array2[Math.floor(Math.random() * array2.length)]);
  return carta;
}
function asignarColor(array) {
  if (array[0] === "corazon" || array[0] === "diamante") {
    pintaArriba.style.color = "red";
    numero.style.color = "red";
    pintaAbajo.style.color = "red";
  } else {
    pintaArriba.style.color = "black";
    numero.style.color = "black";
    pintaAbajo.style.color = "black";
  }
}
function asignarPinta(array) {
  if (array[0] === "corazon") {
    pintaArriba.innerHTML = "♥";
    pintaAbajo.innerHTML = "♥";
  } else if (array[0] === "diamante") {
    pintaArriba.innerHTML = "♦";
    pintaAbajo.innerHTML = "♦";
  } else if (array[0] === "trebol") {
    pintaArriba.innerHTML = "♣";
    pintaAbajo.innerHTML = "♣";
  } else {
    pintaArriba.innerHTML = "♠";
    pintaAbajo.innerHTML = "♠";
  }
}
function asignarValor(array) {
  numero.innerHTML = array[1];
}
function generacionCarta() {
  let carta = eleccionCarta(symbol, valores);
  asignarColor(carta);
  asignarPinta(carta);
  asignarValor(carta);
}
