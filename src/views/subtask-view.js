// Helper function that builds the subtask item
function showSubTaskItem(subtask) {
    const subTaskWrapper = document.createElement("li");
    subTaskWrapper.classList.add("subtask-wrapper");
    subTaskWrapper.dataset.id = subtask.id;
    const checkBubble = document.createElement("button");
    checkBubble.dataset.action = "toggle-completion-status-subtask";
    checkBubble.dataset.id = subtask.id;
    checkBubble.classList.add("check-bubble");
    if (subtask.isComplete) checkBubble.classList.add("completed");
    const subTaskContainer = document.createElement("div");
    subTaskContainer.classList.add("subtask-container");
    const subTaskDeleteBtn = document.createElement("button");
    subTaskDeleteBtn.classList.add("subtask-delete-btn");

    // checkBubble
    const checkMark = document.createElement("div");
    checkMark.classList.add("checkmark");
    checkMark.textContent = "b";
    checkBubble.appendChild(checkMark);

    // subTaskContainer
    const subTaskBtn = document.createElement("button");
    subTaskBtn.dataset.field = "title";
    subTaskBtn.classList.add("subtask-btn");
    subTaskBtn.textContent = subtask.title;
    subTaskContainer.appendChild(subTaskBtn);

    const subTaskInput = document.createElement("input");
    subTaskInput.dataset.field = "title";
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
    showSubTaskList
}