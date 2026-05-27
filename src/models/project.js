export class Project {
    constructor(id, title, todolist) {
        this.id = id;
        this.title = title;
        this.todolist = todolist;
    }

    addTodo(todo) { this.todolist.push(todo); }
    removeTodo(todo) { this.todolist = this.todolist.filter(task => task.id !== todo.id); }
}