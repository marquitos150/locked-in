export class SubTask {
    constructor(task) {
        this.id = crypto.randomUUID();
        this.task = task;
        this.isComplete = false;
    }

    toggleCompletion() { this.isComplete = !this.isComplete; }
}