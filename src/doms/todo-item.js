export function showTodoItem(todo) {
    const todoWrapper = document.createElement("li");
    todoWrapper.classList.add("todo-wrapper");
    todoWrapper.dataset.id = todo.id;
    const checkBubble = document.createElement("button");
    checkBubble.classList.add("check-bubble");
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo-card");
    const todoOptions = document.createElement("div");
    todoOptions.classList.add("todo-options");

    // checkBox
    const checkMark = document.createElement("div");
    checkMark.classList.add("checkmark");
    checkMark.textContent = "b";
    checkBubble.appendChild(checkMark);

    // todoCard
    const todoMain = document.createElement("div");
    todoMain.classList.add("todo-main");
    const todoDetails = document.createElement("div");
    todoDetails.classList.add("todo-details");

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
    accordian.classList.add("accordian");
    const accordianImage = document.createElement("div");
    accordianImage.classList.add("arrow");
    accordianImage.textContent = "a";
    accordian.appendChild(accordianImage);

    todoMain.appendChild(todoInfo);
    todoMain.appendChild(accordian);
    
    todoCard.appendChild(todoMain);
    todoCard.appendChild(todoDetails);

    // todoOptions
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    const editIcon = document.createElement("div");
    editIcon.classList.add("edit-icon");
    editIcon.textContent = "e";
    editBtn.appendChild(editIcon);

    const trashBtn = document.createElement("button");
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