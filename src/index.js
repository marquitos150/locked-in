"user strict";

import "./styles.css";
import {Task} from "./models/task.js";
import {TodoForm} from "./doms/todo-form.js";

const body = document.querySelector("body");
const createTodoBtn = document.querySelector(".todo-btn");
const todoForm = TodoForm();

body.appendChild(todoForm);

createTodoBtn.addEventListener('click', () => {
    todoForm.showModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        todoForm.close();
    }
});
