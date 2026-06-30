// SubTask View
import {
    buildSubTaskListUI
} from "./subtask-view.js";

// Function that toggles check bubble
export function toggleCheckBubble(todo) {
    const todoElement = document.querySelector(`[data-todoid="${todo.id}"]`);
    const checkBubble = todoElement.querySelector(".check-bubble");
    checkBubble.classList.toggle("completed", todo.isComplete);
}

// Function that toggles the details of the todo item
export function toggleRevealDetails(todo) {
    const todoElement = document.querySelector(`[data-todoid="${todo.id}"]`);
    const todoDetails = todoElement.querySelector(".todo-details");
    todoDetails.classList.toggle("open", todo.revealDetails);
}

// Function that renders the todo list for the selected project
export function showTodoListUI(project) {
    const projectName = document.querySelector(".project-name");
    const todos = document.querySelector(".todos");

    // Clear project name and todos before rendering todo list
    projectName.innerHTML = "";
    todos.innerHTML = "";

    // Display project name
    projectName.textContent = project.title;

    // Display todos for project
    project.todoList.forEach((todoItem) => {
        const todo = buildTodoItem(todoItem);
        todos.appendChild(todo);
    });
}

// Function that appends todo to the todo list
export function appendTodoUI(todo) {
    const todos = document.querySelector(".todos");
    const todoElement = buildTodoItem(todo);
    todos.appendChild(todoElement);
}

// Function that updates todo from the todo list
export function updateTodoUI(todo) {
    const todoElement = document.querySelector(`[data-todoid="${todo.id}"]`);
    todoElement.querySelector(`[data-field="title"]`).textContent = todo.title;
    todoElement.querySelector(`[data-field="description"]`).textContent = todo.description;
    todoElement.querySelector(`[data-field="due-date"]`).textContent = todo.dueDate;
    todoElement.querySelector(`[data-field="priority"]`).textContent = todo.priority;
    todoElement.querySelector(`[data-field="due-date-details"]`).textContent = todo.dueDate;
    todoElement.querySelector(`[data-field="priority-details"]`).textContent = todo.priority;
}

// Function that removes todo from the todo list
export function removeTodoUI(todo) {
    const todoElement = document.querySelector(`[data-todoid="${todo.id}"]`);
    todoElement.remove();
}

// Helper functions
function buildTodoItem(todo) {
    const todoWrapper = document.createElement("li");
    todoWrapper.classList.add("todo-wrapper");
    todoWrapper.dataset.todoid = todo.id;

    todoWrapper.appendChild(buildCheckBubble(todo));
    todoWrapper.appendChild(buildTodoCard(todo));
    todoWrapper.appendChild(buildTodoOptions());
    return todoWrapper;
}

function buildCheckBubble(todo) {
    const checkBubble = document.createElement("button");
    checkBubble.dataset.action = "toggle-todo-completion";
    checkBubble.classList.add("check-bubble");
    if (todo.isComplete) checkBubble.classList.add("completed");

    const checkMark = document.createElement("div");
    checkMark.classList.add("checkmark");
    checkMark.textContent = "b";
    checkBubble.appendChild(checkMark);
    return checkBubble;
}

function buildTodoCard(todo) {
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo-card");

    todoCard.appendChild(buildTodoMain(todo));
    todoCard.appendChild(buildTodoDetails(todo));
    return todoCard;
}

function buildTodoMain(todo) {
    const todoMain = document.createElement("div");
    todoMain.classList.add("todo-main");

    const todoInfo = document.createElement("div");
    todoInfo.classList.add("todo-info");

    const todoTitle = document.createElement("h2");
    todoTitle.dataset.field = "title";
    todoTitle.textContent = todo.title;

    const primaryDetails = document.createElement("div");
    primaryDetails.classList.add("primary-details");

    const dueDateWrapper = document.createElement("div");
    dueDateWrapper.classList.add("due-date-wrapper");
    const calendarIcon = document.createElement("div");
    calendarIcon.classList.add("calendar-due-date");
    calendarIcon.textContent = "c";
    const dueDate = document.createElement("p");
    dueDate.dataset.field = "due-date";
    dueDate.textContent = todo.dueDate;
    dueDateWrapper.appendChild(calendarIcon);
    dueDateWrapper.appendChild(dueDate);

    const priorityContainer = document.createElement("div");
    priorityContainer.classList.add("priority");
    const priorityText = document.createElement("p");
    priorityText.dataset.field = "priority";
    priorityText.textContent = todo.priority;
    priorityContainer.appendChild(priorityText);

    primaryDetails.appendChild(dueDateWrapper);
    primaryDetails.appendChild(priorityContainer);

    todoInfo.appendChild(todoTitle);
    todoInfo.appendChild(primaryDetails);

    const accordian = document.createElement("button");
    accordian.dataset.action = "expand-details";
    accordian.classList.add("accordian");
    const accordianImage = document.createElement("div");
    accordianImage.classList.add("arrow");
    accordianImage.textContent = "a";
    accordian.appendChild(accordianImage);

    todoMain.appendChild(todoInfo);
    todoMain.appendChild(accordian);
    return todoMain;
}

function buildTodoDetails(todo) {
    const todoDetails = document.createElement("div");
    todoDetails.classList.add("todo-details");
    if (todo.revealDetails) todoDetails.classList.add("open");

    todoDetails.appendChild(buildTodoDetailsHeader(todo));
    todoDetails.appendChild(buildTodoDetailsBody(todo));
    return todoDetails;
}

function buildTodoDetailsHeader(todo) {
    const todoDetailsHeader = document.createElement("div");
    todoDetailsHeader.classList.add("todo-details-header");
    const description = document.createElement("h3");
    description.textContent = "Description:";
    const descriptionText = document.createElement("p");
    descriptionText.dataset.field = "description";
    descriptionText.textContent = todo.description;
    todoDetailsHeader.appendChild(description);
    todoDetailsHeader.appendChild(descriptionText);
    return todoDetailsHeader;
}

function buildTodoDetailsBody(todo) {
    const todoDetailsBody = document.createElement("div");
    todoDetailsBody.classList.add("todo-details-body");

    todoDetailsBody.appendChild(buildDetailsSection(todo));
    todoDetailsBody.appendChild(buildSubTaskListSection(todo));
    return todoDetailsBody;
}

function buildDetailsSection(todo) {
    const todoDetailsSectionWrapper = document.createElement("div");
    todoDetailsSectionWrapper.classList.add("todo-details-section-wrapper");

    const todoDetailsSection1 = document.createElement("div");
    todoDetailsSection1.classList.add("todo-details-section");
    const dueDateDetails = document.createElement("h3");
    dueDateDetails.textContent = "Due Date:";
    const dueDateText = document.createElement("p");
    dueDateText.dataset.field = "due-date-details";
    dueDateText.textContent = todo.dueDate;
    todoDetailsSection1.appendChild(dueDateDetails);
    todoDetailsSection1.appendChild(dueDateText);
    todoDetailsSectionWrapper.appendChild(todoDetailsSection1);

    const todoDetailsSection2 = document.createElement("div");
    todoDetailsSection2.classList.add("todo-details-section");
    const priorityDetails = document.createElement("h3");
    priorityDetails.textContent = "Priority:";
    const priority = document.createElement("p");
    priority.dataset.field = "priority-details";
    priority.textContent = todo.priority;
    todoDetailsSection2.appendChild(priorityDetails);
    todoDetailsSection2.appendChild(priority);
    todoDetailsSectionWrapper.appendChild(todoDetailsSection2);

    const todoDetailsSection3 = document.createElement("div");
    todoDetailsSection3.classList.add("todo-details-section");
    const notesDetails = document.createElement("h3");
    notesDetails.textContent = "Notes:";
    const notesContainer = document.createElement("div");
    notesContainer.setAttribute("contenteditable", "true");
    notesContainer.classList.add("notes-container");
    notesContainer.textContent = todo.notes;
    todoDetailsSection3.appendChild(notesDetails);
    todoDetailsSection3.appendChild(notesContainer);
    todoDetailsSectionWrapper.appendChild(todoDetailsSection3);
    return todoDetailsSectionWrapper;
}

function buildSubTaskListSection(todo) {
    const todoSubTaskListSection = document.createElement("div");
    todoSubTaskListSection.classList.add("todo-subtask-list");

    const subTaskList = buildSubTaskListUI(todo); // from subtask-view

    const subTaskBtn = document.createElement("button");
    subTaskBtn.dataset.action = "create-subtask";
    subTaskBtn.classList.add("subtask-btn");
    subTaskBtn.textContent = "+ Add Subtask";

    todoSubTaskListSection.appendChild(subTaskList);
    todoSubTaskListSection.appendChild(subTaskBtn);
    return todoSubTaskListSection;
}

function buildTodoOptions() {
    const todoOptions = document.createElement("div");
    todoOptions.classList.add("todo-options");

    const editBtn = document.createElement("button");
    editBtn.dataset.action = "edit-todo";
    editBtn.classList.add("edit");
    const editIcon = document.createElement("div");
    editIcon.classList.add("edit-icon");
    editIcon.textContent = "e";
    editBtn.appendChild(editIcon);

    const trashBtn = document.createElement("button");
    trashBtn.dataset.action = "remove-todo";
    trashBtn.classList.add("delete");
    const trashIcon = document.createElement("div");
    trashIcon.classList.add("trash");
    trashIcon.textContent = "t";
    trashBtn.appendChild(trashIcon);

    todoOptions.appendChild(editBtn);
    todoOptions.appendChild(trashBtn);
    return todoOptions;
}