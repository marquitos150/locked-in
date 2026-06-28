export class Project {
    constructor(title) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.todoList = [];
    }

    getTodo(id) { return this.todoList.find(t => t.id === id); }
    addTodo(todo) { this.todoList.push(todo); }
    removeTodo(todo) { this.todoList = this.todoList.filter(t => t.id !== todo.id); }
}