import { IPost } from '../IPost';


export class Post implements IPost {
    title: string;
    thought: string;

    constructor(newTitle: string = "title", newThought: string = "thought") {
        this.title = newTitle;
        this.thought = newThought;
    }
}