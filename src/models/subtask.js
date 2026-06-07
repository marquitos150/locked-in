export class SubTask {
    constructor(title) {
        this.id = crypto.randomUUID();
        this.title = title;
    }
}