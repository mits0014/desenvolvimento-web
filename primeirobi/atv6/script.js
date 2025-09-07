const input = document.getElementById("taskInput");
const button = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");


function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const tbody = list.querySelector("tbody");
    const tr = document.createElement("tr");


    const tdTask = document.createElement("td");
    tdTask.textContent = taskText;


    const tdCheck = document.createElement("td");
    const checkbox = document.createElement("input");
    const deleteicon = document.createElement("p");
    deleteicon.className = "delete_icon";
    deleteicon.textContent = "delete";
    deleteicon.style.cursor = "pointer";
    deleteicon.style.marginLeft = "10px";
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    tdCheck.appendChild(checkbox);

    tr.appendChild(tdTask);
    tr.appendChild(tdCheck);
    tr.appendChild(deleteicon);


    deleteicon.addEventListener("click", () => {
        tbody.removeChild(tr);
    });

    tbody.appendChild(tr);
    input.value = "";
    input.focus();
}

button.addEventListener("click", addTask);


input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
