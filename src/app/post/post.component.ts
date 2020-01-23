import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPost } from '../IPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, IPost {
  title: string;
  thought: string;
  @Input() post: IPost;
  @Output() deleted = new EventEmitter<IPost>();

  constructor(newTitle: string, newThought: string) {
    this.title = newTitle;
    this.thought = newThought;
  }

  ngOnInit() {
  }

  deletePost() {
    this.deleted.emit({title: this.title, thought: this.thought});
  }

}
