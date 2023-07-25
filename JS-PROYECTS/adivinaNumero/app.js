// 1.Generar un número aleatorio entre 1 y 100.
// 2. Registrar el número del intento en el que el jugador se encuentre. Empezando en 1.
// 3. Darle al jugador una forma de adivinar cuál es el número.
// 4.Una vez que se ha introducido el número, registrarlo en alguna parte para que el jugador pueda ver sus intentos previos.
// 5.A continuación, comprobar si el número es correcto.
// 6.Si es correcto:
//     Mostrar un mensaje de felicitaciones.
//     Hacer que el jugador no pueda introducir más intentos (esto arruinaría el juego).
//     Mostrar un control que permita al jugador volver a empezar el juego.
// 7.Si es incorrecto y al jugador todavía le quedan intentos:
//     Decirle al jugador que ha fallado.
//     Dejar que el jugador lo intente de nuevo.
//     Incrementa el número de intentos en 1.
// 8.Si el jugador falla y no le quedan turnos:
//     Decirle al jugador que el juego se ha terminado.
//     Hacer que el jugador no pueda introducir más intentos (esto arruinaría el juego).
//     Mostrar un control que permita al jugador volver a empezar el juego.
// 9.Una vez que el juego se reinicia, asegúrate de que la lógica del juego y la IU (interfaz de usuario) se restablezcan por completo, luego vuelve al paso 1.

let randomNumber = Math.floor(Math.random() * 100) + 1;
const dangertTxt = document.getElementById("danger-txt");
const successTxt = document.getElementById("success-txt");
const success = document.getElementById("success");
const danger = document.getElementById("danger");

function principal() {
  let number = Number(document.getElementById("number").value);

  if (number === randomNumber) {
    successTxt.textContent = "Felicidades Adivinaste el numero";
    danger.classList.add("d-none");
    success.classList.remove("d-none");

    console.log("Felicidades");
  }
  if (number < randomNumber) {
    dangertTxt.textContent = "Estas bajo el numero";
    danger.classList.remove("d-none");

    console.log("Estas bajo el numero");
  }
  if (number > randomNumber) {
    dangertTxt.textContent = "Estas sobre el numero";
    danger.classList.remove("d-none");
    console.log("Estas sobre el numero");
  }
}
const btn = document.getElementById("btn");
btn.addEventListener("click", principal);

//TODO: hacer la funcionalidad para hacer reinicio del juego y tambien contar el numero de intentos haciendo uso de un arreglo
