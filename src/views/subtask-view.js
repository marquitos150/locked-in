// Function that toggles check bubble
export function toggleCheckBubble(subtask) {
    const subTaskElement = document.querySelector(`[data-subtaskid="${subtask.id}"]`);
    const checkBubble = subTaskElement.querySelector(".check-bubble");
    checkBubble.classList.toggle("completed", subtask.isComplete);
}

// Function that adds a new subtask to the subtask list UI
export function appendSubTaskUI(todo, subtask) {
    const todoElement = document.querySelector(`[data-todoid="${todo.id}"]`);
    const subTasks = todoElement.querySelector(".subtasks");
    const subTaskElement = buildSubTaskItem(subtask);
    subTasks.appendChild(subTaskElement);
}

// Function that removes a subtask from the subtask list UI
export function removeSubTaskUI(subtask) {
    const subTaskToRemove = document.querySelector(`[data-subtaskid="${subtask.id}"]`);
    subTaskToRemove.remove();
}

// Function that builds the sub task item
export function buildSubTaskItem(subtask) {
    const subTaskWrapper = document.createElement("li");
    subTaskWrapper.classList.add("subtask-wrapper");
    subTaskWrapper.dataset.subtaskid = subtask.id;

    subTaskWrapper.appendChild(buildCheckBubble(subtask));
    subTaskWrapper.appendChild(buildSubTaskField(subtask));
    subTaskWrapper.appendChild(buildDeleteBtn());
    return subTaskWrapper;
}

// Helper functions
function buildCheckBubble(subtask) {
    const checkBubble = document.createElement("button");
    checkBubble.dataset.action = "toggle-subtask-completion";
    checkBubble.classList.add("check-bubble");
    if (subtask.isComplete) checkBubble.classList.add("completed");

    const checkMark = document.createElement("div");
    checkMark.classList.add("checkmark");
    checkMark.textContent = "b";
    checkBubble.appendChild(checkMark);
    return checkBubble;
}

function buildSubTaskField(subtask) {
    const subTaskInput = document.createElement("input");
    subTaskInput.classList.add("subtask-input");
    subTaskInput.setAttribute("type", "text");
    subTaskInput.setAttribute("value", subtask.title);
    return subTaskInput;
}

function buildDeleteBtn() {
    const subTaskDeleteBtn = document.createElement("button");
    subTaskDeleteBtn.dataset.action = "remove-subtask";
    subTaskDeleteBtn.classList.add("subtask-delete-btn");

    const negativeIcon = document.createElement("div");
    negativeIcon.classList.add("negative-sign");
    negativeIcon.textContent = "t";
    subTaskDeleteBtn.appendChild(negativeIcon);
    return subTaskDeleteBtn;
}