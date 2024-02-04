

let tasks = [
    { id: 1, description: "Hacer una cita con el médico para el chequeo anual.", priority: "Alta" },
    { id: 2, description: "Comprar regalos de cumpleaños para la familia.", priority: "Media" },
    { id: 3, description: "Hacer una lista de compras para la semana y planificar las comidas.", priority: "Baja" }
];

function displayTasks() {
    const tasksList = document.getElementById("tasks-list");
    tasksList.innerHTML = "";

    tasks.forEach(task => {
        const listItem = document.createElement("li");
        listItem.className = getPriorityClass(task.priority);
        listItem.innerHTML = `
            <div>
                <span>${task.description} - Prioridad: ${task.priority}</span>
            </div>
            <div class="edit-buttons">
                <button onclick="editTask(${task.id})">Editar</button>
                <button onclick="deleteTask(${task.id})">Eliminar</button>
            </div>`;
        tasksList.appendChild(listItem);
    });
}

displayTasks();

function getPriorityClass(priority) {
    switch (priority) {
        case "Alta":
            return "high";
        case "Media":
            return "medium";
        case "Baja":
            return "low";
        default:
            return "";
    }
}

function addTask() {
    const descriptionInput = document.getElementById("taskDescription");
    const prioritySelect = document.getElementById("taskPriority");

    const description = descriptionInput.value.trim();
    const priority = prioritySelect.value; 

    if (description && priority !== "Seleccione" && isValidPriority(priority)) {
        const newTask = {
            id: tasks.length + 1,
            description: description,
            priority: priority,
        };
        tasks.push(newTask);
        displayTasks();

        descriptionInput.value = "";
        prioritySelect.value = "Seleccione"; 
    } else {
        alert("Por favor, ingrese una descripción válida y seleccione una prioridad.");
    }
}

function isValidPriority(priority) {
    return priority === "Alta" || priority === "Media" || priority === "Baja";
}


function editTask(id) {
    const task = tasks.find(t => t.id === id);

    const listItem = document.querySelector(`#tasks-list li:nth-child(${id})`);
    const span = listItem.querySelector('span');
    const editButtons = listItem.querySelector('.edit-buttons');

    const editDescriptionInput = document.createElement("input");
    editDescriptionInput.type = "text";
    editDescriptionInput.value = task.description;
    editDescriptionInput.className = "task-input";

    const editPrioritySelect = document.createElement("select");
    editPrioritySelect.className = "task-input";
    
    const priorityOptions = ["Seleccione", "Alta", "Media", "Baja"];
    
    priorityOptions.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.text = option;
        editPrioritySelect.appendChild(optionElement);


        if (option === task.priority) {
            optionElement.selected = true;
        }
    });

    const saveButton = document.createElement("button");
    saveButton.innerText = "Guardar";
    saveButton.className = "edit-buttons";
    saveButton.onclick = () => saveEditedTask(id);

    const cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancelar";
    cancelButton.className = "edit-buttons";
    cancelButton.onclick = () => cancelEdit(id);

    span.replaceWith(editDescriptionInput);
    editButtons.replaceWith(editPrioritySelect, saveButton, cancelButton);
}


function saveEditedTask(id) {
    const task = tasks.find(t => t.id === id);

    const editDescriptionInput = document.querySelector(`#tasks-list li:nth-child(${id}) input[type="text"]`);
    const editPrioritySelect = document.querySelector(`#tasks-list li:nth-child(${id}) select`);

    const newDescription = editDescriptionInput.value.trim();
    const newPriority = editPrioritySelect.value;

    if (newDescription && newPriority !== "Seleccione" && isValidPriority(newPriority)) {
        task.description = newDescription;
        task.priority = newPriority;
        displayTasks();
    } else {
        alert("Por favor, ingrese una descripción válida y seleccione una prioridad.");
    }
}



function cancelEdit(id) {
    displayTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    displayTasks();
}

displayTasks();