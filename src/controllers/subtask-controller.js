// Subtask Model
import { SubTask } from "../models/subtask.js";

// Subtask View
import { 
    toggleCheckBubble,
    appendSubTaskUI,
    removeSubTaskUI 
} from "../views/subtask-view.js";

function handleToggleSubTaskCompletion(subtask) {
    subtask.toggleCompletion();
    toggleCheckBubble(subtask);
}

function handleCreateSubTask(todo) {
    const subtask = new SubTask("");
    todo.addSubTask(subtask); // initially empty
    appendSubTaskUI(todo, subtask);
}

function handleGetSubTask(todo, id) {
    return todo.getSubTask(id);
}

function handleUpdateSubTask(todo, subtask, title) {
    subtask.updateSubTask(title);
}

function handleDeleteSubTask(todo, subtask) {
    todo.removeSubTask(subtask);
    removeSubTaskUI(subtask);
}

export {
    handleToggleSubTaskCompletion,
    handleCreateSubTask,
    handleGetSubTask,
    handleUpdateSubTask,
    handleDeleteSubTask
}