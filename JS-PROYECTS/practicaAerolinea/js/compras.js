//MODULO DE COMPRAS

//GUARDAR EN LOCALSTORAGE
const LS = window.localStorage;

//ARREGLOS A UTILIZAR
let clientes = [];
let rutas = [];
let datoCliente = [];
let datoRuta = [];
let rutaSeleccionada;

//TRAER LOS REGISTROS DEL LOCALSTORAGE

if (LS.getItem('clientes')) {
    clientes = JSON.parse(LS.getItem('clientes'));
}
if (LS.getItem('rutas')) {
    rutas = JSON.parse(LS.getItem('rutas'));
}

const modClientes = document.querySelector('#clientes');
const modRutas = document.querySelector('#rutas');

//SELECCIONAR CLIENTES 
imprimirTablaClientes(clientes);

const inputBuscar = document.querySelector('#buscar-clientes');
inputBuscar.addEventListener('keyup', buscarClientes);

const btnSelectCliente = document.querySelector('#select-cliente');
btnSelectCliente.addEventListener('click', () => {

    modClientes.classList.add('d-none');
    modRutas.classList.remove('d-none');

    cargarClienteTicket();
});

//FUNCIONES ********************************************

//FUNCION PARA BUSCAR CLIENTE **************************

function buscarClientes() {
    //VERIFICAR QUE NO ESTE VACIO
    if (inputBuscar.value === '') {
        imprimirTablaClientes(clientes);
    } else {
        if (isNaN(inputBuscar.value)) {
            busqueda = clientes.filter(function (cliente) {
                return (
                    cliente.apellidos.toLowerCase().includes(inputBuscar.value.toLowerCase()) ||
                    cliente.nombres.toLowerCase().includes(inputBuscar.value.toLowerCase())
                );
            });

            //VALIDAR SI ES SOLO UN USUARIO
            if (busqueda.length === 1) {
                btnSelectCliente.classList.remove('disabled');
            } else if (busqueda.length > 1 || busqueda.length < 1 && btnSelectCliente.classList.contains('disabled')) {
                btnSelectCliente.classList.add('disabled');
            }

            datoCliente = busqueda;

            imprimirTablaClientes(busqueda);
        } else {
            let busqueda = clientes.filter(function (cliente) {
                return cliente.identificacion.includes(inputBuscar.value);
            });

            if (busqueda.length === 1) {
                btnSelectCliente.classList.remove('disabled');
            } else if (busqueda.length > 1 || busqueda.length < 1 && !btnSelectCliente.classList.contains('disabled')) {
                btnSelectCliente.classList.add('disabled');
            }

            datoCliente = busqueda;

            imprimirTablaClientes(busqueda);
        }
    }
}

//FUNCION PARA CARGAR EL TICKET CON LOS DATOS DEL CLIENTE

function cargarClienteTicket() {
    const clienteDatos = document.querySelector('#clienteDatos');

    clienteDatos.innerHTML = `
        <p><b>Documento:</b> ${datoCliente[0].identificacion}</p>
        <p><b>Nombre:</b> ${datoCliente[0].nombres} ${datoCliente[0].apellidos}</p>
        <p><b>Teléfono:</b> ${datoCliente[0].telefono}</p>
        <p><b>Email:</b> ${datoCliente[0].email}</p>
        <p><b>Nacionalidad:</b> ${datoCliente[0].nacionalidad}</p>
    `
}

//SELECCIONAR LA RUTA PARA COMPRAR **********************

imprimirTablaRutas(rutas);

const inputBuscarR = document.querySelector('#buscar-rutas');
inputBuscarR.addEventListener('keyup', buscarRutas);

const btnComprarTicket = document.querySelector('#comprarTicket');
btnComprarTicket.addEventListener('click', () => {
    cargarRutaTicket();

    document.querySelector('#form-tickets').classList.add('d-none');

    clientes.forEach((cliente, idx) =>{
        if(cliente.id === datoCliente[0].id){
            clientes[idx].puntos += parseInt(datoRuta[0].puntos); 
        }
    });

    //GUARDAR EN LOCALSTORAGE
    LS.setItem('clientes', JSON.stringify(clientes));
});

//FUNCION PARA BUSCAR RUTAS *******************************

function buscarRutas() {

    //VERIFICAR QUE EL BUSCADOR NO ESTE VACIO
    if (inputBuscarR.value === '') {
        imprimirTablaRutas(rutas);
    } else {
        if (inputBuscarR.value) {
            busqueda = rutas.filter(function (ruta) {
                return ruta.nombreRuta.toLowerCase().includes(inputBuscarR.value.toLowerCase());
            });

            //VALIDAR SI ES SOLO UN USUARIO
            if (busqueda.length === 1) {
                btnComprarTicket.classList.remove('disabled');
            } else if (busqueda.length > 1 || busqueda.length < 1 && btnComprarTicket.classList.contains('disabled')) {
                btnComprarTicket.classList.add('disabled');
            }

            datoRuta = busqueda;

            imprimirTablaRutas(busqueda);
        }
    }
}

//FUNCION PARA CARGAR LA RUTA EN EL TICKET **********************

function cargarRutaTicket() {
    const rutaDatos = document.querySelector('#rutaDatos');

    rutaDatos.innerHTML = `
        <p><b>Valor Ruta:</b> ${datoRuta[0].valorTicket}</p>
        <p><b>+IVA:</b> ${datoRuta[0].valorTicket * 0.16}</p>
        <p><b>+Tasa Aeroportuaria:</b> ${datoRuta[0].valorTicket * 0.04}</p>
        <p><b>Total:</b> ${datoRuta[0].valorTicket * 1.20}</p>
        <hr>
        <p><b>Puntos de Fidelización de Ruta:</b> ${datoRuta[0].puntos}</p>
    `
}

function imprimirTablaClientes(datos) {

    //LIMPIAR LA TABLA ANTERIOR
    const tabla = document.querySelector('#tabla-clientes');
    tabla.innerHTML = '';

    //IMPRIMIR
    datos.forEach(cliente => {
        tabla.innerHTML += `
        <tr>
        <td>${cliente.identificacion}</td>
        <td>${cliente.nombres}</td>
        <td>${cliente.apellidos}</td>
        </tr>
    `
    });
}

function imprimirTablaRutas(datos) {
    //LIMPIAR LA TABLA ANTERIOR
    const tabla = document.querySelector('#tabla-rutas');
    tabla.innerHTML = '';

    //IMPRIMIR TABLA
    datos.forEach(ruta => {
        tabla.innerHTML += `
        <tr>
        <td>${ruta.nombreRuta}</td>
        <td>${ruta.valorTicket}</td>
        <td>${ruta.ciudadOrigen}</td>
        <td>${ruta.ciudadDestino}</td>
        <td>${ruta.puntos}</td>
        </tr>
    `
    });
}