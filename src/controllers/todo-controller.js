import {Todo} from "../models/todo.js";

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
    getTask,
    createTask, 
    updateTask, 
    removeTask 
}