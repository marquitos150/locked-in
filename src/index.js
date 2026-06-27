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
    handleGetSubTask
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
    // Toggle completion status of todo
    if (action === "toggle-todo-completion") {
        const todo = handleGetTodo(selectedProject, todoId);
        if (todo) handleToggleTodoCompletion(todo);
    }

    // Edit todo (Shows form in edit mode, fields should contain todo data)
    if (action === "edit-todo") {
        const todo = handleGetTodo(selectedProject, todoId);
        if (todo) handleUpdateForm(todo);
        todoToEdit = todo;
        todoForm.showModal();
    }

    // Remove todo
    if (action === "remove-todo") {
        handleDeleteTodo(selectedProject, todoId);
    }

    // Expand todo to see details
    if (action === "expand-details") {
        const todo = handleGetTodo(selectedProject, todoId);
        if (todo) handleToggleRevealDetails(todo);
    }

    // Create subtask of todo
    if (action === "create-subtask") {
        const todo = handleGetTodo(selectedProject, todoId);
        if (todo) handleCreateSubTask(todo);
    }
}

function handleSubTaskOptions(subTaskId, todoId, action) {
    // Toggle completion status of subtask
    if (action === "toggle-subtask-completion") {
        const todo = handleGetTodo(selectedProject, todoId)
        const subTask = handleGetSubTask(todo, subTaskId);
        if (subTask) handleToggleSubTaskCompletion(subTask);
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
    const todoDOM = e.target.closest('[data-todoid]');
    if (!notes || !todoDOM) return;

    const id = todoDOM.dataset.todoid;
    const notesTextContent = notes.textContent;

    const todo = handleGetTodo(selectedProject, id);
    if (todo) handleUpdateTodoNotes(todo, notesTextContent);
});

// Handles options user may click on for todo/subtask items
todoList.addEventListener('click', (e) => {
    const todoItem = e.target.closest('[data-todoid]');
    const subTaskItem = e.target.closest('[data-subtaskid]');
    const option = e.target.closest('[data-action]');
    console.log(todoItem);
    console.log(subTaskItem);

    if (!todoItem || !option) return;

    const action = option.dataset.action;
    const todoId = todoItem.dataset.todoid;

    if (!subTaskItem) {
        handleTodoOptions(todoId, action);
    } else {
        const subTaskId = subTaskItem.dataset.subtaskid;
        handleSubTaskOptions(subTaskId, todoId, action);
    }
});