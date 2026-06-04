export function showTodoItem(todo) {
    const todoWrapper = document.createElement("li");
    const checkBox = document.createElement("div");
    const todoCard = document.createElement("div");
    const todoOptions = document.createElement("div");

    // checkBox
    const bubble = document.createElement("button");
    bubble.textContent = "b";
    checkBox.appendChild(bubble);

    // todoCard
    const todoPrimary = document.createElement("div");
    const todoTitle = document.createElement("h2");
    todoTitle.textContent = todo.title;

    const primaryDetails = document.createElement("div");

    const dueDateWrapper = document.createElement("div");
    const calendarIcon = document.createElement("div");
    calendarIcon.textContent = "c";
    const dueDate = document.createElement("p");
    dueDate.textContent = todo.dueDate;
    dueDateWrapper.appendChild(calendarIcon);
    dueDateWrapper.appendChild(dueDate);

    const priorityContainer = document.createElement("div");
    const priorityText = document.createElement("p");
    priorityText.textContent = todo.priority;
    priorityContainer.appendChild(priorityText);

    primaryDetails.appendChild(dueDateWrapper);
    primaryDetails.appendChild(priorityContainer);

    todoPrimary.appendChild(todoTitle);
    todoPrimary.appendChild(primaryDetails);

    const accordian = document.createElement("button");
    const accordianImage = document.createElement("div");
    accordianImage.textContent = "a";
    accordian.appendChild(accordianImage);
    
    todoCard.appendChild(todoPrimary);
    todoCard.appendChild(accordian);

    // todoOptions
    const editBtn = document.createElement("button");
    const editIcon = document.createElement("div");
    editIcon.textContent = "e";
    editBtn.appendChild(editIcon);

    const trashBtn = document.createElement("button");
    const trashIcon = document.createElement("div");
    trashIcon.textContent = "t";
    trashBtn.appendChild(trashIcon);

    todoOptions.appendChild(editBtn);
    todoOptions.appendChild(trashBtn);

    todoWrapper.appendChild(checkBox);
    todoWrapper.appendChild(todoCard);
    todoWrapper.appendChild(todoOptions);
    return todoWrapper;
}