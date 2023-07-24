document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("table-body");


    function deleteTodo(element) {
        const btnDelete = document.getElementById("delete");
        btnDelete.addEventListener("click", function () { console.log(btnDelete) })
    }

    function addTodo() {
        const btnAdd = document.getElementById("add");
        const titleLabel = document.getElementById("title-label");
        const descLabel = document.getElementById("description-label");

        if (titleLabel != "" && descLabel != "") {
            btnAdd.addEventListener("click", function (evt) {
                let element = document.createElement('tr')

                let todoText = `
                    <td scope="row">${titleLabel.value}</td>
                    <td>${descLabel.value}</td>
                    <td>
                    <button id="edit" class="btn btn-primary">Edit</button>
                    <button id="delete" class="btn btn-danger">Delete</button>
                    </td>
                `;
                todo = element.innerHTML = todoText
                tableBody.appendChild(todo)
            });
        }else{
            console.log("Agrega una descripcion y un titulo")
        }
    }

    function editTodo(element) {
        const btnEdit = document.getElementById("edit");
        btnEdit.addEventListener("click", function () { console.log(btnEdit) })

    }

    function listTodo(element) {
        return element;
    }

    function idCalc(tablebody) {
        tablebody.firsrChild.tr;
        return;
    }

    deleteTodo()
    editTodo()
    addTodo()
});