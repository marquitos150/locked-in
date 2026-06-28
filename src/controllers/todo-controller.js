// Todo Model
import { Todo } from "../models/todo.js";

// Todo View
import { 
    toggleCheckBubble, 
    toggleRevealDetails, 
    showTodoListUI,
    appendTodoUI,
    updateTodoUI,
    removeTodoUI
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
    const todo = new Todo(
        data.title, 
        data.description, 
        data.dueDate, 
        data.priority
    );
    project.addTodo(todo);
    appendTodoUI(todo);
}

function handleGetTodo(project, id) {
    return project.getTodo(id);
}

function handleUpdateTodo(newTodo, project, data) {
    newTodo.updateTodo(data);
    updateTodoUI(newTodo);
}

function handleUpdateTodoNotes(todo, notes) {
    todo.updateTodoNotes(notes);
}

function handleDeleteTodo(project, todo) {
    project.removeTodo(todo);
    removeTodoUI(todo);
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