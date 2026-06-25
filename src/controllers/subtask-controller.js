// Subtask Model
import { SubTask } from "../models/subtask.js";

// Subtask View
import { 
    showSubTaskList 
} from "../views/subtask-view.js";

function handleCreateSubTask(todo) {
    console.log("called");
    todo.addSubTask(new SubTask("")); // initially empty
    showSubTaskList(todo);
}

export {
    handleCreateSubTask
}