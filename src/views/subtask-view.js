// Helper function that builds the subtask item
function showSubTaskItem(subtask) {
    const subTaskWrapper = document.createElement("li");
    subTaskWrapper.classList.add("subtask-wrapper");
    subTaskWrapper.dataset.subtaskid = subtask.id;
    subTaskWrapper.dataset.type = "subtask";
    const checkBubble = document.createElement("button");
    checkBubble.dataset.action = "toggle-subtask-completion";
    checkBubble.classList.add("check-bubble");
    if (subtask.isComplete) checkBubble.classList.add("completed");
    const subTaskContainer = document.createElement("div");
    subTaskContainer.classList.add("subtask-container");
    const subTaskDeleteBtn = document.createElement("button");
    subTaskDeleteBtn.dataset.action = "remove-subtask";
    subTaskDeleteBtn.classList.add("subtask-delete-btn");

    // checkBubble
    const checkMark = document.createElement("div");
    checkMark.classList.add("checkmark");
    checkMark.textContent = "b";
    checkBubble.appendChild(checkMark);

    // subTaskContainer
    const subTaskBtn = document.createElement("button");
    subTaskBtn.dataset.action = "edit-subtask";
    subTaskBtn.classList.add("subtask-btn");
    subTaskBtn.textContent = subtask.title;
    subTaskContainer.appendChild(subTaskBtn);

    const subTaskInput = document.createElement("input");
    subTaskInput.classList.add("subtask-input");
    subTaskInput.setAttribute("value", subtask.title);
    subTaskInput.setAttribute("hidden", "");
    subTaskContainer.appendChild(subTaskInput);

    // subTaskDeleteBtn
    const negativeIcon = document.createElement("div");
    negativeIcon.classList.add("negative-sign");
    negativeIcon.textContent = "t";
    subTaskDeleteBtn.appendChild(negativeIcon);

    subTaskWrapper.appendChild(checkBubble);
    subTaskWrapper.appendChild(subTaskContainer);
    subTaskWrapper.appendChild(subTaskDeleteBtn);
    return subTaskWrapper;
}

// Function that toggles check bubble
function toggleCheckBubble(subtask) {
    const subTaskElement = document.querySelector(`[data-subtaskid="${subtask.id}"]`);
    const checkBubble = subTaskElement.querySelector(".check-bubble");
    checkBubble.classList.toggle("completed", subtask.isComplete);
}

// Function that renders the subtask list for the todo
function showSubTaskList(todo) {
    const subTasks = document.querySelector(".subtasks");

    // Clear subtasks before rendering subtask list
    subTasks.innerHTML = "";

    // Display subtasks for todo
    todo.checkList.forEach((subTaskItem) => {
        const subTask = showSubTaskItem(subTaskItem);
        subTasks.appendChild(subTask);
    });
}

export {
    toggleCheckBubble,
    showSubTaskList
}