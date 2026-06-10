export class Project {
    constructor(title) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.todoList = [];
    }

    getTodo(id) { return this.todoList.find(todo => todo.id === id); }
    addTodo(todo) { this.todoList.push(todo); }
    removeTodo(id) { this.todoList = this.todoList.filter(todo => todo.id !== id); }
}