export class SubTask {
    constructor(id, title, priority) {
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.isCompleted = false;
    }

    toggleCompletionStatus() { this.isCompleted = !this.isCompleted; }
}