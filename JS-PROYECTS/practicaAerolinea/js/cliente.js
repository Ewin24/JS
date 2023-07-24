// MODULO DE CLIENTES

// VARIABLES O ARREGLOS
let clientes = [];

// DATO BANDERA PARA SABER CUANDO ESTA EDITANDO UN CLIENTE Y CUANDO NO
let editando = false;

//PARA GUARDAR EN LOCALSTORAGE
let LS = window.localStorage;

// TRAER LOS REGISTROS DEL LOCALSTORAGE SI EXISTEN 
if (LS.getItem('clientes')) {
    clientes = JSON.parse(LS.getItem('clientes'));
}

// IMPRIMIR TABLA
imprimirTabla(clientes);

// TRAER LOS DATOS DEL FORMULARIO DE CLIENTES
const form = document.querySelector('#form-anadir');

form.addEventListener('submit', e => {
    e.preventDefault(); // PARA PREVENIR QUE LA PAGINA SE RECARGUE

    anadirCliente();
})

// ME FALTA POR BUSCAR QUE HACE ESTO
const inputBuscar = document.querySelector('#buscar');
inputBuscar.addEventListener('keyup', buscarClientes);

// FUNCIONES

//FUNCION PARA AÑADIR CLIENTE AL ARREGLO
function anadirCliente() {
    // ACCEDER A LAS VARIABLES DEL FORMULARIO DE NUEVO CLIENTE (VALOR)
    const identificacion = document.querySelector('#identificacion').value;
    const nombres = document.querySelector('#nombres').value;
    const apellidos = document.querySelector('#apellidos').value;
    const telefono = document.querySelector('#telefono').value;
    const email = document.querySelector('#email').value;
    const fechaNacimiento = document.querySelector('#fechaNacimiento').value
    const nacionalidad = document.querySelector('#nacionalidad').value

    //AGREGAR ESTOS VALORES AL ARRAY

    const nuevoCliente = {
        //LA CONDICION TERNARIA ES PARA ASIGNAR EL ID DEL CLIENTE EN ESTE CASO LO HACEMOS CON LA FUNCION DATE.NOW YA QUE ESTA ES SIEMPRE UNICA PARA CADA UNO, Y EN CASO DE QUE LA CONDICION PASE ENTONCES SE LE DA ESTE VALOR DE LA FUNCION.
        id: editando === false ? Date.now() : editando, // Condición ternaria
        identificacion,
        nombres,
        apellidos,
        telefono,
        email,
        fechaNacimiento,
        nacionalidad,
        puntos: 0
    }

    if (editando) {
        nuevoCliente.id = editando
        clientes = clientes.map(cliente => cliente.id === editando ? nuevoCliente : cliente)

        //VOLVER LOS TITULOS A SU ESTADO ORIGINAL
        document.querySelector('#form-title').textContent = 'Añadir Clientes'
        document.querySelector('#form-button').textContent = 'Añadir';

        editando = false;
    } else {
        clientes.push(nuevoCliente);
    }

    editando = false;

    //GUARDAR EN LOCALSTORAGE
    LS.setItem('clientes', JSON.stringify(clientes));

    //PARA LIMPIAR LOS INPUTS DEL FORMULARIO
    form.reset();

    //IMPRIMIR TABLA PARA MOSTRAR LOS DATOS
    imprimirTabla(clientes);
}

//FUNCION PARA ELIMINAR CLIENTES

function eliminarCliente(id) {

    //CON LA FUNCION FILTER LO QUE HACEMOS ES QUE ME DEVUELVA TODOS LOS VALORES QUE NO SON EL QUE LE HEMOS PEDIDO, ES DECIR DEVUELVA TODOS MENOS ESE Y LOS MANDAMOS NUEVAMENTE AL LOCALSTORAGE
    clientes = clientes.filter(cliente => cliente.id !== id);

    //GUARDAR EN LOCALSTORAGE
    LS.setItem('clientes', JSON.stringify(clientes));

    //IMPRIMIR NUEVAMENTE LA TABLA CON LOS VALORES YA CAMBIADOS
    imprimirTabla(clientes);
}

//FUNCION PARA CARGAR DATOS ES DECIR PARA MONTAR LOS DATOS DEL CLIENTE AL CUAL HEMOS EDITADO

function cargarDatos(id){

    //CAMBIMOS LOS TITULOS DEL FORM PARA SABER QUE ESTAMOS HACIENDO 
    document.querySelector('#form-title').textContent = 'Editar';
    document.querySelector('#form-button').textContent = 'Guardar Cambios';

    //HACEMOS UN FOREACH PARA RECORRER TODOS LOS CLIENTES Y SI EL ID COINCIDE CAMBIAR LOS DATOS POR LOS NUEVOS QUE YA HEMOS INGRESADO
    clientes.forEach(cliente => {
        if(cliente.id === id){
            identificacion.value = cliente.identificacion
            nombres.value = cliente.nombres;
            apellidos.value = cliente.apellidos;
            telefono.value = cliente.telefono;
            email.value = cliente.email;
            fechaNacimiento.value = cliente.fechaNacimiento;
            nacionalidad.value = cliente.nacionalidad;
        }
    });

    editando = id;
}

//FUNCION PARA BUSCAR CLIENTE
function buscarClientes(){
    //CON ESTE IF LO QUE HACEMOS ES VERIFICAR QUE EL INPUT NO ESTE VACIO
    if(inputBuscar.value === ''){
        imprimirTabla(clientes);
    }else{
        if(isNaN(inputBuscar.value)) {
            let busqueda = clientes.filter(function(cliente){
                return(
                    cliente.apellidos.loLowerCase().includes(inputBuscar.value.toLowerCase()) || cliente.nombres.toLowerCase().includes(inputBuscar.value.toLowerCase())
                );
            });

            imprimirTabla(busqueda);

        }else{
            let busqueda = clientes.filter(function(cliente){
                return cliente.identificacion.includes(inputBuscar.value);
            });

            imprimirTabla(busqueda);
        }
    }
}

//FUNCION PARA IMPRIMIR TABLA
function imprimirTabla(datos){
    //LIMPIAR LA TABLA ANTERIOR
    const tabla = document.querySelector('#tabla-clientes');
    tabla.innerHTML = '';

    //IMPRIMIR LA TABLA
    datos.forEach(cliente => {
        tabla.innerHTML += `
        <tr>
        <td>${cliente.identificacion}</td>
        <td>${cliente.nombres}</td>
        <td>${cliente.apellidos}</td>
        <td>${cliente.telefono}</td>
        <td>${cliente.email}</td>
        <td>${cliente.fechaNacimiento}</td>
        <td>${cliente.nacionalidad}</td>

        <td>
            <div class="d-flex justify-content-center align-items-center">
                <button class="btn btn-primary me-1" onclick="cargarDatos(${cliente.id})">
                    <i class="bi bi-pencil-square"></i>
                </button>
                <button class="btn btn-danger" onclick="eliminarCliente(${cliente.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </td>
        </tr>`
    });
}