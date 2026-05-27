export class Task {
    constructor(id, title, description, dueDate, priority, notes, checklist) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.isCompleted = false;
    }
    
    toggleCompletionStatus() { this.isCompleted = !this.isCompleted; }
    addSubTask(subtask) { this.checklist.push(subtask); }
    removeSubTask(subtask) { this.checklist = this.checklist.filter(task => task.id !== subtask.id); }
}