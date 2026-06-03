"user strict";

import "./styles.css";
import {Task} from "./models/task.js";
import {TodoForm} from "./doms/todo-form.js";

const body = document.querySelector("body");
const createTodoBtn = document.querySelector(".todo-btn");

createTodoBtn.addEventListener('click', () => {
    body.appendChild(TodoForm());
});