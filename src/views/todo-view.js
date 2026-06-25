// Helper function that builds the todo item
function showTodoItem(todo) {
    const todoWrapper = document.createElement("li");
    todoWrapper.classList.add("todo-wrapper");
    todoWrapper.dataset.id = todo.id;
    const checkBubble = document.createElement("button");
    checkBubble.dataset.action = "toggle-completion-status";
    checkBubble.dataset.id = todo.id;
    checkBubble.classList.add("check-bubble");
    if (todo.isComplete) checkBubble.classList.add("completed");
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo-card");
    const todoOptions = document.createElement("div");
    todoOptions.classList.add("todo-options");

    // checkBubble
    const checkMark = document.createElement("div");
    checkMark.classList.add("checkmark");
    checkMark.textContent = "b";
    checkBubble.appendChild(checkMark);

    // todoCard
    const todoMain = document.createElement("div");
    todoMain.classList.add("todo-main");
    const todoDetails = document.createElement("div");
    todoDetails.classList.add("todo-details");
    if (todo.revealDetails) todoDetails.classList.add("open");

    // todoMain
    const todoInfo = document.createElement("div");
    todoInfo.classList.add("todo-info");

    const todoTitle = document.createElement("h2");
    todoTitle.textContent = todo.title;

    const primaryDetails = document.createElement("div");
    primaryDetails.classList.add("primary-details");

    const dueDateWrapper = document.createElement("div");
    dueDateWrapper.classList.add("due-date-wrapper");
    const calendarIcon = document.createElement("div");
    calendarIcon.classList.add("calendar-due-date");
    calendarIcon.textContent = "c";
    const dueDate = document.createElement("p");
    dueDate.classList.add("due-date");
    dueDate.textContent = todo.dueDate;
    dueDateWrapper.appendChild(calendarIcon);
    dueDateWrapper.appendChild(dueDate);

    const priorityContainer = document.createElement("div");
    priorityContainer.classList.add("priority");
    const priorityText = document.createElement("p");
    priorityText.textContent = todo.priority;
    priorityContainer.appendChild(priorityText);

    primaryDetails.appendChild(dueDateWrapper);
    primaryDetails.appendChild(priorityContainer);

    todoInfo.appendChild(todoTitle);
    todoInfo.appendChild(primaryDetails);

    const accordian = document.createElement("button");
    accordian.dataset.action = "expand-details";
    accordian.dataset.id = todo.id;
    accordian.classList.add("accordian");
    const accordianImage = document.createElement("div");
    accordianImage.classList.add("arrow");
    accordianImage.textContent = "a";
    accordian.appendChild(accordianImage);

    todoMain.appendChild(todoInfo);
    todoMain.appendChild(accordian);
    
    todoCard.appendChild(todoMain);

    // todoDetails
    const todoDetailsWrapper = document.createElement("div");
    todoDetailsWrapper.classList.add("todo-details-wrapper");

    const todoDetailsHeader = document.createElement("div");
    todoDetailsHeader.classList.add("todo-details-header");
    const description = document.createElement("h3");
    description.textContent = "Description:";
    const descriptionText = document.createElement("h3");
    descriptionText.textContent = todo.description;
    todoDetailsHeader.appendChild(description);
    todoDetailsHeader.appendChild(descriptionText);

    const todoDetailsBody = document.createElement("div");
    todoDetailsBody.classList.add("todo-details-body");

    const todoDetailsSectionWrapper = document.createElement("div");
    todoDetailsSectionWrapper.classList.add("todo-details-section-wrapper");
    const todoSubTaskListSection = document.createElement("div");
    todoSubTaskListSection.classList.add("todo-subtask-list");

    const todoDetailsSection1 = document.createElement("div");
    todoDetailsSection1.classList.add("todo-details-section");
    const dueDateDetails = document.createElement("h3");
    dueDateDetails.textContent = "Due Date:";
    const dueDateText = document.createElement("p");
    dueDateText.textContent = todo.dueDate;
    todoDetailsSection1.appendChild(dueDateDetails);
    todoDetailsSection1.appendChild(dueDateText);
    todoDetailsSectionWrapper.appendChild(todoDetailsSection1);

    const todoDetailsSection2 = document.createElement("div");
    todoDetailsSection2.classList.add("todo-details-section");
    const priorityDetails = document.createElement("h3");
    priorityDetails.textContent = "Priority:";
    const priority = document.createElement("p");
    priority.textContent = todo.priority;
    todoDetailsSection2.appendChild(priorityDetails);
    todoDetailsSection2.appendChild(priority);
    todoDetailsSectionWrapper.appendChild(todoDetailsSection2);

    const todoDetailsSection3 = document.createElement("div");
    todoDetailsSection3.classList.add("todo-details-section");
    const notesDetails = document.createElement("h3");
    notesDetails.textContent = "Notes:";
    const notesContainer = document.createElement("div");
    notesContainer.dataset.id = todo.id;
    notesContainer.setAttribute("contenteditable", "true");
    notesContainer.classList.add("notes-container");
    notesContainer.textContent = todo.notes;
    todoDetailsSection3.appendChild(notesDetails);
    todoDetailsSection3.appendChild(notesContainer);
    todoDetailsSectionWrapper.appendChild(todoDetailsSection3);

    const subTaskList = document.createElement("ul");
    subTaskList.classList.add("subtasks");
    const subTaskBtn = document.createElement("button");
    subTaskBtn.dataset.action = "create-subtask";
    subTaskBtn.dataset.id = todo.id;
    subTaskBtn.classList.add("subtask-btn");
    subTaskBtn.textContent = "+ Add Subtask";
    todoSubTaskListSection.appendChild(subTaskList);
    todoSubTaskListSection.appendChild(subTaskBtn);

    todoDetailsBody.appendChild(todoDetailsSectionWrapper);
    todoDetailsBody.appendChild(todoSubTaskListSection);

    todoDetailsWrapper.appendChild(todoDetailsHeader);
    todoDetailsWrapper.appendChild(todoDetailsBody);
    todoDetails.appendChild(todoDetailsWrapper);

    todoCard.appendChild(todoDetails);

    // todoOptions
    const editBtn = document.createElement("button");
    editBtn.dataset.action = "edit-todo";
    editBtn.dataset.id = todo.id;
    editBtn.classList.add("edit");
    const editIcon = document.createElement("div");
    editIcon.classList.add("edit-icon");
    editIcon.textContent = "e";
    editBtn.appendChild(editIcon);

    const trashBtn = document.createElement("button");
    trashBtn.dataset.action = "remove-todo";
    trashBtn.dataset.id = todo.id;
    trashBtn.classList.add("delete");
    const trashIcon = document.createElement("div");
    trashIcon.classList.add("trash");
    trashIcon.textContent = "t";
    trashBtn.appendChild(trashIcon);

    todoOptions.appendChild(editBtn);
    todoOptions.appendChild(trashBtn);

    todoWrapper.appendChild(checkBubble);
    todoWrapper.appendChild(todoCard);
    todoWrapper.appendChild(todoOptions);
    return todoWrapper;
}

// Function that toggles check bubble
function toggleCheckBubble(todo) {
    const todoElement = document.querySelector(`[data-id="${todo.id}"]`);
    const checkBubble = todoElement.querySelector(".check-bubble");
    checkBubble.classList.toggle("completed", todo.isComplete);
}

// Function that toggles the details of the todo item
function toggleRevealDetails(todo) {
    const todoElement = document.querySelector(`[data-id="${todo.id}"]`);
    const todoDetails = todoElement.querySelector(".todo-details");
    todoDetails.classList.toggle("open", todo.revealDetails);
}

// Function that renders the todo list for the selected project
function showTodoList(project) {
    const projectName = document.querySelector(".project-name");
    const todos = document.querySelector(".todos");

    // Clear project name and todos before rendering todo list
    projectName.innerHTML = "";
    todos.innerHTML = "";

    // Display project name
    projectName.textContent = project.title;

    // Display todos for project
    project.todoList.forEach((todoItem) => {
        const todo = showTodoItem(todoItem);
        todos.appendChild(todo);
    });
}

export {
    toggleCheckBubble,
    toggleRevealDetails,
    showTodoList
}