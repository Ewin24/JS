const btn = document.getElementById("btn")
const tbody = document.getElementById("tbody")


let nota = document.getElementById("nota").value
let porcentaje = document.getElementById("porcentaje").value


btn.addEventListener('click', add)


function add() {
    let i = 2
    
    const elemento = document.createElement('tr')
    elemento.classList.add("id=`${2}`")

    elemento.innerHTML = `
    <td>
        <p>${i}</p>
    </td>
    <td>
        <input id="nota" type="number" class="form-control" min="0"></td>
    <td>
        <input id="porcentaje" type="number" class="form-control" min="0">
    </td>
    <td class="text-center">
        <button id="btn" class="btn btn-primary m-1">
            +
        </button>
        <button id="btn" class="btn btn-danger m-1">
            -
        </button>
    </td>`
    
    tbody.appendChild(elemento)
    i+1
}
















//funciones pa ver valores
function innerSet(){
    titulo.innerText = "Chupala"
}

function inner(){
    console.log(titulo.innerText)
}

function mostrarNota() {
    console.log(document.getElementById("nota").value)
}

function mostrarPorcentaje() {
    console.log(document.getElementById("porcentaje").value)
}

function mostrarFila() {
    console.log(row)
}

//btn.addEventListener('click',mostrarPorcentaje) 