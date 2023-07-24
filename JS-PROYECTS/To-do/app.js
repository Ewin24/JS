document.addEventListener("DOMContentLoaded", function () {
  const tablebody = document.getElementById("table-body");

  function deleteTodo(element) {
    return element;
  }

  function addTodo() {
    const btnAdd = document.getElementById("add");
    const titleLabel = document.getElementById("title-label");
    const descLabel = document.getElementById("description-label");

    if (titleLabel != "" && descLabel != "") {
      btnAdd.addEventListener("click", function (evt) {
        let todo = `
              <tr id="" class="">
                  <td scope="row">${titleLabel.value}</td>
                  <td>${descLabel.value}</td>
                  <td>
                  <button id="edit" class="btn btn-primary">Edit</button>
                  <button id="delete" class="btn btn-danger">Delete</button>
                  </td>
              </tr>
              `;
      });
    }
  }

  function editTodo(element) {
    return element;
  }

  function listTodo(element) {
    return element;
  }

  function idCalc(tablebody) {
    tablebody.firsrChild.tr;
    return;
  }
});
