// la funcion hace que mientras se escribe se evaluen los caracteres
function validarPlaca() {
    let placa = document.formulario.placa.value
    mensaje = ''
    //primer validacion: tamaño de placa
    if (placa.length != 7) { //solo con 7 caracteres es una placa correcta
        mensaje += 'la placa esta fuera del rango'
    }

    //validacion 2: primeros 3 digitos letras mayusculas
    let i = 0
    while (i <= 2) {
        if (placa.charCodeAt(i) < 65 || placa.charCodeAt(i) > 90) {
            document.formulario.placa.value = placa.substring(0, placa.length - 1)
            mensaje += '\n la placa debe tener 3 mayusculas en su inicio'
        }
        i++;
    }

    //validacion 3: Gion separador, se inserta de manera automatica
    if (placa.length == 3) {
        document.formulario.placa.value += '-'
        mensaje += '\n Insertando un separador'
    }


    //validacion 4: los 3 ultimos caracteres son numeros 
    let j = 4
    while (j <= 6) {
        if (placa.charCodeAt(j) < 48 || placa.charCodeAt(j) > 57) {
            mensaje += '\n la placa debe tener 3 numeros en su final'
        }
        j++;
    }

    return console.log(mensaje)
}

///codiogo original




// //codigo que hace la validacion de una placa
// //mientras es introducida

// //	* se debe tener en la placa un numero de caracteres determinado, en este caso 7
// //	* los primeros 3 caracteres deben estar constituidos por letras mayusculas
// //	* en la cuarta posicion debe encontrarse un gion separador y luego del guion 3 numeros

// function validarPlaca() {
//     let placa = document.formulario.placa.value
//     mensaje = ''

//     //primer validacion: tamaño de placa
//     if (placa.length != 7) { //solo con 7 caracteres es una placa correcta
//         mensaje += 'la placa esta fuera del rango'
//     }

//     //validacion 2: primeros 3 digitos letras mayusculas
//     let i = 0
//     while (i <= 2) {
//         if (placa.charCodeAt(i) < 65 || placa.charCodeAt(i) > 90) {
//             mensaje += '\n la placa debe tener 3 mayusculas en su inicio'
//         }
//         i++;
//     }

//     //validacion 3: Gion separador, se inserta de manera automatica
//     if (placa.length == 3) {
//         document.formulario.placa.value += '-'
//         mensaje += '\n Insertando un separador'
//     }

//     //validacion 4: los 3 ultimos caracteres son numeros
//     let j = 4
//     while (j <= 6) {
//         if (placa.charCodeAt(j) < 48 || placa.charCodeAt(j) > 57) {
//             mensaje += '\n la placa debe tener 3 numeros en su final'
//         }
//         j++;
//     }

//     console.log(mensaje)
// }
