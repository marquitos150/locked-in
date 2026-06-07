"user strict";
import "./styles.css";

// classes
import {Project} from "./models/project.js";
import {Task} from "./models/task.js";
import {SubTask} from "./models/subtask.js";

// functions
import {showTodoItem} from "./doms/todo-item.js"

const projectList = []

// TODO: change this later when adding more projects, for now use dummy project
const dummyProject = new Project("Dummy Project");
projectList.push(dummyProject);

const body = document.querySelector("body");
const createTodoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector("#popup-form");

function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;

    const task = new Task(title, description, dueDate, priority)
    dummyProject.addTodo(task);
    return task;
}

// Shows the form to create the todo item
createTodoBtn.addEventListener('click', () => {
    todoForm.showModal();
});

// Adds the new todo item to the todo list after submitting todo form
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = addTask();
    const todoItem = showTodoItem(task);
    todoList.appendChild(todoItem);
    todoForm.close();
});
