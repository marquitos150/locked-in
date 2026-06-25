export class SubTask {
    constructor(title) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.isComplete = false;
    }

    toggleCompletion() { this.isComplete = !this.isComplete; }

    updateSubTask(title) { this.title = title; }
}