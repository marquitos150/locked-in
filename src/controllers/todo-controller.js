import {Todo} from "../models/todo.js";

function toggleCompletionStatus(todo) {
    todo.toggleCompletion();
}

function toggleRevealDetails(todo) {
    todo.toggleReveal();
}

function getTask(project, id) {
    return project.getTodo(id);
}

function createTask(project, data) {
    project.addTodo(new Todo(
        data.title, 
        data.description, 
        data.dueDate, 
        data.priority
    ));
}

function updateTask(newTodo, data) {
    newTodo.updateTodo(data);
}

function removeTask(project, id) {
    project.removeTodo(id);
}

export {
    toggleCompletionStatus,
    toggleRevealDetails,
    getTask,
    createTask, 
    updateTask, 
    removeTask 
}