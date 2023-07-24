//codigo que hace la validacion de una placa desde una funcion

//	* se debe tener en la placa un numero de caracteres determinado, en este caso 7
//	* los primeros cuatro caracteres deben estar constituidos por letras mayusculas
//	*	en la cuaerta posicion debe encontrarse un gion separador y luego del guion 3 numeros
let placa = 'AAA-989'
let r = ''

function validarPlaca() {
  //hace la primera validacion, para ver si cumple el numero de caracteres
  if (placa.length === 7) {
    r = 'La placa introducida cuenta con los caracteres requeridos'
  }
  else {
    r = 'cadena incorrecta'
  }
  return r
}

//validacion de primeros caracteres
function primerasLetras() {
  let i = 0 //letras inician en la posicion 0
  while (i < 2) {
    if (placa.charCodeAt(i) > 65 || placa.charCodeAt(i) < 90) {
      r = 'Los primeros 3 caracteres de la placa son correctos'
    } else { r = 'Los primeros 3 caracteres deben ser letras mayusculas' }
    i++
  }
  return r
}

//validacion del caracter del centro
//teniendo en cuanta que para el tipo de placa actual el caracter separador se encuentra en el centro
//diferente es en el caso de la placa de una moto  
function caracterCentro() {
  posicionMedio = Math.floor(placa.length / 2)
  if (placa[posicionMedio] === '-') {
    r = 'la placa tiene el separador correcto'
  }
  return r
}

function segundaManeraNumeros(){
  let numeros = parseInt(placa.match(/(\d+)/g)) //hace la extraccion delos numeros
  if(numeros >= 000 || numeros <= 1000){
      
  }
}

function ultimosNumeros() {
  let i = 3  //los numeros empiezan en la posicion 3
  while (i < placa.length) {

    if (placa.charCodeAt(i) >= 48 && placa.charCodeAt(i) < 57) {
      r = 'Los primeros 3 ultimos caracteres de la placa son correctos'
    } else { r = 'Los tres ultimos caracteres deben ser numeros enteros' }
    i++
  }
  return r
}



console.log(primerasLetras())