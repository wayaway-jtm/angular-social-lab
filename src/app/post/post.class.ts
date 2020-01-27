import { IPost } from '../IPost';
import { PostCounterService } from '../post-counter-service.service'

export class Post implements IPost {
    id: number;
    title: string;
    thought: string;

    constructor(newId: number, newTitle: string = "title", newThought: string = "thought") {
        this.title = newTitle;
        this.thought = newThought;
        this.id = newId;
    }
}