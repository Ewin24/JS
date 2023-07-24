//RUTAS

//ARREGLOS Y VARIABLES QUE VAMOS A NECESITAR
let rutas = [];

//DATO BANDERA PARA SABER SI ESTAMOS EDITANDO O NO
let editando = false;

//PARA CONECTAR A LOCALSTORAGE
let LS = window.localStorage;

//TRAER LAS RUTAS QUE HAYAN EN LOCALSTORAGE SI ESTAS EXISTEN

if(LS.getItem('rutas')) {
    rutas = JSON.parse(LS.getItem('rutas'));
}

imprimirTabla(rutas);

//TRAER LOS DATOS DEL FORM 
const form = document.querySelector('#form-anadir');
form.addEventListener('submit', e => {
    e.preventDefault(); //PREVENIR QUE LA PAGINA SE RECARGE

    anadirRuta();
})

//FUNCIONES *********************************************

//FUNCION DE AÑADIR RUTA***********************************
function anadirRuta(){

    //TRAER DATO POR DATO DEL FORMULARIO 
    const nombreRuta = document.querySelector('#nombreRuta').value;
    const valorTicket = document.querySelector('#valorTicket').value;
    const ciudadOrigen = document.querySelector('#ciudadOrigen').value;
    const ciudadDestino = document.querySelector('#ciudadDestino').value;
    const puntos = document.querySelector('#puntos').value;

    //AGREGAR LA RUTA CON SUS DATOS AL ARRAY
    const nuevoRuta = {
        id : editando === false ? Date.now() : editando,
        nombreRuta,
        valorTicket,
        ciudadOrigen,
        ciudadDestino,
        puntos
    }

    if(editando) {
        nuevoRuta.id = editando
        rutas = rutas.map(ruta => ruta.id === editando ? nuevoRuta : ruta)

        //DEVOLVER LOS NOMBRES DEL FORMULARIO
        document.querySelector('#form-title').textContent = 'Añadir rutas'
        document.querySelector('#form-button').textContent = 'Añadir'

        editando = false;
    } else {
        rutas.push(nuevoRuta);
    }

    editando = false;

    //GUARDAR EN LOCALSTORAGE
    LS.setItem('rutas', JSON.stringify(rutas));

    //BORRAR LOS INPUTS O LIMPIAR TABLA
    form.reset();

    //IMPRIMIR LA TABLA
    imprimirTabla(rutas);
}

//FUNCION PARA ELIMINAR RUTAS****************************

function eliminarRuta(id) {
    rutas = rutas.filter(ruta => ruta.id !== id);

    //GUARDAR EN LOCALSTORAGE
    LS.setItem('rutas', JSON.stringify(rutas));

    //IMPRIMIR DE NUEVO LA TABLA
    imprimirTabla(rutas);
}


//FUNCION CARGAR DATOS*********************************
function cargarDatos(id){

    //CAMBIAR LOS TITULOS DEL FORMULARIO
    document.querySelector('#form-title').textContent = 'Editar';
    document.querySelector('#form-button').textContent = 'Guardar Cambios';

    rutas.forEach(ruta => {
        if(ruta.id === id) {
            nombreRuta.value = ruta.nombreRuta;
            valorTicket.value = ruta.valorTicket;
            ciudadOrigen.value = ruta.ciudadOrigen;
            ciudadDestino.value = ruta.ciudadDestino;
            puntos.value = ruta.puntos;
        }
    });

    editando = id;

}

//FUNCION PARA IMPRIMIR TABLAS ******************************

function imprimirTabla(datos){

    //LIMPIAR LA TABLA ANTERIOR
    const tabla = document.querySelector('#tabla-rutas');
    tabla.innerHTML = '';

    //IMPRIMIR NUEVO
    datos.forEach(ruta => {
        tabla.innerHTML += `
        <tr>
        <td>${ruta.id}</td>
        <td>${ruta.nombreRuta}</td>
        <td>${ruta.valorTicket}</td>
        <td>${ruta.ciudadOrigen}</td>
        <td>${ruta.ciudadDestino}</td>
        <td>${ruta.puntos}</td>
        <td>
            <div class="d-flex justify-content-center align-items-center">
                <button class="btn btn-primary me-1" onclick="cargarDatos(${ruta.id})">
                    <i class="bi bi-pencil-square"></i>
                </button>
                <button class="btn btn-danger" onclick="eliminarRuta(${ruta.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </td>
        </tr>
    `
    });
}