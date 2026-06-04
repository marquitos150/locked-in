export class Project {
    constructor(title) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.todoList = [];
    }

    addTodo(todo) { this.todoList.push(todo); }
    removeTodo(todo) { this.todoList = this.todoList.filter(task => task.id !== todo.id); }
}