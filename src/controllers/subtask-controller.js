// Subtask Model
import { SubTask } from "../models/subtask.js";

// Subtask View
import { 
    toggleCheckBubble,
    showSubTaskList 
} from "../views/subtask-view.js";

function handleToggleSubTaskCompletion(subtask) {
    subtask.toggleCompletion();
    toggleCheckBubble(subtask);
}

function handleCreateSubTask(todo) {
    todo.addSubTask(new SubTask("")); // initially empty
    showSubTaskList(todo);
}

function handleGetSubTask(todo, id) {
    return todo.getSubTask(id);
}

function handleDeleteSubTask(todo, id) {
    todo.removeSubTask(id);
    showSubTaskList(todo);
}

export {
    handleToggleSubTaskCompletion,
    handleCreateSubTask,
    handleGetSubTask,
    handleDeleteSubTask
}