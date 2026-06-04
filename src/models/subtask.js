export class SubTask {
    constructor(title) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.isCompleted = false;
    }

    toggleCompletionStatus() { this.isCompleted = !this.isCompleted; }
}