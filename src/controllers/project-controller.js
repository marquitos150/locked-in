// Project Model
import { Project } from "../models/project.js";

// Project View

// Todo View
import {
    showTodoList
} from "../views/todo-view.js";

function handleCreateProject(projects, title, selectedProject) {
    const project = new Project(title);
    projects.push(project);

    // show the project upon creation
    showTodoList(project);
    return project;
}

export {
    handleCreateProject
}