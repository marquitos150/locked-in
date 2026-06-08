"user strict";
import "./styles.css";

// classes
import {Project} from "./models/project.js";
import {Task} from "./models/task.js";
import {SubTask} from "./models/subtask.js";

// functions
import {showTodoList} from "./doms/todo-list.js"

const projectList = []

// Inbox will be the 'default' project
const inbox = new Project("Inbox");
projectList.push(inbox);

const createTodoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector("#popup-form");

let selectedProject = inbox
showTodoList(selectedProject); // should be empty initially

function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;

    const task = new Task(title, description, dueDate, priority)
    selectedProject.addTodo(task);
    return task;
}

function handleTodoOptions(e) {
    const option = e.target.closest('[data-action]');
    if (!option) return;

    const action = option.dataset.action;
    const id = option.dataset.id;

    // Edit todo

    // Remove todo
    if (action == 'remove-todo') {
        const index = selectedProject.todoList.findIndex(todo => todo.id === id);
        if (index !== -1) {
            selectedProject.todoList.splice(index, 1);
            showTodoList(selectedProject);
        }
    }

    // Expand todo to see details
}

// Shows the form to create or edit the todo item
createTodoBtn.addEventListener('click', () => {
    todoForm.showModal();
});

// Adds the new todo item to the todo list after submitting todo form
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = addTask();
    showTodoList(selectedProject);
    e.target.reset();
    todoForm.close();
});

// Handles options user may click on for the todo items
todoList.addEventListener('click', (e) => { handleTodoOptions(e); });
