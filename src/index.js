"use strict";
import "./styles.css";

// Project Controller
import {
    handleCreateProject
} from "./controllers/project-controller.js";

// Todo Controller
import {
    handleToggleCompletion, 
    handleToggleRevealDetails, 
    handleCreateTodo, 
    handleGetTodo, 
    handleUpdateTodo, 
    handleUpdateTodoNotes,
    handleDeleteTodo
} from "./controllers/todo-controller.js";

// Subtask Controller

// Form Controller
import {
    handleCreateForm,
    handleUpdateForm,
    handleGetFormData
} from "./controllers/form-controller.js";

// States
const projectList = [];
let todoToEdit = null;
let selectedProject = null;

// Inbox will be the 'default' selected project, cannot be deleted
const inbox = handleCreateProject(projectList, "Inbox");
selectedProject = inbox;

// DOM
const createProjectBtn = document.querySelector(".project-btn");
const createTodoBtn = document.querySelector(".todo-btn");
const sortingTodosBtn = document.querySelector(".sorting-btn");
const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector("#popup-form");

function handleTodoOptions(e) {
    const option = e.target.closest('[data-action]');
    if (!option) return;

    const action = option.dataset.action;
    const id = option.dataset.id;

    // Toggle completion status of todo
    if (action === "toggle-completion-status") {
        const todo = handleGetTodo(selectedProject, id);
        if (todo) handleToggleCompletion(todo);
    }

    // Edit todo (Shows form in edit mode, fields should contain todo data)
    if (action === "edit-todo") {
        const todo = handleGetTodo(selectedProject, id);
        if (todo) handleUpdateForm(todo);
        todoToEdit = todo;
        todoForm.showModal();
    }

    // Remove todo
    if (action === "remove-todo") {
        handleDeleteTodo(selectedProject, id);
    }

    // Expand todo to see details
    if (action === "expand-details") {
        const todo = handleGetTodo(selectedProject, id);
        if (todo) handleToggleRevealDetails(todo);
    }
}

// Shows form in create mode (fields should be blank)
createTodoBtn.addEventListener('click', () => {
    handleCreateForm();
    todoForm.showModal();
});

// Creates a new todo item or edits it from the todo list after submitting todo form
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (todoToEdit) {
        handleUpdateTodo(todoToEdit, selectedProject, handleGetFormData());
        todoToEdit = null;
    } else {
        handleCreateTodo(selectedProject, handleGetFormData());
    }

    e.target.reset();
    todoForm.close();
});

// Handles changes to the editable fields of todo notes
todoList.addEventListener('input', (e) => {
    const notes = e.target;
    if (!notes) return;

    const id = notes.dataset.id;
    const notesTextContent = notes.textContent;

    const todo = handleGetTodo(selectedProject, id);
    if (todo) handleUpdateTodoNotes(todo, notesTextContent);
});

// Handles options user may click on for the todo items
todoList.addEventListener('click', handleTodoOptions);
