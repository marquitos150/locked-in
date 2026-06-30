export function toggleHiddenElement() {

}

export function selectInput(project) {
    const projectElement = document.querySelector(`[data-projectid="${project.id}"]`);
    const projectInput = projectElement.querySelector(".project-input");
    projectInput.select();
}

// Function that appends project to the project list
export function appendProjectUI(project) {
    const projectList = document.querySelector(".project-list");
    const projectElement = buildProjectItem(project);
    projectList.appendChild(projectElement);
}

// Function that updates project name from the project list
export function updateProjectUI(project) {
    
}

// Function that removes project from the project list
export function removeProjectUI(project) {

}

// Helper functions
function buildProjectItem(project) {
    const projectWrapper = document.createElement("li");
    projectWrapper.classList.add("project-wrapper");
    projectWrapper.dataset.projectid = project.id;

    projectWrapper.appendChild(buildProjectField(project));
    projectWrapper.appendChild(buildProjectOptions());
    return projectWrapper;
}

function buildProjectField(project) {
    const projectField = document.createElement("div");
    projectField.classList.add("project-field");

    // button
    const projectBtn = document.createElement("button");
    projectBtn.classList.add("project-btn");
    projectBtn.setAttribute("hidden", "");
    projectBtn.textContent = project.title;

    // input
    const projectInput = document.createElement("input");
    projectInput.classList.add("project-input");
    projectInput.setAttribute("type", "text");
    projectInput.setAttribute("value", project.title);
    projectInput.setAttribute("placeholder", "Name project (Press Enter to create it)");

    projectField.appendChild(projectBtn);
    projectField.appendChild(projectInput);
    return projectField;
}

function buildProjectOptions() {
    const projectOptions = document.createElement("div");
    projectOptions.classList.add("project-options");

    const editBtn = document.createElement("button");
    editBtn.dataset.action = "edit-project";
    editBtn.classList.add("edit");
    const editIcon = document.createElement("div");
    editIcon.classList.add("edit-icon");
    editIcon.textContent = "e";
    editBtn.appendChild(editIcon);

    const trashBtn = document.createElement("button");
    trashBtn.dataset.action = "remove-project";
    trashBtn.classList.add("delete");
    const trashIcon = document.createElement("div");
    trashIcon.classList.add("trash");
    trashIcon.textContent = "t";
    trashBtn.appendChild(trashIcon);

    projectOptions.appendChild(editBtn);
    projectOptions.appendChild(trashBtn);
    return projectOptions;
}