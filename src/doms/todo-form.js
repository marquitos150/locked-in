export function createTodoForm() {
    // helper function that adds asterisk to label, indicating required field
    const addAsterisk = () => {
        const span = document.createElement("span");
        span.classList.add("required");
        span.textContent = "*";
        return span;
    };

    const dialogBox = document.createElement("dialog");
    const dialogHeader = document.createElement("div");
    const dialogHeaderText = document.createElement("h1");

    dialogBox.setAttribute("id", "popup-form");
    dialogBox.setAttribute("closedby", "none");
    dialogHeader.classList.add("dialog-header");
    dialogHeaderText.textContent = "Add Task";
    dialogHeader.appendChild(dialogHeaderText);
    dialogBox.appendChild(dialogHeader);

    const form = document.createElement("form");
    form.setAttribute("method", "dialog");

    // title
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title:";
    titleLabel.appendChild(addAsterisk());
    form.appendChild(titleLabel);

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("required", "");
    form.appendChild(titleInput);

    // description
    const descLabel = document.createElement("label");
    descLabel.setAttribute("for", "description");
    descLabel.textContent = "Description:";
    form.appendChild(descLabel);

    const descInput = document.createElement("input");
    descInput.setAttribute("type", "text");
    descInput.setAttribute("id", "description");
    descInput.setAttribute("name", "description");
    form.appendChild(descInput);

    // due date
    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "due-date");
    dateLabel.textContent = "Due Date:";
    dateLabel.appendChild(addAsterisk());
    form.appendChild(dateLabel);

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "datetime-local");
    dateInput.setAttribute("id", "due-date");
    dateInput.setAttribute("name", "due-date");
    dateInput.setAttribute("min", "2026-06-01T08:30");
    dateInput.setAttribute("required", "");
    form.appendChild(dateInput);

    // priority
    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.textContent = "Select Priority:";
    form.appendChild(priorityLabel);

    const prioritySelect = document.createElement("select");
    prioritySelect.setAttribute("id", "priority");
    prioritySelect.setAttribute("name", "priority");

    const highOption = document.createElement("option");
    highOption.setAttribute("value", "high");
    highOption.classList.add("high");
    highOption.textContent = "High";

    const mediumOption = document.createElement("option");
    mediumOption.setAttribute("value", "medium");
    mediumOption.setAttribute("selected", "");
    mediumOption.classList.add("medium");
    mediumOption.textContent = "Medium";

    const lowOption = document.createElement("option");
    lowOption.setAttribute("value", "low");
    lowOption.classList.add("low");
    lowOption.textContent = "low";

    prioritySelect.appendChild(highOption);
    prioritySelect.appendChild(mediumOption);
    prioritySelect.appendChild(lowOption);
    form.appendChild(prioritySelect);

    // submit
    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Create";
    form.appendChild(submitBtn);

    dialogBox.appendChild(form);
    return dialogBox;
}