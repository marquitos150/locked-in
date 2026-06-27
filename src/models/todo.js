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
        this.revealDetails = false;
    }
    
    toggleCompletion() { this.isComplete = !this.isComplete; }
    toggleReveal() { this.revealDetails = !this.revealDetails; }

    updateTodo(data) { Object.assign(this, data); }
    updateTodoNotes(notes) { this.notes = notes; }
    
    getSubTask(id) { return this.checkList.find(subtask => subtask.id === id); }
    addSubTask(subtask) { this.checkList.push(subtask); }
    removeSubTask(id) { this.checkList = this.checkList.filter(subtask => subtask.id !== id); }
}