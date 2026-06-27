// Todo Model
import { Todo } from "../models/todo.js";

// Todo View
import { 
    toggleCheckBubble, 
    toggleRevealDetails, 
    showTodoList 
} from "../views/todo-view.js";

function handleToggleTodoCompletion(todo) {
    todo.toggleCompletion();
    toggleCheckBubble(todo);
}

function handleToggleRevealDetails(todo) {
    todo.toggleReveal();
    toggleRevealDetails(todo);
}

function handleCreateTodo(project, data) {
    project.addTodo(new Todo(
        data.title, 
        data.description, 
        data.dueDate, 
        data.priority
    ));
    showTodoList(project);
}

function handleGetTodo(project, id) {
    return project.getTodo(id);
}

function handleUpdateTodo(newTodo, project, data) {
    newTodo.updateTodo(data);
    showTodoList(project);
}

function handleUpdateTodoNotes(todo, notes) {
    todo.updateTodoNotes(notes);
}

function handleDeleteTodo(project, id) {
    project.removeTodo(id);
    showTodoList(project);
}

export {
    handleToggleTodoCompletion, 
    handleToggleRevealDetails, 
    handleCreateTodo, 
    handleGetTodo, 
    handleUpdateTodo, 
    handleUpdateTodoNotes,
    handleDeleteTodo
}