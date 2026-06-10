export class Todo {
    constructor(title, description, dueDate, priority) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = "";
        this.checkList = [];
        this.isComplete = false;
    }
    
    toggleCompletion() { this.isComplete = !this.isComplete; }
    updateTodo(data) { Object.assign(this, data); }
    addSubTask(subtask) { this.checkList.push(subtask); }
    removeSubTask(subtask) { this.checkList = this.checkList.filter(task => task.id !== subtask.id); }
}