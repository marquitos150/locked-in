"user strict";
import "./styles.css";

// models
import { Project } from "./models/project.js";
import { Todo } from "./models/todo.js";
import { SubTask } from "./models/subtask.js";

// views
import { showTodoList } from "./views/todo-list.js";
import { enableCreateMode, enableEditMode, getFormData, fillForm } from "./views/todo-form.js";

// controllers
import { toggleCompletionStatus, getTask, createTask, updateTask, removeTask } from "./controllers/todo-controller.js";

// states
const projectList = []
let todoToEdit = null
let selectedProject = null

// Inbox will be the 'default' project
const inbox = new Project("Inbox");
projectList.push(inbox);

selectedProject = inbox
showTodoList(selectedProject); // should be empty initially

const createTodoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector("#popup-form");

function handleTodoOptions(e) {
    const option = e.target.closest('[data-action]');
    if (!option) return;

    const action = option.dataset.action;
    const id = option.dataset.id;

    // Toggle completion status of todo
    if (action === "toggle-completion-status") {
        const todo = getTask(selectedProject, id);
        if (todo) toggleCompletionStatus(todo);
        showTodoList(selectedProject);
    }

    // Edit todo (should show form with edit details)
    if (action === "edit-todo") {
        const todo = getTask(selectedProject, id);
        if (todo) {
            // enable edit mode
            enableEditMode();
            // fill form elements with todo item's values
            fillForm(todo);
            // make todo the one to edit
            todoToEdit = todo
            todoForm.showModal();
        }
    }

    // Remove todo
    if (action === "remove-todo") {
        removeTask(selectedProject, id);
        showTodoList(selectedProject);
    }

    // Expand todo to see details
    //if (action === "expand-details") {

    //}
}

// Shows the form to create the todo item
createTodoBtn.addEventListener('click', () => {
    enableCreateMode();
    todoForm.showModal();
});

// Creates a new todo item or edits it from the todo list after submitting todo form
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (todoToEdit) {
        updateTask(todoToEdit, getFormData());
        // reassign todoToEdit to null for next possible creation of task
        todoToEdit = null;
    } else {
        createTask(selectedProject, getFormData());
    }

    showTodoList(selectedProject);
    e.target.reset();
    todoForm.close();
});

// Handles options user may click on for the todo items
todoList.addEventListener('click', handleTodoOptions);
