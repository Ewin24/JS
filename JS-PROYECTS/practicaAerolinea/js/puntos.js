//MODULO DE PUNTOS

//ARREGLOS Y VARIBALES A UTILIZAR
let clientes = [];
let editando = false;

//GUARDAR Y ALMACENAR EN LOCAL-STORAGE
let LS = window.localStorage;

//TRAER LOS REGISTROS DEL LOCAL-STORAGE SI EXISTEN

if(LS.getItem('clientes')) {
    clientes = JSON.parse(LS.getItem('clientes'));
}

imprimirTabla(clientes);

const inputBuscar = document.querySelector('#buscar');
inputBuscar.addEventListener('keyup', buscarClientes);

//FUNCIONES ******************************************

//FUNCION PARA BUSCAR CLIENTES

function buscarClientes() {

    //VERIFICAR QUE NO ESTE VACIO
    if(inputBuscar.value === '') {
        imprimirTabla(clientes);
    } else {
        if(isNaN(inputBuscar.value)) {
            let busqueda = clientes.filter(function (cliente) {
                return (
                    cliente.apellidos.toLowerCase().includes(inputBuscar.value.toLowerCase()) || cliente.nombres.toLowerCase().includes(inputBuscar.value.toLowerCase())
                );
            });

            imprimirTabla(busqueda);
        } else {
            let busqueda = clientes.filter(function (cliente) {
                return cliente.identificacion.includes(inputBuscar.value);
            });

            imprimirTabla(busqueda);
        }
    }
}

//FUNCION DE IMPRIMIR TABLA ***************************

function imprimirTabla(datos) {
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
        <td>${cliente.puntos}</td>
        </tr>
    `
    });
}