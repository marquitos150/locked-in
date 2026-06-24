function enableCreateMode() {
    const formHeader = document.querySelector("#op-title");
    formHeader.textContent = "Add Task";
    const submitBtn = document.querySelector("#op-btn");
    submitBtn.textContent = "Create";
}

function enableEditMode() {
    const formHeader = document.querySelector("#op-title");
    formHeader.textContent = "Edit Task";
    const submitBtn = document.querySelector("#op-btn");
    submitBtn.textContent = "Update";
}

function getFormData() {
    return {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        dueDate: document.getElementById("due-date").value,
        priority: document.getElementById("priority").value
    }
}

function fillForm(todo) {
    document.getElementById("title").value = todo.title;
    document.getElementById("description").value = todo.description;
    document.getElementById("due-date").value = todo.dueDate;
    document.getElementById("priority").value = todo.priority;
}

export {
    enableCreateMode,
    enableEditMode,
    getFormData,
    fillForm
}