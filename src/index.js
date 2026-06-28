"use strict";
import "./styles.css";

// Project Controller
import {
    handleCreateProject
} from "./controllers/project-controller.js";

// Todo Controller
import {
    handleToggleTodoCompletion, 
    handleToggleRevealDetails, 
    handleCreateTodo, 
    handleGetTodo, 
    handleUpdateTodo, 
    handleUpdateTodoNotes,
    handleDeleteTodo
} from "./controllers/todo-controller.js";

// SubTask Controller
import {
    handleToggleSubTaskCompletion,
    handleCreateSubTask,
    handleGetSubTask,
    handleUpdateSubTask,
    handleDeleteSubTask
} from "./controllers/subtask-controller.js";

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

function handleTodoOptions(todoId, action) {
    const todo = handleGetTodo(selectedProject, todoId);
    if (!todo) return;

    switch (action) {
        // Toggle completion status of todo
        case "toggle-todo-completion":
            handleToggleTodoCompletion(todo);
            break;
        
        // Edit todo (Shows form in edit mode, fields should contain todo data)
        case "edit-todo":
            handleUpdateForm(todo);
            todoToEdit = todo;
            todoForm.showModal();
            break;
        
        // Remove todo
        case "remove-todo":
            handleDeleteTodo(selectedProject, todo);
            break;
        
        // Expand todo to see details
        case "expand-details":
            handleToggleRevealDetails(todo);
            break;
        
        // Create subtask of todo
        case "create-subtask":
            handleCreateSubTask(todo);
            break;
    }
}

function handleSubTaskOptions(subTaskId, todoId, action) {
    const todo = handleGetTodo(selectedProject, todoId);
    if (!todo) return;

    const subTask = handleGetSubTask(todo, subTaskId);
    if (!subTask) return;

    switch (action) {
        // Toggle completion status of subtask
        case "toggle-subtask-completion":
            handleToggleSubTaskCompletion(subTask);
            break;
        
        // Remove subtask
        case "remove-subtask":
            handleDeleteSubTask(todo, subTask);
            break;
    }
}

function handleTodoListClick(e) {
    const option = e.target.closest('[data-action]');
    if (!option) return;

    const todoItem = e.target.closest('[data-todoid]');
    if (!todoItem) return;

    const subTaskItem = e.target.closest('[data-subtaskid]');

    const action = option.dataset.action;
    const todoId = todoItem.dataset.todoid;

    if (subTaskItem) {
        const subTaskId = subTaskItem.dataset.subtaskid;
        handleSubTaskOptions(subTaskId, todoId, action);
    } else {
        handleTodoOptions(todoId, action);
    }
}

function handleTodoListInput(e) {
    // Handles input changes from notes section of todo
    const notes = e.target.closest('.notes-container');
    if (!notes) return;

    const todoItem = e.target.closest('[data-todoid]');
    if (!todoItem) return;

    const todoId = todoItem.dataset.todoid;
    const todo = handleGetTodo(selectedProject, todoId);
    if (!todo) return;

    const notesTextContent = notes.textContent;
    handleUpdateTodoNotes(todo, notesTextContent);
}

function handleTodoListFocusOut(e) {
    // Handles updating subtask fields after focusing out
    const subTaskField = e.target.closest('.subtask-input');
    if (!subTaskField) return;

    const todoItem = e.target.closest('[data-todoid]');
    if (!todoItem) return;
    const subTaskItem = e.target.closest('[data-subtaskid]');
    if (!subTaskItem) return;

    const todoId = todoItem.dataset.todoid;
    const subTaskId = subTaskItem.dataset.subtaskid;
    const todo = handleGetTodo(selectedProject, todoId);
    if (!todo) return;
    const subTask = handleGetSubTask(todo, subTaskId);
    if (!subTask) return;

    const newSubTaskTitle = subTaskField.value;
    handleUpdateSubTask(todo, subTask, newSubTaskTitle);
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

todoList.addEventListener('click', handleTodoListClick);
todoList.addEventListener('input', handleTodoListInput);
todoList.addEventListener('focusout', handleTodoListFocusOut);