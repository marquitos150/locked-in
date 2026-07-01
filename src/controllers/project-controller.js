// Project Model
import { Project } from "../models/project.js";

// Project View
import {
    selectInput,
    appendProjectUI,
    updateProjectUI,
    removeProjectUI,
    showTodoListUI,
    clearTodoListUI
} from "../views/project-view.js";

function handleCreateInbox(projects) {
    const inbox = new Project("Inbox");
    projects.push(inbox);

    updateProjectUI(inbox);
    return inbox;
}

function handleCreateProject(projects) {
    const project = new Project("New Project");
    projects.push(project);

    appendProjectUI(project);
    updateProjectUI(project);
    clearTodoListUI();
    selectInput(project);
    return project;
}

function handleUpdateProjectName(project) {
    updateProjectUI(project);
}

function handleSwitchProject(project) {
    updateProjectUI(project);
    clearTodoListUI();
    showTodoListUI(project);
}

export {
    handleCreateInbox,
    handleCreateProject,
    handleUpdateProjectName,
    handleSwitchProject
}