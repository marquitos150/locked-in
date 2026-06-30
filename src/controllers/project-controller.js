// Project Model
import { Project } from "../models/project.js";

// Project View
import {
    selectInput,
    appendProjectUI
} from "../views/project-view.js";

// Todo View
import {
    showTodoListUI
} from "../views/todo-view.js";

function handleCreateInbox(projects) {
    const inbox = new Project("Inbox");
    projects.push(inbox);
    showTodoListUI(inbox); // initially empty
    return inbox;
}

function handleCreateProject(projects) {
    const project = new Project("New Project");
    projects.push(project);

    // show the project upon creation
    appendProjectUI(project);

    // rerender todo list for this project, which should initially be empty
    showTodoListUI(project);

    // select input to allow user to modify project name upon creation
    selectInput(project);
    return project;
}

function handleUpdateProject(project) {
    showTodoListUI(project);
}

export {
    handleCreateInbox,
    handleCreateProject,
    handleUpdateProject
}